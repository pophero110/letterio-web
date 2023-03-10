import PageHeader from '../components/pageHeader';
import Stepper from '../components/stepper';
import { useEffect, useState } from 'react';
import LetterForm from '../components/letterForm';
import Button from '../components/button';
import BackButton from '../components/backButton';
import LoadingOverlay from '../components/loadingOverlay';
import jsPDF from 'jspdf';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]';
export const getServerSideProps = async (context) => {
	const session = await unstable_getServerSession(
		context.req,
		context.res,
		authOptions
	);

	if (!session) {
		return {
			redirect: {
				destination: '/auth/signin',
				permanent: false,
			},
		};
	}
	return {
		props: {},
	};
};
export default function Letter() {
	useEffect(() => {
		const fetchForm = async () => {
			setLoading(true);
			const result = await fetch('/api/form', {
				method: 'GET',
			})
				.then(async (response) => {
					const result = await response.json();
					return result;
				})
				.then((data) => data)
				.catch((error) => error);
			if (result.data) {
				setFormList(result.data.forms);
			}
			if (result.error) {
				setFormError(result.error);
			}
			setLoading(false);
		};
		fetchForm();
	}, []);
	const [formList, setFormList] = useState([]);
	const [activeStep, setActiveStep] = useState(1);
	const [letterContent, setLetterContent] = useState('');
	const [letterType, setLetterType] = useState('');
	const [formError, setFormError] = useState('');
	const [formId, setFormId] = useState('');
	const [loading, setLoading] = useState(false);
	const [fields, setFields] = useState([
		{
			key: '',
			value: '',
			id: 0,
		},
	]);
	const clickToDownload = () => {
		const pdf = new jsPDF();
		pdf.setFontSize(16);
		pdf.setFont('Arial', 'Bold');
		pdf.text(10, 10, letterContent, { maxWidth: 180 });
		pdf.save(letterType + '.pdf');
	};
	const clickToCopy = () => {
		// Get the text field
		let copyText = document.getElementById('letter-textbox');
		// Copy the text inside the text field
		navigator.clipboard.writeText(copyText.value);
		let copyButton = document.getElementById('copyButton');
		copyButton.innerText = 'COPIED';
		copyButton.style.backgroundColor = 'var(--cyan-200)';
		copyButton.style.color = 'white';
	};
	const generateLetterAPI = async () => {
		setLoading(true);
		const result = await fetch('/api/generateLetter', {
			method: 'POST',
			header: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				fields,
				letterType,
				formId,
			}),
		})
			.then(async (response) => {
				const result = await response.json();
				return result;
			})
			.then((data) => data)
			.catch((error) => error);
		setLetterContent(result);
		setLoading(false);
		setActiveStep(3);
	};

	const validateForm = () => {
		let formError = '';
		if (fields.length === 0) {
			formError = 'Please add details';
			setFormError(formError);
			return formError;
		}
		if (!fields.every((field) => !!field.value)) {
			formError = 'Description can not be empty';
		}
		if (!fields.every((field) => !!field.key)) {
			formError = 'Title can not be empty';
		}
		if (!letterType) {
			formError = 'Please specify what kind of letter';
		}
		setFormError(formError);
		return formError;
	};
	const createFormHandler = async () => {
		if (!validateForm()) {
			setLoading(true);
			const result = await fetch('/api/form', {
				method: 'POST',
				header: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					fields,
					letterType,
				}),
			})
				.then(async (response) => {
					const result = await response.json();
					return result;
				})
				.then((data) => data)
				.catch((error) => error);
			if (result.data) {
				setFormId(result.data.form.id);
				setFormList((prevState) => {
					return [...prevState, result.data.form];
				});
				setActiveStep(2);
				setFormError('');
			}
			if (result.error) {
				setFormError(result.error);
			}
			setLoading(false);
		}
	};
	return (
		<>
			<LoadingOverlay loading={loading}></LoadingOverlay>
			<main
				className='letter-page'
				style={{
					width: '100%',
					paddingBottom: '4rem',
				}}>
				<PageHeader></PageHeader>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<Stepper
						activeStep={activeStep}
						createFormHandler={createFormHandler}
						setActiveStep={setActiveStep}></Stepper>
					{activeStep === 1 && (
						<LetterForm
							setFormList={setFormList}
							formList={formList}
							fields={fields}
							setFields={setFields}
							formError={formError}
							setFormError={setFormError}
							letterType={letterType}
							createFormHandler={createFormHandler}
							setLetterType={setLetterType}></LetterForm>
					)}
					{activeStep === 2 && (
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'start',
								width: '67.7rem',
								marginTop: '1rem',
							}}>
							<div
								style={{
									display: 'flex',
									width: '100%',
									justifyContent: 'start',
									marginBottom: '2rem',
								}}>
								<BackButton
									setActiveStep={setActiveStep}
									step={1}></BackButton>
							</div>
							<div
								className='letterForm__heading'
								style={{
									marginBottom: '1rem',
								}}>
								{letterType}
							</div>
							<div
								style={{
									boxShadow:
										'0px 4px 10px rgba(0, 0, 0, 0.5)',
									borderRadius: '1rem',
									padding: '2rem',
									display: 'flex',
								}}>
								{fields.map((field) => {
									if (field && field.key && field.value) {
										return (
											<div
												key={field.id}
												style={{
													fontFamily:
														'Saira Condensed',
													fontStyle: 'normal',
													fontWeight: '700',
													fontSize: '24px',
													lineHeight: '90%',
													textTransform: 'uppercase',
													color: '#737373',
													border: '1px solid black',
													marginRight: '1rem',
												}}>
												{field.key}: {field.value}
											</div>
										);
									}
								})}
							</div>

							<div
								style={{
									display: 'flex',
									justifyContent: 'center',
									marginTop: '3rem',
								}}>
								<Button
									onClickHandler={generateLetterAPI}
									width={'16.3rem'}
									height={'4.8rem'}
									fontSize={'2.4rem'}
									text='GENERATE'></Button>
							</div>
						</div>
					)}
					{activeStep === 3 && (
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'start',
								width: '67.7rem',
								marginTop: '1rem',
							}}>
							<div
								style={{
									display: 'flex',
									width: '100%',
									justifyContent: 'start',
									marginBottom: '2rem',
								}}>
								<BackButton
									setActiveStep={setActiveStep}
									step={2}></BackButton>
							</div>
							<textarea
								rows={20}
								id='letter-textbox'
								onChange={(e) =>
									setLetterContent(e.target.value)
								}
								value={letterContent}
								style={{
									fontFamily: 'Saira Condensed',
									fontStyle: 'normal',
									fontWeight: '700',
									fontSize: '24px',
									lineHeight: '120%',
									width: '100%',
									border: 'none',
									borderRadius: '1rem',
									backgroundColor: 'var(--cyan-50)',
									boxShadow:
										'0px 4px 10px rgba(0, 0, 0, 0.5)',
									padding: '2rem',
								}}></textarea>
							<div
								style={{
									display: 'flex',
									justifyContent: 'center',
									marginTop: '3rem',
								}}>
								<div
									style={{
										marginRight: '1rem',
									}}>
									<Button
										id='copyButton'
										onClickHandler={clickToCopy}
										width={'10.6rem'}
										height={'4.8rem'}
										fontSize={'2.4rem'}
										text='COPY'></Button>
								</div>

								<div
									style={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}>
									<Button
										onClickHandler={clickToDownload}
										id='downButton'
										width={'10.6rem'}
										height={'4.8rem'}
										fontSize={'2.4rem'}
										text='DOWLOAD'></Button>
									<select
										style={{
											height: '3rem',

											marginLeft: '1rem',
											border: 'none',
											backgroundColor: 'var(--cyan-50)',
											borderRadius: '1rem',
											boxShadow:
												'0px 4px 10px rgba(0, 0, 0, 0.5)',
										}}>
										<option>PDF</option>
									</select>
								</div>
							</div>
						</div>
					)}
				</div>
			</main>
		</>
	);
}

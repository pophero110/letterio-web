import PageHeader from '../components/pageHeader';
import Stepper from '../components/stepper';
import { useState } from 'react';
import LetterForm from '../components/letterForm';
import Button from '../components/button';
export default function Letter() {
	const [activeStep, setActiveStep] = useState(1);
	const [letterType, setLetterType] = useState('');
	const [fields, setFields] = useState([
		{
			key: 'name',
			value: 'test',
			id: 0,
		},
	]);
	return (
		<>
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
						setActiveStep={setActiveStep}></Stepper>
					{activeStep === 1 && (
						<LetterForm
							fields={fields}
							setFields={setFields}
							letterType={letterType}
							setLetterType={setLetterType}></LetterForm>
					)}
					{activeStep === 2 && (
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'start',
								width: '67.7rem',
								marginTop: '7rem',
							}}>
							<div
								className='letterForm__heading'
								style={{
									marginBottom: '1rem',
								}}>
								details for {letterType}
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
									if (field && field.key) {
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
								marginTop: '7rem',
							}}>
							<div
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
								}}>
								Dear Visa Officer, I am writing to apply for a
								student visa to travel to the United States from
								China. My name is Jiajin Ou, and I am currently
								a student. I plan to travel on February 10, 2023
								and return on March 10, 2023. The reason for my
								travel is to attend college in the United
								States. I have been accepted into a program at a
								reputable institution and I am eager to begin my
								studies in this world-renowned educational
								system. I understand that obtaining a student
								visa can be a challenging process, but I assure
								you that I am fully committed to meeting all
								requirements and providing any necessary
								documentation. As a student, I have no
								dependents or ties to my home country that would
								impede my ability to return after my studies. I
								have also made arrangements for sufficient
								financial support during my stay in the United
								States. I understand the importance of
								maintaining good standing during my time in the
								United States and I am committed to following
								all laws and regulations while in the country.
								Thank you for your time and consideration. I
								look forward to the opportunity to study in the
								United States and contribute to the diverse
								community of international students. If you have
								any questions or require additional information,
								please do not hesitate to contact me at
								jiajin@gmail.com. Sincerely, Jiajin Ou
							</div>
							<div
								style={{
									display: 'flex',
									justifyContent: 'center',
									marginTop: '3rem',
								}}>
								<Button
									width={'10.6rem'}
									height={'4.8rem'}
									fontSize={'2.4rem'}
									text='EDIT'></Button>
								<div
									style={{
										marginRight: '1rem',
									}}></div>
								<Button
									width={'10.6rem'}
									height={'4.8rem'}
									fontSize={'2.4rem'}
									text='COPY'></Button>
							</div>
						</div>
					)}
				</div>
			</main>
		</>
	);
}

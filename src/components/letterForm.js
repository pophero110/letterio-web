import FormList from './formList';
export function Input({ placeholder, value, onChangeHandler }) {
	return (
		<input
			value={value}
			onChange={onChangeHandler}
			placeholder={placeholder}
			style={{
				width: '100%',
				height: '5.3rem',
				borderRadius: '1rem',
				border: 'none',
				background: 'var(--cyan-50)',
				boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
				color: 'black',
				fontFamily: 'Saira Condensed',
				fontStyle: 'normal',
				fontWeight: '700',
				fontSize: '20px',
				lineHeight: '31px',
				paddingLeft: '1.6rem',
			}}></input>
	);
}

export function RemoveButton({ onClickHandlder }) {
	return (
		<div
			onClick={onClickHandlder}
			style={{
				width: '5.1rem',
				height: '5.1rem',
				boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
				borderRadius: '1rem',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				cursor: 'pointer',
			}}>
			<svg
				width={38}
				height={38}
				viewBox='0 0 32 32'
				xmlns='http://www.w3.org/2000/svg'>
				<title />
				<g data-name='Layer 57' id='Layer_57'>
					<path d='M18.83,16l8.59-8.59a2,2,0,0,0-2.83-2.83L16,13.17,7.41,4.59A2,2,0,0,0,4.59,7.41L13.17,16,4.59,24.59a2,2,0,1,0,2.83,2.83L16,18.83l8.59,8.59a2,2,0,0,0,2.83-2.83Z' />
				</g>
			</svg>
		</div>
	);
}

function AddButton({ onClickHandlder }) {
	return (
		<div
			onClick={onClickHandlder}
			style={{
				width: '5.1rem',
				height: '5.1rem',
				boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
				borderRadius: '1rem',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				cursor: 'pointer',
			}}>
			<svg
				width={38}
				height={38}
				viewBox='0 0 448 512'
				xmlns='http://www.w3.org/2000/svg'>
				<path d='M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z' />
			</svg>
		</div>
	);
}

function FieldInput({
	index,
	title,
	description,
	changeFieldHandler,
	removeFieldHandler,
}) {
	const titleOnChangeHandler = (e) => {
		changeFieldHandler({ index, key: e.target.value, value: description });
	};
	const descriptionOnChangeHandler = (e) => {
		changeFieldHandler({ index, key: title, value: e.target.value });
	};
	const removeButtonHandler = () => {
		removeFieldHandler(index);
	};
	return (
		<div
			style={{
				display: 'flex',
				width: '100%',
				marginBottom: '1rem',
			}}>
			<div
				style={{
					display: 'flex',
					width: '100%',
				}}>
				<div
					style={{
						marginRight: '1.3rem',
					}}>
					<Input
						placeholder={'Title'}
						onChangeHandler={titleOnChangeHandler}
						value={title}></Input>
				</div>
				<div
					style={{
						width: '100%',
						marginRight: '1.3rem',
					}}>
					<Input
						placeholder={'Description'}
						onChangeHandler={descriptionOnChangeHandler}
						value={description}></Input>
				</div>
			</div>
			<div
				style={{
					width: '5.1rem',
				}}>
				<RemoveButton
					onClickHandlder={removeButtonHandler}></RemoveButton>
			</div>
		</div>
	);
}
function LetterTypeInput({ letterType, setLetterType }) {
	return (
		<div
			className='formList__button'
			style={{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'cneter',
				alignItems: 'start',
			}}>
			<div
				className='letterForm__heading'
				style={{
					marginBottom: '1rem',
				}}>
				WHAT KIND OF LETTER
			</div>
			<Input
				value={letterType}
				onChangeHandler={(e) => setLetterType(e.target.value)}
				placeholder={'Visa Application Cover Letter'}
				width={'100%'}></Input>
		</div>
	);
}
function Alert({ message }) {
	return (
		<div
			style={{
				padding: '0.5rem',
				marginTop: '1rem',
				marginBottom: '1rem',
				color: 'var(--error-color)',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<div
				style={{
					marginRight: '0.5rem',
				}}>
				<svg
					width={'3rem'}
					height={'3rem'}
					focusable='false'
					fill='currentColor'
					aria-hidden='true'
					viewBox='0 0 24 24'
					data-testid='ErrorOutlineIcon'>
					<path d='M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'></path>
				</svg>
			</div>
			<div
				style={{
					fontFamily: 'Inter',
					fontSize: '2rem',
				}}>
				{message}
			</div>
		</div>
	);
}
import Button from './button';

export default function LetterForm({
	fields,
	setFields,
	letterType,
	setLetterType,
	createFormHandler,
	formError,
	formList,
}) {
	console.log({ formList });
	const addFieldHandler = () => {
		const id = Math.floor(Math.random() * 1000000);
		setFields((prevState) => {
			return [...prevState, { key: '', value: '', id }];
		});
	};
	const removeFieldHandler = (index) => {
		setFields((prevState) => {
			delete prevState[index];
			return [...prevState];
		});
	};
	const changeFieldHandler = ({ index, key, value }) => {
		setFields((prevState) => {
			prevState[index] = {
				id: prevState[index].id,
				key,
				value,
			};
			return [...prevState];
		});
	};

	const selectForm = (letterType, fields) => {
		setLetterType(letterType);
		setFields(fields);
	};
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'start',
				width: '67.7rem',
				marginTop: '2rem',
			}}>
			<LetterTypeInput
				letterType={letterType}
				setLetterType={setLetterType}></LetterTypeInput>
			<FormList formList={formList} selectForm={selectForm}></FormList>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'start',
					marginTop: '2rem',
				}}>
				<div
					className='letterForm__heading'
					style={{
						marginBottom: '1rem',
					}}>
					DETAILS
				</div>
				{fields.map((field, index) => {
					if (field) {
						return (
							<FieldInput
								key={field.id}
								index={index}
								changeFieldHandler={changeFieldHandler}
								title={field.key}
								description={field.value}
								removeFieldHandler={
									removeFieldHandler
								}></FieldInput>
						);
					}
				})}
			</div>
			<div
				style={{
					width: '100%',
					display: 'flex',
					justifyContent: 'end',
				}}>
				<AddButton onClickHandlder={addFieldHandler}></AddButton>
			</div>
			{formError && <Alert message={formError}></Alert>}
			<div
				style={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Button
					onClickHandler={createFormHandler}
					width={'16.3rem'}
					height={'4.8rem'}
					fontSize={'2.4rem'}
					text={'CREATE'}></Button>
			</div>
		</div>
	);
}

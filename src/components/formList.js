import { useState } from 'react';

export default function FormList({ selectForm, formList, setFormList }) {
	const [loading, setLoading] = useState(false);
	if (formList.length === 0) {
		return null;
	}
	const deleteFormHandler = async (formId) => {
		setLoading(true);
		const result = await fetch('/api/form' + `?formId=${formId}`, {
			method: 'DELETE',
		})
			.then(async (response) => {
				const result = await response.json();
				return result;
			})
			.catch((error) => error);
		if (result.data) {
			const newFormList = formList.filter((form) => form.id !== formId);
			setFormList(newFormList);
		}
		if (result.error) {
			console.log(result.error);
		}
		setLoading(false);
	};
	return (
		<div
			className='formList'
			style={{
				backgroundColor: 'var(--cyan-50)',
				padding: '1rem',
				boxShadow: 'var(--black-shadow)',
				borderRadius: '0.5rem',
				position: 'absolute',
				width: 'inherit',
				top: '32.4rem',
			}}>
			{formList.map((form) => {
				return (
					<div
						className='formList__item'
						key={form.id}
						style={{
							display: 'flex',
							justifyContent: 'space-between',
						}}>
						<div onClick={() => selectForm(form.type, form.field)}>
							{form.type}
						</div>
						<DeleteButton
							disabled={loading}
							onClickHandlder={() =>
								deleteFormHandler(form.id)
							}></DeleteButton>
					</div>
				);
			})}
		</div>
	);
}

export function DeleteButton({ onClickHandlder, disabled }) {
	return (
		<div
			onClick={onClickHandlder}
			style={{
				borderRadius: '1rem',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				cursor: 'pointer',
				pointerEvents: disabled ? 'none' : 'auto',
			}}>
			<svg
				width={20}
				height={20}
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

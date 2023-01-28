export default function FormList({ selectForm, formList }) {
	if ([formList].length === 0) {
		return null;
	}
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
						key={form.id}
						onClick={() => selectForm(form.field)}
						className='formList__item'>
						{form.type}
					</div>
				);
			})}
		</div>
	);
}

export default function Button({
	width,
	height,
	text,
	fontSize,
	style,
	onClickHandler,
	id,
}) {
	const styles = {
		width,
		height,
		backgroundColor: 'white',
		borderRadius: 'var(--radius)',
		fontFamily: 'var(--saira-condensed)',
		fontSize,
		fontWeight: 'var(--bold)',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		boxShadow: 'var(--primary-shadow)',
		color: 'black',
		cursor: 'pointer',
		...style,
	};
	return (
		<div
			id={id}
			onClick={onClickHandler}
			className='cta-button'
			style={styles}>
			<p>{text}</p>
		</div>
	);
}

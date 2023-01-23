function Card({ children, style }) {
	const styles = {
		width: '100%',
		backgroundColor: 'var(--cyan-50)',
		boxShadow: 'var(--black-shadow)',
		borderRadius: 'var(--radius)',
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		padding: '2.9rem 4.5rem',
		...style,
	};
	return (
		<div className='card' style={styles}>
			{children}
		</div>
	);
}

function CardHeader({ children }) {
	return <div className='card-heading'>{children}</div>;
}

function CardBody({ children, style }) {
	return <div style={style}>{children}</div>;
}
function CardFooter({ children }) {
	return <div>{children}</div>;
}
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;

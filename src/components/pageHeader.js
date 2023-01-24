import Logo from './logo';
export default function PageHeader() {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-around',
				width: '100%',
				paddingTop: '3rem',
			}}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Logo color='black'></Logo>
				<div
					style={{
						color: 'black',
					}}
					className='logo'>
					LETTER.IO
				</div>
			</div>
			<div></div>
		</div>
	);
}

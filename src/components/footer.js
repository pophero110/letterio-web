import Logo from './logo';
export default function Footer() {
	return (
		<div
			style={{
				width: '100%',
				backgroundColor: 'black',
				height: '16.7rem',
			}}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					padding: '2.9rem 12rem',
					flexDirection: 'column',
				}}>
				<Logo></Logo>
				<div
					className='footer__text'
					style={{
						display: 'flex',
						whiteSpace: 'nowrap',
						width: '100%',
						justifyContent: 'space-between',
						marginTop: '3.4rem',
					}}>
					<div>Jiajin.webdeveloper@gmail.com</div>
					<div>Copyright © Jiajin Ou. All right reserved</div>
					<div
						style={{
							display: 'flex',
						}}>
						<div
							style={{
								marginRight: '2rem',
							}}>
							Terms & conditions
						</div>
						<div>Private policy</div>
					</div>
				</div>
			</div>
		</div>
	);
}

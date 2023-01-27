import Link from 'next/link';
import Button from './button';
import Logo from './logo';
export default function Navbar() {
	return (
		<div
			className='navbar'
			style={{
				display: 'flex',
				justifyContent: 'center',
				width: '100%',
			}}>
			<div
				className='navbar__nav'
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					width: '988px',
				}}>
				<div
					className='narbar__logobox menu'
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<Logo></Logo>
					<div className='logo'>LETTER.IO</div>
				</div>

				<div
					className='narbar__navbox menu'
					style={{
						display: 'flex',
						width: '417px',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}>
					<div>Home</div>
					<div>Example</div>
					<div>Pricing</div>
					<div>About</div>
					<Link href={'/auth/signin'}>
						<Button
							width='76px'
							height='35px'
							fontSize='16px'
							text='Sign Up'></Button>
					</Link>
				</div>
			</div>
		</div>
	);
}

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Button from './button';
import Logo from './logo';
import { signOut } from 'next-auth/react';
export default function Navbar() {
	const session = useSession();
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
					{session.status === 'authenticated' ? (
						<button
							className='user-avatar'
							style={{
								width: '3rem',
								height: '3rem',
								backgroundImage: `url(${session.data.user.image})`,
								backgroundPosition: 'center',
								backgroundSize: 'cover',
								borderRadius: '50%',
							}}>
							<div className='user-avatar__dropdown'>
								<div
									style={{
										cursor: 'pointer',
									}}
									onClick={() => signOut()}
									className='user-avatar__dropdown__item'>
									Sign Out
								</div>
							</div>
						</button>
					) : (
						<Link href={'/auth/signin'}>
							<Button
								width='76px'
								height='35px'
								fontSize='16px'
								text='Sign Up'></Button>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}

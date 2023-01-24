import Button from './button';
import Link from 'next/link';
export default function HeroHeading() {
	return (
		<div
			className='heading'
			style={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				marginTop: '7.1rem',
			}}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					width: '1120px',
				}}>
				<div></div>
				<div>
					<div
						className='heading-1'
						style={{
							width: '482px',
						}}>
						<span
							style={{
								textShadow: 'var(--primary-shadow)',
								color: 'var(--cyan-200)',
							}}>
							AI-Powered
						</span>{' '}
						Letter Writing Assistance for All Your Needs
					</div>
					<div
						className='subheading'
						style={{
							width: '480px',
							marginTop: '10px',
							marginBottom: '30px',
						}}>
						Create professional and personalized letters in minutes
						with our easy-to-use online form
					</div>
					<Link href={'/letter'}>
						<Button
							width='173px'
							height='61px'
							fontSize='20px'
							text='GET STARTED NOW'></Button>
					</Link>
				</div>
			</div>
		</div>
	);
}

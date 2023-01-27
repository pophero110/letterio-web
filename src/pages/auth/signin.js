import Logo from '../../components/logo';
import { RemoveButton, Input } from '../../components/letterForm';
import Button from '../../components/button';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
export default function Signin() {
	return (
		<>
			<div
				style={{
					display: 'flex',
					width: '100%',
					height: '100vh',
				}}>
				<div
					style={{
						display: 'flex',
						flexBasis: '50%',
						height: '100%',
						background:
							'linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #A5F3FC',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<div
						style={{
							color: '#FFFFFF',
							fontFamily: 'Saira Condensed',
							fontStyle: 'normal',
							fontWeight: '700',
						}}>
						<div
							style={{
								fontSize: '6.4rem',
								textAlign: 'center',
								textTransform: 'uppercase',
								textShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
							}}>
							Create an account
						</div>
						<div
							style={{
								fontSize: '6.4rem',
								textShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
								textAlign: 'center',
							}}>
							<div>
								To{' '}
								<span
									style={{
										color: 'var(--cyan-200)',
										textShadow:
											'0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 1px 1px 10px #A5F3FC',
									}}>
									Save
								</span>{' '}
								Your
							</div>
							<div>Forms and Letters</div>
						</div>
					</div>
				</div>
				<div
					style={{
						flexBasis: '50%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						padding: '3rem 3rem',
					}}>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							<Link href='/'>
								<Logo color='black'></Logo>
								<div
									className='logo'
									style={{
										color: 'black',
									}}>
									LETTER.IO
								</div>
							</Link>
						</div>
						<div>
							<Link href={'/'}>
								<RemoveButton></RemoveButton>
							</Link>
						</div>
					</div>
					<div>
						<div
							style={{
								marginBottom: '1rem',
							}}>
							<div
								className='letterForm__heading'
								style={{
									fontSize: '2rem',
								}}>
								Email
							</div>
							<Input placeholder={'Enter your email'}></Input>
						</div>
						<div
							style={{
								marginBottom: '2rem',
							}}>
							<div
								className='letterForm__heading'
								style={{
									fontSize: '2rem',
								}}>
								Password
							</div>
							<Input placeholder={'Enter your password'}></Input>
						</div>
						<Button
							width={'100%'}
							height={'4.8rem'}
							fontSize={'2.4rem'}
							text={'Sign up with Email'}></Button>

						<div
							style={{
								width: '100%',
								textAlign: 'center',
								borderBottom: '1px solid #737373',
								lineHeight: '0.1rem',
								margin: '3rem 0 2rem',
							}}>
							<span
								style={{
									fontFamily: 'Saira Condensed',
									fontStyle: 'normal',
									fontWeight: '700',
									backgroundColor: 'var(--cyan-50)',
									fontSize: '2rem',
									padding: '0 1rem',
									color: '#737373',
								}}>
								or
							</span>
						</div>

						<div
							style={{
								marginBottom: '1rem',
								marginTop: '3rem',
							}}>
							<Button
								onClickHandler={() => signIn('google')}
								width={'100%'}
								height={'4.8rem'}
								fontSize={'2.4rem'}
								text={'Sign in with Google'}>
								<svg
									style={{
										marginLeft: '1rem',
									}}
									width='31'
									height='32'
									viewBox='0 0 31 32'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M30.4959 16.367C30.4959 15.3336 30.3959 14.267 30.2292 13.267H15.7959V19.167H24.0626C23.7292 21.067 22.6292 22.7336 20.9959 23.8003L25.9292 27.6336C28.8292 24.9336 30.4959 21.0003 30.4959 16.367Z'
										fill='#4280EF'
									/>
									<path
										d='M15.7958 31.3003C19.9292 31.3003 23.3958 29.9336 25.9292 27.6003L20.9958 23.8003C19.6292 24.7336 17.8625 25.2669 15.7958 25.2669C11.7958 25.2669 8.42915 22.5669 7.19582 18.9669L2.12915 22.8669C4.72915 28.0336 9.99582 31.3003 15.7958 31.3003Z'
										fill='#34A353'
									/>
									<path
										d='M7.19582 18.9336C6.56248 17.0336 6.56248 14.967 7.19582 13.067L2.12915 9.13362C-0.0375163 13.467 -0.0375163 18.567 2.12915 22.867L7.19582 18.9336Z'
										fill='#F6B704'
									/>
									<path
										d='M15.7958 6.76696C17.9625 6.73362 20.0958 7.56696 21.6625 9.06696L26.0292 4.66696C23.2625 2.06696 19.5958 0.666955 15.7958 0.700289C9.99582 0.700289 4.72915 3.96696 2.12915 9.13362L7.19582 13.067C8.42915 9.43362 11.7958 6.76696 15.7958 6.76696Z'
										fill='#E54335'
									/>
								</svg>
							</Button>
						</div>

						<div>
							<Button
								onClickHandler={() => signIn('discord')}
								width={'100%'}
								height={'4.8rem'}
								fontSize={'2.4rem'}
								text={'Sign in with Discord'}>
								<svg
									style={{
										marginLeft: '1rem',
									}}
									width='37'
									height='42'
									viewBox='0 0 37 42'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M36.0193 5.10248V41.022C30.9751 36.5644 32.5883 38.04 26.7289 32.5927L27.1108 36.2968H5.08515C2.8227 36.2968 0.980713 34.455 0.980713 32.1722V5.10248C0.980713 2.81997 2.82261 0.977982 5.08515 0.977982H31.9146C34.1772 0.977982 36.0193 2.81997 36.0193 5.10248Z'
										fill='#8A9CFE'
									/>
									<path
										d='M27.4297 12.4105C24.5466 10.2482 21.8036 10.3082 21.8036 10.3082L21.5232 10.6286C24.927 11.6697 26.5088 13.1714 26.5088 13.1714C21.7526 10.5647 16.1658 10.5643 11.5523 12.5908C10.8114 12.9311 10.3709 13.1714 10.3709 13.1714C10.3709 13.1714 12.0328 11.5896 15.6368 10.5485L15.4367 10.3082C15.4367 10.3082 12.6936 10.2482 9.81041 12.4105C9.81041 12.4105 6.92725 17.6363 6.92725 24.0833C6.92725 24.0833 8.6092 26.9864 13.0339 27.1267C13.0339 27.1267 13.7748 26.2259 14.3754 25.4648C11.8326 24.7039 10.8716 23.1024 10.8716 23.1024C11.1662 23.3083 11.6518 23.5758 11.6925 23.6028C15.072 25.4956 19.8724 26.1156 24.1863 24.3036C24.8869 24.0434 25.6679 23.6628 26.4888 23.1223C26.4888 23.1223 25.4876 24.7642 22.8647 25.5049C23.4655 26.2657 24.1863 27.1266 24.1863 27.1266C28.6112 26.9864 30.3129 24.0832 30.3129 24.0832C30.3129 17.6363 27.4297 12.4105 27.4297 12.4105ZM14.876 22.2214C13.7547 22.2214 12.8336 21.2203 12.8336 19.9988C12.8336 18.7775 13.7347 17.7764 14.876 17.7764C16.0172 17.7764 16.9383 18.7775 16.9182 19.9988C16.9182 21.2203 16.0172 22.2214 14.876 22.2214ZM22.184 22.2214C21.0628 22.2214 20.1418 21.2203 20.1418 19.9988C20.1418 18.7775 21.0428 17.7764 22.184 17.7764C23.3253 17.7764 24.2263 18.7775 24.2263 19.9988C24.2263 21.2203 23.3253 22.2214 22.184 22.2214Z'
										fill='#FDFDFD'
									/>
								</svg>
							</Button>
						</div>
					</div>

					<div></div>
					<div></div>
				</div>
			</div>
		</>
	);
}

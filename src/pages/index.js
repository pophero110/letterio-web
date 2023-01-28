import Head from 'next/head';
import Card from '../components/card';
import HeroHeading from '../components/heroHeading';
import Navbar from '../components/navbar';
import NumberIcon from '../components/numberIcon';
import FormIcon from '../components/formIcon';
import Button from '../components/button';
import Footer from '../components/footer';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
const Home = () => {
	const session = useSession();
	return (
		<>
			<Head>
				<title>Letter.io - Home</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main
				className='main'
				style={{
					height: '253rem',
				}}>
				<div
					className='hero'
					style={{
						width: '100%',
						height: '750px',
					}}>
					<div className='hero__image'></div>
					<div
						className='hero__body'
						style={{
							display: 'flex',
							width: '100%',
							justifyContent: 'center',
							position: 'absolute',
							flexDirection: 'column',
							top: '27px',
						}}>
						<Navbar></Navbar>
						<HeroHeading
							authenicated={
								session.status === 'authenticated'
							}></HeroHeading>
					</div>
				</div>
				<div className='main__content'>
					<div
						style={{
							width: '988px',
						}}>
						<Card>
							<Card.Header>
								<div>how it work</div>
							</Card.Header>
							<Card.Body>
								<div
									className='card__text_1'
									style={{
										display: 'flex',
										alignItems: 'center',
									}}>
									<NumberIcon.One></NumberIcon.One>
									<div
										style={{
											marginLeft: '1.5rem',
										}}>
										fill out our online form with your
										letter detail
									</div>
								</div>
								<div
									className='card__text_1'
									style={{
										display: 'flex',
										alignItems: 'center',
									}}>
									<NumberIcon.Two></NumberIcon.Two>
									<div
										style={{
											marginLeft: '1.5rem',
										}}>
										our ai-powered letter assistant generate
										a personalized letter
									</div>
								</div>
								<div
									className='card__text_1'
									style={{
										display: 'flex',
										alignItems: 'center',
									}}>
									<NumberIcon.Three></NumberIcon.Three>
									<div
										style={{
											marginLeft: '1.5rem',
										}}>
										preview, edit, and download your letter
										in multiple formats
									</div>
								</div>
							</Card.Body>
							<Card.Footer></Card.Footer>
						</Card>
						<Card
							style={{
								marginTop: '6.2rem',
							}}>
							<Card.Header>
								<div>Examples of letter</div>
							</Card.Header>
							<Card.Body
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									marginTop: '2rem',
									paddingLeft: '2rem',
									paddingRight: '2rem',
								}}>
								<Card
									style={{
										padding: '2.9rem 4.1rem',
										background:
											'linear-gradient(180deg, #FFFFFF 0%, rgba(236, 254, 255, 0) 100%)',
										width: '23.9rem',
										height: '23.9rem',
									}}>
									<Card.Body
										style={{
											display: 'flex',
											flexDirection: 'column',
											justifyContent: 'center',
											alignItems: 'center',
										}}>
										<FormIcon></FormIcon>
										<div className='card__subheading'>
											Cover Letter
										</div>
										<div
											className='card__text_2'
											style={{
												marginTop: '1.3rem',
											}}>
											<div>• Job application</div>
											<div
												style={{
													marginTop: '0.1rem',
												}}>
												• Visa application
											</div>
										</div>
									</Card.Body>
								</Card>
								<Card
									style={{
										width: '23.9rem',
										height: '23.9rem',
										background:
											'linear-gradient(180deg, #FFFFFF 0%, rgba(236, 254, 255, 0) 100%)',
									}}>
									<Card.Body
										style={{
											display: 'flex',
											flexDirection: 'column',
											justifyContent: 'center',
											alignItems: 'center',
										}}>
										<FormIcon></FormIcon>
										<div className='card__subheading'>
											Business Letter
										</div>
										<div
											className='card__text_2'
											style={{
												marginTop: '1.3rem',
											}}>
											<div>• Sales Letter</div>
											<div
												style={{
													marginTop: '0.1rem',
												}}>
												• Complaint letter
											</div>
										</div>
									</Card.Body>
								</Card>
								<Card
									style={{
										width: '23.9rem',
										height: '23.9rem',
										background:
											'linear-gradient(180deg, #FFFFFF 0%, rgba(236, 254, 255, 0) 100%)',
									}}>
									<Card.Body
										style={{
											display: 'flex',
											flexDirection: 'column',
											justifyContent: 'center',
											alignItems: 'center',
										}}>
										<FormIcon></FormIcon>
										<div className='card__subheading'>
											Cover Letter
										</div>
										<div
											className='card__text_2'
											style={{
												marginTop: '1.3rem',
											}}>
											<div>• express regret</div>
											<div
												style={{
													marginTop: '0.1rem',
												}}>
												• take responsibilty
											</div>
										</div>
									</Card.Body>
								</Card>
							</Card.Body>
							<Card.Footer></Card.Footer>
						</Card>
						{/* examples */}
						<Card
							style={{
								marginTop: '6.2rem',
							}}>
							<Card.Header>testimonials</Card.Header>
							<Card.Body
								style={{
									marginTop: '2.5rem',
								}}>
								<Card
									style={{
										background:
											'linear-gradient(180deg, #FFFFFF 0%, rgba(236, 254, 255, 0) 100%)',
										paddingLeft: '3.2rem',
										paddingRight: '3.2rem',
									}}>
									<Card.Body
										style={{
											display: 'flex',
										}}>
										<div
											style={{
												flex: '0 0 13.3rem',
												height: '13.3rem',
												backgroundImage:
													'url(jane.png)',
												backgroundPosition: 'center',
												backgroundSize: 'cover',
												clipPath: 'circle(50%)',
											}}></div>
										<div
											className='card__text_3'
											style={{
												marginLeft: '5rem',
												height: '13.3rem',
											}}>
											<div>
												&quot;I was in a rush to send a
												formal letter to a potential
												client, but I didn&apos;t have
												the time to sit and write it
												myself. I stumbled upon this
												letter assistant service and
												gave it a try. I was impressed
												with how easy and fast it was to
												use, and the final letter was
												professional and well-written.
												It helped me land the client!
												Thanks to this service, I can
												now focus on growing my
												business. I highly recommend it
												to anyone who needs to write
												professional letters quickly and
												easily.&quot;
											</div>
											<div
												style={{
													textAlign: 'end',
												}}>
												by Jane Smith
											</div>
										</div>
									</Card.Body>
								</Card>
								<Card
									style={{
										background:
											'linear-gradient(180deg, #FFFFFF 0%, rgba(236, 254, 255, 0) 100%)',
										paddingLeft: '3.2rem',
										paddingRight: '3.2rem',
										marginTop: '2rem',
									}}>
									<Card.Body
										style={{
											display: 'flex',
										}}>
										<div
											style={{
												flex: '0 0 13.3rem',
												height: '13.3rem',
												backgroundImage:
													'url(sarah.png)',
												backgroundPosition: 'center',
												backgroundSize: 'cover',
												clipPath: 'circle(50%)',
											}}></div>
										<div
											className='card__text_3'
											style={{
												marginLeft: '5rem',
												height: '13.3rem',
											}}>
											<div>
												&quot;I had to write an apology
												letter to a customer, but I
												didn&apos;t know where to start.
												I was worried it would come
												across as insincere or
												unprofessional. But this letter
												assistant service helped me
												write a sincere and well-written
												apology letter that helped to
												smooth things over with the
												customer. It saved me a lot of
												stress and helped me maintain a
												good reputation with our
												customers. I highly recommend it
												to any business owner.&quot;
											</div>
											<div
												style={{
													textAlign: 'end',
												}}>
												by Sarah Johnson
											</div>
										</div>
									</Card.Body>
								</Card>
								<Card
									style={{
										background:
											'linear-gradient(180deg, #FFFFFF 0%, rgba(236, 254, 255, 0) 100%)',
										paddingLeft: '3.2rem',
										paddingRight: '3.2rem',
										marginTop: '2rem',
									}}>
									<Card.Body
										style={{
											display: 'flex',
										}}>
										<div
											style={{
												flex: '0 0 13.3rem',
												height: '13.3rem',
												backgroundImage:
													'url(michael.png)',
												backgroundPosition: 'center',
												backgroundSize: 'cover',
												clipPath: 'circle(50%)',
											}}></div>
										<div
											className='card__text_3'
											style={{
												marginLeft: '5rem',
												height: '13.3rem',
											}}>
											<div>
												&quot;As a job seeker, I was
												sending out a lot of cover
												letters, but I was struggling to
												make each one stand out. I
												decided to try this letter
												assistant service, and I&apos;m
												so glad I did. It helped me
												create unique and personalized
												cover letters that caught the
												attention of hiring managers. I
												landed my dream job in just a
												few weeks! I highly recommend
												this service to anyone looking
												for a new job.&quot;
											</div>
											<div
												style={{
													textAlign: 'end',
												}}>
												by Michael Brown
											</div>
										</div>
									</Card.Body>
								</Card>
							</Card.Body>
						</Card>
						{/* testimonials */}
						<div
							style={{
								marginTop: '7.2rem',
								display: 'flex',
								justifyContent: 'center',
							}}>
							{session.status === 'authenticated' ? (
								<Link href={'/letter'}>
									<Button
										width='35.7rem'
										height='10.6rem'
										fontSize='4.8rem'
										text='START WRITING'></Button>
								</Link>
							) : (
								<Link href={'/auth/signin'}>
									<Button
										width='35.7rem'
										height='10.6rem'
										fontSize='4.8rem'
										text='GET STARTED NOW'></Button>
								</Link>
							)}
						</div>
					</div>
				</div>
				{/* main_content */}
			</main>
			<Footer></Footer>
		</>
	);
};

export default Home;

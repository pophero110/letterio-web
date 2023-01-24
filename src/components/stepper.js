function Step({ number, subheadline, activeStep, setActiveStep }) {
	return (
		<div
			onClick={() => {
				setActiveStep(number);
			}}
			style={{
				fontFamily: 'Saira Condensed',
				cursor: 'pointer',
				fontStyle: 'normal',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				marginRight: '2rem',

				color: activeStep === number ? 'black' : 'var(--neutral-400)',
			}}>
			<div
				style={{
					fontWeight: '700',
					fontSize: '4.8rem',
					lineHeight: '90%',
					marginBottom: '1rem',
				}}>
				STEP {number}
			</div>
			<div
				style={{
					fontWeight: '400',
					fontSize: '2.4rem',
					lineHeight: '90%',
				}}>
				{subheadline}
			</div>
		</div>
	);
}
const ArrowRight = (
	<svg
		fill='none'
		height='96'
		viewBox='0 0 24 24'
		width='96'
		xmlns='http://www.w3.org/2000/svg'>
		<path
			d='M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z'
			fill='currentColor'
		/>
	</svg>
);
export default function Stepper({ activeStep, setActiveStep }) {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				marginTop: '2rem',
			}}>
			<Step
				number={1}
				subheadline='CREATE FORM'
				activeStep={activeStep}
				setActiveStep={setActiveStep}></Step>
			<div
				style={{
					marginRight: '2rem',
				}}>
				{ArrowRight}
			</div>
			<Step
				number={2}
				subheadline='GENERATE LETTER'
				activeStep={activeStep}
				setActiveStep={setActiveStep}></Step>
			<div
				style={{
					marginRight: '2rem',
				}}>
				{ArrowRight}
			</div>
			<Step
				number={3}
				subheadline='EDIT LETTER'
				activeStep={activeStep}
				setActiveStep={setActiveStep}></Step>
		</div>
	);
}

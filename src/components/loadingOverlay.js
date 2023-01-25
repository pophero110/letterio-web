import style from './loadingOverlay.module.css';
export default function LoadingOverlay({ loading }) {
	return (
		<div
			className={style.loadingOverlay}
			style={{
				display: loading ? 'block' : 'none',
			}}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100%',
				}}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}>
					<div
						className={style.loader}
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							marginBottom: '2rem',
						}}></div>
					<div
						style={{
							fontFamily: 'Inter',
						}}>
						It usually takes 10 ~ 30 seconds
					</div>
				</div>
			</div>
		</div>
	);
}

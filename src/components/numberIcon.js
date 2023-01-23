function NumberIcon() {
	return null;
}

function One() {
	return (
		<svg
			width={56}
			height={56}
			viewBox='0 0 256 256'
			xmlns='http://www.w3.org/2000/svg'>
			<rect fill='none' height='256' width='256' />
			<path d='M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM140,176a8,8,0,0,1-16,0V99l-11.6,7.6a7.8,7.8,0,0,1-11-2.2,8,8,0,0,1,2.2-11.1l24-16A8,8,0,0,1,140,84Z' />
		</svg>
	);
}
function Two() {
	return (
		<svg
			width={56}
			height={56}
			viewBox='0 0 256 256'
			xmlns='http://www.w3.org/2000/svg'>
			<rect fill='none' height='256' width='256' />
			<path d='M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM152,168a8,8,0,0,1,0,16H104a7.3,7.3,0,0,1-2.5-.4A8,8,0,0,1,96,176a7.5,7.5,0,0,1,1.7-4.9l43.7-58.3A16,16,0,0,0,128,88a15.9,15.9,0,0,0-14.7,9.8,8.1,8.1,0,0,1-10.5,4.2,8,8,0,0,1-4.3-10.5,32,32,0,1,1,56,30.4l-.2.3L120,168Z' />
		</svg>
	);
}
function Three() {
	return (
		<svg
			width={56}
			height={56}
			viewBox='0 0 256 256'
			xmlns='http://www.w3.org/2000/svg'>
			<rect fill='none' height='256' width='256' />
			<path d='M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM149.5,177.5a36.2,36.2,0,0,1-51,0,8.1,8.1,0,0,1,11.4-11.4A19.9,19.9,0,1,0,124,132a8.1,8.1,0,0,1-7.1-4.3,8,8,0,0,1,.5-8.3L136.6,92H104a8,8,0,0,1,0-16h48a8.1,8.1,0,0,1,7.1,4.3,7.8,7.8,0,0,1-.6,8.3l-21,30a37.9,37.9,0,0,1,12,7.9,36.2,36.2,0,0,1,0,51Z' />
		</svg>
	);
}
NumberIcon.One = One;
NumberIcon.Two = Two;
NumberIcon.Three = Three;

export default NumberIcon;

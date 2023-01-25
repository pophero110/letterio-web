import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						rel='preconnect'
						href='https://fonts.googleapis.com'
					/>
					<link
						rel='preconnect'
						href='https://fonts.gstatic.com'
						crossoRigin
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Inter&display=swap'
						rel='stylesheet'></link>
					<link
						href='https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@400;700&display=swap'
						rel='stylesheet'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap'
						rel='stylesheet'></link>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;

import { setCookie, parseCookies } from 'nookies';
export default async function generateLetter(req, res) {
	if (req.method === 'POST') {
		const body = JSON.parse(req.body);
		let url = `https://6a07-2601-243-a00-19b0-1d4c-dcc2-5221-661c.ngrok.io/sendMessage?fields=${JSON.stringify(
			body.fields
		)}&letterType=${JSON.stringify(body.letterType)}`;

		const { conversationId, messageId } = parseCookies({ req });
		if (conversationId && messageId) {
			url += `&conversationId=${conversationId}`;
			url += `&messageId=${messageId}`;
		}
		console.log();
		const response = await fetch(url, {
			method: 'GET',
		});

		// response { response, conversationId, messageID}
		const data = await response.json();
		if (data.response) {
			setCookie({ res }, 'conversationId', data.conversationId, {
				maxAge: 30 * 60,
			});
			setCookie({ res }, 'messageId', data.messageId, {
				maxAge: 30 * 60,
			});
			res.status(200).json(data.response);
		} else {
			res.status(400).json(
				'Something went wrong. Please try again later'
			);
		}
	}
}

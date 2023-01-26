import { setCookie, parseCookies } from 'nookies';
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './auth/[...nextauth]';
import { prisma } from '../../server/db';
export default async function generateLetter(req, res) {
	if (req.method === 'POST') {
		const body = JSON.parse(req.body);
		let url = `${
			process.env.CHATGPT_API
		}/sendMessage?fields=${JSON.stringify(
			body.fields
		)}&letterType=${JSON.stringify(body.letterType)}`;
		const { conversationId, messageId } = parseCookies({ req });
		if (conversationId && messageId) {
			url += `&conversationId=${conversationId}`;
			url += `&messageId=${messageId}`;
		}

		const session = await unstable_getServerSession(req, res, authOptions);
		console.log(session);

		const response = fetch(url, {
			method: 'GET',
		});

		// const letter = await prisma.letter.create({
		// 	data: {
		// 		content: '',
		// 	},
		// });

		response.then(async (res) => {
			const data = await res.json();
			console.log(data.response);
			await prisma.letter.create({
				data: {
					content: data.response,
				},
			});
		});

		// response { response, conversationId, messageID}
		// const data = await response.json();
		// if (data.response) {
		// 	setCookie({ res }, 'conversationId', data.conversationId, {
		// 		maxAge: 30 * 60,
		// 	});
		// 	setCookie({ res }, 'messageId', data.messageId, {
		// 		maxAge: 30 * 60,
		// 	});
		// 	res.status(200).json(data.response);
		// } else {
		// 	res.status(400).json(
		// 		'Something went wrong. Please try again later'
		// 	);
		// }

		// res.status(200).json({ message: 'Generating', letterId: letter.id });
		res.status(200).json({ message: 'Generating' });
	}
}

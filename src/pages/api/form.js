import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from './auth/[...nextauth]';
import { prisma } from '../../server/db';
export default async function Form(req, res) {
	const session = await unstable_getServerSession(req, res, authOptions);
	console.log(session);
	const { id } = req.query;
	const letter = await prisma.letter.findUnique({
		where: {
			id,
		},
	});
	res.status(200).json(letter);
}

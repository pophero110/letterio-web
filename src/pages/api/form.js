import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './auth/[...nextauth]';
import { prisma } from '../../server/db';
import { Prisma } from '@prisma/client';
export default async function generateLetter(req, res) {
	const session = await unstable_getServerSession(req, res, authOptions);
	if (req.method === 'POST') {
		const body = JSON.parse(req.body);
		const fields = body.fields.map(({ key, value }) => {
			return { key, value };
		});

		try {
			const form = await prisma.form.create({
				data: {
					userId: session.user.id,
					type: body.letterType,
					field: {
						create: fields,
					},
				},
			});

			res.status(200).json({ data: { formId: form.id }, error: null });
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				// The .code property can be accessed in a type-safe manner
				res.status(200).json({
					data: null,
					error: error.message,
				});
			}
			throw e;
		}
	}
	if (req.method === 'GET') {
		try {
			const forms = await prisma.form.findMany({
				where: {
					userId: session.user.id,
				},
				include: {
					field: true,
				},
			});

			res.status(200).json({
				data: { forms },
				error: null,
			});
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				// The .code property can be accessed in a type-safe manner
				res.status(200).json({
					data: null,
					error: error.message,
				});
			}
			throw e;
		}
	}
}

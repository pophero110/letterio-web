import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './auth/[...nextauth]';
import { prisma } from '../../server/db';
import { Prisma } from '@prisma/client';
export default async function generateLetter(req, res) {
	if (req.method === 'POST') {
		const body = JSON.parse(req.body);
		const session = await unstable_getServerSession(req, res, authOptions);
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
				if (e.code === 'P2002') {
					res.status(200).json({
						data: null,
						error: error.body,
					});
				}
			}
			throw e;
		}
	}
}

import { app } from '../../utils/firebase';
import { ref, set } from 'firebase/database';
export default async function Form(req, res) {
	const db = getDatabase(app);
	await set(ref(db, 'form/' + 12), {
		username: 'name',
		email: 'email',
		profile_picture: 'imageUrl',
	});
	res.status(200).json('testing');
}

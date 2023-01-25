import { db } from '../../utils/firebase';
import { ref, set } from 'firebase/database';
export default async function Form(req, res) {
	await set(ref(db, 'users/' + 12), {
		username: 'name',
		email: 'email',
		profile_picture: 'imageUrl',
	});
	res.status(200).json('form');
}

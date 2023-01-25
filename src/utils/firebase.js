import { initializeApp } from 'firebase/app';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCi6D2_UkKb_aRu2cnAk-EXpxZhZM7XBqg',
	authDomain: 'letterio.firebaseapp.com',
	databaseURL: 'https://letterio-default-rtdb.firebaseio.com',
	projectId: 'letterio',
	storageBucket: 'letterio.appspot.com',
	messagingSenderId: '906110488847',
	appId: '1:906110488847:web:73bebd9ef18df5980a2e7a',
	measurementId: 'G-L577WJRBFW',
};
export const app = initializeApp(firebaseConfig);

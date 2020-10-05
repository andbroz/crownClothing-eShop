import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBJhnFUy1HSAQegHWdF1_jsC0Jw1WHSjlw',
	authDomain: 'crown-db-c1e7d.firebaseapp.com',
	databaseURL: 'https://crown-db-c1e7d.firebaseio.com',
	projectId: 'crown-db-c1e7d',
	storageBucket: 'crown-db-c1e7d.appspot.com',
	messagingSenderId: '443408388335',
	appId: '1:443408388335:web:296ce8a0f799b21bf60b1a',
	measurementId: 'G-E35N5WXSXE',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

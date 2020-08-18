import firebase from './firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyAPCj5TZZGipdVoEuRQOfALxK4grGPZgcU',
	authDomain: 'slack-clone-6250c.firebaseapp.com',
	databaseURL: 'https://slack-clone-6250c.firebaseio.com',
	projectId: 'slack-clone-6250c',
	storageBucket: 'slack-clone-6250c.appspot.com',
	messagingSenderId: '875976916757',
	appId: '1:875976916757:web:a2f66429bba9338a7ef31c',
	measurementId: 'G-SYCSBP9RVF'
};

const firebaseApp = firebase.initializedApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCKXNUN8GOj7Sbu8v-tbo7sbm_LnKLiNmg",
  authDomain: "crown-clothing-e678c.firebaseapp.com",
  projectId: "crown-clothing-e678c",
  storageBucket: "crown-clothing-e678c.appspot.com",
  messagingSenderId: "552258107320",
  appId: "1:552258107320:web:89505012c68a6f615d814d"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      // console.log
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInInWithPopup(provider);

export default firebase;

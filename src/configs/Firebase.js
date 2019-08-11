import app from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyDOMcm3g-xXeSb49h02fPLnHbC0hoU7t1E',
  authDomain: 'final-project-ppl.firebaseapp.com',
  databaseURL: 'https://final-project-ppl.firebaseio.com',
  projectId: 'final-project-ppl',
  storageBucket: 'final-project-ppl.appspot.com',
  messagingSenderId: '183562698103',
  appId: '1:183562698103:web:6b987d4fbcb4c732'
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  }

  firestore = () => app.firestore();

  getCollection = async collection => {
    try {
      const data = await app
        .firestore()
        .collection(collection)
        .get();
      return data;
    } catch (error) {
      return error;
    }
  };
}

const firebase = new Firebase();
export default firebase;

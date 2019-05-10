import firebase from '@firebase/app';
import '@firebase/auth';
import 'firebase/storage'

const config = {
  apiKey: "AIzaSyC3slLHUS-pB41R4nxgAEPP0zO8syqTzI4",
  authDomain: "alfabeta-test.firebaseapp.com",
  databaseURL: "https://alfabeta-test.firebaseio.com",
  projectId: "alfabeta-test",
  storageBucket: "alfabeta-test.appspot.com",
  messagingSenderId: "456286865984"
};

let instance = null;

class FirebaseService {
  constructor() {
    if (!instance) {
      this.app = firebase.initializeApp(config);
      instance = this;
    }
    return instance;
  }
}

const firebaseService = new FirebaseService().app;
export default firebaseService;

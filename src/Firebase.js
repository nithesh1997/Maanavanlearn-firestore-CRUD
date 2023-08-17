import * as firebase from 'firebase';
//import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyBIbgjx7Aid-diz7Xqwrv6_PZTB5uXrIpQ",
  authDomain: "e-com-be2c5.firebaseapp.com",
  databaseURL: "https://e-com-be2c5.firebaseio.com",
  projectId: "e-com-be2c5",
  storageBucket: "e-com-be2c5.appspot.com",
  messagingSenderId: "222462862957",
  appId: "1:222462862957:web:585f50e36c0e2e98c3c164"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;

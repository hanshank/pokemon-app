import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAm4PFwkW_M-O6CMibrcD5AhkE2TmHP03w",
  authDomain: "pokemon-api-244ec.firebaseapp.com",
  databaseURL: "https://pokemon-api-244ec.firebaseio.com/",
  projectId: "pokemon-api-244ec",
  storageBucket: "pokemon-api-244ec.appspot.com",
  messagingSenderId: "243701145302"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebase };
export default base;
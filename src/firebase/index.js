import firebase from 'firebase/app';
import 'firebase/auth';
import config from './config';

if (!firebase.apps.lenght){
    firebase.initializeApp(config)
}
export default firebase.auth();
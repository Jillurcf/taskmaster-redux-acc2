import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBYdXdFImQM53eoPq-ALN_LWFT3O1cYg2Q",
  authDomain: "taskmaster-redux-acc2.firebaseapp.com",
  projectId: "taskmaster-redux-acc2",
  storageBucket: "taskmaster-redux-acc2.appspot.com",
  messagingSenderId: "842053573199",
  appId: "1:842053573199:web:5ad4ad895cb2b6baa6e83a"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {

    apiKey: "AIzaSyDGNA6h986IHDyVRJWqXE-Wt7ZqTWV4BCo",
  
    authDomain: "tester-2a30e.firebaseapp.com",
  
    projectId: "tester-2a30e",
  
    storageBucket: "tester-2a30e.appspot.com",
  
    messagingSenderId: "673500430293",
  
    appId: "1:673500430293:web:287d1e559cf30b4bee475c",
    
    databaseURL: "https://tester-2a30e-default-rtdb.firebaseio.com/"
  
  };
  

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export default app




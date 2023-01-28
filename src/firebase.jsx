import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider,signInWithPopup} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCVNu7U46v9VlU4OFoy1pr-szAknZRf0Oo",
  authDomain: "fir-auth-8e6bb.firebaseapp.com",
  projectId: "fir-auth-8e6bb",
  storageBucket: "fir-auth-8e6bb.appspot.com",
  messagingSenderId: "346404456208",
  appId: "1:346404456208:web:c9f551223238bea4fd0795",
  measurementId: "G-PHSSFCP2FF"
};

const app = initializeApp(firebaseConfig)
export const auth =  getAuth(app)

const provider =new GoogleAuthProvider()
 
export const signInWithGoogle=()=>{
    signInWithPopup(auth,provider)
        .then((result)=>{
            const name = result.user.displayName;
            const email = result.user.email;
            const profilePic = result.user.photoURL ;        
            console.log(name,email,profilePic);
            localStorage.setItem("name",name);
            localStorage.setItem('email',email)
            localStorage.setItem("profilepic",profilePic)
        })
        .catch((error)=>{
            console.log(error)
        })
}
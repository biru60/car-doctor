import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import { FacebookAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "./FIREBASE/firebase.config";

         export const AuthContext=createContext()

const AuthProvider = ({children}) => {
    const [user,SetUser]=useState(null);
    const[loading,setLoading]=useState(true);
   const provider=new GoogleAuthProvider();
   const twitterProvider = new TwitterAuthProvider();
   const facebookProvider=new FacebookAuthProvider()
   const googleSignIn=()=>{
    setLoading(true)
    return signInWithPopup(auth,provider)
    
   }
   const twitterSignIn=()=>{
    setLoading(true)
    return signInWithPopup(auth,twitterProvider)
    
   }
   const facebookSignIn=()=>{
    setLoading(true)
    return signInWithPopup(auth,facebookProvider)
    
   }
   const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
   }
   const logIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
   }
   const logOut=()=>{
    return signOut(auth)
   }
   useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,currentUser=>{
        SetUser(currentUser);
        setLoading(false)
    })
    return ()=>{
        return unSubscribe();
    }
   },[])
    const authInfo={
        user,loading,googleSignIn,createUser,logIn,logOut,twitterSignIn,facebookSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes={
    children:PropTypes.node
}
export default AuthProvider;
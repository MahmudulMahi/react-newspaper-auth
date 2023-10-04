import { createContext, useEffect, useState } from "react";
// import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import app from "../farebase/farebase.config";

export const AuthContext=createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {

  const [user,setUser]=useState(null)

  const [loading,setLoading]=useState(true)

  const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOut=()=>{
    setLoading(true)
    return signOut(auth)
  }

  useEffect(()=>{
    const unSubscribe =onAuthStateChanged(auth, currentUser =>{
      console.log('user stat schange',currentUser)
      setUser(currentUser)
      setLoading(false)
    })
    return ()=>{
      unSubscribe();
    }
  },[])

  const authInfo={
    user,
    createUser,
    logOut,
    signIn,
    setLoading
    
  }
  return (
   <AuthContext.Provider value={authInfo}>
    {children}
   </AuthContext.Provider>
  );
};

export default AuthProvider;
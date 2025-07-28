import React, { createContext, useEffect, useState } from "react";
import app from "./firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const FirebaseAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  //creat user
  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign in user
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //google login

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //onAuthStateChanged
  useEffect(() => {
    const unSuscribe = onAuthStateChanged(auth, (crueentUser) => {
      setUser(crueentUser);
      console.log(crueentUser);
    });
    return () => {
      unSuscribe();
    };
  }, []);
  const userData = {
    user,
    setUser,
    creatUser,
    signInUser,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export default FirebaseAuthProvider;

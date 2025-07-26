import React, { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebase/firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);

const FirebaseAuthProvider = ({ children }) => {
  const creatUser = (email, passwoed) => {
    return createUserWithEmailAndPassword(auth, email, passwoed);
  };
  const userInfo = {
    creatUser,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default FirebaseAuthProvider;

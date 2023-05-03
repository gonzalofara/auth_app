import { createContext, useContext, useEffect, useState } from "react";

import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  //USER REGISTRATION
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //SIGN IN WITH EMAIL AND PASS
  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //SIGN IN WITH GOOGLE
  const googleSignin = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  //LOGOUT
  const logout = () => {
    return signOut(auth);
  };

  //RESET PASS
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (currenUser) => {
      setUser(currenUser);
      // console.log(user);
    });
    return () => {
      unsuscribe();
    };
  }, []);
  return (
    <UserContext.Provider
      value={{ createUser, signin, googleSignin, logout, resetPassword, user }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};

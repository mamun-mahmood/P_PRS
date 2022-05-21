import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "@firebase/auth";
import { createContext, React, useEffect, useContext, useState } from "react";
import { auth } from "./Firebase";

const AuthContext = createContext({
  currentUser: null,
    // signInWithGoogle: () => Promise,
  //   login: () => Promise,
  //   signup: () => Promise,
  //   logout: () => Promise,
  //   forgotPassword: () => Promise,
  //   resetPassword: () => Promise,
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  // const updateUserProfile = () => {
  //   return updateProfile(auth.currentUser, displayName);
  // };
  const logout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const value = {
    currentUser,
    signInWithGoogle,
    // updateUserProfile,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

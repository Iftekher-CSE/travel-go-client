import React, { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});

    // get logged in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    // user registration
    const userRegistration = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // google login
    const userGoogleLogin = () => {
        return signInWithPopup(auth, providerGoogle);
    };

    // user login
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // user log out
    const userLogOut = () => {
        return signOut(auth);
    };

    const authInfo = {
        userRegistration,
        userLogOut,
        userGoogleLogin,
        userLogin,
        user,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;

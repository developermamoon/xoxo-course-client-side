import React, { useState } from 'react';
import { createContext } from 'react';
import app from '../../../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');
    
//---------------------------------------------------------------
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    //register with email and password
    const registerWithEmailPass=(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    //signin with email password
    const loginwithEmailPass=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //signin with google
    const loginWithGoogle=(email,password)=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    //signin with github
    const loginWithGitHub = (email, password)=>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    //logout
    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }
//-------------------------------------

//-------------------------------------

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        console.log("Current user now: ", currentUser);
            setUser(currentUser);
            setLoading(false);
    });
    return ()=> unsubscribe();
},[])

//-------------------------------------
    const authInfo = { user, message, loading, setMessage, registerWithEmailPass, loginwithEmailPass, loginWithGoogle, loginWithGitHub, logOut };
    return (
        <div>
            <AuthContext.Provider value = {authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;
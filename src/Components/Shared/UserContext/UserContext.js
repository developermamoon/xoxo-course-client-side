import React, { useState } from 'react';
import { createContext } from 'react';
import app from '../../../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect } from 'react';

export const AuthContext = createContext();

const UserContext = ({children}) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    
//---------------------------------------------------------------
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();


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
        return signInWithPopup(auth, googleProvider);
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
    })
    return ()=> unsubscribe();
},[])

//-------------------------------------
    const authInfo = { user, registerWithEmailPass, loginwithEmailPass, loginWithGoogle ,logOut };
    return (
        <div>
            <AuthContext.Provider value = {authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;
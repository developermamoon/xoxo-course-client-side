import React, { useState } from 'react';
import { createContext } from 'react';
import app from '../../../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();

const UserContext = ({children}) => {

    const [user, setUser] = useState({});
    
//---------------------------------------------------------------
    const auth = getAuth(app);


    //register with email and password
    const registerWithEmailPass=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }


    //signin with email password
    const loginwithEmailPass=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
//---------------------------------------------------------------
    const authInfo = { user, registerWithEmailPass, loginwithEmailPass };
    return (
        <div>
            <AuthContext.Provider value = {authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;
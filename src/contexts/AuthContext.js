import React, { useState, useLayoutEffect, createContext, useContext } from 'react';
import { FirebaseContext } from '../components/Firebase'; 

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    let [isLoggedIn, setLoggedIn] = useState(false);
    let [isFirstLoad, setFirstLoad] = useState(false);
    const firebase = useContext(FirebaseContext);

    useLayoutEffect(() => {
        let listener = firebase.auth.onAuthStateChanged(authUser => {
            authUser
                ? setLoggedIn(true)
                : setLoggedIn(false);
        });
        return () => {
            listener();
        }
    }, []
    )

    return (
        <AuthContext.Provider value={{ isLoggedIn, isFirstLoad, setFirstLoad }}>
            {props.children}
        </AuthContext.Provider>
    )
}



export default AuthContextProvider;

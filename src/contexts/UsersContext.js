import React, {createContext, useState, useEffect, useReducer} from 'react';
import {filterReducer} from '../reducers/filterReducer';
import client from "../helpers/contentfulClient";

export const UsersContext = createContext();

const UsersContextProvider = (props) => {
    const [userEmail, dispatch] = useReducer(filterReducer, []);
    const [error, setError] = useState(false);
    async function getAllEmail () {
        try {
            let emailArr = [];
            const entries = await client.getEntries({ content_type: "users"});
            emailArr = entries.items;
            dispatch({ type: 'GET_EMAILS', userEmail: emailArr });
        }
        catch (err) {
            setError(true);
        }
    }
    useEffect(() => {
        getAllEmail();
    }, [])
    
    return (
        <UsersContext.Provider value={{userEmail, getAllEmail}}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContextProvider;
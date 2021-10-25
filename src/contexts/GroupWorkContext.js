import React, {createContext, useEffect, useReducer, useState} from 'react';
import { filterReducer } from "../reducers/filterReducer";
import client from "../helpers/contentfulClient";

export const GroupworkContext = createContext({})

const GroupworkContextProvider = (props) => {
    const [groupworks, dispatch] = useReducer(filterReducer, []);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    async function loadAllEntries () {
        try {
            let postsArr = [];
            const entries =  await client.getEntries({content_type: "groupworkPost"})
            postsArr = entries.items;
            dispatch({ type: 'GET_GROUPWORKS', groupworks: postsArr });
            loading ? setLoading(false) : setLoading(false);
        } catch(err) {
            setError(true);
        }

    }

    useEffect(() => {
        loadAllEntries();
    },[])

    return (
        <>
            <GroupworkContext.Provider value={{ groupworks, dispatch, loading, loadAllEntries }}>
                {props.children}
            </GroupworkContext.Provider>
        </>
    )
}
export default GroupworkContextProvider

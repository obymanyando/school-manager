import React, { createContext, useReducer, useState, useEffect } from 'react';
import {filterReducer} from "../reducers/filterReducer";
import client from "../helpers/contentfulClient";

export const MaterialsContext = createContext({});


const MaterialsContextProvider = (props) => {

    const [materials, dispatch] = useReducer(filterReducer, []);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    async function loadMaterials () {
        try {
            let postsArr = [];
            const entries =  await client.getEntries({content_type: "materials"})
            postsArr = entries.items;
            dispatch({ type: 'GET_MATERIALS', materials: postsArr });
            loading ? setLoading(false) : setLoading(false);
        } catch(err) {
            setError(true);
        }

    }

    useEffect(() => {
        loadMaterials();
    },[])


    return (

        <>
            <MaterialsContext.Provider value={{ materials, dispatch, loading, loadMaterials }}>
                {props.children}
            </MaterialsContext.Provider>
        </>
    )
};
export default MaterialsContextProvider;
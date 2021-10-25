import React, { useState, useEffect, createContext, useReducer } from 'react';
import client from '../helpers/contentfulClient';
import { filterReducer } from '../reducers/filterReducer';
export const WorkshopListContext = createContext();

const WorkshopContextProvider = (props) => {
    const [posts, dispatch] = useReducer(filterReducer, []);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [sortedWorkshop, setSorted] = useState([]);
    const [randomWorkshops, setRandom] = useState([]);
    //
    const getSortedEntries = () => {
        return client.getEntries({
            content_type: "workshopPost",
            order: '-fields.date',
            limit: 3
        })

    }

    const getAllEntries = () => {
        return client.getEntries({ content_type: "workshopPost" })

    }

    async function loadAllEntries () {
        try {
            let postsArr = [];
            const entries =  await client.getEntries({content_type: "workshopPost"})
            postsArr = entries.items;
            dispatch({ type: 'GET_ALL_WORKSHOPS', workshops: postsArr });
            loading ? setLoading(false) : setLoading(false);
        } catch(err) {
            setError(true);
        }

    }

    useEffect(() => {

        loadAllEntries();

        getSortedEntries()
            .then((data) => {
                setSorted(data.items);
            })
            .catch(err => setError(true))
        getAllEntries()
            .then((entry) => {
                let randomArr = [];
                for (let i = 0; i < 4; i++) {
                    let randomIndex = Math.floor(Math.random() * entry.items.length);
                    randomArr.push(entry.items[randomIndex])
                }
                setRandom(randomArr);
            })
            .catch(error => setError(true));
    }, [])

    return (

        <>
            <WorkshopListContext.Provider value={{ posts, dispatch, sortedWorkshop, randomWorkshops, loadAllEntries }}>
                {props.children}
            </WorkshopListContext.Provider>
        </>
    )
};
export default WorkshopContextProvider;

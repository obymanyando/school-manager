import React, {createContext, useState, useEffect, useReducer} from 'react';
import client from "../helpers/contentfulClient";
import {filterReducer} from '../reducers/filterReducer';
export const BlogContext = createContext();

const BlogContextProvider = (props) => {
    const [blogs, dispatch] = useReducer(filterReducer, []);
    const [loading, setLoading] = useState(true);
    const [sortedBlogs, setSorted] = useState([]);
    const [error, setError] = useState(false);

    const getSortedEntries = () => {
        return client.getEntries({
            content_type: "blogPost",
            order: '-fields.date',
            limit: 3

        })
    }

    async function getAllBlogs () {
        try {
            let postsArr = [];
            const entries = await client.getEntries({ content_type: "blogPost", order: '-fields.date' });
            postsArr = entries.items;
            dispatch({ type: 'GET_BLOGS', blogs: postsArr });
            loading ? setLoading(false) : setLoading(false);
        }
        catch (err) {
            setError(true);
        }

    }

    useEffect(() => {
        getAllBlogs()
        getSortedEntries()
            .then((response) => {
                setSorted(response.items);
                loading ? setLoading(false) : setLoading(true);
            })
            .catch(error => setError(true))
    }, [])

    return (
        <BlogContext.Provider value={{ blogs, dispatch, sortedBlogs, loading, getAllBlogs }}>
            {props.children}
        </BlogContext.Provider>
    )
};

export default BlogContextProvider;


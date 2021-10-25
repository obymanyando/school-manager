import React, { useContext, useEffect, useState } from 'react';
import { GroupworkContext } from '../../../contexts/GroupWorkContext'
import { useParams } from "react-router-dom";
import client from '../../../helpers/contentfulClient';
import GroupWorkTitle from "./GroupWorkTitle";
import GroupWorkContent from "./GroupWorkContent";
import Spinner from "../../shared-components/Spinner";
import Footer from '../../shared-components/Footer';
import BackToTop from '../../shared-components/BackToTop';

const GroupWorkDetails = () => {

    const { groupworks, dispatch } = useContext(GroupworkContext);
    const [loading, setLoading] = useState(false);
    let { id } = useParams();
    const selectedItem = groupworks.filter(item => item.sys.id === id)[0];
    useEffect(() => {
        setLoading(true);
        client.getEntries({ content_type: "groupworkPost" })
            .then((entries) => {
                let postsArr = [];
                postsArr = entries.items;
                dispatch({ type: 'GET_GROUPWORKS', groupworks: postsArr });
                setLoading(false);
            })
            .catch(err => console.log('Errors getting Comments doc from firebase ...', err))
    }, []);
    return (
        <>
            {
                loading ? <Spinner /> :
                    <>
                        <GroupWorkTitle item={selectedItem} />
                        <GroupWorkContent item={selectedItem} />
                        <Footer />
                        <BackToTop />
                    </>
            }

        </>
    );
};

export default GroupWorkDetails

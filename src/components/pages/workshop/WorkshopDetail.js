import React, { useContext, useState, useEffect } from 'react';
import { WorkshopListContext } from '../../../contexts/WorkshopContext';
import { useParams } from "react-router-dom";
import WorkshopTitle from './WorkshopTitle';
import WorkshopContent from './WorkshopContent';
import '../../../assets/styles/workshop-detail.css';
import Spinner from "../../shared-components/Spinner"
import client from "../../../helpers/contentfulClient";

const WorkshopDetail = () => {

  const { posts, dispatch } = useContext(WorkshopListContext);
  const [loading, setLoading] = useState(false);

  let { id } = useParams();
  useEffect(() => {
    setLoading(true);
    client.getEntries({ content_type: "workshopPost" })
      .then((entries) => {
        let postsArr = [];
        postsArr = entries.items;
        dispatch({ type: 'GET_ALL_WORKSHOPS', workshops: postsArr });
        setLoading(false);
      })
      .catch(err => console.log('Errors getting Comments doc from firebase ...', err))
  }, [dispatch]);

  const selectedItem = posts.filter(item => item.sys.id === id)[0];

  return (
    <>

      {
        loading ? <Spinner /> :
          <>
            <WorkshopTitle item={selectedItem} />
            <WorkshopContent item={selectedItem} />
          </>
      }
    </>
  );
}

export default WorkshopDetail;


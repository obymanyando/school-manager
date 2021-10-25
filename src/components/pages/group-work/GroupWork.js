import React, { useContext, useEffect, useState } from 'react';
import { GroupworkContext } from '../../../contexts/GroupWorkContext';
import GroupWorkItem from './GroupWorkItem';
import TopPageTitle from '../../shared-components/TopPageTitle';
import PageNumbers from '../../shared-components/PageNumbers';
import Spinner from "../../shared-components/Spinner"
import client from "../../../helpers/contentfulClient";
import Footer from '../../shared-components/Footer';
import BackToTop from '../../shared-components/BackToTop';


function GroupWork(props) {

  const title = 'Nhóm đọc',
    link = 'Trang chủ',
    linkActive = 'Nhóm đọc';

  const { groupworks, dispatch, loading, loadAllEntries } = useContext(GroupworkContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(8);
  // Fetch all posts
  useEffect(() => {
    loadAllEntries();
  }, []);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentPosts = groupworks.slice(indexOfFirst, indexOfLast);

  const content = currentPosts.map(item => <GroupWorkItem data={item} key={item.fields.id} />);

  return (
    <>
      {
        loading ? <Spinner /> :
          <>
            <TopPageTitle title={title} link={link} linkActive={linkActive} />
            <section className="courses_area pt-100 pb-130">
              <div className="container">
                <div className="row">{content}</div>
              </div>
              <PageNumbers paginate={paginate} totalPosts={groupworks.length} perPage={perPage} />
            </section>
            <Footer />
            <BackToTop />
          </>
      }
    </>
  );
}

export default GroupWork;

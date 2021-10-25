import React, { useContext, useEffect, useState } from 'react';
import { WorkshopListContext } from '../../../contexts/WorkshopContext';
import PageNumbers from "../../shared-components/PageNumbers";
import TopPageTitle from '../../shared-components/TopPageTitle';
import Spinner from "../../shared-components/Spinner"
import WorkshopList from "./WorkshopList";
import Footer from '../../shared-components/Footer';
import BackToTop from '../../shared-components/BackToTop';

function Workshop() {
    const title = 'Workshop';
    const link = 'Trang chủ';
    const linkActive = 'Workshop';

    const { posts, loading, loadAllEntries } = useContext(WorkshopListContext);
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
    const currentPosts = posts.slice(indexOfFirst, indexOfLast);

    return (

        <>
            {
                loading ? <Spinner /> :
                    <>
                        <TopPageTitle title={title} link={link} linkActive={linkActive} />
                        <section className="courses_area pt-100 pb-130">
                            <div className="container">
                                <WorkshopList posts={currentPosts} loading={loading} />
                            </div>
                            <PageNumbers paginate={paginate} totalPosts={posts.length} perPage={perPage} />
                        </section>
                        <Footer />
                        <BackToTop />
                    </>
            }
        </>

    );
}

export default Workshop;

import React, { useContext, useState, useEffect } from 'react';
import BlogItem from './BlogItem';
import SideBar from './SideBar';
import PageNumbers from '../../shared-components/PageNumbers';
import Spinner from "../../shared-components/Spinner";
import { BlogContext } from "../../../contexts/BlogContext";
import TopPageTitle from '../../shared-components/TopPageTitle';
import client from "../../../helpers/contentfulClient";
import Footer from '../../shared-components/Footer';
import BackToTop from '../../shared-components/BackToTop';

function BlogList(props) {
    const { blogs, dispatch, getAllBlogs, loading } = useContext(BlogContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(3);
    useEffect(() => {
        getAllBlogs();
    }, []);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    const indexOfLast = currentPage * perPage;
    const indexOfFirst = indexOfLast - perPage;
    const currentPosts = blogs.slice(indexOfFirst, indexOfLast);

    const getSummary = (str) => {
        return str.split(' ').slice(0, 30).join(' ') + '...(Đọc tiếp)';
    };
    const content = currentPosts.map(item => <BlogItem data={item} key={item.sys.id} summary={getSummary(item.fields.description)} />);
    return (
        <>
            <TopPageTitle
                title='Blog' z
                link='Home'
                linkActive='Blog'
            />
            <section className="blog_list_page pt-20 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            {loading ? <Spinner /> : content}
                            <PageNumbers paginate={paginate} totalPosts={blogs.length} perPage={perPage} />
                        </div>
                        <SideBar blogs={blogs} />
                    </div>
                </div>
            </section>
            <Footer />
            <BackToTop />
        </>
    )
}

export default BlogList;


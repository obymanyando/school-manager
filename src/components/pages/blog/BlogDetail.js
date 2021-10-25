import React, { useContext } from 'react';
import { BlogContext } from '../../../contexts/BlogContext';
import { useParams } from 'react-router-dom';
import BlogItem from './BlogItem';
import BlogContent from './BlogContent';
import BlogShare from './BlogShare';
import Comments from '../../shared-components/Comments';
import TopPageTitle from '../../shared-components/TopPageTitle';
import Spinner from '../../shared-components/Spinner';
import LatestBlogs from './LatestBlogs';
import Footer from '../../shared-components/Footer';
import BackToTop from '../../shared-components/BackToTop';

function BlogDetail() {
  const { blogs, loading } = useContext(BlogContext);
  const { id } = useParams();

  const selectedBlog = blogs.filter((blog) => blog.sys.id === id)[0];
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <TopPageTitle title="Blog" link="Home" linkActive="Blog" />
          <section className="blog_details_page pt-80 pb-130">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <BlogItem data={selectedBlog} key="bl1" />
                  <BlogContent data={selectedBlog} />
                  <BlogShare />
                  <Comments blogId={id} />
                </div>
                <div className="col-lg-4">
                  <div className="sidebar mt-50">
                    <LatestBlogs />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
          <BackToTop />
        </>
      )}
    </>
  );
}

export default BlogDetail;

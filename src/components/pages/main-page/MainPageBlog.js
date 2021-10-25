import React, { useContext } from "react";
import '../../../assets/styles/main-page-blog.css';
import MainPageBlogItem from "./MainPageBlogItem";
import { BlogContext } from '../../../contexts/BlogContext';
import formatDate from '../../../helpers/formatDate';


const MainPageBlog = () => {
    const { sortedBlogs } = useContext(BlogContext);

    return (
        <section className="blog_area pt-120 pb-130">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section_title text-center pb-20">
                            <h3 className="main_title">Tin tức mới nhất</h3>
                            <p>Góc chia sẻ thông tin, hình ảnh mới nhất về các nhóm học của Happy Readers. Những chia sẻ
                            chân thành và cảm nhận của phụ huynh trước sự tiến bộ của con cái khi tham gia Happy
                                Readers.</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {sortedBlogs.map((item) => {
                        return <MainPageBlogItem key={item.fields.id} image={item.fields.backgroundImage.fields.file.url}
                            dateNum={formatDate(item.fields.date)[1]}
                            dateMonth={formatDate(item.fields.date)[2]}
                            meta={item.fields.author}
                            fullDate={formatDate(item.fields.date)[0]}
                            title={item.fields.title}
                            item={item} />
                    })}

                </div>
            </div>
        </section>
    )
}
export default MainPageBlog;

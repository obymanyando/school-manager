import React from 'react';
import '../../../assets/styles/blogContent.css';

function BlogContent({ data }) {
  return (
    <div className="blog_details mt-30">
      <pre className="blog_pre">
        <code>{data.fields.description}</code>
      </pre>
    </div>
  );
}

export default BlogContent;

import React from 'react';
import Card from '../containers/Card';

const BlogListing = ({ blogList }) => {
    const getBlogListing = () => {

        blogList.map(blog => {
            return BlogOnPage.push(
                <Card
                    title = {blog.title}
                    author_name = {blog.author_name}
                  
                />
            );
        });

    
    };

    return (
        <div>
            {getBlogListing()}
        </div>
    );
}

export default BlogListing;
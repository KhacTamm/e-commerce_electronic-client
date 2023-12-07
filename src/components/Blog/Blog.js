import './Blog.css'
import React from 'react'
import BlogItem from './BlogItem'
function Blog() {
    return (
        <div className="blog">
            <div className="blog_title">Tin công nghệ</div>
            <BlogItem></BlogItem>
        </div>
    )
}

export default Blog

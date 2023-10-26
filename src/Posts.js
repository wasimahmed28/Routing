import React from 'react';
import { posts } from './PostData';
import { Link } from 'react-router-dom';
//import { Link, useParams } from 'react-router-dom';

const Posts = () => {

    //const { id } = useParams();
  return (
    <>
        <h1>Posts</h1>
        <div className='posts-section'>
        {posts.map((post) => (
          <div key={post.postId} className='card'>
            <Link to={`/post/${post.postId}`}><h2>{post.title}</h2></Link>
          </div>
        ))}
      
        </div>
    </>
  )
}

export default Posts
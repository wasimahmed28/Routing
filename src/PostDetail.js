import React from 'react'
import { useParams } from 'react-router-dom';
import { posts } from './PostData';
import NotFound from './NotFound';

const PostDetail = () => {

    const { postId } = useParams();
    const post = posts.find((p) => p.postId === parseInt(postId, 10))

    if (!post) {
        return <NotFound />
    }
  return (
    <div className='card'>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
    </div>
  )
}

export default PostDetail
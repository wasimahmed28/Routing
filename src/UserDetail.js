import React from 'react'
import { useParams } from 'react-router-dom';
import { users, posts } from './PostData';
import NotFound from './NotFound';

const UserDetail = () => {

  const { userId } = useParams();
  const user = users.find((u) => u.id === parseInt(userId, 10));
  const userPosts = posts.filter((post) => post.userId === parseInt(userId, 10));

  if(!user){
    return <NotFound />

  }

  return (
    <div className='card'>
        <h1>User Detail</h1>
        <p>ID: {user.id}</p>
        <p>Name: {user.name}</p>

        <h2> Post by {user.name}</h2>
        {userPosts.length > 0 ? (
        <ul>
          {userPosts.map((post) => (
            <li key={post.postId}>
              <a href={`/post/${post.postId}`}>{post.title}</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts found</p>
      )}
    </div>
  )
}

export default UserDetail
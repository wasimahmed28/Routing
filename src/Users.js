import React from 'react'
import { users } from './PostData'
import { Link } from 'react-router-dom'

const Users = () => {
  return (
    <>
      <h1>Users List</h1>
      <div className='posts-section'>
        {
          users.map((user) => {
            return(
              <div key={user.id} className='card'>
                <Link to={`/user/${user.id}`}><h2>{user.name}</h2></Link>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Users
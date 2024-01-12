import React from 'react'
import { Link } from 'react-router-dom'

function UserContainer({user}) {
    // console.log("UserContainer", user)
  return (
    <div className='flex gap-5 flex-wrap justify-center py-5'>
      {
        user.length==0 ?<h1 >User not found</h1>:
        user && user.map((user, index)=>(
            user?.login && (<div key={index} className='flex w-[200px] border border-gray-500 bg-gray-900 p-3 flex-col items-center'>
                <img src={user?.avatar_url}  className='w-24 mb-4 border-4 border-teal-400 rounded-full'/>
                <h1 className='text-xl'>{user?.login}</h1>
                <h1 className='text-xs text-teal-400'>{user?.name}</h1>
                <Link to={`/${user?.login}`}>
                <span className='text-gray-200 bg-teal-600 my-3 block py-1 px-4 tracking-wide rounded'>View</span>
                </Link>
            </div>)
        ))

      }
    </div>
  )
}

export default UserContainer

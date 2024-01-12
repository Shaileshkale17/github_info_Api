import React from 'react'

function Table({type, settype}) {
  return (
    <>
     <div className="flex border-b pb-4 gap-6 mt-[10%] mb-6 justify-center md:text-xl">
          <button  className={`${type === 'repos' && "text-teal-400"}`} onClick={() => settype("repos")}>Repositories</button>
          <button className={`${type === 'received_events' && "text-teal-400"}`} onClick={() => settype("received_events")}>Activity</button>
          <button className={`${type === 'followers' && "text-teal-400"}`} onClick={() => settype("followers")}>followers</button>
        </div> 
    </>
  )
}

export default Table

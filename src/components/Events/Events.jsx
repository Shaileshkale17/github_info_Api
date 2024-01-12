import React from 'react'

function Events({events}) {
  // console.log(events.repo.avatar_url)
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  return (
    <>
     {
      events?.map((en, id) => (
        <div key={id} className="flex gap-x-4 items-center">
          <img src={en.actor?.avatar_url} className="w-16 rounded-full" alt={`${en.actor?.login}'s avatar`} />
          <div>
            <h1 className="break-words">
              {en?.actor?.login} {en?.type}
            </h1>
            <p>{en?.repo?.name}</p>
            <span className="text-sm">{formatDate(en.created_at)}</span>
          </div>
        </div>
      ))
      
      
     } 

     
    </>
  )
}

export default Events

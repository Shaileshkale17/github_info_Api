import React from 'react'
import { MagnifyingGlass } from 'react-loader-spinner'

function Loading() {
  return (
    <div className='h-96 flex justify-center  items-center'>
     <MagnifyingGlass
  visible={true}
  height="80"
  width="80"
  ariaLabel="magnifying-glass-loading"
  wrapperStyle={{}}
  wrapperClass="magnifying-glass-wrapper"
  glassColor="#c0efff"
  color="#e15b64"
  />
    </div>
  )
}

export default Loading

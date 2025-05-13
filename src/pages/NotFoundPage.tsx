import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className='flex flex-col items-center h-dvh justify-center'>
      <h1 className='scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-9xl'>404</h1>
      <h2 className='scroll-m-20 text-2xl font-semibold tracking-tight lg:text-5xl mb-2'>Page not Found</h2>
      <Link to={"/"}>
        <button className='cursor-pointer'>Go back Home</button>
      </Link>
    </div>
  )
}

export default NotFoundPage
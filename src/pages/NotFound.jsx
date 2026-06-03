import React from 'react'
import { useSelector } from 'react-redux'

const NotFound = () => {
  const siteData = useSelector(state => state.siteData.value)

  return (
    <>
      <div className="dark:bg-zinc-900 bg-neutral-100 w-full lg:px-24 px-8 min-h-screen flex flex-col justify-center items-center">
        <img className='notfound-image' src="/images/404.png" alt="" />
        <span className="notfound-text">
          {siteData?.ui?.notFound?.message || "The page you are looking for was not found."}
        </span>
      </div>
    </>
  )
}

export default NotFound

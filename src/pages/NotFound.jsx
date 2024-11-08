import React from 'react'

const NotFound = () => {
  return (
    <>
      <div className="dark:bg-zinc-900 bg-neutral-100 w-full lg:px-24 px-8 min-h-screen flex flex-col justify-center items-center">
        <img className='notfound-image' src="/images/404.png" alt="" />
        <span className="notfound-text">
          Aradığınız sayfa bulunamadı.
        </span>
      </div>
    </>
  )
}

export default NotFound
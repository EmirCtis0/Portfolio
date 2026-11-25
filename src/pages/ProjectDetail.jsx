import React from 'react'

import { Link, useParams } from 'react-router-dom'

import { useSelector } from 'react-redux'
import NotFound from './NotFound'

// Swiperjs
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const ProjectDetail = () => {

  const { id } = useParams()

  const siteData = useSelector(state => state.siteData.value)
  const siteDataIsLoading = useSelector(state => state.siteData.isLoading)
  const project = siteData?.projeler?.find((entry, index) => (entry.id ?? String(index)) === id)

  if (siteDataIsLoading) {
    return (
      <div className="dark:bg-zinc-900 bg-neutral-100 w-full lg:px-24 py-28 px-4 min-h-screen flex justify-center items-center">
        <div className="text-zinc-500 dark:text-zinc-400">{siteData?.ui?.common?.loading || "Loading..."}</div>
      </div>
    )
  }

  if (project === undefined) {
    return <NotFound />
  }

  return (
    <>
      <div className="dark:bg-zinc-900 bg-neutral-100 w-full lg:px-24 py-28 px-4 min-h-screen flex flex-col gap-5 justify-center items-center">
        <div className="flex flex-col justify-center items-center animate-fadeInTop">
          <h1 className="text-zinc-900 dark:text-white text-center text-xl font-bold">
            {project.projeAd}
          </h1>
          <span className="text-white text-center text-sm font-bold">
            {
              project.projeSite !== "-" && <Link target='_blank' rel='noopener noreferrer' className='text-blue-600 dark:text-blue-400' to={project.projeSite}>{project.projeSite.replaceAll("https://", "")}</Link>
            }
          </span>
        </div>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          className='w-full max-w-sm md:max-w-lg animate-fadeInTop'
        >
          {
            project.projeResimler?.map(function (image) {
              const { src, alt = "" } = typeof image === 'string' ? { src: image } : image
              return (
                <SwiperSlide key={src} className='flex justify-center items-center py-6'>
                  <img src={src} alt={alt} className='rounded mx-auto max-h-[70vh] w-auto object-contain' />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
        <p className='max-w-3xl text-zinc-900 dark:text-white text-center text-xl font-bold'>
          {project.projeExp}
        </p>
        {project.projeBaglantilar && (
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-semibold">
            {project.projeBaglantilar.map(({ label, url }) => (
              <li key={url}>
                <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">{label}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default ProjectDetail

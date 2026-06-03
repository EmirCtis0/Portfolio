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
  const project = siteData?.projeler?.[id]

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
          <span className="text-white text-center text-xl font-bold">
            {project.projeAd}
          </span>
          <span className="text-white text-center text-sm font-bold">
            {
              project.projeSite !== "-" && <Link target='_blank' className='text-blue-500' to={project.projeSite}>{project.projeSite.replaceAll("https://", "")}</Link>
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
            project.projeResimler?.map(function (image, index) {
              return (
                <SwiperSlide key={index} className='flex justify-center items-center py-6'>
                  <img src={image} alt="" className='rounded mx-auto max-h-[70vh] w-auto object-contain' />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
        <div className='text-white text-center text-xl font-bold'>
          {project.projeExp}
        </div>
      </div>
    </>
  )
}

export default ProjectDetail

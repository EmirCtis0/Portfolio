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

  return (
    <>
      {
        siteData?.projeler[id] === undefined ?
          <NotFound />
          :
          <>
            <div className="dark:bg-zinc-900 bg-neutral-100 w-full lg:px-24 py-28 px-4 min-h-screen flex flex-col gap-5 justify-center items-center">
              {
                siteDataIsLoading ?
                  <>Yükleniyor...</>
                  :
                  <>
                    <div className="flex flex-col justify-center items-center animate-fadeInTop">
                      <span className="text-white text-center text-xl font-bold">
                        {siteData?.projeler[id]?.projeAd}
                      </span>
                      <span className="text-white text-center text-sm font-bold">
                        {
                          siteData?.projeler[id]?.projeSite !== "-" && <Link target='_blank' className='text-blue-500' to={siteData?.projeler[id].projeSite}>{siteData?.projeler[id].projeSite.replaceAll("https://", "")}</Link>
                        }
                      </span>
                    </div>
                    <Swiper
                      spaceBetween={10}
                      slidesPerView={1}
                      navigation
                      modules={[Pagination, Navigation]}
                      pagination={{ clickable: true }}
                      className='w-[90vw] animate-fadeInTop'
                    >
                      {
                        siteData?.projeler[id]?.projeResimler?.map(function (image, index) {
                          return (
                            <SwiperSlide key={index}>
                              <img src={image} alt="" className='rounded' />
                            </SwiperSlide>
                          )
                        })
                      }
                    </Swiper>
                  </>
              }
            </div>
          </>
      }
    </>
  )
}

export default ProjectDetail
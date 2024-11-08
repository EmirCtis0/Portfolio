import React from 'react'

import ProjectCard from '../components/ProjectCard';

import { useSelector } from 'react-redux'

const Projects = () => {

  const siteData = useSelector(state => state.siteData.value)
  const siteDataIsLoading = useSelector(state => state.siteData.isLoading)

  return (
    <>
      <div className="dark:bg-zinc-900 bg-neutral-100 w-full lg:px-24 py-28 px-4 min-h-screen flex justify-center items-center">
        {
          siteDataIsLoading ?
            <>Yükleniyor...</>
            :
            <div className="w-full h-full grid grid-cols-1 lg:grid-cols-4 lg:gap-5 gap-2">
              {
                siteData?.projeler ?
                  siteData?.projeler.map(function (data, index) {
                    return (<ProjectCard key={index} id={index} projectName={data.projeAd} projectImages={data.projeResimler} />)
                  })
                  :
                  <p className='text-center dark:text-white text-black'>Proje bulunamadı.</p>
              }
            </div>
        }
      </div>
    </>
  )
}

export default Projects
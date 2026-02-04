import React from 'react'
import ProjectCard from '../components/ProjectCard';
import { useSelector } from 'react-redux'

const Projects = () => {

  const siteData = useSelector(state => state.siteData.value)
  const siteDataIsLoading = useSelector(state => state.siteData.isLoading)

  return (
    <div className="dark:bg-zinc-900 bg-neutral-100 w-full lg:px-16 py-28 px-8 min-h-screen">
      <div className="max-w-8xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16 animate-fadeInTop">
          <h1 className="text-4xl lg:text-5xl font-bold text-zinc-800 dark:text-white mb-4">
            My <span className="text-indigo-600">Projects</span>
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">
            A collection of my work and side projects
          </p>
        </div>

        {siteDataIsLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-zinc-500 dark:text-zinc-400">Loading...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteData?.projeler ? (
              siteData.projeler.map((data, index) => (
                <ProjectCard
                  key={index}
                  id={index}
                  index={index}
                  projectName={data.projeAd}
                  projectImages={data.projeResimler}
                />
              ))
            ) : (
              <p className='text-center dark:text-white text-black col-span-full'>No projects found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects
import React from 'react'
import ProjectCard from '../components/ProjectCard';
import { useSelector } from 'react-redux'

const Projects = () => {

  const siteData = useSelector(state => state.siteData.value)
  const siteDataIsLoading = useSelector(state => state.siteData.isLoading)
  const page = siteData?.ui?.projects
  const projects = (siteData?.projeler ?? [])
    .map((project, index) => ({ project, id: project.id ?? index }))
    .sort((a, b) => Number(Boolean(b.project.featured)) - Number(Boolean(a.project.featured)))

  return (
    <div className="dark:bg-zinc-900 bg-neutral-100 w-full lg:px-16 py-28 px-8 min-h-screen">
      <div className="max-w-8xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16 animate-fadeInTop">
          <h1 className="text-4xl lg:text-5xl font-bold text-zinc-800 dark:text-white mb-4">
            {page?.titlePrefix || "My"} <span className="text-indigo-600">{page?.titleHighlight || "Projects"}</span>
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">
            {page?.description || "A collection of my work and side projects"}
          </p>
        </div>

        {siteDataIsLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-zinc-500 dark:text-zinc-400">{siteData?.ui?.common?.loading || "Loading..."}</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projects.length ? projects.map(({ project, id }, index) => (
              <ProjectCard
                key={id}
                id={id}
                index={index}
                projectName={project.projeAd}
                projectImages={project.projeResimler?.map(image => typeof image === 'string' ? image : image.src)}
                projectCover={project.projeKapak}
              />
            )) : (
              <p className="col-span-full text-center text-black dark:text-white">{page?.empty || "No projects found."}</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects

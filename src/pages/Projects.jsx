import React from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard';
import { useSelector } from 'react-redux'

const Projects = () => {

  const siteData = useSelector(state => state.siteData.value)
  const siteDataIsLoading = useSelector(state => state.siteData.isLoading)
  const page = siteData?.ui?.projects
  const projects = siteData?.projeler ?? []
  const featured = projects.find(project => project.featured)

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
          <>
            {featured && (
              <Link
                to={`/projeler/${featured.id}`}
                className="group mb-8 grid overflow-hidden rounded-2xl border border-indigo-200 bg-white shadow-lg transition-colors hover:border-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500 dark:border-indigo-500/30 dark:bg-zinc-800 lg:grid-cols-[1fr_1.15fr]"
              >
                <div className="flex flex-col items-start justify-center p-6 sm:p-10">
                  <h2 className="text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">{featured.projeAd}</h2>
                  <p className="mt-4 max-w-sm text-base leading-relaxed text-zinc-600 dark:text-zinc-300">{featured.summary}</p>
                  <span className="mt-6 font-semibold text-indigo-700 group-hover:underline dark:text-indigo-300">{featured.detailLabel} <span aria-hidden="true">↗</span></span>
                </div>
                <div aria-hidden="true" className="flex items-center justify-center gap-3 overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-zinc-900 px-4 py-7 sm:gap-5 sm:px-8">
                  {featured.apps.map(app => (
                    <img key={app.name} src={app.image} alt="" className="h-auto w-[29%] max-w-40 rounded-lg border border-white/15 shadow-xl first:translate-y-2 first:-rotate-6 last:translate-y-2 last:rotate-6" />
                  ))}
                </div>
              </Link>
            )}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {projects.length ? projects.map((project, index) => project !== featured && (
                <ProjectCard
                  key={project.id ?? index}
                  id={project.id ?? index}
                  index={index}
                  projectName={project.projeAd}
                  projectImages={project.projeResimler}
                  projectCover={project.projeKapak}
                />
              )) : (
                <p className="col-span-full text-center text-black dark:text-white">{page?.empty || "No projects found."}</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Projects

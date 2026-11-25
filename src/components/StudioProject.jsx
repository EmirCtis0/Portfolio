import React from 'react'

const StudioProject = ({ project }) => (
  <main className="min-h-screen bg-neutral-100 px-6 py-28 text-zinc-900 dark:bg-zinc-900 dark:text-white sm:px-10">
    <div className="mx-auto max-w-5xl">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold sm:text-5xl">{project.projeAd}</h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-200">{project.summary}</p>
        <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">{project.projeExp}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map(technology => (
            <li key={technology} className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200">{technology}</li>
          ))}
        </ul>
        <a href={project.projeSite} className="mt-6 inline-flex items-center gap-2 rounded-lg bg-indigo-700 px-4 py-2.5 font-semibold text-white hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500">
          {project.siteLabel} <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="mt-12" aria-labelledby="studio-apps">
        <h2 id="studio-apps" className="text-2xl font-bold">{project.appsLabel}</h2>
        <ul className="mt-5 grid gap-5 sm:grid-cols-3">
          {project.apps.map(app => (
            <li key={app.name}>
              <a href={app.url} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-colors hover:border-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500 dark:border-zinc-700 dark:bg-zinc-800">
                <div className="bg-zinc-100 px-5 py-5 dark:bg-zinc-950">
                  <img src={app.image} alt={app.alt} className="mx-auto aspect-[9/19] w-full max-w-44 rounded-lg object-contain" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold">{app.name}</h3>
                  <p className="mt-1 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{app.description}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-indigo-700 group-hover:underline dark:text-indigo-300">{project.storeLabel} <span aria-hidden="true">↗</span></span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  </main>
)

export default StudioProject

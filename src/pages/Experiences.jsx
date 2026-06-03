import React from 'react'
import { useSelector } from 'react-redux'
import ExperienceCard from '../components/ExperienceCard'

const Experiences = () => {
    const siteData = useSelector(state => state.siteData.value)
    const siteDataIsLoading = useSelector(state => state.siteData.isLoading)
    const page = siteData?.ui?.experiences
    const experiences = siteData?.deneyimler || []

    return (
        <div className="dark:bg-zinc-900 bg-neutral-100 w-full lg:px-24 py-28 px-8 min-h-screen">
            <div className="max-w-4xl mx-auto">
                {/* Page Header */}
                <div className="text-center mb-16 animate-fadeInTop">
                    <h1 className="text-4xl lg:text-5xl font-bold text-zinc-800 dark:text-white mb-4">
                        {page?.titlePrefix || "Work"} <span className="text-indigo-600">{page?.titleHighlight || "Experience"}</span>
                    </h1>
                    <p className="text-zinc-500 dark:text-zinc-400 text-lg">
                        {page?.description || "My professional journey and the skills I have developed along the way"}
                    </p>
                </div>

                {/* Timeline */}
                {siteDataIsLoading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="text-zinc-500 dark:text-zinc-400">{siteData?.ui?.common?.loading || "Loading..."}</div>
                    </div>
                ) : (
                    <div className="relative">
                        {experiences.map((exp, index) => (
                            <ExperienceCard
                                key={index}
                                index={index}
                                title={exp.title}
                                company={exp.company}
                                location={exp.location}
                                period={exp.period}
                                responsibilities={exp.responsibilities}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Experiences

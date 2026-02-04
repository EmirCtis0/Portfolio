import React from 'react'
import { Icon } from '@iconify/react';
import SkillBox from '../components/SkillBox'
import { useSelector } from 'react-redux'

const Skills = () => {
    const siteData = useSelector(state => state.siteData.value)
    const siteDataIsLoading = useSelector(state => state.siteData.isLoading)

    return (
        <div className="dark:bg-zinc-900 bg-neutral-100 w-full lg:px-24 py-28 px-8 min-h-screen">
            <div className="max-w-6xl mx-auto">
                {/* Page Header */}
                <div className="text-center mb-16 animate-fadeInTop">
                    <h1 className="text-4xl lg:text-5xl font-bold text-zinc-800 dark:text-white mb-4">
                        Skills & <span className="text-indigo-600">Technologies</span>
                    </h1>
                    <p className="text-zinc-500 dark:text-zinc-400 text-lg">
                        Tools and technologies I work with
                    </p>
                </div>

                {siteDataIsLoading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="text-zinc-500 dark:text-zinc-400">Loading...</div>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {siteData?.yetenekler ? (
                            siteData.yetenekler.map((skill, index) => (
                                <SkillBox
                                    key={skill.isim}
                                    name={skill.isim}
                                    icon={<Icon icon={skill.icon} />}
                                    index={index}
                                />
                            ))
                        ) : (
                            <p className='text-center dark:text-white text-black col-span-full'>No skills found.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Skills
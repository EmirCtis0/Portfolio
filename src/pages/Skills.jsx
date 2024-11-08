import React from 'react'

import { Icon } from '@iconify/react';

import SkillBox from '../components/SkillBox'

import { useSelector } from 'react-redux'

const Skills = () => {
    const siteData = useSelector(state => state.siteData.value)
    const siteDataIsLoading = useSelector(state => state.siteData.isLoading)

    return (
        <>
            <div className="dark:bg-zinc-900 bg-neutral-100 w-full lg:px-24 py-28 px-8 min-h-screen flex justify-center items-center">
                {
                    siteDataIsLoading ?
                        <>Yükleniyor...</>
                        :
                        <div className="lg:w-3/4 w-full grid grid-cols-3 lg:grid-cols-6 gap-5">
                            {
                                siteData?.yetenekler ?
                                    siteData?.yetenekler.map(function (data, index) {
                                        return (<SkillBox key={index} name={data.isim} icon={<Icon icon={data.icon} />} />)
                                    })
                                    :
                                    <p className='text-center dark:text-white text-black'>Yetenek bulunamadı.</p>
                            }
                        </div>
                }
            </div>
        </>
    )
}

export default Skills
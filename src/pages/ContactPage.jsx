import React from 'react'

import { Icon } from '@iconify/react';

import ContactBox from '../components/ContactBox';

import { useSelector } from 'react-redux'

const ContactPage = () => {
    const siteData = useSelector(state => state.siteData.value)
    const siteDataIsLoading = useSelector(state => state.siteData.isLoading)

    return (
        <>
            <div className="dark:bg-zinc-900 bg-neutral-100 w-full lg:px-24 px-8 min-h-screen flex flex-col lg:flex-row justify-center items-center gap-3">
                {
                    siteDataIsLoading ?
                        <>Yükleniyor...</>
                        :
                        <>
                            <ContactBox url={siteData?.iletisim[0].URL} platformName={siteData?.iletisim[0].name} name={siteData?.iletisim[0].username} icon={<Icon icon="mdi:github" />} />
                            <ContactBox url={siteData?.iletisim[1].URL} platformName={siteData?.iletisim[1].name} name={siteData?.iletisim[1].username} icon={<Icon icon="mdi:linkedin" />} />
                            <ContactBox url={siteData?.iletisim[2].URL} platformName={siteData?.iletisim[2].name} name={siteData?.iletisim[2].username} icon={<Icon icon="ion:mail" />} />
                        </>
                }
            </div>
        </>
    )
}

export default ContactPage
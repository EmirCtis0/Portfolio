import React from 'react'
import { Icon } from '@iconify/react';
import ContactBox from '../components/ContactBox';
import { useSelector } from 'react-redux'

const ContactPage = () => {
    const siteData = useSelector(state => state.siteData.value)
    const siteDataIsLoading = useSelector(state => state.siteData.isLoading)

    const contactIcons = {
        "Github": "mdi:github",
        "Linkedin": "mdi:linkedin",
        "Mail": "ion:mail"
    }

    return (
        <div className="dark:bg-zinc-900 bg-neutral-100 w-full lg:px-24 py-28 px-8 min-h-screen">
            <div className="max-w-4xl mx-auto">
                {/* Page Header */}
                <div className="text-center mb-16 animate-fadeInTop">
                    <h1 className="text-4xl lg:text-5xl font-bold text-zinc-800 dark:text-white mb-4">
                        Get in <span className="text-indigo-600">Touch</span>
                    </h1>
                    <p className="text-zinc-500 dark:text-zinc-400 text-lg">
                        Feel free to reach out through any of these platforms
                    </p>
                </div>

                {siteDataIsLoading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="text-zinc-500 dark:text-zinc-400">Loading...</div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
                        {siteData?.iletisim?.map((contact, index) => (
                            <ContactBox
                                key={index}
                                index={index}
                                url={contact.URL}
                                platformName={contact.name}
                                name={contact.username}
                                icon={<Icon icon={contactIcons[contact.name] || "mdi:link"} />}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ContactPage
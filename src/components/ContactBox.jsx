import React from 'react'
import { Link } from 'react-router-dom'

const ContactBox = ({ url, platformName, name, icon, index }) => {
    return (
        <Link
            className='w-full max-w-sm contact-card'
            to={url}
            target='_blank'
            style={{ animationDelay: `${(index || 0) * 0.1}s` }}
        >
            <div className="group relative bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-gray-200/50 dark:border-zinc-700/50 hover:shadow-xl hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative flex items-center gap-4">
                    {/* Icon */}
                    <div className='text-5xl text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300'>
                        {icon}
                    </div>

                    {/* Text content */}
                    <div className='flex flex-col justify-center items-start'>
                        <span className='text-lg text-zinc-800 dark:text-white font-bold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300'>
                            {platformName}
                        </span>
                        <span className='text-sm text-zinc-500 dark:text-zinc-400'>
                            {name}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ContactBox
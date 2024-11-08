import React from 'react'

import { Link } from 'react-router-dom'

const ContactBox = (props) => {
    return (
        <>
            <Link className='w-[20rem] animate-fadeInTop' to={props.url} target='_blank'>
                <div className="contactbox dark:bg-neutral-800 bg-neutral-200 rounded-2xl p-2 px-5 gap-2 w-full">
                    <div className='text-6xl text-zinc-800 dark:text-white'>
                        {props.icon}
                    </div>
                    <div className='flex flex-col justify-center items-start'>
                        <div className='text-lg text-zinc-800 dark:text-white font-bold'>
                            {props.platformName}
                        </div>
                        <div className='text-sm text-zinc-800 dark:text-white'>
                            {props.name}
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ContactBox
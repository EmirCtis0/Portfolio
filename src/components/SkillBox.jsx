import React from 'react'

const SkillBox = (props) => {
    return (
        <>
            <div className="skillbox dark:bg-neutral-800 bg-neutral-200 rounded-2xl p-8 px-5 animate-fadeInTop">
                <div className='text-6xl'>
                    {props.icon}
                </div>
                <div className='text-sm lg:text-base text-zinc-500 font-bold'>
                    {props.name}
                </div>
            </div>
        </>
    )
}

export default SkillBox
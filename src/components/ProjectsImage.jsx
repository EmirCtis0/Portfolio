import React, { useState } from 'react'

const ProjectsImage = ({ src }) => {

    const [loading, setLoading] = useState(true)

    return (
        <div className='flex justify-center items-center w-full h-full'>
            <img src={src} className={`w-full min-h-[8rem] h-[10vw] rounded ${loading ? "hidden" : "block"}`} onLoad={() => { setLoading(false) }}></img>
            <div className={`w-full min-h-[8rem] h-[10vw] bg-slate-700 animate-loading rounded ${loading ? "block" : "hidden"}`}></div>
        </div>
    )
}

export default ProjectsImage
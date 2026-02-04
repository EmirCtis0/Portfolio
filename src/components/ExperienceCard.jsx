import React from 'react'

const ExperienceCard = ({ title, company, location, period, responsibilities, index }) => {
    return (
        <div 
            className="experience-card relative pl-8 pb-12 last:pb-0"
            style={{ animationDelay: `${index * 0.15}s` }}
        >
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-600 via-purple-500 to-transparent"></div>
            
            {/* Timeline dot */}
            <div className="absolute left-0 top-1 w-2 h-2 -translate-x-1/2 rounded-full bg-indigo-600 ring-4 ring-indigo-600/20 dark:ring-indigo-600/30"></div>
            
            {/* Card content */}
            <div className="group relative bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-zinc-700/50 hover:shadow-xl hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                    {/* Period badge */}
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-3">
                        {period}
                    </span>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-zinc-800 dark:text-white mb-1">
                        {title}
                    </h3>
                    
                    {/* Company & Location */}
                    <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-4">
                        {company} <span className="text-zinc-500 dark:text-zinc-400 font-normal">• {location}</span>
                    </p>
                    
                    {/* Responsibilities */}
                    <ul className="space-y-2">
                        {responsibilities.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard

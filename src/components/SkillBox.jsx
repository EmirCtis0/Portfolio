import React from 'react'

const SkillBox = ({ icon, name, index }) => {
    return (
        <div
            className="skill-card group relative bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-zinc-700/50 hover:shadow-xl hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            style={{ animationDelay: `${index * 0.05}s` }}
        >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative flex flex-col items-center gap-4">
                {/* Icon container with glow effect */}
                <div className="text-5xl lg:text-6xl transition-transform duration-300 group-hover:scale-110">
                    {icon}
                </div>

                {/* Skill name */}
                <span className="text-sm lg:text-base font-semibold text-zinc-600 dark:text-zinc-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                    {name}
                </span>
            </div>
        </div>
    )
}

export default SkillBox
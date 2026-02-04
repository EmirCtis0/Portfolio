import React from 'react'
import ExperienceCard from '../components/ExperienceCard'

const Experiences = () => {
    const experiences = [
        {
            title: "Part Time React Native Developer",
            company: "Fugevet",
            location: "Ankara, Turkey",
            period: "Oct 2025 – Present",
            responsibilities: [
                "React Native Developer building cross-platform mobile applications using Expo framework for streamlined development and deployment.",
                "Developing complex veterinary CRM mobile interfaces with advanced data handling, forms, and seamless API integrations.",
                "Utilizing Postman for API testing and validation, ensuring reliable frontend-backend communication.",
                "Experience with React for web development alongside primary focus on mobile development with React Native."
            ]
        },
        {
            title: "Full-Stack Development Intern",
            company: "Belsis",
            location: "Ankara, Turkey",
            period: "Jan – May 2025",
            responsibilities: [
                "Worked on modernizing municipality-focused legacy systems within the Belsis-Net V2 project by converting classic ASP and VBScript-based applications to a modern tech stack using HTML, JavaScript, jQuery, and Kendo UI with the MVVM pattern.",
                "Tasks included transforming payroll modules, subscription systems, tax calculations, and other administrative interfaces into responsive, cross-browser compatible web applications.",
                "Participated in Agile ceremonies such as daily scrums and bi-weekly sprint meetings and contributed to team-wide documentation and bug testing efforts.",
                "Gained hands-on experience in full-stack development, Agile workflows, version control (GitLab), and enterprise-level software maintenance."
            ]
        },
        {
            title: "Full-stack Development Intern",
            company: "Ordinatrum",
            location: "Istanbul, Turkey",
            period: "July - Aug 2024",
            responsibilities: [
                "Designed, developed, and maintained web applications using ASP.NET MVC.",
                "Responsibilities included creating and managing views, controllers, and models, ensuring seamless frontend-backend integration.",
                "Collaborated with team members to implement features, optimize performance, and follow best coding practices."
            ]
        }
    ]

    return (
        <div className="dark:bg-zinc-900 bg-neutral-100 w-full lg:px-24 py-28 px-8 min-h-screen">
            <div className="max-w-4xl mx-auto">
                {/* Page Header */}
                <div className="text-center mb-16 animate-fadeInTop">
                    <h1 className="text-4xl lg:text-5xl font-bold text-zinc-800 dark:text-white mb-4">
                        Work <span className="text-indigo-600">Experience</span>
                    </h1>
                    <p className="text-zinc-500 dark:text-zinc-400 text-lg">
                        My professional journey and the skills I've developed along the way
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {experiences.map((exp, index) => (
                        <ExperienceCard
                            key={index}
                            index={index}
                            title={exp.title}
                            company={exp.company}
                            location={exp.location}
                            period={exp.period}
                            responsibilities={exp.responsibilities}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experiences

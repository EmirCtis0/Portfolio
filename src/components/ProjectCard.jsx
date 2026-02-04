import React from 'react'

// Sweetalert
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const SweetAlert = withReactContent(Swal)

// Swiperjs
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Link } from 'react-router-dom';

import ProjectsImage from './ProjectsImage';

const ProjectCard = ({ id, projectName, projectImages, index }) => {

    const handleClick = () => {
        SweetAlert.fire({
            title: projectName.toUpperCase(),
            showConfirmButton: false,
            showDenyButton: false,
            showCancelButton: false,
            showCloseButton: true,
            customClass: {
                popup: 'dark:bg-neutral-900 bg-neutral-100 dark:text-white text-black w-11/12 h-11/12'
            },
            showClass: {
                popup: `
                  animate__animated
                  animate__fadeIn
                  animate__faster
                `
            },
            hideClass: {
                popup: `
                  animate__animated
                  animate__fadeOut
                  animate__faster
                `
            },
            html: (
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    modules={[Pagination, Navigation]}
                    pagination={{ clickable: true }}
                >
                    {
                        projectImages.map(function (image, idx) {
                            return (<SwiperSlide key={idx} className='py-8'><img src={image} alt="" /></SwiperSlide>)
                        })
                    }
                </Swiper>
            )
        })
    }

    return (
        <Link
            to={`/projeler/${id}`}
            className="project-card group relative bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-gray-200/50 dark:border-zinc-700/50 hover:shadow-xl hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between items-center gap-4"
            style={{ animationDelay: `${(index || 0) * 0.05}s` }}
        >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-700 flex items-center justify-center">
                <ProjectsImage src={projectImages[0]} />
            </div>

            <span className="relative text-zinc-600 dark:text-zinc-300 text-base font-bold uppercase group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 text-center">
                {projectName}
            </span>
        </Link>
    )
}

export default ProjectCard
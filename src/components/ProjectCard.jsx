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

const ProjectCard = (props) => {

    const handleClick = () => {
        SweetAlert.fire({
            title: props.projectName.toUpperCase(),
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
                        props.projectImages.map(function (image, index) {
                            return (<SwiperSlide key={index} className='py-8'><img src={image} alt="" /></SwiperSlide>)
                        })
                    }
                </Swiper>
            )
        })
    }

    /*
    return (
        <>
            <div onClick={handleClick} className="projectcard dark:bg-neutral-800 bg-neutral-200 w-full h-full p-2 rounded flex flex-col justify-center items-center gap-2">
                <img src={props.projectImages[0]} alt="" />
                <span className="text-zinc-500 text-sm font-bold uppercase">
                    {props.projectName}
                </span>
            </div>
        </>
    )
    */

    return (
        <>
            <Link to={`/projeler/${props.id}`} className="projectcard dark:bg-neutral-800 bg-neutral-200 w-full h-full p-2 rounded flex flex-col justify-center items-center gap-2 animate-fadeInTop">
                <ProjectsImage src={props.projectImages[0]}></ProjectsImage>
                <span className="text-zinc-500 text-sm font-bold uppercase">
                    {props.projectName}
                </span>
            </Link>
        </>
    )
}

export default ProjectCard
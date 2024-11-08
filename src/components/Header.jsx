import { Link, useNavigate } from "react-router-dom";

import { MdDarkMode, MdLightMode, MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";

function Header() {

    const routes = [
        {
            to: "/",
            text: "HOME PAGE"
        },
        {
            to: "/yetenekler",
            text: "SKILLS"
        },
        {
            to: "/projeler",
            text: "PROJECTS"
        },
        {
            to: "/iletisim",
            text: "CONTACT INFO"
        }
    ];


    const navigate = useNavigate()

    const [theme, setTheme] = useState("dark");
    const [mobileMenuStatus, setMobileMenuStatus] = useState(false);

    const changeTheme = (param) => {
        switch (param) {
            case "light":
                setTheme("light")
                document.documentElement.classList.remove('dark')
                localStorage.setItem("theme", "light")
                break
            case "dark":
                setTheme("dark")
                document.documentElement.classList.add('dark')
                localStorage.setItem("theme", "dark")
                break
        }
    }

    useEffect(() => {
        if (localStorage.getItem("theme") == null) {
            setTheme("dark")
            localStorage.setItem("theme", "dark")
        } else {
            if (localStorage.getItem("theme") == "dark") {
                changeTheme("dark")
            } else if (localStorage.getItem("theme") == "light") {
                changeTheme("light")
            }
        }
    }, [])

    const handleThemeChangeButton = () => {
        switch (theme) {
            case "dark":
                changeTheme("light")
                break
            case "light":
                changeTheme("dark")
                break
        }
    }

    const handleLogoClick = () => {
        navigate(0)
    }

    const handleMobileMenu = () => {
        setMobileMenuStatus((mobileMenuStatus) => (!mobileMenuStatus))
    }

    return (
        <>
            <div className="fixed dark:bg-zinc-900 bg-neutral-100 w-full p-2 lg:p-8 shadow-lg z-20">
                {
                    mobileMenuStatus ?
                        <>
                            <div className="fixed dark:bg-zinc-900 bg-neutral-100 w-full p-2 lg:p-8 shadow-lg right-0 top-6 z-10 animate-fadeInTop">
                                <div className="w-full flex flex-col justify-start items-center gap-2">
                                    {
                                        routes.map((route, index) => <Link key={index} className="header-item" to={route.to}>{route.text}</Link>)
                                    }
                                </div>
                            </div>
                        </>
                        :
                        <></>
                }
                <div className="grid grid-cols-2">
                    <div className="flex justify-start items-center">
                        <Link to={handleLogoClick} className="dark:text-white text-black no-underline font-bold text-sm lg:text-lg">
                            emirinaner.dev
                        </Link>
                    </div>
                    <div className="flex justify-end items-center gap-5">
                        <div className="hidden lg:flex justify-end items-center gap-5">
                            {
                                routes.map((route, index) => <Link key={index} className="header-item" to={route.to}>{route.text}</Link>)
                            }
                            <button onClick={handleThemeChangeButton} className="header-button">
                                {
                                    theme == "dark" ? <MdLightMode /> : <MdDarkMode />
                                }
                            </button>
                        </div>
                        <div className="flex lg:hidden justify-end items-center gap-5">
                            <button onClick={handleThemeChangeButton} className="header-button">
                                {
                                    theme == "dark" ? <MdLightMode /> : <MdDarkMode />
                                }
                            </button>
                            {
                                mobileMenuStatus ?
                                    <IoMdClose onClick={handleMobileMenu} className="header-button" />
                                    :
                                    <MdMenu onClick={handleMobileMenu} className="header-button" />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
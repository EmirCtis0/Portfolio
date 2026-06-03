import { Link, useLocation, useNavigate } from "react-router-dom";

import { MdDarkMode, MdLightMode, MdMenu, MdSettings } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../redux/features/siteDataSlice";

function Header() {

    const defaultRoutes = [
        {
            to: "/",
            text: "HOME PAGE"
        },
        {
            to: "/yetenekler",
            text: "SKILLS"
        },
        {
            to: "/experiences",
            text: "EXPERIENCE"
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


    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const language = useSelector(state => state.siteData.language)
    const siteData = useSelector(state => state.siteData.value)
    const routes = siteData?.ui?.header?.routes || defaultRoutes
    const settingsText = siteData?.ui?.header?.settings || {
        title: "Settings",
        language: "Language",
        theme: "Theme",
        light: "Light",
        dark: "Dark"
    }

    const [theme, setTheme] = useState("dark");
    const [mobileMenuStatus, setMobileMenuStatus] = useState(false);
    const [settingsMenuStatus, setSettingsMenuStatus] = useState(false);

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

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuStatus(false)
        setSettingsMenuStatus(false)
    }, [location.pathname])

    useEffect(() => {
        const closeSettingsMenuOnOutsideClick = (event) => {
            if (!event.target.closest('[data-settings-menu="true"]')) {
                setSettingsMenuStatus(false)
            }
        }

        document.addEventListener("mousedown", closeSettingsMenuOnOutsideClick)

        return () => {
            document.removeEventListener("mousedown", closeSettingsMenuOnOutsideClick)
        }
    }, [])

    const handleThemeSelect = (selectedTheme) => {
        changeTheme(selectedTheme)
        setSettingsMenuStatus(false)
    }

    const handleLanguageSelect = (selectedLanguage) => {
        dispatch(setLanguage(selectedLanguage))
        setSettingsMenuStatus(false)
    }

    const handleMobileMenu = () => {
        setMobileMenuStatus((mobileMenuStatus) => (!mobileMenuStatus))
    }

    const closeMobileMenu = () => {
        setMobileMenuStatus(false)
    }

    const handleLogoClick = (event) => {
        event.preventDefault()
        setMobileMenuStatus(false)
        setSettingsMenuStatus(false)
        navigate("/")
    }

    const toggleSettingsMenu = () => {
        setSettingsMenuStatus((settingsMenuStatus) => (!settingsMenuStatus))
    }

    const renderSettingsMenu = () => (
        <div className="absolute right-0 top-9 w-56 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-neutral-100 dark:bg-zinc-900 p-4 shadow-xl animate-fadeInTop">
            <div className="text-xs font-bold uppercase text-zinc-500 dark:text-zinc-400 mb-3">
                {settingsText.title}
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                        {settingsText.language}
                    </span>
                    <div className="flex rounded-md border border-zinc-300 dark:border-zinc-700 overflow-hidden">
                        <button
                            onClick={() => handleLanguageSelect("en")}
                            className={`px-3 py-1 text-xs font-bold ${language == "en" ? "bg-indigo-600 text-white" : "text-zinc-700 dark:text-zinc-200"}`}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => handleLanguageSelect("tr")}
                            className={`px-3 py-1 text-xs font-bold ${language == "tr" ? "bg-indigo-600 text-white" : "text-zinc-700 dark:text-zinc-200"}`}
                        >
                            TR
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                        {settingsText.theme}
                    </span>
                    <div className="flex rounded-md border border-zinc-300 dark:border-zinc-700 overflow-hidden">
                        <button
                            onClick={() => handleThemeSelect("light")}
                            className={`flex items-center gap-1 px-3 py-1 text-xs font-bold ${theme == "light" ? "bg-indigo-600 text-white" : "text-zinc-700 dark:text-zinc-200"}`}
                            aria-label={settingsText.light}
                            title={settingsText.light}
                        >
                            <MdLightMode />
                        </button>
                        <button
                            onClick={() => handleThemeSelect("dark")}
                            className={`flex items-center gap-1 px-3 py-1 text-xs font-bold ${theme == "dark" ? "bg-indigo-600 text-white" : "text-zinc-700 dark:text-zinc-200"}`}
                            aria-label={settingsText.dark}
                            title={settingsText.dark}
                        >
                            <MdDarkMode />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <>
            <div className="fixed dark:bg-zinc-900 bg-neutral-100 w-full p-4 lg:p-8 shadow-lg z-20">
                {
                    mobileMenuStatus ?
                        <>
                            <div className="fixed dark:bg-zinc-900 bg-neutral-100 w-full p-4 lg:p-8 shadow-lg right-0 top-14 z-10 animate-fadeInTop">
                                <div className="w-full flex flex-col justify-start items-center gap-2 py-4">
                                    {
                                        routes.map((route, index) => (
                                            <Link
                                                key={index}
                                                className="header-item"
                                                to={route.to}
                                                onClick={closeMobileMenu}
                                            >
                                                {route.text}
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        </>
                        :
                        <></>
                }
                <div className="grid grid-cols-2">
                    <div className="flex justify-start items-center">
                        <Link to="/" onClick={handleLogoClick} className="dark:text-white text-black no-underline font-bold text-sm lg:text-lg">
                            emirinaner.dev
                        </Link>
                    </div>
                    <div className="flex justify-end items-center gap-5">
                        <div className="hidden lg:flex justify-end items-center gap-5">
                            {
                                routes.map((route, index) => <Link key={index} className="header-item" to={route.to}>{route.text}</Link>)
                            }
                            <div className="relative" data-settings-menu="true">
                                <button onClick={toggleSettingsMenu} className="header-button" aria-label={settingsText.title} title={settingsText.title}>
                                    <MdSettings />
                                </button>
                                {settingsMenuStatus && renderSettingsMenu()}
                            </div>
                        </div>
                        <div className="flex lg:hidden justify-end items-center gap-5">
                            <div className="relative" data-settings-menu="true">
                                <button onClick={toggleSettingsMenu} className="header-button" aria-label={settingsText.title} title={settingsText.title}>
                                    <MdSettings />
                                </button>
                                {settingsMenuStatus && renderSettingsMenu()}
                            </div>
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

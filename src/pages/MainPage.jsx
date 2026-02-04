import { Typewriter } from 'react-simple-typewriter'

import { useSelector } from 'react-redux'

function MainPage() {

    const siteData = useSelector(state => state.siteData.value)
    const siteDataIsLoading = useSelector(state => state.siteData.isLoading)

    return (
        <>
            <div className="dark:bg-zinc-900 bg-neutral-100 w-full lg:px-24 px-6 min-h-screen flex justify-center items-center pt-20 pb-10">
                {
                    siteDataIsLoading ?
                        <div className="text-zinc-500 dark:text-zinc-400">Loading...</div>
                        :
                        <section className="w-full max-w-6xl relative grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-0">
                            {/* Profile Image - First on mobile, second on desktop */}
                            <div className="flex justify-center items-center lg:order-2 order-1 animate-fadeInTop">
                                <div className="blob"></div>
                            </div>

                            {/* Text Content - Second on mobile, first on desktop */}
                            <div className="flex flex-col justify-center items-center lg:items-start lg:order-1 order-2 animate-fadeInTop gap-3 lg:gap-4">
                                <h1 className="font-bold text-2xl sm:text-3xl lg:text-5xl text-zinc-800 dark:text-white text-center lg:text-left">
                                    {siteData?.anasayfa.baslik1} <span className="text-indigo-600">{siteData?.anasayfa.isim}</span>
                                </h1>

                                <div className="flex gap-2">
                                    <span className="font-bold text-indigo-600 text-base sm:text-lg lg:text-2xl">
                                        <Typewriter
                                            words={siteData?.anasayfa.baslik2.yazilar}
                                            loop={true}
                                            cursor
                                            cursorStyle='|'
                                            typeSpeed={50}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                        />
                                    </span>
                                </div>

                                <p className="text-zinc-500 text-sm sm:text-base lg:text-lg lg:text-start text-center max-w-lg leading-relaxed">
                                    {siteData?.anasayfa.yazi}
                                </p>
                            </div>
                        </section>
                }
            </div>
        </>
    )
}

export default MainPage;
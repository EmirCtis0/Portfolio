import { Typewriter } from 'react-simple-typewriter'

import { useSelector } from 'react-redux'

function MainPage() {

    const siteData = useSelector(state => state.siteData.value)
    const siteDataIsLoading = useSelector(state => state.siteData.isLoading)

    return (
        <>
            <div className="dark:bg-zinc-900 bg-neutral-100 w-full lg:px-24 px-8 min-h-screen flex justify-center items-center">
                {
                    siteDataIsLoading ?
                        <>Yükleniyor...</>
                        :
                        <section className="w-full relative grid lg:grid-cols-2 grid-cols-1">
                            <div className="flex flex-col justify-center items-center lg:items-start lg:order-1 order-2 animate-fadeInTop">
                                <span className="font-bold text-xl lg:text-5xl text-zinc-800 dark:text-white">
                                    {siteData?.anasayfa.baslik1} <span className="text-indigo-600">{siteData?.anasayfa.isim}</span>
                                </span>
                                <div className="flex gap-2">
                                    <span className="font-bold text-indigo-600 text-sm lg:text-2xl">
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
                                <span className="text-zinc-500 text-xs lg:text-lg lg:text-start text-center">
                                {siteData?.anasayfa.yazi}
                                </span>
                            </div>
                            <div className="flex justify-center items-center lg:order-2 order-1 animate-fadeInTop lg:h-[20rem] h-[10rem]">
                                <div className="blob"></div>
                            </div>
                        </section>
                }
            </div>
        </>
    )
}

export default MainPage;
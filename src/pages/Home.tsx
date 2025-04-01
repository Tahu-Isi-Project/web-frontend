import { HomeLayout } from "../layouts"

export default function Home() {
    return (
        <div className="min-h-[100vh] dark:bg-slate-950">
            <HomeLayout>
                <div className="flex flex-col gap-24">
                    <section aria-label="banner" className="relative min-h-screen">
                        <div className="absolute z-10 flex flex-col gap-4 justify-center items-center bg-linear-to-t w-full h-full 
            from-black from-5% to-transparent dark:text-white">
                            <h1 className="text-5xl shadow-white/50 shadow-text font-bold">
                                Tahu Isi Project indonesia
                            </h1>
                            <h3 className="text-lg italic">
                                Indonesian Touhou Fan Base
                            </h3>
                        </div>
                        <img src="/assets/img/banner.png" className="brightness-[40%] -z-10 w-[100%] h-screen object-cover object-center not-sr-only" />
                    </section>

                    <section aria-label="introduction" className="flex sm:flex-col md:flex-row gap-8 sm:mx-4 md:mx-24 dark:text-white">
                        <div className="w-full flex flex-col justify-center sm:gap-12 md:gap-4">
                            <img src="/assets/img/reimu-lost-word.png" alt="" className="absolute opacity-20 -left-60 rounded-full" />
                            <h1 className="text-4xl font-bold shadow-white/50 shadow-text">
                                Apa itu Touhou Project
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Soluta aperiam tempore dicta culpa, quidem dignissimos quasi perspiciatis
                                illo reprehenderit eligendi cupiditate voluptates esse pariatur nam iusto sapiente optio dolorum eum.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Soluta aperiam tempore dicta culpa, quidem dignissimos quasi perspiciatis
                                illo reprehenderit eligendi cupiditate voluptates esse pariatur nam iusto sapiente optio dolorum eum.
                            </p>
                        </div>
                        <div className="w-full">
                            <img src="/assets/img/lolk.png" alt="Touhou 15 LoLK" className="brightness-75" />
                        </div>
                    </section>

                    <section aria-label="community" className="relative bg-black dark:text-white w-full h-full">
                        <div className="absolute mx-auto overflow-clip w-full h-full brightness-50 z-0 blur-xs">
                            <img src="/assets/img/community.png" alt="Community" className="w-full" />
                        </div>

                        <div className="relative flex flex-col justify-center items-center gap-8 sm:mx-4 md:mx-44 py-56 z-10">
                            <h1 className="text-4xl font-bold shadow-white/50 shadow-text">
                                Community
                            </h1>
                            <p className="text-lg text-center">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Soluta aperiam tempore dicta culpa, quidem dignissimos quasi perspiciatis
                                illo reprehenderit eligendi cupiditate voluptates esse pariatur nam iusto sapiente optio dolorum eum.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Soluta aperiam tempore dicta culpa, quidem dignissimos quasi perspiciatis
                                illo reprehenderit eligendi cupiditate voluptates esse pariatur nam iusto sapiente optio dolorum eum.
                            </p>
                        </div>
                    </section>
                </div>
            </HomeLayout>
        </div>
    );
}
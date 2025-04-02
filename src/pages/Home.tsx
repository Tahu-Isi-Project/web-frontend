import { ArrowRight } from "lucide-react";

import { SlideTransitionType, SlideTransitionScroll } from "../components/ui/animation";

import { HomeLayout } from "../layouts"
import { Link } from "../components/ui/navigation";

import { ArtworkCard } from "../components/artwork";
import { artworks } from "../data/artwork";

import { ReplayCard, ReplaySmallCard } from "../components/replay";
import { replays } from "../data/replay";

export default function Home() {
  return (
    <div className="relative min-h-[100vh] w-screen dark:bg-slate-950 overflow-x-hidden">
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

          <section aria-label="introduction" className="flex sm:flex-col md:flex-row gap-8 py-42 sm:mx-4 md:mx-24 dark:text-white">
            <div className="relative w-full flex flex-col justify-center sm:gap-12 md:gap-4">
              <SlideTransitionScroll type={SlideTransitionType.Left} className="mb-24">
                <img src="/assets/img/reimu-lost-word.png" alt="" className="absolute opacity-20 -left-60 rounded-full" />
                <img src="/assets/img/reimu-lost-word.png" alt="" className="absolute opacity-20 blur-2xl -left-60 rounded-full" />
              </SlideTransitionScroll >

              <SlideTransitionScroll type={SlideTransitionType.Left}>
                <h1 className="text-4xl font-bold shadow-white/20 shadow-text">
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
              </SlideTransitionScroll >
            </div>
            <div className="w-full">
              <SlideTransitionScroll type={SlideTransitionType.Right}>
                <img src="/assets/img/lolk.png" alt="Touhou 15 LoLK" className="brightness-75" />
              </SlideTransitionScroll>
            </div>
          </section>

          <section aria-label="community" className="relative bg-black dark:text-white w-full h-full">
            <div className="absolute mx-auto overflow-clip w-full h-full brightness-50 z-0 blur-xs">
              <img src="/assets/img/community.png" alt="Community" className="w-full" />
            </div>

            <div className="relative flex flex-col justify-center items-center gap-8 sm:mx-4 md:mx-44 py-56 z-10">
              <h1 className="text-4xl font-bold shadow-white/20 shadow-text">
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

              <Link href='' className="group flex justify-center items-center gap-4 py-2 px-4 
                                rounded-md font-bold text-lg tracking-wide dark:text-white bg-slate-900 hover:bg-slate-600 duration-200">
                See More
                <ArrowRight className="group-hover:translate-x-2 group-hover:animate-pulse duration-200" />
              </Link>
            </div>
          </section>


          <section aria-label="latest-artwork" className="flex flex-col gap-4">
            <SlideTransitionScroll type={SlideTransitionType.Right}>
              <img src="/assets/img/marisa-lost-word.png" alt="" className="absolute -right-[30%] rounded-full opacity-40 blur-2xl pointer-events-none" />
              <img src="/assets/img/marisa-lost-word.png" alt="" className="absolute -right-[30%] rounded-full opacity-20 pointer-events-none" />
            </SlideTransitionScroll>
            <h2 className="text-4xl font-bold text-center shadow-white/20 shadow-text dark:text-white">
              Latest Art
            </h2>
            <div className="flex justify-center items-stretch gap-4 sm:mx-4 md:mx-52">
              <div className="flex-1 flex">
                <SlideTransitionScroll type={SlideTransitionType.Left} className="m-auto w-full h-full">
                  <ArtworkCard artwork={artworks[0]} className="m-auto w-full h-full" />
                </SlideTransitionScroll>
              </div>
              <div className="flex-1 flex flex-col gap-4 justify-between">
                <div className="grid grid-cols-2 gap-4 flex-grow">
                  {artworks.slice(1, 5).map((artwork) => (
                    <SlideTransitionScroll type={SlideTransitionType.Right}>
                      <ArtworkCard key={artwork.id} artwork={artwork} className="w-full h-full" />
                    </SlideTransitionScroll>
                  ))}
                </div>
                <SlideTransitionScroll type={SlideTransitionType.Right}>
                  <Link href='' className="group w-full flex justify-center items-center gap-4 py-8 border-2 
                    border-gray-600 rounded-md font-bold text-lg tracking-wide dark:text-white 
                    hover:bg-slate-600 bg-black/50 duration-200">
                    See More
                    <ArrowRight className="group-hover:translate-x-2 group-hover:animate-pulse duration-200" />
                  </Link>
                </SlideTransitionScroll>
              </div>
            </div>
          </section>

          <section aria-label="latest-replay" className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold text-center shadow-white/20 shadow-text dark:text-white">
              Latest Replay
            </h2>
            <div className="flex sm:flex-col md:flex-row justify-center items-stretch gap-4 sm:mx-4 md:mx-52">
              <div className="flex-1 flex self-stretch min-h-full">
                <SlideTransitionScroll type={SlideTransitionType.Left}>
                  <ReplayCard replay={replays[0]} />
                </SlideTransitionScroll>
              </div>
              <div className="flex-1 flex flex-col gap-4 justify-between items-center w-full min-h-full self-stretch">
                <div className="relative flex flex-col gap-4 w-full h-full">
                  {replays.slice(1, 5).map((replay) => (
                    <SlideTransitionScroll type={SlideTransitionType.Right} className="relative  h-full w-full self-stretch">
                      <ReplaySmallCard key={replay.id} replay={replay} />
                    </SlideTransitionScroll>
                  ))}
                </div>
                <SlideTransitionScroll type={SlideTransitionType.Right} className="w-full h-full">
                  <Link href='' className="group w-full relative flex justify-center items-center gap-4 py-8 border-2 
                    border-gray-600 rounded-md font-bold text-lg tracking-wide 
                    dark:text-white hover:bg-slate-600 bg-black/50 duration-200">
                    <img src="/assets/img/lolk.png" alt="" className="absolute w-full inset-0 h-full object-cover object-center opacity-20 pointer-events-none" />
                    <span>
                      See More
                    </span>
                    <ArrowRight className="group-hover:translate-x-2 group-hover:animate-pulse duration-200" />
                  </Link>
                </SlideTransitionScroll>
              </div>
            </div>
          </section>
        </div>
      </HomeLayout>
    </div>
  );
}
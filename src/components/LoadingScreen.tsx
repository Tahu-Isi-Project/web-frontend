import { ReactNode, useEffect, useRef, useState } from "react";
import { cn, sleep } from "../utils";

export interface FlavorText {
  time: number,
  text: string,
};

export interface LoadingScreenProps {
  className?: string,
  flavorText: FlavorText[]
};

export default function LoadingScreen(props: LoadingScreenProps): ReactNode {
  const [shownContent, setShowContent] = useState<FlavorText[]>([]);
  const hasLoaded = useRef(false);

  useEffect(() => {
    async function load() {
      if (hasLoaded.current) return;
      hasLoaded.current = true;

      for (const text of props.flavorText) {
        setShowContent(prev => [...prev, text]);
        await sleep(Math.random() * text.time);
      }
    }
    load();
  }, []);

  return (
    <div className={cn(
      "absolute z-100 w-screen h-screen flex flex-col justify-center items-center dark:bg-slate-950 duration-500 pointer-events-none",
      props.className,
    )}>
      <h2 className="font-bold text-3xl dark:text-white shadow-white/50 shadow-text">
        Please wait warmly
      </h2>

      <div className="relative min-h-[48vh] w-[24vw] sm:w-[82vw] md:w-[60vw] lg:w-[42vw] flex flex-col-reverse items-start justify-center overflow-hidden dark:text-white">
        {shownContent.map((content) =>
          <span key={content.text} className="font-bold fade-in">
            [{
              "\u00A0".repeat(
                5 - content.time.toString().length >= 0
                  ? 5 - content.time.toString().length
                  : 0,
              ) + content.time
            }] {content.text}
          </span>
        )}
      </div>

      <div
        className="absolute inset-0 z-10 w-screen bg-gradient-to-b from-transparent from-40% to-black to-80%"
      ></div>
    </div>
  );
}
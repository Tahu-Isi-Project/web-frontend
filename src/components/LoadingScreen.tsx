import { ReactNode } from "react";

export default function LoadingScreen(): ReactNode {
  return (
    <div className="relative w-screen h-screen flex justify-center items-center dark:bg-slate-950">
      <h2 className="font-bold text-3xl dark:text-white shadow-white/50 shadow-text">
        Please wait warmly
      </h2>
      <div
        className="absolute inset-0 z-10 w-screen bg-gradient-to-b from-transparent from-40% to-black to-80%"
      ></div>
    </div>
  );
}
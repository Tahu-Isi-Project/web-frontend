import { ReactNode } from "react";
import { ReplayCardProps } from ".";
import { cn } from "../../utils";

export default function ReplaySmallCard(props: ReplayCardProps): ReactNode {
  return (
    <div className="relative h-full flex items-center gap-4 border-2  py-2 px-4 border-gray-600 hover:bg-slate-700 bg-black duration-200 rounded">
      <img src="/assets/img/lolk.png" alt="" className="absolute w-full inset-0 h-full object-cover object-center opacity-20" />
      <div className="z-10">
        <img src="/assets/img/logo.png" alt={props.replay.game}
          className={cn("rounded-full w-[32px] h-[32px] object-cover object-center pointer-events-none", props.className)} />
      </div>
      <div className="flex flex-col gap-4 z-10">
        <h5 className="dark:text-white">
          {props.replay.game}
        </h5>
        <p className="dark:text-white">
          {props.replay.mode}
        </p>
      </div>
    </div>
  );
}
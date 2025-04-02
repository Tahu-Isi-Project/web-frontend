import { PropsWithChildren, ReactNode } from "react";
import Link from "./Link";
import { cn } from "../../../utils";

type NavlinkProps = {
  href: string,
  active?: boolean,
  className?: string,
} & PropsWithChildren;

export default function Navlink(props: NavlinkProps): ReactNode {
  return (
    <div className="relative group">
      <Link href={props.href} className={cn("text-xl", props.className)}>
        <span className={props.active ? 'font-bold shadow-white/20 shadow-text' : ''}>
          {props.children}
        </span>
      </Link>
      <span className={cn("absolute -bottom-1 right-0 z-10 h-[2px] w-0 bg-black dark:bg-white duration-300",
        props.active ? 'w-full' : 'group-hover:w-full'
      )}></span>
    </div>
  );
}
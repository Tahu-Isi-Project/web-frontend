import { ReactNode } from "react";
import { X } from "lucide-react";
import { cn } from "../../../utils";
import Navlink from "./Navlink";

interface OverlayNavbar {
  links: {
    name: string,
    href: string,
  }[],
  close: () => void,
  visible: boolean,
};

export default function OverlayNavbar(props: OverlayNavbar): ReactNode {
  return (
    <div className={cn(
      "z-100 fixed inset-0 flex flex-col w-screen h-screen bg-transparent duration-200 pointer-events-none p-8",
      props.visible ? "opacity-100 bg-slate-950/80 pointer-events-auto" : "opacity-0"
    )}>
      <div className="flex  w-full">
        <button onClick={() => props.close()} className="ml-auto dark:text-white">
          <X />
        </button>
      </div>

      <div className="flex flex-col gap-8 justify-center items-center w-screen h-screen dark:text-white">
        {
          props.links.map((link) => (
            <Navlink key={link.name} href={link.href} className="text-2xl" active={link.href == '/' ? true : false}>
              {link.name}
            </Navlink>
          ))
        }
      </div>
    </div>
  );
}
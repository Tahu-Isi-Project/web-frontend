import { ReactNode } from "react";
import { Navlink } from '@/components/ui/navigation';
import { communityLinks } from "@/data/CommunityLinks";

export default function Footer(): ReactNode {
  return (
    <footer className="relative flex sm:flex-col md:flex-row justify-center w-full sm:px-12 gap-8 py-24 overflow-hidden">
      <div className="absolute sm:right-0 md:hidden -bottom-24 mx-auto h-full">
        <img src="/assets/img/reimu-lost-word.png" alt="Community" className="w-full  opacity-20" />
      </div>
      <div className="absolute left-0 sm:hidden md:block -bottom-24 mx-auto h-full">
        <img src="/assets/img/reimu-lost-word.png" alt="Community" className="w-full  opacity-20" />
      </div>
      <div className="w-full">
      </div>
      <div className="w-full flex flex-col gap-4 dark:text-white">
        <h3 className="text-2xl font-bold">Links</h3>
        <ul>
          <li>
            <Navlink>
              Home
            </Navlink>
          </li>
          <li>
            <Navlink>
              Gallery
            </Navlink>
          </li>
          <li>
            <Navlink>
              Replay
            </Navlink>
          </li>
          <li>
            <Navlink>
              Community
            </Navlink>
          </li>
          <li>
            <Navlink>
              Privacy & Policy
            </Navlink>
          </li>
          <li>
            <Navlink>
              Contributors
            </Navlink>
          </li>
        </ul>
      </div>
      <div className="w-full flex flex-col gap-4">
        <h3 className="text-xl font-bold dark:text-white">Community</h3>
        <div className="flex gap-4">

          {communityLinks.map((data) => (
            <a key={data.name} href={data.links}>
              <img src={data.img} alt={data.name} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
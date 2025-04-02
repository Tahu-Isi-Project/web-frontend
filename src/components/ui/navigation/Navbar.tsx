import { Moon, Menu } from 'lucide-react';
import { ReactNode, useState } from "react";

import OverlayNavbar from './OverlayNavbar';
import Navlink from "./Navlink";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "News",
    href: "/news",
  },
  {
    name: "Community",
    href: "/community",
  },
];

const linksOverlay = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "Replay",
    href: "/replay",
  },
  {
    name: "News",
    href: "/news",
  },
  {
    name: "Community",
    href: "/community",
  },
];

export default function Navbar(): ReactNode {
  const [isNavbarOverlayVisible, setNavbarOverlayVisible] = useState(false);
  return (
    <>
      <OverlayNavbar visible={isNavbarOverlayVisible} links={linksOverlay} close={() => setNavbarOverlayVisible(false)} />
      <nav className="w-screen fixed z-20 flex justify-between items-center gap-4 sm:p-4 md:p-8">
        <div>
          <Moon className='dark:text-white' />
        </div>
        <div className='flex justify-center items-center gap-8'>
          <ul className="flex dark:text-white sm:gap-4 md:gap-8">
            {links.map((link) => (
              <li key={link.name}>
                <Navlink key={link.name} href={link.href} active={link.href == "/" ? true : false}>
                  {link.name}
                </Navlink>
              </li>
            ))}
          </ul>
          <div>
            <button className='cursor-pointer' onClick={() => setNavbarOverlayVisible(true)}>
              <Menu className='font-bold dark:text-white' />
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
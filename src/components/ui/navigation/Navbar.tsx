import { Moon, Menu } from 'lucide-react';
import { ReactNode } from "react";

import Navlink from "./Navlink";

export default function Navbar(): ReactNode {
  return (
    <nav className="w-screen fixed z-20 flex justify-between items-center gap-4 sm:p-4 md:p-8">
      <div>
        <Moon className='dark:text-white' />
      </div>
      <div className='flex justify-center items-center gap-8'>
        <ul className="flex dark:text-white sm:gap-4 md:gap-8">
          <li>
            <Navlink href="/" active={true}>
              Home
            </Navlink>
          </li>
          <li>
            <Navlink href="/news">
              News
            </Navlink>
          </li>
          <li>
            <Navlink href="/community">
              Community
            </Navlink>
          </li>
        </ul>
        <div>
          <Menu className='dark:text-white' />
        </div>
      </div>
    </nav>
  )
}
import { Moon } from 'lucide-react';
import { ReactNode } from "react";

import Navlink from "./Navlink";

export default function Navbar(): ReactNode {
    return (
        <nav className="w-full fixed z-20 flex justify-between items-center gap-4 p-4">
            <div>
                <Moon className='dark:text-white' />
            </div>
            <div>
                <ul className="flex gap-4 dark:text-white">
                    <li>
                        <Navlink href="/">Home</Navlink>
                    </li>
                    <li>
                        <Navlink href="/news">News</Navlink>
                    </li>
                    <li>
                        <Navlink href="/community">Community</Navlink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
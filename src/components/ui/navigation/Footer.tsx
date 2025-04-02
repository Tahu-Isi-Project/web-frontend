import { ReactNode } from "react";
import { Link } from '@/components/ui/navigation';
import { communityLinks } from "@/data/CommunityLinks";

export default function Footer(): ReactNode {
  return (
    <footer className="relative overflow-hidden bg-black">
      <div className="absolute sm:right-0 md:hidden -bottom-24 mx-auto h-full">
        <img src="/assets/img/reimu-lost-word.png" alt="Community" className="w-full  opacity-20" />
      </div>
      <div className="relative flex sm:flex-col md:flex-row justify-center w-full sm:px-12 gap-8 py-24">
        <div className="absolute left-0 sm:hidden md:block -bottom-24 mx-auto h-full">
          <img src="/assets/img/reimu-lost-word.png" alt="Community" className="w-full  opacity-20" />
        </div>
        <div className="w-full">
        </div>
        <div className="w-full flex flex-col gap-4 dark:text-white">
          <h3 className="text-2xl font-bold">Links</h3>
          <ul>
            <li>
              <Link>
                Home
              </Link>
            </li>
            <li>
              <Link>
                Gallery
              </Link>
            </li>
            <li>
              <Link>
                Replay
              </Link>
            </li>
            <li>
              <Link>
                Community
              </Link>
            </li>
            <li>
              <Link>
                Privacy & Policy
              </Link>
            </li>
            <li>
              <Link>
                Contributors
              </Link>
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
      </div>
      <div className="py-4">
        <p className="dark:text-white text-center italic">
          2025© Made with ❤️ by Tahu Isi Project Community
        </p>
      </div>
    </footer>
  );
}
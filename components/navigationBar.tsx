'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutGrid, 
  HeartPlus, 
  BookHeart, 
  MessageCircleHeart 
} from 'lucide-react';

const navItems = [
  { href: "/", icon: LayoutGrid, label: 'Main' },
  { href: "/add-quote", icon: HeartPlus, label: 'Add Quote' },
  { href: "/main", icon: MessageCircleHeart, label: 'Quote' },
  { href: "/favourite", icon: BookHeart, label: 'Favourite' },
];

export default function NavigationBar() {
  const pathname = usePathname();

  return (
    <div className="fixed -mt-10 left-0 right-0 flex flex-row justify-center mx-auto max-w-sm rounded-2xl bg-yellow-300 text-indigo-900 font-semibold z-50">
      <div className="p-4 mx-6 sm:mx-0">
        <nav>
          <ul className="grid grid-cols-4 gap-10 md:gap-4">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;

              return (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={`flex flex-col items-center rounded-lg transition-colors 
                      ${ isActive ? 'bg-yellow-500 px-2 py-1 rounded-xl' : ''}`
                    }
                  >
                    <item.icon
                      size={30}
                      className={`${
                        isActive ? 'text-yellow-900 drop-shadow' : 'hover:bg-yellow-500'
                      } hover:w-[50px] rounded-lg transition-all`}
                    />
                    <span className={`text-sm ${isActive ? 'font-bold text-yellow-900' : ''}`}>
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}


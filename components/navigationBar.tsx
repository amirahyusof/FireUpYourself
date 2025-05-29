import React from 'react'
import Link from 'next/link';
import { 
  LayoutGrid, 
  HeartPlus, 
  BookHeart, 
  MessageCircleHeart 
} from 'lucide-react';

const navItems = [
    { href: "/", icon: LayoutGrid, label: 'Main' },
    { href: "/", icon: HeartPlus, label: 'Add Quote' },
    { href: "/", icon: BookHeart, label: 'Favourite' },
    { href: "/quote", icon: MessageCircleHeart, label: 'Quote' },
  ];

export default function NavigationBar(){
  return (
    <>
     {/* Navigation bar on bottom */}
     <div className="fixed -mt-10 left-0 right-0 flex flex-row justify-center mx-auto max-w-sm rounded-2xl bg-yellow-300 text-indigo-900 font-semibold">
      <div className="p-4 mx-6 sm:mx-0">
        <nav>
          <ul className="grid grid-cols-4 gap-10 md:gap-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link 
                  href={item.href}
                  className="flex flex-col items-center rounded-lg transition-colors"
                >
                  <item.icon size={30} className='hover:bg-yellow-500 hover:w-[50px] rounded-lg' />
                  <span className="items-center text-sm">{item.label}</span>
                </Link>
              </li>
            ))}
            </ul>
        </nav>
      </div>
     </div>
    </>
   
    

  )
}


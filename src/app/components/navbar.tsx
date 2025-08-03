'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar(){
   return (
      <header className="w-full sticky top-0 z-50 mb-4 shadow-sm backdrop-blur-md">
         <nav className="w-full">
            <div className="max-w-screen-xl mx-auto py-4 px-4 sm:px-6 md:px-10 lg:px-16">
               <div className="grid grid-cols-3 items-center">

                  {/* Fumori Logo */}
                  <div className='flex items-center'>
                     <Link href="/">
                        <Image
                           src="/fumori.svg"
                           alt="Fumori Logo"
                           width={20}
                           height={20}
                           className='h-5 w-auto'
                        />
                     </Link>
                  </div>

                  {/* Navbar Menu */}
                  <div>
                     
                  </div>

                  {/* Sosmed Icon */}
                  <div className="flex items-center justify-end gap-4">
                     <a
                        href="https://github.com/oujisan"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="p-1 rounded-md border border-transparent transition-all hover:border-[var(--color-gray)]"
                     >
                        <Image 
                           src="/github.svg" 
                           alt="GitHub" 
                           width={24} 
                           height={24} 
                           className="h-6 w-auto" 
                        />
                     </a>
                  </div>
               </div>
            </div>
         </nav>
      </header>
   )
}
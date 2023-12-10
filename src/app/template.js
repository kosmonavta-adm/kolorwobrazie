'use client';

import MobileNav from '@/app/_components/MobileNav/MobileNav';
import Nav from '@/app/_components/Nav/Nav';

export default function Template({ children }) {
    return (
        <>
            <div className="sticky top-0 z-20 flex items-baseline justify-between bg-white px-8 lg:hidden">
                <h1 className="my-4 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text pt-1 font-logo text-5xl text-transparent">
                    Kolor w obrazie
                </h1>
                <MobileNav />
            </div>
            <aside className="hidden lg:ml-8 lg:mt-8 lg:flex lg:w-full lg:max-w-[15rem] lg:flex-col 2xl:max-w-xs">
                <Nav />
            </aside>
            {children}
            <div id="_modal-root"></div>
        </>
    );
}

'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import Menu from '@/app/_components/_icons/Menu';
import Close from '@/app/_components/_icons/Close';

import { menuPaths } from '@/app/_utils/utils';

const MobileNav = () => {
    const pathname = usePathname();
    const [isMenuVisible, setIsMenuVisible] = useState();
    return (
        <>
            <button
                className="right-8 z-10 flex w-10 items-center gap-2 rounded bg-white lg:hidden"
                onClick={() => setIsMenuVisible((prevIsMenuVisible) => !prevIsMenuVisible)}
            >
                {isMenuVisible ? <Close /> : <Menu />}
            </button>
            {isMenuVisible && (
                <nav className="fixed right-0 top-[84px] z-30 flex h-full w-full flex-col items-center justify-center gap-8 bg-white bg-opacity-80 px-4 py-2 lg:hidden">
                    {menuPaths.map(({ key, label, href, Icon }) => {
                        const isActive = pathname === href;
                        return (
                            <Link
                                key={key}
                                href={href}
                                className={clsx(
                                    ')] flex w-fit items-center gap-2 rounded px-4 py-2 text-xl transition ease-out [&:not([data-active="true"])]:hover:bg-slate-300',
                                    isActive && 'bg-slate-200 font-semibold'
                                )}
                                data-active={isActive}
                            >
                                <Icon />
                                {label}
                            </Link>
                        );
                    })}
                </nav>
            )}
        </>
    );
};

export default MobileNav;

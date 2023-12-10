import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import { menuPaths } from '@/app/_utils/utils';

const Nav = () => {
    const pathname = usePathname();

    return (
        <div className="sticky top-8 flex h-[100svh] flex-col">
            <h1 className="mb-10 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text pt-1 font-logo text-5xl text-transparent">
                Kolor w obrazie
            </h1>
            <p className="mb-4 text-2xl font-medium">Menu</p>
            <nav className="flex flex-col gap-4">
                {menuPaths.map(({ key, label, href, Icon }) => {
                    const isActive = pathname === href;
                    return (
                        <Link
                            key={key}
                            href={href}
                            className={clsx(
                                ')] flex w-fit items-center gap-2 rounded px-4 py-2 text-lg transition ease-out [&:not([data-active="true"])]:hover:bg-slate-300',
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
            <p className="mb-16 mt-auto flex text-sm text-neutral-500 2xl:text-base">
                Wykonanie:{' '}
                <Link
                    href="https://krzysztofadamczak.pl"
                    className="transition-colors hover:text-neutral-900"
                >
                    Krzysztof Adamczak
                </Link>
            </p>
        </div>
    );
};

export default Nav;

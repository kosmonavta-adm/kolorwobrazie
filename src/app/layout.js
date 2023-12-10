import { Maven_Pro, Festive } from 'next/font/google';
import clsx from 'clsx';

import './globals.css';

const font = Maven_Pro({ subsets: ['latin', 'latin-ext'], variable: '--display-font' });
const logoFont = Festive({ subsets: ['latin'], variable: '--logo-font', weight: '400' });

export const metadata = {
    title: 'Kolor w obrazie',
    description: 'Obrazy ręcznie malowane',
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="pl"
            className={clsx('min-h-[100svh]', font.variable, logoFont.variable)}
        >
            <body className="flex min-h-[100svh] flex-col lg:flex-row">{children}</body>
        </html>
    );
}

import { twMerge } from 'tailwind-merge';

export const Button = ({ className, ...props }) => {
    return <button className={twMerge('bg-cyan-500 text-white font-bold rounded px-4 py-2',className)} {...props}/>
}

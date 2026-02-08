import { twMerge } from 'tailwind-merge';

export const Input = ({ className, ...props }) => {
    return <input className={twMerge('border border-neutral-200 rounded px-4 py-2',className)} {...props}/>
}
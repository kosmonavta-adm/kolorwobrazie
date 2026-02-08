import { twMerge } from 'tailwind-merge';

export const Textarea = ({className, ...props }) => {
    return <textarea className={twMerge('border border-neutral-200 rounded px-4 py-2',className)} {...props}/>
}

'use client'
import { Input } from '@/app/_components/Input/Input';
import { Textarea } from '@/app/_components/Textarea/Textarea';
import { Button } from '@/app/_components/Button/Button';
import { useState } from 'react';

const ContactPage = () => {

    const [ email, setEmail ] = useState("")
    const [ body, setBody ] = useState("")

    const start = performance.now();
    const [isFormDisabled, setIsFormDisabled] = useState(false)
    const [ isSent, setIsSent ] = useState(false)

    const handleSubmit = async (form) => {
        const end = performance.now()
        if(end - start < 10000) {
            setIsFormDisabled(true);
            return;
        }

        const formData = new FormData(form)

        const parsedForm = Object.fromEntries(formData)
        if(parsedForm.body.trim().length <= 32) {
            setIsFormDisabled(true);
            return;
        }

        const res = await fetch('/api/contact', { method: 'POST', headers: {
           "Content-Type": "application/json",
                "X-R": Math.floor(Math.random() * 1000) + 1
            }, body: JSON.stringify(Object.fromEntries(formData))})

        if ( res.ok ){
            setIsFormDisabled(true);
            setIsSent(true)
        }
    }

    return (
        <div className="flex flex-col p-8 max-w-[30vw] w-full">
            <form className='flex flex-col gap-4' onSubmit={e => {
                e.preventDefault();
                handleSubmit(e.target)
            }}>
                <label className='flex flex-col gap-2'>
                    <span className='font-bold'>Adres e-mail <span className='text-red-600'>*</span></span>
                    <Input onChange={e => setEmail(e.target.value)} value={email} name='email' type='email' required/>
                </label>

                <label className='flex flex-col gap-2'>
                    <span className='font-bold'>Wiadomość <span className='text-red-600'>*</span></span>
                    <Textarea onChange={e => setBody(e.target.value)} value={body} name='body' required rows={4}/>
                </label>
                <Button
                    disabled={isFormDisabled}
                >
                    Wyślij
                </Button>
                {isSent && <p>Wiadomość została wysłana!</p>}
            </form>
        </div>
    );
};

export default ContactPage;

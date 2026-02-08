import Other from '@/app/_components/_icons/Other';
import Cat from '@/app/_components/_icons/Cat';
import Flowers from '@/app/_components/_icons/Flowers';
import Star from '@/app/_components/_icons/Star';
import Mailbox from '@/app/_components/_icons/Mailbox';

export const menuPaths = [
    {
        key: 0,
        href: '/',
        label: 'Wszystko',
        Icon: Star,
    },
    {
        key: 1,
        href: '/koty',
        label: 'Koty',
        Icon: Cat,
    },
    {
        key: 3,
        href: '/kwiaty',
        label: 'Kwiaty',
        Icon: Flowers,
    },
    {
        key: 4,
        href: '/inne',
        label: 'Inne',
        Icon: Other,
    },
    {
        key: 5,
        href: '/kontakt',
        label: 'Kontakt',
        Icon: Mailbox,
    },
];

export function shuffle(array) {
    let counter = array.length;

    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);

        counter--;

        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

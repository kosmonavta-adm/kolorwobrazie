import All from '@/app/_components/_icons/All';
import Angel from '@/app/_components/_icons/Angel';
import Cat from '@/app/_components/_icons/Cat';
import Flowers from '@/app/_components/_icons/Flowers';
import Landscapes from '@/app/_components/_icons/Landscapes';

export const menuPaths = [
    {
        key: 0,
        href: '/',
        label: 'Wszystko',
        Icon: All,
    },
    {
        key: 1,
        href: '/koty',
        label: 'Koty',
        Icon: Cat,
    },
    {
        key: 2,
        href: '/anioly',
        label: 'Anioły',
        Icon: Angel,
    },
    {
        key: 3,
        href: '/kwiaty',
        label: 'Kwiaty',
        Icon: Flowers,
    },
    {
        key: 4,
        href: '/krajobrazy',
        label: 'Krajobrazy',
        Icon: Landscapes,
    },
];

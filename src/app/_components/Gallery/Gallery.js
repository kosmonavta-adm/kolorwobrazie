'use client';
import Lightbox from '@/app/_components/Lightbox/Lightbox';

const Gallery = ({ data }) => {
    return (
        <div className="grid h-min w-full gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]">
            {data.map(({ key, src, name }) => (
                <Lightbox
                    key={key}
                    src={src}
                    name={name}
                />
            ))}
        </div>
    );
};

export default Gallery;

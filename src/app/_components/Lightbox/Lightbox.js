'use client';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import clsx from 'clsx';

const Lightbox = ({ src, alt = '', name }) => {
    const [isLightboxVisible, setIsLightboxVisible] = useState(false);
    const [meta, setMeta] = useState({ loaded: false, width: 0, height: 0 });
    const [reveal, setReveal] = useState(false);

    const openLightbox = () => setIsLightboxVisible(true);
    const closeLightbox = () => setIsLightboxVisible(false);

    return (
        <>
            <div
                className="relative aspect-square w-full cursor-pointer opacity-50 transition-opacity hover:opacity-100"
                onClick={openLightbox}
            >
                <Image
                    className={clsx('object-cover', reveal ? 'opacity-100' : 'opacity-0', 'transition-opacity')}
                    src={src}
                    alt={alt}
                    fill
                    quality={30}
                    onLoad={() => {
                        setReveal(true);
                    }}
                />
                {reveal === false && (
                    <div className="absolute inset-0 m-auto flex items-center justify-center">
                        <div className="relative flex">
                            <div className="h-8 w-8 rounded-full bg-blue-500"></div>
                            <div className="absolute left-0 top-0 h-8 w-8 animate-ping rounded-full bg-blue-500"></div>
                            <div className="absolute left-0 top-0 h-8 w-8 animate-pulse rounded-full bg-blue-500"></div>
                        </div>
                    </div>
                )}
            </div>
            {isLightboxVisible &&
                createPortal(
                    <div
                        className={clsx('fixed inset-0 m-auto w-auto cursor-pointer bg-white bg-opacity-80')}
                        onClick={closeLightbox}
                    >
                        <div>
                            <Image
                                className={clsx('m-auto object-contain')}
                                src={src}
                                alt={alt}
                                quality={100}
                                fill
                                style={{
                                    maxWidth: meta.width,
                                    maxHeight: meta.height,
                                }}
                                onLoad={(e) => {
                                    const { naturalWidth, naturalHeight } = e.target;
                                    setMeta({
                                        width: naturalWidth,
                                        height: naturalHeight,
                                    });
                                }}
                            />

                            <p
                                className="absolute inset-0 m-auto h-fit w-fit text-xl font-medium"
                                style={{ top: `${meta.height + 48}px` }}
                            >
                                {name}
                            </p>
                        </div>
                    </div>,
                    document.querySelector('#_modal-root')
                )}
        </>
    );
};

export default Lightbox;

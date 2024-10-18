// components/Loader.tsx
import Image from 'next/image';
import React from 'react';

const Loader: React.FC = () => (
    <section className="grid place-content-center h-[77.5vh]">
        <Image
            className="mb-8 mx-auto"
            width={100}
            height={100}
            src={'/bitmap-earth.png'}
            alt="loading"
        />
        <h1 className="font-semibold text-xl mx-auto">Đang load nhó...</h1>
    </section>
);

export default Loader;

import React from 'react';
import Translate from '@docusaurus/Translate';
import styles from './../../pages/index.module.css';
import clsx from 'clsx';

export default function Header() {
    return (
        <header className={clsx('hero hero--primary flex-auto p-0 min-h-[80dvh')}>
            <div className="container flex flex-col justify-center items-center">
                <p className='mt-5 md:mt-0 text-3xl md:text-5xl w-full md:w-4/6 text-center break-words whitespace-normal'><Translate>CRANE Decentralised Health Dataspace Infrastructure</Translate></p>
                <p className='mt-10 text-lg md:text-2xl w-full md:w-4/6 text-center opacity-70 text-black break-words'><span className='inline bg-white'><Translate>Developer Documentation and APIs</Translate></span></p>
                <p className='mb-5 md:mb-0 text:lg md:text-2xl w-full md:w-4/6 text-center opacity-70 text-black break-words'><span className='inline bg-white'><Translate>Onboard, Integrate with and extend via the decentralised health data space</Translate></span></p>
            </div>
        </header>
    );
}

import React from 'react';
import Translate from '@docusaurus/Translate';
import clsx from 'clsx';
import styles from './../../pages/index.module.css';

export default function Header() {
    return (
        <header className={clsx('hero hero--primary flex-auto p-0 min-h-screen')}>
            <div className="container absolute top-[150px] md:top-[225px]">
                <div className={styles.buttons + ['flex']}>
                    <p className='text-3xl md:text-5xl w-full md:w-4/6 text-left break-words whitespace-normal'><Translate>NXD: Enabling trust in the data ecosystem for next-generation data sharing.</Translate></p>
                    <p className='mt-10 text-xl md:text-2xl w-full md:w-4/6 text-left opacity-70 text-black break-words'><span className='inline bg-white'><Translate>Trust within a dataspace is a requisite for safe and secure data sharing.</Translate></span></p>
                </div>
            </div>
        </header>
    );
}

import React from 'react'
import { Spotlight } from './ui/Spotlight';
import { Button } from "./ui/moving-border";
import Link from 'next/link';
function HeroSection() {
    return (
        <div className=' h-auto md:h-[40rem] w-full mx-auto flex items-center rounded-sm justify-center relative overflow-hidden py-10 md:py-0 text-white'>
            <div className="p-4 w-full text-center z-10 relative">
                <Spotlight
                    className="-top-40 left-0 md:left-80 md:-top-20"
                    fill="white"
                />
                <h1 className=' text-4xl font-bold mt-20 md:mt-0 md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Master the art of music</h1>
                <p className='mt-4 text-base md:text-lg font-normal text-neutral-300 mx-auto max-w-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi dolorum iste adipisci accusantium sunt, provident possimus asperiores consectetur consequuntur culpa tempore quos perspiciatis minima cum quibusdam ex officia corporis! Amet?</p>
                <div className='mt-4'>
                    <Link href={'/courses'}>
                        <Button
                            borderRadius="1.75rem"
                            className="bg-white font-bold text-xl dark:bg-black text-white dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                            Submit
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;

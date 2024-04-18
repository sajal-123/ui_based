'use client'
import React from 'react'
import Link from 'next/link'
import { HoverEffect } from "./card-hover-effect";

export const projects = [
    {
        title: "Stripe",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
    },
    {
        title: "Netflix",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "https://netflix.com",
    },
    {
        title: "Google",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
        link: "https://google.com",
    },
    {
        title: "Meta",
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        link: "https://meta.com",
    },
    {
        title: "Amazon",
        description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        link: "https://amazon.com",
    },
    {
        title: "Microsoft",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "https://microsoft.com",
    },
];

function UpcomingWebinars() {
    return (
        <div className=' p-12 bg-gray-900'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className=' text-center'>
                    <h1 className='text-teal-600 text-base font-semibold tracking-wide uppercase'>Featured Webinar</h1>
                    <p className='text-3xl font-extrabold leading-8 mt-2 tracking-light text-white sm:text-4xl'>Enhance Hour Musical Journey</p>
                </div>
                <div className='mt-10 text-center'>
                    <div className="max-w-5xl mx-auto px-8">
                        <HoverEffect items={projects.map(webinar=>(
                            {
                                title:webinar.title,
                                description:webinar.description,
                                link:webinar.link
                            }
                        ))} />
                    </div>
                </div>
                <div className='mt-10 text-center'>
                    <div className='mt-20 text-center'>
                        <Link href={'/'} className=' px-5 py-4 bg-slate-400 text-black rounded-lg'>
                            View All Webinars
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpcomingWebinars

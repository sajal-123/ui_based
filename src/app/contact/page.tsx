import React from "react";
// import { Meteors } from "../../components/ui/meteors";
import { Button } from "../../components/ui/moving-border";
function page() {
    return (
        <div className=" h-[100dvh] w-full pt-24 py-8 md:p-32">

            <div className="flex flex-col justify-center items-center">
                <h1 className=' text-4xl font-bold mt-20 md:mt-0 md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Contact Us</h1>
                <p className=' text-center mb-12 mt-4 text-base md:text-lg font-normal text-neutral-300 mx-auto max-w-lg'>We value your feedback and inquiries! Briefly explain how you can help visitors and what kind of communication you encourage.</p>
                <div className="flex flex-col gap-4 w-full items-center max-h-screen">
                    <input className=" max-w-[100%] md:w-[70%] bg-gray-700 h-10 px-8 rounded-lg" placeholder="EnteR Youor Email" type="text" />
                    <textarea className=" max-w-[100%] md:w-[70%] bg-gray-700  px-8 rounded-lg" name="" id="" cols="30" rows="10" placeholder="Enter Your Message"></textarea>
                    <Button
                        borderRadius="1.75rem"
                        className="bg-white dark:bg-black text-white dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        Explore Courses
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default page;

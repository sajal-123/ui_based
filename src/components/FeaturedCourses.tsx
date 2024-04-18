'use client'
import React from 'react'
import Link from 'next/link'
import { BackgroundGradient } from "./ui/background-gradient";

import courseData from '../data/music_courses.json'
interface Course {
  id: number,
  title: string,
  slug: string,
  description: string,
  price: number,
  instructor: string,
  isFeatured: boolean,
  image: "https://example.com/images/guitar-basics.jpg"
}
function FeaturedCourses() {
  const FeaturedCourses = courseData.courses.filter((course: Course) => course.isFeatured)
  return (
    <div className=' py-12 bg-gray-900'>
      <div>
        <div className="text-center">
          <h1 className='text-teal-600 text-base font-semibold tracking-wide uppercase'>FEATURED COURSES</h1>
          <p className=' text-3xl font-extrabold leading-8 mt-2 tracking-light text-white sm:text-4xl'>Learn With The Best</p>
        </div>
      </div>
      <div className='mt-10'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-8">
          {FeaturedCourses.map((course: Course,id:number) => (
            <div  key={course.id} className='flex justify-center'>
              <BackgroundGradient  className="rounded-[22px] h-full max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                 <div  className="flex items-center flex-grow flex-col p-4 sm:p-6 h-full text-center ">
                  <p className=' dark:text-neutral-400 mt-4 mb-2 p-4 sm:p-6 text-lg sm:text-xl text-black'>{course.title}</p>
                  <p className=' text-neutral-600 sm:text-neutral-400 flex-grow'>{course.description}</p>
                  <Link href={'/courses/'}> {course.slug}</Link>
                 </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-20 text-center'>
        <Link href={'/courses'} className=' px-5 py-4 bg-slate-400 text-black rounded-lg'>
          View All Courses
        </Link>
      </div>
    </div>
  )
}

export default FeaturedCourses

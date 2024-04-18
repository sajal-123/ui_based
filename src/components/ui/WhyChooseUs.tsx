"use client";
import { StickyScroll } from "./sticky-scroll-reveal";
import Image from "next/image";
import img from '../../../public/Image.png'
const content=[
      {
        title: "Harmony in Learning",
        description:
          "Discover the art of musical harmony through our comprehensive courses, tailored for all levels of musicians. Dive into a world where notes come alive, melodies blend seamlessly, and creativity knows no bounds. Our experienced instructors guide you through theory, composition, and performance, fostering a deep understanding of music's language.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
            Harmony in Learning
          </div>
        ),
      },
      {
        title: "Collaborative Editing",
        description:
          "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
            <Image
          src={img}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
          </div>
        ),
      },
      {
        title: "Version control",
        description:
          "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
            Version control
          </div>
        ),
      },
      {
        title: "Running out of content",
        description:
          "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
            Running out of content
          </div>
        ),
      },
      
    ];
function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs

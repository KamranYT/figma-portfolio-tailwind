"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper"; // Import type separately
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

// Define the Project type
interface Project {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: { name: string }[];
  image: string;
  live: string;
  github: string;
}

// Define the projects array
const projects: Project[] = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eius, earum, blanditiis modi pariatur temporibus qui non enim aut, odit aspernatur dolorum. Nam aliquam corrupti incidunt accusantium, natus vel exercitationem.",
    stack: [{ name: "Html 5" }, { name: "css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eius, earum, blanditiis modi pariatur temporibus qui non enim aut, odit aspernatur dolorum. Nam aliquam corrupti incidunt accusantium, natus vel exercitationem.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eius, earum, blanditiis modi pariatur temporibus qui non enim aut, odit aspernatur dolorum. Nam aliquam corrupti incidunt accusantium, natus vel exercitationem.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
];

const Work: React.FC = () => {
  const [project, setProject] = useState<Project>(projects[0]);

  // Define the type for Swiper event
  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.1, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 bg-gray-200 mt-20"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline num */}
              <div className="text-8xl leading-none font-extrabold text-yellow-400 text-transparent text-outline">
                {project.num}
              </div>
              {/* Project category */}
              <h2 className="text-[42px] font-bold leading-3 text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* Project description */}
              <p className="text-white/60">{project.description}</p>
              {/* Stack */}
              <ul className="flex gap-6">
                {project.stack.map((item, index) => (
                  <li className="text-xl text-accent" key={index}>
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              <div className="border border-white/20"></div>
              {/* Buttons */}
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* GitHub project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* Overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* Image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* Slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom=[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="your-button-styles" // Replace with actual styles
                iconsStyle="your-icon-styles" // Replace with actual styles
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
















// <motion.section
//   initial={{ opacity: 0 }}
//   animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
//   className="min-h-[80vh] flex flex-col justify-center mt-40 py-12 xl:px-0 bg-yellow-500 xl:min-h-[90vh]" // Increase min-h for larger screens
// >
//   <div className="container mx-auto xl:max-w-screen-xl"> {/* Set max-width to match large screens */}
//     <div className="flex flex-col xl:flex-row xl:gap-[30px]">
//       <div className="w-full xl:w-[50%] xl:h-[460px] 2xl:h-[600px] flex flex-col xl:justify-between order-2 xl:order-none">
//         <div className="flex flex-col gap-[30px] h-[50%]">
//           {/* Outline num */}
//           <div className="text-8xl leading-none font-extrabold text-transparent text-outline text-neutral-950">
//             {project.num}
//           </div>
//           {/* Project category */}
//           <h2 className="text-[42px] 2xl:text-[56px] font-bold leading-3 text-white group-hover:text-yellow-500 transition-all duration-500 capitalize">
//             {project.category} project
//           </h2>
//           {/* Project description */}
//           <p className="text-white/60">{project.description}</p>
//           {/* Stack */}
//           <ul className="flex gap-6">
//             {project.stack.map((item, index) => (
//               <li className="text-xl text-accent" key={index}>
//                 {item.name}
//                 {index !== project.stack.length - 1 && ","}
//               </li>
//             ))}
//           </ul>

//           <div className="border border-white/20"></div>
//           {/* Buttons */}
//           <div className="flex items-center gap-4">
//             <Link href={project.live}>
//               <TooltipProvider delayDuration={100}>
//                 <Tooltip>
//                   <TooltipTrigger className="w-[70px] h-[70px] 2xl:w-[90px] 2xl:h-[90px] rounded-full bg-white/5 flex justify-center items-center group">
//                     <BsArrowUpRight className="text-white text-3xl 2xl:text-4xl group-hover:text-accent" />
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p>Live project</p>
//                   </TooltipContent>
//                 </Tooltip>
//               </TooltipProvider>
//             </Link>
//             {/* GitHub project button */}
//             <Link href={project.github}>
//               <TooltipProvider delayDuration={100}>
//                 <Tooltip>
//                   <TooltipTrigger className="w-[70px] h-[70px] 2xl:w-[90px] 2xl:h-[90px] rounded-full bg-white/5 flex justify-center items-center group">
//                     <BsGithub className="text-white text-3xl 2xl:text-4xl group-hover:text-accent" />
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p>GitHub project</p>
//                   </TooltipContent>
//                 </Tooltip>
//               </TooltipProvider>
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div className="w-full xl:w-[50%] 2xl:h-[600px]"> {/* Adjust height for large screens */}
//         <Swiper
//           spaceBetween={30}
//           slidesPerView={1}
//           className="xl:h-[520px] 2xl:h-[600px] mb-12"
//           onSlideChange={handleSlideChange}
//         >
//           {projects.map((project, index) => (
//             <SwiperSlide key={index} className="w-full">
//               <div className="h-[460px] 2xl:h-[600px] relative group flex justify-center items-center bg-pink-50/20">
//                 {/* Overlay */}
//                 <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
//                 {/* Image */}
//                 <div className="relative mr-10">
//                   <Image
//                     src={project.image}
//                     fill
//                     className="object-cover"
//                     alt=""
//                   />
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//           {/* Slider buttons */}
//           <WorkSliderBtns
//             containerStyles="flex gap-2 absolute right-0 bottom=[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
//             btnStyles="your-button-styles" // Replace with actual styles
//             iconsStyle="your-icon-styles" // Replace with actual styles
//           />
//         </Swiper>
//       </div>
//     </div>
//   </div>
// </motion.section>

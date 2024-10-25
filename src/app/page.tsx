// app/page.tsx
import React from 'react';
import { FaLinkedinIn } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
// import { useRouter } from 'next/navigation';

 

export default function Home() {
  // const router = useRouter();
  // const navigateToProject = () => {
  //   router.push("/Projects")
  // }
  return (
    <div className="flex justify-between ">
      <div className="ml-44 mt-40">
        <h2 className="text-yellow-500">UI/UX DESIGNER</h2>
        <h1 className="text-5xl font-bold text-slate-800">Hello, My Name is <br /> <span className='text-yellow-500 font-bold'>Muhammad Kamran</span></h1>
        <p className='text-slate-800'>
          Short text with details about you, what you do, or your professional <br /> career. You can add more information on the about page. <br />Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimussit <br /> dignissimos! Commodi quos incidunt cupiditate mollitia voluptates, <br /> nisi provident quia id laboriosam similique eaque nobis, laborum, <br /> quasi accusamus corrupti fugiat?
        </p>
        <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button

             variant="outline"
             size="lg"
             className="uppercase flex items-center gap-2 hover:bg-yellow-500 rounded-xl mt-5 font-semibold"
            //  onClick={navigateToProject}
            >
              
              <Link href="/project" >
              <span>Projects</span>
              </Link>


              <GoProjectSymlink />
              
            </Button>
            <Button
             variant="outline"
             size="lg"
             className="flex items-center gap-2 mt-5 hover:bg-yellow-500 rounded-xl font-semibold"
            >
              <span>LinkedIn</span>
              {/* <FaLinkedinIn className="text-xl" /> */}
              
              <a
            href="https://www.linkedin.com/in/muhammad-kamran-916b752b4/"  // Replace with your LinkedIn URL
            target="_blank"  // Opens link in a new tab
            rel="noopener noreferrer"  // Security best practice
            // className="flex items-center gap-2 text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            <FaLinkedinIn className="text-xl" />  {/* Optional LinkedIn Icon */}
          </a>


            </Button>
            <div className="mb-8 xl:mb-0">
              </div>
              </div>
             
      </div>
      <div className="pt-0 ml-44">
        <Image src="/img.png" alt="" width={620} height={630} />
      </div>
    </div>
  );
    }

// www.linkedin.com/in/muhammad-kamran-916b752b4
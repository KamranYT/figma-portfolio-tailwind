
// AboutPage.tsx
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { TiDocumentText } from "react-icons/ti";

function AboutPage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-5">
      {/* Text Section */}
      <div className="mt-20 ml-36">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
          Hi, I am Kamran. I am a web developer with a passion for creating <br />
          beautiful and functional websites.I specialize in React development, <br />
          and I love building responsive, user-friendly web applications. <br />
        </p>
        <Button

variant="outline"
size="lg"
className="uppercase flex items-center gap-2 hover:bg-yellow-500 rounded-xl mt-5 font-semibold"
//  onClick={navigateToProject}
>
 
 <Link href="/project" >
 <span>Resume</span>
 </Link>


 <TiDocumentText />

 
</Button>
      </div>

      {/* Image Section */}
      <div className="mt-20 mr-20">
        <Image
          src="/img2.png"
          alt="About Me"
          className="rounded-lg shadow-lg"
          width={450} height={450}
        />
      </div>
    </div>
  );
};

export default AboutPage;

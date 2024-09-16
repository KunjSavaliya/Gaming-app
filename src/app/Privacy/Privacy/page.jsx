'use client'; // Required for client-side hooks in the App Router

import React, { Suspense } from 'react'; /// 
import { AiOutlineLoading } from 'react-icons/ai'; 

function Privacy() { // Get the title from the U


  return (
    <div className="flex flex-col items-center p-5">
      <div className="w-full max-w-screen-lg">
    
        <h1 className='text-2xl mt-2 text-[#69a2ff] mb-2'>Description</h1>
        <hr className="w-full border-gray-300 border-t-1" />
        <div className="mt-2 ">
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base">
          hello
          </h2>
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base">
          hello
          </h2>
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base">
          hello
          </h2>
        </div>
        <h1 className='text-2xl mt-2 text-[#69a2ff] mb-2'>Screenshot</h1>
        <hr className="w-full border-gray-300 border-t-1" />

        <h1 className='text-2xl mt-2 text-[#69a2ff] mb-2'>How To Play</h1>
        <hr className="w-full border-gray-300 border-t-1" />
        <div className="mt-2 ">
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base">
          hello
          </h2>
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base">
          hello
          </h2>
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base">
          hello
          </h2>
        </div>
      </div>
     
    </div>
  );
}

export default function GameDescription() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <AiOutlineLoading className="animate-spin text-4xl" />
        </div>
      }
    >
      <Privacy />
    </Suspense>
  );
}

'use client'; // Required for client-side hooks in the App Router

import React, { Suspense } from 'react'; /// 
import { AiOutlineLoading } from 'react-icons/ai'; 

function AboutUs() { // Get the title from the URL




  return (
    <div className="flex flex-col items-center p-5">
      <div className="w-full max-w-screen-lg">
    
        <h1 className='text-5xl mt-2 text-[#69a2ff] mb-2'>About US</h1>
        <hr className="w-full border-gray-300 border-t-1" />
        <div className="mt-2 ">
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base">
          Welcome to pupulargamesforyou.com, your ultimate destination for the most popular and engaging games on the internet. We're passionate about bringing you a curated collection of the hottest, most addictive, and most entertaining games that the online world has to offer. At pupulargamesforyou.com, we believe that gaming should be accessible, fun, and social. Whether you're a casual player looking for a quick distraction or a dedicated gamer seeking your next obsession, our diverse library of games has something for everyone. From pulse-pounding action titles to brain-teasing  puzzles, from nostalgic classics to cutting-edge releases, we've handpicked the best of the best to ensure your gaming experience is always top-notch. Our mission is to create a vibrant community where gamers of all levels can come together, share experiences, and discover new favorites. We regularly update our selection to keep up with the latest trends and hidden gems in the gaming world, ensuring that you always have something fresh and exciting to play. At pupulargamesforyou.com, we're more than just a gaming site – we're your go-to resource for all things related to popular  online games. Our team of gaming enthusiasts works tirelessly to provide you with insightful reviews, helpful tips and tricks, and the latest news from the gaming industry. Whether you're looking to kill a few minutes or lose yourself for hours in an immersive gaming experience, pupulargamesforyou.com is here to satisfy your gaming cravings. Join our community today and dive into a world where fun knows no bounds. Get ready to play, compete, and connect – your next favorite game is just a click away!
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
        <div className="flex items-center justify-center h-screen">
          <AiOutlineLoading className="text-4xl animate-spin" />
        </div>
      }
    >
      <AboutUs />
    </Suspense>
  );
}

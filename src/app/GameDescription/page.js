'use client'; // Required for client-side hooks in the App Router

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation'; // For extracting query params
import Image from 'next/image';
import { imgTile } from '../Home/gameTitle';
import { ActionPhoto } from '../GamePages/ActionPages'; // Adjust the path to gameTitle
import { useRouter } from 'next/navigation';
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { AdventurePhoto } from '../GamePages/AdventurePage';
import { CardPhoto } from '../GamePages/CardPage';
import { RacingPhoto } from '../GamePages/RacingPage';
import Carousel from '../Components/Carousel';
import { PuzzlePhoto } from '../GamePages/PuzzlePage';


function GameDetails() {
  const searchParams = useSearchParams();
  const title = searchParams.get('title'); // Get the title from the URL
  const router = useRouter();

  const photos = imgTile.concat(ActionPhoto, AdventurePhoto, CardPhoto, RacingPhoto,PuzzlePhoto);
  // Find the game based on the title
  const game = photos.find((game) => game?.title === title);

  // Handle case where game is not found
  if (!game) {
    return <p>Game not found!</p>;
  }

  const handleClick = () => {
    router.push('/');
  };

  const handleAppStoreClick = () => {
    const userConfirmed = window.confirm("Are you sure you want to continue?");
    if (userConfirmed) {
      window.location.href = game.Appto; // Redirect to the App Store link
    }
  };

  const handlePlayStoreClick = () => {
    const userConfirmed = window.confirm("Are you sure you want to continue?");
    if (userConfirmed) {
      window.location.href = game.Playto; // Redirect to the App Store link
    }
  };

  return (
    <div className="flex flex-col items-center p-5">
      <div className="w-full max-w-screen-lg">
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <p className="text-gray-400 cursor-pointer" onClick={handleClick}>Home</p>
            <span className="font-light text-[#696969]"> {'>'} </span>
            <span className="font-light text-[#696969]">{game?.title}</span>
          </div>
          <hr className="w-full mb-4 border-gray-300 border-t-1" />
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          {/* Game Image */}
          <div className="relative w-full h-40 overflow-hidden rounded-lg md:w-40">
            <Image
              src={game.img}
              alt={game.title}
              className="bg-cover rounded-lg"
              layout="responsive" // This sets the image to be responsive.
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              width={500} // Provide a width for responsive images.
              height={300} // Provide a height for responsive images.
            />
          </div>

          {/* Game Details */}
          <div className="flex-1 font-light text-[#696969]">
            <div className="flex flex-col justify-around gap-6 mb-6 md:flex-row">
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl text-[#69a2ff] mb-4">{game?.title}</h1>
                <div className='flex flex-col gap-3 md:flex-row md:gap-6'>
                  <div>
                    <h2 className="font-semibold">File Size:</h2>
                    <p>{game?.fileSize}</p>
                  </div>
                  <div>
                    <h2 className="font-semibold">Current Version:</h2>
                    <p>{game?.version}</p>
                  </div>
                  <div>
                    <h2 className="font-semibold">Updated Time:</h2>
                    <p>{game?.time}</p>
                  </div>
                </div>
              </div>

              {/* Download Links */}
              <div className="flex flex-col gap-4 cursor-pointer">
                <div className="p-4 text-white bg-black rounded-lg" onClick={handleAppStoreClick} >
                  <h2 className="flex items-center gap-2">
                    <FaApple className="text-xl font-extrabold text-white" />
                    Get it from App Store
                  </h2>
                  <p>Link Provided by App Store</p>
                </div>
                <div className="p-4 text-white bg-black rounded-lg" onClick={handlePlayStoreClick}>
                  <h2 className="flex items-center gap-2">
                    <IoLogoGooglePlaystore className="text-xl font-extrabold text-white" />
                    Get it from Google Play
                  </h2>
                  <p>Link Provided by Google Store</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 ">
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base">
            <AiFillSafetyCertificate className="text-lg md:text-xl font-extrabold text-[#696969]" />
            All download links on this website jump to official platforms such as App Store and Google Play. No viruses, No malware.
          </h2>
        </div>

        <h1 className='text-2xl mt-2 text-[#69a2ff] mb-2'>Description</h1>
        <hr className="w-full border-gray-300 border-t-1" />
        <div className="mt-2 ">
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base">
            {game?.description}
          </h2>
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base">
            {game?.description1}
          </h2>
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base">
            {game?.description2}
          </h2>
        </div>
        <h1 className='text-2xl mt-2 text-[#69a2ff] mb-2'>Screenshot</h1>
        <hr className="w-full border-gray-300 border-t-1" />

        <h1 className='text-2xl mt-2 text-[#69a2ff] mb-2'>How To Play</h1>
        <hr className="w-full border-gray-300 border-t-1" />
        <div className="mt-2 ">
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base">
            {game?.play}
          </h2>
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base">
            {game?.play1}
          </h2>
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base">
            {game?.play2}
          </h2>
        </div>
      </div>
      <div className='mt-5'>
        <Carousel />
      </div>
    </div>
  );
}

export default function GameDescription() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GameDetails />
    </Suspense>
  );
}

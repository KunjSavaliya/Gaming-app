'use client'; // Required for using hooks in the App Router

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // 'next/navigation' in Next.js 13+
import { imgTile } from './gameTitle'; // Adjust the path
import { ActionPhoto } from '../GamePages/ActionPages';
import { CardPhoto } from '../GamePages/CardPage';
import { AdventurePhoto } from '../GamePages/AdventurePage';
import Carousel from '../Components/Carousel'


import 'animate.css';

function HomeGames() {
  const router = useRouter();

  const handleImageClick = (game) => {
    const encodedTitle = encodeURIComponent(game.title); // URL-safe title
    router.push(`/GameDescription?title=${encodedTitle}`);
  };

  return (
    <>
      {/* Action */}
      <div className="flex flex-col  items-center justify-center p-5">
        <Carousel />

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {ActionPhoto.map((item, index) => (
            <div
              className="relative group"
              key={item.id || index}
              onClick={() => handleImageClick(item)}
            >
              <div className="relative overflow-hidden rounded-[30px] w-36 h-36 cursor-pointer">
                <Image
                  src={item.img}
                  alt={item.title}
                  className="bg-cover rounded-lg"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  width={500}
                  height={300} />

                <div
                  style={{ borderRadius: '30%' }}
                  className="absolute inset-x-0 bottom-0 flex items-center justify-center p-2 bg-opacity-80 bg-[#ff56f8] opacity-0 group-hover:opacity-100 animate__animated group-hover:animate__backInUp"
                >
                  <p className="text-lg text-white truncate font-lighter">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center p-5">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {CardPhoto.map((item, index) => (
            <div
              className="relative group"
              key={item.id || index}
              onClick={() => handleImageClick(item)}
            >
              <div className="relative overflow-hidden rounded-[30px] w-36 h-36 cursor-pointer">
                <Image
                  src={item.img}
                  alt={item.title}
                  className="bg-cover rounded-lg"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  width={500}
                  height={300} />

                <div
                  style={{ borderRadius: '30%' }}
                  className="absolute inset-x-0 bottom-0 flex items-center justify-center p-2 bg-opacity-80 bg-[#ff56f8] opacity-0 group-hover:opacity-100 animate__animated group-hover:animate__backInUp"
                >
                  <p className="text-lg text-white truncate font-lighter">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center p-5">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {AdventurePhoto.map((item, index) => (
            <div
              className="relative group"
              key={item.id || index}
              onClick={() => handleImageClick(item)}
            >
              <div className="relative overflow-hidden rounded-[30px] w-36 h-36 cursor-pointer">
                <Image
                  src={item.img}
                  alt={item.title}
                  className="bg-cover rounded-lg"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  width={500}
                  height={300} />

                <div
                  style={{ borderRadius: '30%' }}
                  className="absolute inset-x-0 bottom-0 flex items-center justify-center p-2 bg-opacity-80 bg-[#ff56f8] opacity-0 group-hover:opacity-100 animate__animated group-hover:animate__backInUp"
                >
                  <p className="text-lg text-white truncate font-lighter">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center p-5">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {imgTile.map((item, index) => (
            <div
              className="relative group"
              key={item.id || index}
              onClick={() => handleImageClick(item)}
            >
              <div className="relative overflow-hidden rounded-[30px] w-36 h-36 cursor-pointer">
                <Image
                  src={item.img}
                  alt={item.title}
                  className="bg-cover rounded-lg"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  width={500}
                  height={300} />

                <div
                  style={{ borderRadius: '30%' }}
                  className="absolute inset-x-0 bottom-0 flex items-center justify-center p-2 bg-opacity-80 bg-[#ff56f8] opacity-0 group-hover:opacity-100 animate__animated group-hover:animate__backInUp"
                >
                  <p className="text-lg text-white truncate font-lighter">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomeGames;

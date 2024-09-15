import { useState, useEffect } from 'react';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import { ActionPhoto } from '../GamePages/ActionPages';
import { AdventurePhoto } from '../GamePages/AdventurePage';
import { CardPhoto } from '../GamePages/CardPage';
import { RacingPhoto } from '../GamePages/RacingPage';

import { imgTile } from '../Home/gameTitle';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(7); // Default number of images

  const photos = imgTile.concat(ActionPhoto, AdventurePhoto, CardPhoto, RacingPhoto)

  // Update the number of images per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(2); // Mobile screens
      } else if (window.innerWidth >= 640 && window.innerWidth < 768) {
        setItemsPerPage(3); // Small screens
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setItemsPerPage(4); // Medium screens
      } else if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
        setItemsPerPage(7); // Large screens
      } else {
        setItemsPerPage(7); // Extra-large screens
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call on mount to set initial value

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-scroll carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Math.floor(photos.length / itemsPerPage) ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [photos.length, itemsPerPage]);

  return (
    <div className="relative  mb-6">
      {/* Image grid */}
      <div className="relative grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 transition-transform duration-500 ease-in-out">
        {photos.slice(currentIndex, currentIndex + itemsPerPage).map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <div className="relative overflow-hidden rounded-[30px] w-[100px] h-[100px] cursor-pointer">
              <Image
                src={image.img}
                alt={image.title}
                className="object-cover rounded-lg w-full h-full"
                width={100}
                height={100}
              />
              <div
                style={{ borderRadius: '30%' }}
                className="absolute inset-x-0 bottom-0 flex items-center justify-center p-2 bg-opacity-80 bg-[#ff56f8] opacity-0 group-hover:opacity-100 animate__animated group-hover:animate__backInUp"
              >
                <p className="text-sm text-white truncate font-lighter">{image.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Left Button */}
      <div className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 z-10">
        <button
          className="px-4 py-2 text-[#69a2ff]  rounded-full  focus:outline-none"
          onClick={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === 0 ? Math.floor(photos.length / itemsPerPage) : prevIndex - 1
            )
          }
        >
          &#9664;
        </button>
      </div>

      {/* Right Button */}
      <div className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 z-10">
        <button
          className="px-4 py-2 text-[#69a2ff] rounded-full  focus:outline-none"
          onClick={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === Math.floor(photos.length / itemsPerPage) ? 0 : prevIndex + 1
            )
          }
        >
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default Carousel;

import { useState, useEffect } from 'react';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import { ActionPhoto } from '../GamePages/ActionPages';
import { AdventurePhoto } from '../GamePages/AdventurePage';
import { CardPhoto } from '../GamePages/CardPage';
import { RacingPhoto } from '../GamePages/RacingPage';
import { PuzzlePhoto } from '../GamePages/PuzzlePage';
import { useRouter } from 'next/navigation';
import { imgTile } from '../Home/gameTitle';
import { useSearch } from './SerchContext';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(7);
  const { isSearchVisible, setIsSearchVisible } = useSearch();

  const router = useRouter();
  const photos = imgTile.concat(ActionPhoto, AdventurePhoto, CardPhoto, RacingPhoto, PuzzlePhoto)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 640 && window.innerWidth < 768) {
        setItemsPerPage(5);
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setItemsPerPage(7);
      } else if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
        setItemsPerPage(9);
      } else {
        setItemsPerPage(9);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Math.floor(photos.length / itemsPerPage) ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [photos.length, itemsPerPage]);

  const handleImageClick = (game) => {
    setIsSearchVisible(false)
    const encodedTitle = encodeURIComponent(game.title);
    router.push(`/GameDescription?title=${encodedTitle}`);
  };
  return (
    <div className="relative mb-6">
      <div className="relative grid grid-cols-3 gap-6 transition-transform duration-500 ease-in-out sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9">
        {photos.slice(currentIndex, currentIndex + itemsPerPage).map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full" onClick={() => handleImageClick(image)}>
            <div className="relative overflow-hidden rounded-[30px] w-[70px] h-[70px] cursor-pointer">
              <Image
                src={image.img}
                alt={image.title}
                className="object-cover w-full h-full rounded-lg"
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

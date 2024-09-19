import React from 'react';
import Image from 'next/image';
import "../globals.css"; // Custom global styles
import { useSearchParams } from 'next/navigation';
import { AdventurePhoto } from '../GamePages/AdventurePage';
import { CardPhoto } from '../GamePages/CardPage';
import { RacingPhoto } from '../GamePages/RacingPage';
import Carousel from '../Components/Carousel';
import { PuzzlePhoto } from '../GamePages/PuzzlePage';
import { ActionPhoto } from '../GamePages/ActionPages'; // Adjust the path to gameTitle
import { imgTile } from "../Home/gameTitle";

const GameSlider = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get('title'); // Get the title from the URL

  const photos = imgTile.concat(ActionPhoto, AdventurePhoto, CardPhoto, RacingPhoto, PuzzlePhoto);
  const gameScreenshot = photos.find((game) => game?.title === title);

  return (
    <div className="relative w-full max-w-6xl mx-auto my-8">
      {/* Horizontal scroll container with custom scrollbar */}
      <div className="flex py-4 space-x-4 overflow-x-scroll cursor-pointer custom-scrollbar">
        {/* Check if gameScreenshot exists and has screenshots */}
        {gameScreenshot?.screenShot?.map((src, index) => (
          <div
            key={index}
            className="min-w-[250px] sm:min-w-[250px] md:min-w-[250px] lg:min-w-[280px] xl:min-w-[300px]"
          >
            <Image
              src={src}
              alt={`Screenshot ${index + 1}`}
              className="bg-cover rounded-lg"
              width={500}
              height={300}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameSlider;

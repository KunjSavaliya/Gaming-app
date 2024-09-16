'use client'; 

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CardPhoto } from '../../GamePages/CardPage'; 
import Carousel from '../../Components/Carousel'

function Card() {
    const router = useRouter();

    const handleImageClick = (game) => {
        const encodedTitle = encodeURIComponent(game.title); 
        router.push(`/GameDescription?title=${encodedTitle}`);
    };

    return (
        <div className="flex flex-col items-center justify-center p-5  mb-[17%]">
                         <Carousel />
s
                <div className="bg-[#69a2ff] p-2 grid grid-cols-3 gap-6 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8 rounded-lg mb-3 border-white "style={{boxShadow: "rgb(157 194 255) 0px 2px 4px, rgb(157 194 255) 0px 7px 13px -3px, rgb(157 194 255) 0px -2px 0px inset"}}>
                <h1 className="pl-6 text-3xl text-white font-lighter ">Card</h1>
            </div>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {CardPhoto?.map((item,index) => (
                    <div
                        className="relative group animate__animated animate__backInDown"
                        key={item.id || index} 
                        onClick={() => handleImageClick(item)}
                    >
                        <div className="relative overflow-hidden rounded-[30px] w-36 h-36 cursor-pointer">
                            <Image
                                src={item.img}
                                alt={item.title}
                                className="bg-cover rounded-lg "
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                width={500}
                                height={300}
                            />

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
    );
}

export default Card;

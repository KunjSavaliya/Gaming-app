
'use client';
import React, { useState } from 'react';
import Image from 'next/image';


function Footer() {

    return (
        <>
            <div className="flex flex-col items-center p-5">
                <div className="w-full max-w-screen-lg">
                    <hr className="w-full mb-4 border-gray-300 border-t-1" />

                    <div className='flex gap-12 '>
                        <h1 className='font-light text-[#696969]'>About Us</h1>
                        <h1 className='font-light text-[#696969]'>Privacy</h1>
                        <h1 className='font-light text-[#696969]'>Terms of Use</h1>

                    </div>
                    <h1 className='font-light text-[#696969] mt-6'>Copyright © 2024 populargamesforyou.com</h1>

                </div>
            </div>
            <hr className="w-full  border-gray-300 border-t-1" />
            <h1 className='font-light text-[#696969] text-center p-2'>This site uses Google AdSense ad intent links. AdSense automatically generates these links and they may help creators earn money.</h1>


        </>
    );
}

export default Footer;

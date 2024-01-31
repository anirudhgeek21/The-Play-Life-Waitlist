import React from 'react';
import Img from './22.png';

const Card = () => {
  return (
    <div className="flex p-4 mt-0 md:mt-28">
      
      <div className="flex-shrink-0 w-[30%] hidden md:block">
        <img className="w-[60%] h-[88%] text-center mx-auto hidden md:block" src={Img} alt="Image" />
      </div>


      <img
        className="absolute top-[60%] w-14 right-2 md:top-[54%] md:w-16 md:left-[86%] animate-spin animate-spin-slow "
        src="https://static.wixstatic.com/media/3d4fa2c4517b13e27346085b124ee8cf.png/v1/fill/w_300,h_296,al_c,lg_1,q_85,enc_auto/Polygon%206.png"
        alt=""
      />

<img
        className="absolute top-[15.5%] w-20 left-5 md:top-[44%] md:w-16 md:left-[81.5%] animate-spin animate-spin-slow "
        src="https://static.wixstatic.com/media/3d4fa2c4517b13e27346085b124ee8cf.png/v1/fill/w_300,h_296,al_c,lg_1,q_85,enc_auto/Polygon%206.png"
        alt=""
      />

<img
        className="absolute top-[100%] w-20 left-3 md:top-[34%] md:w-16 md:left-[86%] animate-spin animate-spin-slow hidden md:block"
        src="https://static.wixstatic.com/media/3d4fa2c4517b13e27346085b124ee8cf.png/v1/fill/w_300,h_296,al_c,lg_1,q_85,enc_auto/Polygon%206.png"
        alt=""
      />




      <div className="ml-4 w-full">
        <h2 className="text-7xl md:text-8xl font-bold mb-7 md:mb-16 mt-10 md:mt-32">OUR VISION</h2>
        <p className="text-gray-700 text-lg md:text-2xl px-12">Ever felt a bit lonely on life's journey? We get it. Social media can sometimes make you feel not so great. But we've got a cool idea! Let's turn your daily routine into a game. Imagine earning points for getting stuff done. No more boring days! We're all about connecting with others, sharing cool stuff, and making life way more exciting. Join us in turning everyday life into an awesome adventure!</p>
      </div>
    </div>
  );
};

export default Card;

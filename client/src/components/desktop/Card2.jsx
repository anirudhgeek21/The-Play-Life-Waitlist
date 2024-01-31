import React from 'react';
import Img from './21.png';

const Card2 = () => {
  return (
    <div className="flex p-4 mt-0 mb-20">

    <div className="ml-4 w-full">
        <h2 className="text-5xl md:text-8xl font-bold mb-7 md:mb-16 mt-10 md:mt-36">REWARDING YOU</h2>
        <p className="text-gray-700 text-lg md:text-2xl px-12">Join early, refer friends, and earn tpl coins! We will buy back these coins with 1% of our profits when we are funded, thanking you for helping us grow. Act fast—limited coins available. Join our journey and invite others! 🚀</p>
      </div>
      
      <div className="flex-shrink-0 w-[30%] hidden md:block">
        <img className="w-[70%] h-[100%] mx-auto hidden md:block" src={Img} alt="Image" />
      </div>

      
    </div>
  );
};

export default Card2;

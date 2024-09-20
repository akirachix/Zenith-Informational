import React from 'react';
import Image from 'next/image';

const LandingPage = () => {
  return (
    <div  id="home"className="relative h-[calc(100vh-4.5rem)] font-serif">
      <Image
        src="/landingpage.png"
        alt="Drainage system"
        layout="fill"
        objectFit="cover"
        className="brightness-100"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
        <h1 className="text-3xl md:text-8xl font-bold mb-4 text-blue-600">Blockage Buster</h1>
        <p className="text-lg md:text-2xl mb-6 font-bold">Say goodbye to drainage disasters with our smart solution!</p>
        <button className="bg-blue-600 hover:bg-blue-1000 text-white font-bold py-2 px-6 rounded-full text-base">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
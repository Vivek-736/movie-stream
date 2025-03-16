"use client";
import React from 'react';

interface MainBoardProps {
  movie: {
    title: string;
    videoUrl: string;
    thumbnailUrl: string;
  };
}

const MainBoard: React.FC<MainBoardProps> = ({ movie }) => {
  const videoId = movie.videoUrl.split('v=')[1]?.split('&')[0];
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`;

  return (
    <div className="relative h-[56.25vw] w-full">
      <iframe
        className="w-full h-full object-cover brightness-[60%]"
        src={embedUrl}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={movie.title}
      />
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <h1 className="text-white text-3xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {movie.title}
        </h1>
      </div>
    </div>
  );
};

export default MainBoard;

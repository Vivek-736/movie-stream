/* eslint-disable @next/next/no-img-element */
"use client";

import React from 'react';

interface MovieRowProps {
  title: string;
  movies: {
    title: string;
    videoUrl: string;
    thumbnailUrl: string;
    genre: string;
  }[];
}

const MovieRow: React.FC<MovieRowProps> = ({ title, movies }) => {
  const handleFullscreen = (videoUrl: string) => {
    const videoId = videoUrl.split('v=')[1];
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100vw';
    container.style.height = '100vh';
    container.style.zIndex = '9999';

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.allowFullscreen = true;

    container.appendChild(iframe);
    document.body.appendChild(container);
    
    container.requestFullscreen().catch(console.error);

    const exitHandler = () => {
      if (!document.fullscreenElement) {
        document.body.removeChild(container);
      }
    };
    
    document.addEventListener('fullscreenchange', exitHandler);
  };

  return (
    <div className="px-4 md:px-16 py-8">
      <h2 className="text-white text-xl md:text-2xl mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div
            key={movie.title}
            className="relative aspect-video cursor-pointer group"
            onClick={() => handleFullscreen(movie.videoUrl)}
          >
            <img
              src={movie.thumbnailUrl}
              alt={movie.title}
              className="w-full h-full object-cover rounded-md group-hover:opacity-75 transition-opacity"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h3 className="text-white text-sm md:text-base font-semibold">
                {movie.title}
              </h3>
              <p className="text-gray-300 text-xs md:text-sm">{movie.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieRow;

import React from 'react';

export default function FavouritePage() {
  return (
    <div className="flex flex-col space-y-4 justify-center mx-auto mt-6 overflow-x-hidden max-w-md rounded-4xl h-[640px] bg-gradient-to-b from-yellow-400 to-indigo-500 transition-colors duration-300">
      <div className="ml-6 items-left">
        <h1 className="text-2xl font-extrabold text-indigo-400">Your Favourite Quotes</h1>
        <p className="text-sm text-indigo-300 mb-4 font-bold">Here are your saved quotes!</p>
      </div>
      {/* Add your favourite quotes display component here */}
    </div>
  );
}
import React from 'react';
import { Button } from '@/components/ui/button';
export default function AddQuotePage() {
  return (
    <div className="flex flex-col space-y-4 justify-center mx-auto mt-6 overflow-x-hidden max-w-md rounded-4xl h-[640px] bg-gradient-to-b from-yellow-400 to-indigo-500 transition-colors duration-300">
      <div className="ml-6 items-left">
        <h1 className="text-2xl font-extrabold text-indigo-400">Add a Quote</h1>
        <p className="text-sm text-white mb-4">Share your inspiration with others!</p>
      </div>

      <form className="mx-4 p-2 rounded-lg shadow-md">
        <textarea
          className="w-full h-32 p-2 border border-indigo-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Write your quote here..."
        />
        <Button
          type="submit"
          className="mt-4 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold rounded-lg transition-colors duration-300"
        >
          Add Quote
        </Button>
      </form>
    </div>
  );
}
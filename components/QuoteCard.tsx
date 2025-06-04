import React from 'react'
import { Button } from '@/components/ui/button';


interface QuoteCardProps {
  quote: string;
  gradient?: string;
  handleClick?: () => void;
}

export default function QuoteCard({quote, gradient, handleClick}: QuoteCardProps){
  return (
    <section className='flex flex-col overflow-x-hidden'>
      <div className="flex-grow flex items-center backdrop-blur-md max-w-sm h-80 rounded-2xl text-indigo-900 quote-card shadow-2xl shadow-amber-200 transition-colors duration-300">
        <h3 className='max-w-xs text-4xl text-wrap font-medium italic shadow-text' suppressHydrationWarning>
          &quot;{quote}&quot;
        </h3>
      </div>
      
      <div className='flex justify-center mt-4'>
        <Button 
          type="button" 
          className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 drop-shadow-xl font-mono italic px-4 py-2 rounded-xl shadow-md transition w-40 h-10" 
          onClick={handleClick}
        >
          Spark Me 🔥❤️‍🔥
        </Button>
      </div>
    </section>
  )
}


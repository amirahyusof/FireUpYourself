import React from 'react'
import { Button } from '@/components/ui/button';
import Greeting from "@/component/Greeting";

interface QuoteCardProps {
  quote: string;
  gradient?: string;
  handleClick?: () => void;
}

export default function QuoteCard({quote, gradient, handleClick}: QuoteCardProps){
  return (
    <section className={`flex flex-col max-w-xl h-[640px] p-6 m-4 rounded-xl text-white shadow-lg ${gradient}`}>
      <div className="items-left">
        <Greeting />
      </div>

      <div className='flex-grow flex items-center -mt-20'>
        <h3 className='max-w-xs text-3xl text-wrap font-semibold italic shadow-text' suppressHydrationWarning>
          "{quote}"
        </h3>
      </div>
      
      <div className='flex justify-center mt-6'>
        <Button 
          type="button" 
          className=" text-black border-2 bg-[#F2F2F2] hover:bg-[#FAF1E6] hover:border-[#FDFAF6] rounded-full w-40 h-10" 
          onClick={handleClick}
        >
          Spark Me 🔥❤️‍🔥
        </Button>
      </div>
    </section>
  )
}


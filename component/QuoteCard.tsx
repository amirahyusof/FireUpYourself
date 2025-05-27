import React from 'react'
import { Button } from '@/components/ui/button';

interface QuoteCardProps {
  quote: string;
  gradient?: string;
  handleClick?: () => void;
}

export default function QuoteCard({quote, gradient, handleClick}: QuoteCardProps){
  return (
    <section className={`max-w-xl h-[640px] p-6 m-4 rounded-xl text-white shadow-lg ${gradient}`}>
      <h3 className='max-w-xs text-3xl text-wrap font-semibold italic py-40'>
        "{quote}"
      </h3>
      <div className='flex mx-auto justify-center items-center mt-10'>
        <Button type="submit" className=" text-black border-2 bg-[#F2F2F2] hover:bg-[#FAF1E6] hover:border-[#FDFAF6] rounded-full w-40 h-10" onClick={handleClick}>
          Spark Me 🔥❤️‍🔥
        </Button>
      </div>
    </section>
  )
}


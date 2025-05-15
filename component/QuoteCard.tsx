import React from 'react'

interface QuoteCardProps {
  quote: string;
  gradient?: string;
  handleClick?: () => void;
}

export default function QuoteCard({quote, gradient, handleClick}: QuoteCardProps){
  return (
    <section className={`p-6 m-4 rounded-xl text-white shadow-lg ${gradient}`}>
      <h3 className='text-lg font-semibold italic'>
        {quote}
      </h3>
      <button type="submit" className="content--button" onClick={handleClick}>
        Spark Me 🔥
      </button>
    </section>
  )
}


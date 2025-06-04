"use client";

import { useState } from "react";
import QuoteCard from "@/components/QuoteCard";
import { motivData } from "@/lib/motivData";


export default function QuoteWrapper(){
  const [RandomIndex, setRandomIndex] = useState(
    Math.floor(Math.random() * motivData.length)
  );
  const shuffleQuote = () => setRandomIndex(Math.floor(Math.random() * motivData.length));

  const { quote, gradient } = motivData[RandomIndex];

  return(
    <div className="flex justify-center">
      <QuoteCard
        quote={quote}
        gradient={gradient}
        handleClick={shuffleQuote}
      />
    </div>
  )
}
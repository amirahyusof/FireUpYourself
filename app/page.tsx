"use client"
import React, { useState, useEffect } from "react";
import QuoteCard from "@/component/QuoteCard";
import { motivData } from "@/lib/motivData";
import Footer from "@/component/footer";

export default function Main(){
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const [motivation, setMotivation] = useState({
    quote :"Be the change that you wish to see in the world.",
    gradient :"bg-gradient-to-r from-red-300 to-yellow-300"
  })
  const [allMotivation, setAllMotivation]= useState(motivData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  function getRandomMotivationQuote(){
    const motivationArray = allMotivation;
    const randomNumber = Math.floor(Math.random() * motivationArray.length);
    const number = motivationArray[randomNumber].quote
    const gradient = motivationArray[randomNumber].gradient

    setMotivation(prevMotivation => ({
      ...prevMotivation,
      quote: number,
      gradient: gradient
    }))
  }

  return (
    <div className="flex flex-col items-center">
      <div className="items-left py-10">
        <h1 className="text-xl font-bold text-left">Hello, Good Morning!</h1>
      </div>
      
      <div className="flex items-center mx-auto justify-center">
        <QuoteCard
          quote={motivation.quote}
          gradient={motivation.gradient}
          handleClick={getRandomMotivationQuote}
        />
      
      </div>
      <Footer />
    </div>
  );
}

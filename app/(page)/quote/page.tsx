import React from "react";
import { Suspense } from "react";
import QuoteWrapper from "@/components/randomQuote";
import Greeting from "@/components/Greeting";

export default function QuotePage(){
  return (
    <div className="flex flex-col space-y-8 justify-center mx-auto mt-6 overflow-x-hidden max-w-md rounded-4xl h-[640px] bg-gradient-to-b from-yellow-400 to-indigo-500 transition-colors duration-300">
      <div className="ml-6 items-left -mt-20">
        <Greeting />
      </div>

      <Suspense fallback={<p>Loading quote...</p>}>
        <QuoteWrapper />
      </Suspense>
    </div>
  );
}
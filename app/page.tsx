
import React from "react";
import Footer from "@/component/footer";

import { Suspense } from "react";
import QuoteWrapper from "@/component/randomQuote";

export default function Main(){
  return (
    <div className="flex flex-col bg-black min-h-screen p-24">
      <Suspense fallback={<p>Loading quote...</p>}>
        <QuoteWrapper />
      </Suspense>
      
      <Footer />
    </div>
  );
}

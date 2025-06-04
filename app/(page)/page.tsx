
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import FrontImage from "@/public/mainPhoto.png"


export default function MainPage(){
  return (
    <div className="flex justify-center mx-auto mt-6 overflow-hidden max-w-md rounded-4xl h-[640px] bg-gradient-to-r from-yellow-400 to-indigo-500 transition-colors duration-300">
      <div className="w-full overflow-hidden items-center justify-center">
        <div className="w-full relative flex-items justify-center">
          <Image
            src={FrontImage}
            sizes="fill"
            loading="lazy"
            alt="Front Image"
            className="object-cover z-10"
          />
        </div>

        <div className="z-10 relative text-center px-6 py-8 -mt-60 font-sans">
          <h1 className="text-2xl font-extrabold text-indigo-400">Spark Arise</h1>
          <p className="text-sm text-indigo-300 mb-4 font-bold">Let&apos;s get motivated everyday!</p>
          
          <Link href="/quote">
            <Button className="mt-2 z-20 bg-yellow-400 border border-indigo-400 cursor-pointer hover:bg-yellow-500 text-indigo-900 font-semibold px-4 py-2 rounded-xl shadow-md transition">
              Daily Spark
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

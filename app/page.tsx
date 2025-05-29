
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import Image from "next/image";


export default function Main(){
  return (
    <div className="flex justify-center mx-auto mt-20 overflow-x-hidden max-w-md rounded-4xl h-[640px] bg-gradient-to-r from-yellow-400 to-indigo-500 transition-colors duration-300">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/placeholder.jpg"
          width= {400}
          height={400}
          alt="Home Image"
          className="object-cover border-2"
        />
        <Button className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-semibold px-4 py-2 rounded-xl shadow-md transition">
          <Link href="/quote">
            Daily Spark
          </Link>
        </Button>
      </div>
      
    </div>
  );
}

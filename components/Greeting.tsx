// components/Greeting.js
"use client";

import { useEffect, useState } from "react";
import { getGreeting } from "@/utils/getTimeGreeting";

export default function Greeting() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    setGreeting(getGreeting());
  }, []);

  return (
    <div className="font-bold mt-6">
      <h2 className="text-3xl text-indigo-50 font-sans">Hey, you!</h2>
      <span className="text-indigo-100 font-serif text-2xl">{greeting}..</span>
    </div>
  );
}

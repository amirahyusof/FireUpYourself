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
    <div className="font-bold font-sans">
      <h2 className="text-3xl text-indigo-50">Hey, you!</h2>
      <span className="text-indigo-100 text-2xl">{greeting}..</span>
    </div>
  );
}

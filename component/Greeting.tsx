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
    <div className="text-xl font-bold mt-6 text-white">
      <h2>Hey, you.</h2>
      {greeting}!
    </div>
  );
}

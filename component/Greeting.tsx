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
    <div className="text-2xl font-bold text-center mt-6 text-white">
      Hello, {greeting}
    </div>
  );
}

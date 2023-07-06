"use client";

import { useEffect, useState } from "react";

const CurrentTimeDisplay = () => {
  const [curTime, setCurTime] = useState(null);

  useEffect(() => {
    setInterval(() => setCurTime(new Date().toLocaleTimeString()), 1000);
  });

  return (
    <>
      <p className="text-sm">
        Current Time: <span className="font-semibold text-stone-700 dark:text-stone-200">{curTime}</span>
      </p>
    </>
  );
};

export default CurrentTimeDisplay;

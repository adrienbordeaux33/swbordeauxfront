"use client";

import { useState, useEffect, useRef } from "react";
import Yesterday from "./timercomponents/Yesterday";
import Today from "./timercomponents/Today";
import Tomorrow from "./timercomponents/Tomorrow";

const componentsList = [Yesterday, Today, Tomorrow];

export default function News() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handlePrev = () => {
    setDirection(-1);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    if (current > 0) {
      setCurrent(current - 1);
    } else {
      setCurrent(componentsList.length - 1);
    }
  };

  const handleNext = () => {
    setDirection(1);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    if (current < componentsList.length - 1) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
    }
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setDirection(1);
      setCurrent((prev) => (prev < componentsList.length - 1 ? prev + 1 : 0));
    }, 6000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current]);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-[#800020] font-sans dark:bg-[#800020]">
      <div
        className="flex flex-row items-center w-full max-w-xl justify-center"
        style={{ minHeight: 100 }}
      >
        <button
          onClick={handlePrev}
          className="p-2 text-2xl text-gray-800 border-2 border-gray-400 bg-white rounded-full shadow hover:bg-purple-200 hover:border-purple-500 transition-colors duration-200"
          aria-label="Précédent"
        >
          &#8592;
        </button>
        <div
          className={`news-slide transition-transform duration-500 ease-in-out flex items-center justify-center text-center`}
          style={{ width: "300px", minHeight: "60px" }}
          key={current}
        >
          {(() => {
            const Comp = componentsList[current];
            return <Comp />;
          })()}
        </div>
        <button
          onClick={handleNext}
          className="p-2 text-2xl text-gray-800 border-2 border-gray-400 bg-white rounded-full shadow hover:bg-purple-200 hover:border-purple-500 transition-colors duration-200"
          aria-label="Suivant"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}

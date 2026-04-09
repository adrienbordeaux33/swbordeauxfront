"use client";

import { useState } from "react";
import Yesterday from "./Yesterday";
import Today from "./Today";
import Tomorrow from "./Tomorrow";

const componentsList = [Yesterday, Today, Tomorrow];

export default function News() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = gauche, 1 = droite

  const handlePrev = () => {
    setDirection(-1);
    if (current > 0) {
      setCurrent(current - 1);
    } else {
      setCurrent(componentsList.length - 1);
    }
  };

  const handleNext = () => {
    setDirection(1);
    if (current < componentsList.length - 1) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
    }
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-purple-900 font-sans dark:bg-purple-900">
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
          style={{ width: "400px", minHeight: "60px" }}
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

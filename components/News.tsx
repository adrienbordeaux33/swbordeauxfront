"use client";

import { useState, useEffect, useRef } from "react";
import Yesterday from "./Yesterday";
import Today from "./Today";
import Tomorrow from "./Tomorrow";

const componentsList = [Yesterday, Today, Tomorrow];

export default function News() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = gauche, 1 = droite
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

  // Effet pour faire défiler automatiquement toutes les 5 secondes
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
      <div className="border-2 p-6 opacity-80 rounded-xl w-full text-xs md:text-sm lg:text-base text-center text-white bg-black bg-opacity-40 font-sans">
        <h1 className="text-xl font-bold">COMPETITION ULTIMATE CUB CUP</h1>
        <div className="border-2 p-6 rounded-xl w-full text-xs md:text-sm lg:text-base text-center  bg-[#800020] font-sans dark:bg-[#800020]">
          <a
            href="https://www.paypal.com/paypalme/Poolska"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button">
              Cliquez ici pour vous inscrire à la compétition ULTIMATE CUB CUP
              du samedi 30 mai 2026
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

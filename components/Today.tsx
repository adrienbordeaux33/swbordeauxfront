export default function Today() {
  return (
    <div
      className="flex flex-col flex-1 items-center justify-evenly relative w-full h-full"
      style={{
        backgroundImage: "url(/logoSWB.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
        minHeight: 300,
      }}
    >
      <div className="border-2 p-6 opacity-80 rounded-xl w-full text-xs md:text-sm lg:text-base text-center text-white bg-black bg-opacity-40 font-sans">
        Prochain Training : Dimanche 12 Avril 2026 au Spot Queyries
      </div>
    </div>
  );
}

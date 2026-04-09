export default function Tomorrow() {
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
        A venir : Week End du 09 / 10 Mai 2026 : Finales Calisthenics Battle
        League à Paris + Qualifications Freestyle à La Rochelle
      </div>
    </div>
  );
}

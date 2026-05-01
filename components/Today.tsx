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
        <h1 className="text-xl font-bold">ACTUELLEMENT :</h1>
        <br />
        Prochain Training :
        <br /> Dimanche 03 Mai 2026 - 14h 17h
        <br /> Spot Queyries
      </div>
    </div>
  );
}

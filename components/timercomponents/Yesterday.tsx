import Link from "next/link";

export default function Yesterday() {
  return (
    <div
      className="flex flex-col flex-1 items-center justify-evenly relative w-full h-full "
      style={{
        backgroundImage: "url(/logoSWB.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
        minHeight: 300,
      }}
    >
      <div className="border-2 p-6 opacity-80 rounded-xl w-full text-xs md:text-sm lg:text-base text-center text-white bg-black bg-opacity-40 font-sans">
        <h1 className="text-xl font-bold">DERNIERES NEWS :</h1>
        <br />
        Les 5 & 6 Septembre 2026 avaient lieux les Championnat de France de
        Calisthenics à Montgeron en région Parisienne.
        <br />
        Les athlètes de la team Street Workout Bordeaux ont participé à cet
        événement.
        <br />
        Encore une fois la team a brillé lors de cette compétition, remportant
        ainsi plusieurs titres de champion de France et de nombreuses médailles.
        <br />
        <a href="" target="_blank" rel="noopener noreferrer">
          <button className="button">
            Cliquez ici pour voir le recap de l'événement sur Instagram
          </button>
        </a>
      </div>
    </div>
  );
}

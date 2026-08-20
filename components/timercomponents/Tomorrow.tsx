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
        <h1 className="text-xl font-bold">A VENIR :</h1>
        <br />
        Weekend du 5 - 6 Septembre 2026
        <br />
        La Team Street Workout Bordeaux se déplace à Paris
        <br />
        pour les Championnats de France de Calisthenics 2026
        <br />
        donc il n'y aura pas de session d'entrainement ce weekend là.
      </div>
    </div>
  );
}

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
        Weekend du 15 aout 2026 :
        <br />
        World Calisthenics Championship à Riga en Lettonie
        <br />
        A voir pour le training de ce weekend (du 15 aout)
        <br />
        Les Adhésions 2026 -2027 seront disponibles dès Juillet
        <br />
      </div>
    </div>
  );
}

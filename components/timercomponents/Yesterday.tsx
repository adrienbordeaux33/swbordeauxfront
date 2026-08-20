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
        Du 13 au 15 Aout avaient lieu, à Riga, Letonnie, les Calisthenics World
        Championship 2026
        <br />
        Parmi les athlètes sélectionnés pour représenter la Team France,
        <br />
        Le président de Street Workout Bordeaux, Adrien, s'est imposé dans
        l'épreuve Power Open Veteran,
        <br />
        remportant ainsi la médaille d'or et le titre de Champion du Monde 2026
        !
        <br />
        <a
          href="https://www.instagram.com/p/DcIzWpFRtUI/?hl=fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button">
            Cliquez ici pour voir le recap vidéo de l'événement sur Instagram
          </button>
        </a>
      </div>
    </div>
  );
}

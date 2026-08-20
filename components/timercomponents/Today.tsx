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
        Dimanche 23 Aout & Dimanche 30 Aout
        <br />
        Sunday Training
        <br />
        Spot Queyries
        <br />
        Horaires à définir selon la météo (matin si canicule, après midi si
        moins chaud)
        <br />
        -
        <br />
        <a
          href="https://www.instagram.com/streetworkoutbordeaux/?hl=fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button">
            Cliquez ici pour nous suivre sur Instagram pour les horaires exacts
            en story 24h avant.{" "}
          </button>
        </a>
      </div>
    </div>
  );
}

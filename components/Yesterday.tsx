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
        <a
          href="https://www.instagram.com/p/DWa5rHliO9x/?hl=fr&img_index=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button">
            Voir sur Insta : <br />
            @Sofyane
          </button>
        </a>
        <br />
        de la Team SWB termine en 1/4 de finale de championnats de France de
        Battle Calisthenics <br />
        Félicitations à lui et à tous les participants !
      </div>
    </div>
  );
}

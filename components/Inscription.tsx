export default function Inscription() {
  return (
    <div className="flex flex-col flex-1 items-center justify-evenly">
      <div className="border-2 p-6 rounded-xl w-full text-xs md:text-sm lg:text-base text-center  bg-[#800020] font-sans dark:bg-[#800020]">
        <a
          href="https://www.helloasso.com/associations/street-workout-bordeaux/adhesions/adhesion-2025-2026-association-swb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button">
            Cliquez ici pour adhérer à l'association Street Workout Bordeaux
          </button>
        </a>
      </div>

      <div className="border-2 p-6 rounded-xl w-full text-xs md:text-sm lg:text-base text-center  bg-[#800020] font-sans dark:bg-[#800020]">
        <a
          href="https://www.paypal.com/paypalme/Poolska"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button">
            Cliquez ici pour vous inscrire à la compétition CUB CUP du samedi 30
            mai 2026
          </button>
        </a>
      </div>
    </div>
  );
}

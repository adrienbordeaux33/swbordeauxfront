export default function Contact() {
  return (
    <div className="flex flex-col flex-1  items-center justify-evenly">
      <div className="border-2 p-6 rounded-xl w-full text-xs md:text-sm lg:text-base text-center  bg-[#800020] font-sans dark:bg-[#800020]">
        Mail : streetworkoutbordeaux@hotmail.com
      </div>
      <div className="border-2 p-6 rounded-xl w-full text-xs md:text-sm lg:text-base text-center  bg-[#800020] font-sans dark:bg-[#800020]">
        Téléphone : 06 18 32 21 49
      </div>
      <div className="border-2 p-6 rounded-xl w-full text-xs md:text-sm lg:text-base text-center  bg-[#800020] font-sans dark:bg-[#800020]">
        <a
          href="https://www.instagram.com/streetworkoutbordeaux/?hl=fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="">
            Cliquez ici pour accèder à la page Insta @streetworkoutbordeaux
          </button>
        </a>
      </div>
      <div className="border-2 p-6 rounded-xl w-full text-xs md:text-sm lg:text-base text-center  bg-[#800020] font-sans dark:bg-[#800020]">
        <a
          href="https://www.facebook.com/streetworkoutbordeaux"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="">
            Cliquez ici pour accèder à la page Facebook Street Workout Bordeaux
          </button>
        </a>
      </div>
    </div>
  );
}

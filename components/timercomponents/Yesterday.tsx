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
        <Link href="/results" className="button">
          Cliquez ici pour voir les classements par catégories de l'Ultimate CUB
          CUP 2026
        </Link>
        <br />
        -
        <br />
        <a
          href="https://www.instagram.com/p/DW6s0Y0COKV/?hl=fr&img_index=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button">
            Cliquez ici pour voir l'événement sur Instagram
          </button>
        </a>
      </div>
    </div>
  );
}

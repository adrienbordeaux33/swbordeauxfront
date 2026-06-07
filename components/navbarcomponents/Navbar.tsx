"use client";

import Link from "next/link";
import { Home, Phone, Trophy, UserPen } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-t shadow-md">
      <div className="flex justify-around items-center h-30">
        <Link
          href="/"
          className="flex flex-col items-center text-center text-gray-600"
        >
          <Home size={24} />
          <span className="text-s">Accueil & News</span>
        </Link>

        <Link
          href="/trophy"
          className="flex flex-col items-center text-center text-gray-600"
        >
          <UserPen size={24} />
          <span className="text-s">
            Adhésion Association
            {/* <br />
            &
            <br />
            Inscription Compétition */}
          </span>
        </Link>

        <Link
          href="/results"
          className="flex flex-col items-center text-center text-gray-600"
        >
          <Trophy size={24} />
          <span className="text-s">Résultats Compétitions</span>
        </Link>

        <Link
          href="/phone"
          className="flex flex-col items-center text-center text-gray-600"
        >
          <Phone size={24} />
          <span className="text-s">Contact & Infos</span>
        </Link>
      </div>
    </nav>
  );
}

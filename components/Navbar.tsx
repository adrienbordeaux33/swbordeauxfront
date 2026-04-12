"use client";

import Link from "next/link";
import { Home, Phone, Trophy } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-t shadow-md">
      <div className="flex justify-around items-center h-30">
        <Link
          href="/"
          className="flex flex-col items-center text-center text-gray-600"
        >
          <Home size={24} />
          <span className="text-s">
            Accueil
            <br />
            &
            <br /> News
          </span>
        </Link>

        <Link
          href="/trophy"
          className="flex flex-col items-center text-center text-gray-600"
        >
          <Trophy size={24} />
          <span className="text-s">
            Adhésion Association
            <br />
            &
            <br />
            Inscription Compétition
          </span>
        </Link>

        <Link
          href="/phone"
          className="flex flex-col items-center text-center text-gray-600"
        >
          <Phone size={24} />
          <span className="text-s">
            Contact <br />
            &
            <br />
            Informations
          </span>
        </Link>
      </div>
    </nav>
  );
}

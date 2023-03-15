import React from "react";
import { Link } from "react-router-dom";

export default function NavbarUser() {
  return (
    <nav
      style={{
        background: "#482783",
        boxShadow: "1px 1px 6px 1px rgba(0,0,0,0.7)",
      }}
      className="fixed top-16 z-50 w-screen"
    >
      <div className="justify-between text-lg font-bold sm:text-2xl sm:flex flex h-16 items-center sm:pl-0">
        <Link
          className="hover:bg-purple-900 sm:h-full h-full sm:items-center flex items-center border border-gray-700 rounded sm:flex justify-center w-1/3"
          to="/home"
        >
          Pesquisa{" "}
        </Link>

        <Link
          className="hover:bg-purple-900 sm:flex sm:h-full h-full sm:items-center flex items-center border border-gray-700 rounded items-center justify-center w-1/3"
          to="/favorites"
        >
          Favoritas
        </Link>

        <Link
          className="hover:bg-purple-900 sm:flex sm:h-full h-full sm:items-center flex items-center border border-gray-700 rounded items-center justify-center w-1/3"
          to="/profile"
        >
          Perfil
        </Link>
      </div>
    </nav>
  );
}

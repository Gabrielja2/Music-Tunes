import React from "react";
import NavbarUser from "../../components/NavbarUser/NavbarUser";
import NavbarLinks from "../../components/NavbarLinks/NavbarLinks";
import icon from "../../assets/profile.png";

export default function ProfilePage() {
  return (
    <div className="w-screen">
      <NavbarUser />
      <NavbarLinks />
      <div
        id="profile-container"
        className="sm:border rounded flex flex-col sm:w-96 sm:mx-auto mt-32 sm:py-10"
      >
        <div className="text-lg sm:text-2xl py-4 sm:gap-8 sm:flex  mx-auto items-center">
          <img
            className="mx-auto sm:pb-0 pb-8"
            width="100px"
            src={icon}
            alt="profile-picture"
          ></img>
          <button
            style={{ color: "#6000bc" }}
            className="h-16 p-2 border rounded bg-white"
            type="button"
          >
            Editar Perfil
          </button>
        </div>
        <div className="text-lg sm:text-2xl flex flex-col">
          <label className=" flex text-left flex-col mx-auto sm:py-4">
            Nome
            <input
              style={{ color: "#6000bc" }}
              className="bg-gray-300"
              placeholder="Seu nome"
              type="text"
            />
          </label>
          <label className="flex text-left flex-col mx-auto sm:py-4">
            E-mail
            <input
              style={{ color: "#6000bc" }}
              className="bg-gray-300"
              placeholder="Seu email"
              type="text"
            />
          </label>
          <label className="flex text-left flex-col mx-auto sm:py-4">
            Descrição
            <input
              style={{ color: "#6000bc" }}
              className="bg-gray-300 pb-24"
              type="text"
              placeholder="Sobre mim"
            />
          </label>
        </div>
      </div>
    </div>
  );
}

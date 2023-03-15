import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("userName", name);
    navigate("/home");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (name.length >= 3) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  return (
    <form
      className="flex flex-col bg-transparent wrap m-auto sm:border rounded"
      onSubmit={handleSubmit}
    >
      <img className="w-2/3 mx-auto sm:mb-8 mb-24" src={logo} alt="logo" />
      <input
        style={{ color: "#6000bc" }}
        className="bg-gray-300 rounded-full w-2/3 mx-auto text-lg sm:text-2xl mb-14 h-12 text-center"
        onChange={handleChange}
        type="text"
        placeholder="Digite seu nome por favor"
      />
      <button
        disabled={isDisabled}
        style={{ color: "#6000bc" }}
        className="bg-gray-300 hover:bg-indigo-500 w-2/3 text-lg sm:text-2xl mx-auto rounded-full mb-14 p-1 font-bold h-12"
        type="submit"
      >
        Entrar
      </button>
    </form>
  );
}

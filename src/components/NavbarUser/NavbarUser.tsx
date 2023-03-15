import React, { useEffect } from "react";
import icon from "../../assets/profile.png";
import logo from "../../assets/logo.png";

export default function NavbarUser() {
  const getUser = () => {
    const name = localStorage.getItem("userName");
    return name;
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <nav
      style={{
        background: "#260149",
        boxShadow: "1px 2px 6px 3px rgba(0,0,0,0.7)",
      }}
      className="fixed top-0 z-50 w-screen pr-4"
    >
      <div className="flex items-center justify-between h-16">
        <img width="190px" height="100px" src={logo} alt="logo" />
        <div className="flex gap-4 p-2 rounded-full">
          <img width="28px" src={icon} alt="icon" />
          <span className="text-lg sm:text-2xl">{getUser()}</span>
        </div>
      </div>
    </nav>
  );
}

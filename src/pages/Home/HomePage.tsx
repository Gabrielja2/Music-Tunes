import React from "react";
import NavbarUser from "../../components/NavbarUser/NavbarUser";
import NavbarLinks from "../../components/NavbarLinks/NavbarLinks";
import SectionHome from "../../components/SectionHome/SectionHome";

export default function HomePage() {
  return (
    <div className="w-screen">
      <NavbarUser />
      <NavbarLinks />
      <SectionHome />
    </div>
  );
}

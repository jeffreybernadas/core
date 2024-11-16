import React from "react";

import logo from "../../../assets/images/logo.png";

const NavLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <img
        draggable="false"
        src={logo}
        alt="logo"
        className="max-w-10 max-h-10 object-contain"
      />
      <h1 className="text-xl font-bold text-zinc-200">Core</h1>
    </div>
  );
};

export default NavLogo;

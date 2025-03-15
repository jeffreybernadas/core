import React from "react";

import { NavLink } from "./NavLink";

export const NavLinks = () => {
  return (
    <ul className="flex gap-3 text-zinc-400 md:gap-9">
      <li>
        <NavLink href="#features">Features</NavLink>
      </li>
      <li>
        <NavLink href="#installation">Installation</NavLink>
      </li>
      <li>
        <NavLink href="https://www.npmjs.com/package/@bernz322/core" external>
          NPM
        </NavLink>
      </li>
      <li>
        <NavLink href="https://jeffreybernadas.github.io/core/" external>
          Storybook
        </NavLink>
      </li>
      <li>
        <NavLink href="https://github.com/jeffreybernadas/core" external>
          Github
        </NavLink>
      </li>
    </ul>
  );
};

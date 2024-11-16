import React from "react";
import { SiFacebook, SiGithub, SiInstagram } from "react-icons/si";
import { IconType } from "react-icons";

import { MaxWidthWrapper } from "../utils/MaxWidthWrapper";
import NavLogo from "../navbar/NavLogo";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden py-12">
      <MaxWidthWrapper className="relative z-20 grid grid-cols-12 gap-x-1.5 gap-y-6">
        <LogoColumn />
        <GenericColumn
          title="Project"
          links={[
            {
              title: "Features",
              href: "#features",
            },
            {
              title: "Installation",
              href: "#installation",
            },
            {
              title: "Storybook",
              href: "https://bernz322.github.io/core",
              external: true,
            },
          ]}
        />
        <GenericColumn
          title="Help"
          links={[
            {
              title: "Developer",
              href: "https://github.com/Bernz322",
              external: true,
            },
            {
              title: "Contact",
              href: "mailto:jeffrey.bernadas0@gmail.com",
            },
          ]}
        />
        <GenericColumn
          title="Resources"
          links={[
            {
              title: "shadcn/ui",
              href: "https://ui.shadcn.com/",
              external: true,
            },
            {
              title: "Mantine",
              href: "https://mantine.dev/",
              external: true,
            },
            {
              title: "Hover Dev",
              href: "https://hover.dev/",
              external: true,
            },
          ]}
        />

        <GenericColumn
          title="Socials"
          links={[
            {
              title: "Facebook",
              href: "https://www.facebook.com/jb6000",
              external: true,
              Icon: SiFacebook,
            },
            {
              title: "Instagram",
              href: "https://www.instagram.com/brnzzzzzzz/",
              external: true,
              Icon: SiInstagram,
            },
            {
              title: "Github",
              href: "https://github.com/Bernz322",
              external: true,
              Icon: SiGithub,
            },
          ]}
        />
      </MaxWidthWrapper>
    </footer>
  );
};

const LogoColumn = () => {
  return (
    <div className="col-span-6 md:col-span-4">
      <NavLogo />
      <span className="mt-3 inline-block text-xs text-zinc-400">
        © Jeffrey Bernadas - All rights reserved.
      </span>
    </div>
  );
};

const GenericColumn = ({
  title,
  links,
}: {
  title: string;
  links: { title: string; href: string; external?: boolean; Icon?: IconType }[];
}) => {
  return (
    <div className="col-span-6 space-y-2 text-sm md:col-span-2">
      <span className="block text-zinc-50">{title}</span>
      {links.map((l) => (
        <a
          key={l.title}
          href={l.href}
          className="flex items-center gap-1.5 text-zinc-400 transition-colors hover:text-zinc-200 hover:underline"
          target={l.external ? "_blank" : undefined}
        >
          {l.Icon && <l.Icon />}
          {l.title}
        </a>
      ))}
    </div>
  );
};

"use client";

import { useState } from "react";

const links = [
  { href: "#work", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-nav">
      <button
        className="mobile-nav-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-menu"
        onClick={() => setOpen((current) => !current)}
      >
        <span>{open ? "Close" : "Menu"}</span>
        <span aria-hidden="true">{open ? "×" : "＋"}</span>
      </button>
      {open ? (
        <div id="mobile-nav-menu" className="mobile-nav-menu">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label} <span aria-hidden="true">↘</span>
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}

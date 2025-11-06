"use client";
import { useState } from "react";
import { NavBarDesktop } from "@/components/layout/navigation/desktop/navbar";
import { NavBarMobile } from "../navigation/mobile/navbar";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="wrapper-nav-outer">
      <div 
        className="wrapper-nav-container rounded-t-xl lg:rounded-b-xl"
        style={menuOpen ? {
          borderBottomLeftRadius: '0',
          borderBottomRightRadius: '0'
        } : {}}
      >
        <div className="wrapper-nav-content">
          <div className="hidden lg:block"><NavBarDesktop /></div>
          <div className="block lg:hidden"><NavBarMobile onMenuToggle={setMenuOpen} /></div>
        </div>
      </div>
    </header>
  );
}

import { NavBarDesktop } from "@/components/layout/navigation/desktop/navbar";
import { NavBarMobile } from "../navigation/mobile/navbar";

export function Header() {
  return (
    <header className="">
      <NavBarDesktop />
      <NavBarMobile />
    </header>
  );
}

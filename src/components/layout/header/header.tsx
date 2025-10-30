import { NavBarDesktop } from "@/components/layout/navigation/desktop/navbar";
import { NavBarMobile } from "../navigation/mobile/navbar";

export function Header() {
  return (
    <header className="wrapper-nav-outer">
      <div className="wrapper-nav-container">
        <div className="wrapper-nav-content">
          <div className="hidden lg:block"><NavBarDesktop /></div>
          <div className="block lg:hidden"><NavBarMobile /></div>
        </div>
      </div>
    </header>
  );
}

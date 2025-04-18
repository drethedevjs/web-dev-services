"use client";
import { XCircleIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const navigate = (page: string, isMobile: boolean = false) => {
    router.push(page);
    if (isMobile) toggleMenu();
  };

  const toggleMenu = () => {
    const menuWillShow = showMenu;
    setShowMenu(!menuWillShow);
  };

  return (
    <nav>
      <ul className="nav-links">
        <li>
          <button onClick={() => navigate("/")}>Home</button>
        </li>
        <li>
          <button onClick={() => navigate("/about")}>About</button>
        </li>
        {/* <li>
          <button onClick={() => navigate("/services")}>Services</button>
        </li> */}
        <li>
          <button onClick={() => navigate("/portfolio")}>Portfolio</button>
        </li>
        <li>
          <button onClick={() => navigate("/contact")}>Contact</button>
        </li>
      </ul>

      <button className={`mobile-menu-btn ${showMenu ? "hidden" : ""}`} onClick={toggleMenu}>
        Menu
      </button>
      <div className={`mobile-nav-container ${showMenu ? "flex flex-col" : "hidden"}`}>
        <div className="place-items-center">
          <XCircleIcon className="size-12 m-5" onClick={toggleMenu} />
        </div>
        <ul className="mobile-nav-links">
          <li>
            <button onClick={() => navigate("/", true)}>Home</button>
          </li>
          <li>
            <button onClick={() => navigate("/about", true)}>About</button>
          </li>
          {/* <li>
            <button onClick={() => navigate("/services", true)}>Services</button>
          </li> */}
          <li>
            <button onClick={() => navigate("/contact", true)}>Contact</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

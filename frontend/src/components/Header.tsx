"use client";
import { headerLinks } from "@/data/headerLinks";
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
        {headerLinks.map((link, idx) =>
          link.active ? (
            <li key={idx}>
              <button onClick={() => navigate(link.path)}>{link.title}</button>
            </li>
          ) : null,
        )}
      </ul>

      <button className={`mobile-menu-btn ${showMenu ? "hidden" : ""}`} onClick={toggleMenu}>
        Menu
      </button>
      <div className={`mobile-nav-container ${showMenu ? "flex flex-col" : "hidden"}`}>
        <div className="place-items-center">
          <XCircleIcon className="size-12 m-5" onClick={toggleMenu} />
        </div>
        <ul className="mobile-nav-links">
          {headerLinks.map((link, idx) =>
            link.active ? (
              <li key={idx}>
                <button onClick={() => navigate(link.path)}>{link.title}</button>
              </li>
            ) : null,
          )}
        </ul>
      </div>
    </nav>
  );
}

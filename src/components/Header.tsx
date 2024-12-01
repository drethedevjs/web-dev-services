'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const navigate = (page: string, isMobile: boolean = false) => {
    router.push(page);
    if (isMobile)
      toggleMenu();
  }
  
  const toggleMenu = () => {
    const menuWillShow = showMenu;
    setShowMenu(!menuWillShow)
  }

  return (
    <nav>
      <ul className="nav-links">
        <li>
          <button onClick={() => navigate("/")}>Home</button>
        </li>
        <li>
          <button onClick={() => navigate("/about")}>About</button>
        </li>
        <li>
          <button onClick={() => navigate("/services")}>Services</button>
        </li>
        <li>
          <button onClick={() => navigate("/contact")}>Contact</button>
        </li>
      </ul>
      <button className="md:hidden uppercase text-2xl py-3 w-full text-center border-2 border-secondary" onClick={toggleMenu}>Menu</button>
      <ul className={`mobile-nav-links ${showMenu ? 'flex flex-col' : 'hidden'}`}>
        <li>
          <button onClick={() => navigate("/", true)}>Home</button>
        </li>
        <li>
          <button onClick={() => navigate("/about", true)}>About</button>
        </li>
        <li>
          <button onClick={() => navigate("/services", true)}>Services</button>
        </li>
        <li>
          <button onClick={() => navigate("/contact", true)}>Contact</button>
        </li>
      </ul>
    </nav>
  )
}

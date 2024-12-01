'use client'
import { useRouter } from "next/navigation"

export default function Header() {
  const router = useRouter()
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <button onClick={() => router.push("/")}>Home</button>
        </li>
        <li>
          <button onClick={() => router.push("/about")}>About</button>
        </li>
        <li>
          <button onClick={() => router.push("/services")}>Services</button>
        </li>
        <li>
          <button onClick={() => router.push("/contact")}>Contact</button>
        </li>
      </ul>
    </nav>
  )
}

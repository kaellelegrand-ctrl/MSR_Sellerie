import { NavLink } from "react-router-dom"
import TricolorBar from "./TricolorBar"

const links = [
  { to: "/", label: "Accueil" },
  { to: "/sellerie-medicale", label: "Médical" },
  { to: "/sellerie-auto", label: "Auto" },
  { to: "/sellerie-sport", label: "Salle de sport" },
  { to: "/plastification", label: "Plastification" },
  { to: "/contact", label: "Contact" },
]

function NavItem({ to, label, onClick, dark }) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      onClick={onClick}
      className={({ isActive }) =>
        `group relative py-2 text-sm font-medium uppercase tracking-wider transition-colors ${
          isActive
            ? "text-ink"
            : dark
              ? "text-ink/70 hover:text-ink"
              : "text-ink/75 hover:text-ink"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {label}
          <span
            aria-hidden="true"
            className={`absolute -bottom-0.5 left-0 right-0 h-0.5 origin-left scale-x-0 bg-ink transition-transform duration-300 ease-out group-hover:scale-x-100 ${
              isActive ? "scale-x-100" : ""
            }`}
          />
        </>
      )}
    </NavLink>
  )
}

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-leather/95 backdrop-blur transform-gpu will-change-transform">
      <TricolorBar className="border-b" />
      <div className="max-w-7xl px-6 md:pl-31.25 md:pr-6">
        <div className="flex items-center justify-center h-16 md:h-30 md:justify-start">
          <div className="flex items-center h-full py-1.5 md:py-3">
            <NavLink to="/" className="flex items-center h-full">
              <img
                src="/logo.png"
                alt="MSR Sellerie"
                className="h-full w-auto object-contain"
              />
            </NavLink>
          </div>

          <nav className="hidden md:flex flex-1 items-center justify-between ml-31.25">
            {links.map((l) => (
              <NavItem key={l.to} {...l} />
            ))}
          </nav>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-full h-6 bg-linear-to-b from-leather/40 to-transparent" />
    </header>
  )
}

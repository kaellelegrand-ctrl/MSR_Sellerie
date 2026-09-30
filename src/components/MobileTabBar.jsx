import { NavLink } from "react-router-dom"

function IconHome(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 10.5 10 4l7 6.5" />
      <path d="M5.5 9v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9" />
      <path d="M8.3 17v-4.2h3.4V17" />
    </svg>
  )
}

function IconMedical(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="14" height="14" rx="3.5" />
      <path d="M10 7v6M7 10h6" />
    </svg>
  )
}

function IconAuto(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3.5 12.5h13M4.5 12.5V10a1.5 1.5 0 0 1 1.5-1.5h8a1.5 1.5 0 0 1 1.5 1.5v2.5" />
      <circle cx="6.5" cy="14" r="1.3" />
      <circle cx="13.5" cy="14" r="1.3" />
    </svg>
  )
}

function IconSport(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6.5 10h7" />
      <rect x="2.8" y="8" width="2.1" height="4" rx="0.6" />
      <rect x="15.1" y="8" width="2.1" height="4" rx="0.6" />
      <rect x="5.7" y="6.8" width="1.6" height="6.4" rx="0.7" />
      <rect x="12.7" y="6.8" width="1.6" height="6.4" rx="0.7" />
    </svg>
  )
}

function IconShield(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M10 3.2 16 5.4v4.1c0 4-2.6 6.8-6 7.5-3.4-.7-6-3.5-6-7.5V5.4L10 3.2z" />
      <path d="M7.2 10.1l1.8 1.8 3.7-3.9" />
    </svg>
  )
}

function IconContact(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="5" width="14" height="10" rx="1.6" />
      <path d="M3.5 6.2 10 11l6.5-4.8" />
    </svg>
  )
}

const tabs = [
  { to: "/", label: "Accueil", Icon: IconHome },
  { to: "/sellerie-medicale", label: "Médical", Icon: IconMedical },
  { to: "/sellerie-auto", label: "Auto", Icon: IconAuto },
  { to: "/sellerie-sport", label: "Sport", Icon: IconSport },
  { to: "/plastification", label: "Plastif.", Icon: IconShield },
  { to: "/contact", label: "Contact", Icon: IconContact },
]

export default function MobileTabBar() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 md:hidden bg-leather border-t border-black/15 transform-gpu will-change-transform"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex h-15">
        {tabs.map(({ to, label, Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              `flex flex-1 flex-col items-center justify-center gap-0.5 transition-colors ${
                isActive ? "text-ink" : "text-ink/55"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon className={`h-5 w-5 ${isActive ? "" : "opacity-80"}`} />
                <span
                  className={`font-mono text-[9px] uppercase tracking-wide ${
                    isActive ? "text-ink" : "text-ink/55"
                  }`}
                >
                  {label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

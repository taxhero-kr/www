import Link from 'next/link'

const navItems = [
  { href: '/alfred', label: 'Alfred' },
]

export default function Nav() {
  return (
    <nav className="top-nav">
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          전설의 경리
        </Link>
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="nav-link">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

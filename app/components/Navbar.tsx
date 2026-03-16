'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-name">
          Pranav Shukla
        </Link>
        <ul className="nav-links">
          <li>
            <Link
              href="/work"
              className={`nav-link ${pathname.startsWith('/work') ? 'active' : ''}`}
            >
              work
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={`nav-link ${pathname.startsWith('/projects') ? 'active' : ''}`}
            >
              projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

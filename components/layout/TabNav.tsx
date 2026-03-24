'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TABS = [
  { href: '/grade-calculator',      label: 'grade calc' },
  { href: '/attendance-calculator', label: 'attendance calc' },
  { href: '/cgpa-calculator',       label: 'cgpa calc' },
];

export default function TabNav() {
  const pathname = usePathname();

  return (
    <nav className="tabs-nav" aria-label="Calculators">
      <div className="tabs">
        {TABS.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className={`tab${pathname === tab.href ? ' active' : ''}`}
            prefetch={true}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

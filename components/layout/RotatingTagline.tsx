'use client';

import { useState, useEffect, useRef } from 'react';

const TAGLINES = [
  "because RSMS won't tell you straight",
  "free, fast, no login needed",
  "your academic weapon, bestie",
  "RSMS mails aakathe nee guess aadende",
  "padikkanam but first let me calculate",
  "attendance kuranja nee alla, system alla",
];

export default function RotatingTagline() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const cycle = () => {
      setVisible(false);
      timerRef.current = setTimeout(() => {
        setIdx((i) => (i + 1) % TAGLINES.length);
        setVisible(true);
      }, 350);
    };
    const interval = setInterval(cycle, 4000);
    return () => {
      clearInterval(interval);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <span
      style={{
        display: 'inline-block',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(-4px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
      }}
    >
      {TAGLINES[idx]}
    </span>
  );
}

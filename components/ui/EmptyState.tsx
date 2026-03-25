'use client';

import { useState, useEffect, useRef } from 'react';

const MESSAGES = [
  "nothing here yet. add a subject above and face your destiny.",
  "empty like my will to attend 8 AM classes.",
  "ente ammo, add something already.",
  "no subjects found. are you procrastinating again?",
  "this space is emptier than my attendance sheet.",
  "input required. like your lab record. remember that?",
  "add a subject. it won't fix your attendance but it's a start.",
  "yaar, the calculator can't calculate nothing.",
];

export default function EmptyState() {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<'in' | 'out'>('in');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const cycle = () => {
      setPhase('out');
      timerRef.current = setTimeout(() => {
        setIdx((i) => (i + 1) % MESSAGES.length);
        setPhase('in');
      }, 400);
    };
    const interval = setInterval(cycle, 3800);
    return () => {
      clearInterval(interval);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div className="empty-state">
      <span
        className={`empty-state-msg ${phase === 'out' ? 'fade-out' : 'fade-in'}`}
      >
        {MESSAGES[idx]}
      </span>
    </div>
  );
}

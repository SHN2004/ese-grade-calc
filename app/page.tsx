import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'help-me-survive-college — ESE, Attendance & CGPA Calculators',
  description:
    'Free college calculators for ESE grade planning, attendance tracking, and CGPA calculation. Know your minimum ESE marks, plan your bunks, and project your CGPA — no login needed.',
};

const tools = [
  {
    href: '/grade-calculator',
    accent: '#00ffff',
    label: 'grade calculator',
    tagline: 'ESE target strategy',
    description:
      'Enter your current sessional marks and see the minimum ESE score needed for every grade — from S (10 GP) down to P (5.5 GP). Supports theory, integrated, lab, and mini project courses.',
    keywords: ['ese calculator', 'minimum marks', 'grade planning'],
  },
  {
    href: '/attendance-calculator',
    accent: '#ff00ff',
    label: 'attendance calculator',
    tagline: 'bunk management',
    description:
      "Find out exactly how many classes you can safely skip. If you're in the red, get the exact number of consecutive classes needed to recover. Includes a 10-class projection grid.",
    keywords: ['75% attendance', 'bunk calculator', 'shortage recovery'],
  },
  {
    href: '/cgpa-calculator',
    accent: '#ffaa00',
    label: 'cgpa calculator',
    tagline: 'cumulative gpa forecasting',
    description:
      'Calculate your CGPA by adding semester SGPAs or individual subjects with grade points and credits. Auto-fills previous semester data when switching modes.',
    keywords: ['cgpa calculator', 'semester gpa', 'grade point average'],
  },
];

export default function HomePage() {
  return (
    <main className="container">
      <div style={{ marginBottom: 40 }}>
        <div style={{
          fontFamily: 'var(--font-jetbrains-mono, monospace)',
          fontSize: 13,
          color: '#555',
          marginBottom: 24,
          lineHeight: 1.8,
        }}>
          → pick a calculator below. no account, no ads, no nonsense.
        </div>

        <div style={{ display: 'grid', gap: 16 }}>
          {tools.map((tool) => (
            <Link key={tool.href} href={tool.href} style={{ textDecoration: 'none' }}>
              <div style={{
                background: '#111',
                borderLeft: `3px solid ${tool.accent}`,
                padding: '24px 28px',
                transition: 'background 0.2s',
                cursor: 'pointer',
              }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                  <span style={{
                    fontFamily: 'var(--font-jetbrains-mono, monospace)',
                    fontSize: 20,
                    fontWeight: 700,
                    color: tool.accent,
                  }}>
                    {tool.label}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-jetbrains-mono, monospace)',
                    fontSize: 12,
                    color: '#444',
                    letterSpacing: '0.5px',
                  }}>
                    / {tool.tagline}
                  </span>
                </div>
                <p style={{
                  fontFamily: 'var(--font-inter, sans-serif)',
                  fontSize: 14,
                  color: '#888',
                  lineHeight: 1.7,
                  marginBottom: 12,
                }}>
                  {tool.description}
                </p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {tool.keywords.map((kw) => (
                    <span key={kw} style={{
                      fontFamily: 'var(--font-jetbrains-mono, monospace)',
                      fontSize: 11,
                      color: '#444',
                      border: '1px solid #222',
                      padding: '3px 8px',
                    }}>
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

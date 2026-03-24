import type { Metadata } from 'next';
import AttendanceCalculator from '@/components/attendance-calculator/AttendanceCalculator';
import JsonLd from '@/components/ui/JsonLd';

export const metadata: Metadata = {
  title: 'College Attendance Calculator — Bunk Planner & Recovery Tool',
  description:
    'Track your class attendance, find out how many more classes you can safely skip, and calculate the exact consecutive classes you need to recover from a shortage. Works for any college with a 75% attendance rule.',
  alternates: { canonical: '/attendance-calculator' },
  openGraph: {
    title: 'College Attendance Calculator — Plan Your Bunks Safely',
    description: 'Know exactly how many classes you can skip before hitting the shortage line. Recovery calculator included.',
    url: '/attendance-calculator',
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I calculate how many classes I can bunk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The formula is: safe misses = floor((attended × 100 / minimum%) − total classes). Enter your total classes held, classes missed, and minimum attendance required, and the calculator does this for you instantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many consecutive classes do I need to attend to recover from attendance shortage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Recovery classes = ceil((minimum% × total − 100 × attended) / (100 − minimum%)). The calculator gives you this exact number. You must attend these classes consecutively — no skipping in between.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum attendance percentage required in college?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most colleges require 75% minimum attendance. Some departments require 85%. The calculator lets you set your own minimum — just change the "min % required" field to match your institution\'s rule.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the attendance projection grid show?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The projection grid shows how your attendance percentage changes over the next 10 classes, for up to 5 additional missed classes. Each cell shows the resulting percentage and whether it is safe (✅) or below the threshold (❌).',
      },
    },
  ],
};

export default function AttendanceCalculatorPage() {
  return (
    <main className="container">
      <JsonLd data={faqSchema} />
      <AttendanceCalculator />
    </main>
  );
}

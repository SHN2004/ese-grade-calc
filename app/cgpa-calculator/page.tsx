import type { Metadata } from 'next';
import CGPACalculator from '@/components/cgpa-calculator/CGPACalculator';
import JsonLd from '@/components/ui/JsonLd';

export const metadata: Metadata = {
  title: 'CGPA Calculator — Cumulative GPA by Semester or Subject',
  description:
    'Calculate your CGPA using semester SGPA or by entering individual subjects with grade points and credits. Supports weighted average calculation across multiple semesters.',
  alternates: { canonical: '/cgpa-calculator' },
  openGraph: {
    title: 'CGPA Calculator — Know Your Cumulative GPA',
    description: 'Add your semesters and SGPA or enter subjects one by one. Get your updated CGPA instantly.',
    url: '/cgpa-calculator',
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How is CGPA calculated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CGPA is a weighted average: sum of (grade point × credits) for all subjects divided by total credits. It is not a simple average of SGPAs — semesters with more credits have more weight.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between CGPA and SGPA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SGPA (Semester Grade Point Average) is the weighted average for a single semester. CGPA (Cumulative Grade Point Average) is the weighted average across all semesters you have completed.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the grade points for each grade?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'S = 10, A+ = 9, A = 8.5, B+ = 8, B = 7.5, C+ = 7, C = 6.5, D = 6, P = 5.5.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I use the "by subject" mode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In "by subject" mode, first enter your current CGPA and total credits from previous semesters (or 0 if this is your first semester). Then enter how many subjects you have this semester, and add each subject with its grade point and credits. The updated CGPA appears once all subjects are added.',
      },
    },
  ],
};

export default function CGPACalculatorPage() {
  return (
    <main className="container">
      <JsonLd data={faqSchema} />
      <CGPACalculator />
    </main>
  );
}

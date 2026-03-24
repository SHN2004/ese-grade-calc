import type { Metadata } from 'next';
import GradeCalculator from '@/components/grade-calculator/GradeCalculator';
import JsonLd from '@/components/ui/JsonLd';

export const metadata: Metadata = {
  title: 'ESE Grade Calculator — Minimum Marks for Every Grade',
  description:
    'Enter your current sessional marks and instantly see the minimum ESE score needed for S, A+, A, B+, B, C+, C, D, and P grades. Supports theory, integrated, lab, and mini project courses.',
  alternates: { canonical: '/grade-calculator' },
  openGraph: {
    title: 'ESE Grade Calculator — Know Your Minimum Before The Exam',
    description: 'Enter your sessional marks. See exactly what ESE score you need for every grade.',
    url: '/grade-calculator',
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the minimum ESE marks required to pass?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You need at least 40% of the maximum ESE marks to pass, regardless of your sessional score. For a 100-mark ESE that is 40 marks. For a 75-mark ESE (lab) that is 30 marks.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is the grade calculated from sessional and ESE marks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Grades are based on total percentage of (sessional + ESE marks). S grade requires 90%+, A+ requires 85%+, A requires 80%+, B+ requires 75%+, B requires 70%+, C+ requires 65%+, C requires 60%+, D requires 55%+, and P requires 50%+.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between theory, integrated, and lab courses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Theory courses have max sessional 50 and max ESE 100. Integrated courses have max sessional 150 and max ESE 100. Lab courses have max sessional 75 and max ESE 75.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does impossible grade mean in the calculator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A grade is marked impossible when your current sessional marks are too low to achieve that grade even if you score 100% in the ESE.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to use the ESE grade calculator',
  step: [
    { '@type': 'HowToStep', text: 'Select your course type: theory (50+100), integrated (150+100), or lab (75+75).' },
    { '@type': 'HowToStep', text: 'Enter your subject name and current sessional marks.' },
    { '@type': 'HowToStep', text: 'Click "add subject" to see a table showing the minimum ESE marks needed for each grade from S (10 GP) to P (5.5 GP).' },
    { '@type': 'HowToStep', text: 'Grades marked as "impossible" cannot be achieved even with a perfect ESE score.' },
    { '@type': 'HowToStep', text: 'The pass alert shows whether you can pass and the exact minimum ESE score required.' },
  ],
};

export default function GradeCalculatorPage() {
  return (
    <main className="container">
      <JsonLd data={faqSchema} />
      <JsonLd data={howToSchema} />
      <GradeCalculator />
    </main>
  );
}

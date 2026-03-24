import type { GradeThreshold } from '@/lib/types';

export const GRADE_THRESHOLDS: GradeThreshold[] = [
  { grade: 'S',  point: 10,  min: 90, color: 'grade-s' },
  { grade: 'A+', point: 9.0, min: 85, color: 'grade-aplus' },
  { grade: 'A',  point: 8.5, min: 80, color: 'grade-a' },
  { grade: 'B+', point: 8.0, min: 75, color: 'grade-bplus' },
  { grade: 'B',  point: 7.5, min: 70, color: 'grade-b' },
  { grade: 'C+', point: 7.0, min: 65, color: 'grade-cplus' },
  { grade: 'C',  point: 6.5, min: 60, color: 'grade-c' },
  { grade: 'D',  point: 6.0, min: 55, color: 'grade-d' },
  { grade: 'P',  point: 5.5, min: 50, color: 'grade-p' },
];

export function calculateRequiredESE(
  currentMarks: number,
  maxSessional: number,
  maxESE: number,
  targetPercentage: number
): { required: number; possible: boolean } {
  const totalMarks = maxSessional + maxESE;
  const targetTotal = (targetPercentage / 100) * totalMarks;
  const requiredESE = targetTotal - currentMarks;
  const minESE = 0.4 * maxESE;

  return {
    required: Math.ceil(requiredESE),
    possible: requiredESE <= maxESE && requiredESE >= minESE,
  };
}

export function cgpaGradeLabel(cgpa: number): string {
  if (cgpa >= 9.0) return '— toppar da 🤙';
  if (cgpa >= 8.5) return '— njan impress ayi';
  if (cgpa >= 8.0) return '— solid, keep going';
  if (cgpa >= 7.5) return '— decent, could be worse';
  if (cgpa >= 7.0) return "— average-ish, you're fine";
  if (cgpa >= 6.5) return "— it's something";
  if (cgpa >= 6.0) return "— you passed, that's what matters";
  if (cgpa >= 5.5) return '— barely made it but made it';
  return '— njan parayunilla :(';
}

export function calculateCGPA(entries: Array<{ gp: number; credits: number }>): {
  cgpa: number;
  totalCredits: number;
  weightedSum: number;
} {
  const totalCredits = entries.reduce((sum, e) => sum + e.credits, 0);
  const weightedSum  = entries.reduce((sum, e) => sum + e.gp * e.credits, 0);
  return {
    cgpa: totalCredits > 0 ? weightedSum / totalCredits : 0,
    totalCredits,
    weightedSum,
  };
}

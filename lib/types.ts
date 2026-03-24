export interface Subject {
  id: string;
  name: string;
  current: number;
  maxSess: number;
  maxESE: number;
  isMini: false;
}

export interface MiniProjectSubject {
  id: string;
  name: string;
  received: number;
  total: number;
  isMini: true;
}

export type AnySubject = Subject | MiniProjectSubject;

export interface AttendanceSubject {
  id: string;
  name: string;
  total: number;
  missed: number;
  minReq: number;
}

export interface CGPAEntry {
  id: string;
  label: string;
  gp: number;
  credits: number;
}

export interface CGPASubjectSetup {
  prevCGPA: number;
  prevCredits: number;
  totalSubjects: number;
}

export interface GradeThreshold {
  grade: string;
  point: number;
  min: number;
  color: string;
}

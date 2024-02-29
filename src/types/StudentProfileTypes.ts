export interface Course {
    id: string;
    title: string;
    description: string;
}

export interface StudentProfile {
  id: string;
  cognitoUserID: string;
  name: string;
  email: string;
  birthdate: string;
  courseEnrollments?: CourseEnrollment[];
  userSettings?: UserSettings[];
}

export interface CourseProfile {
  id: string;
  title: string;
  description?: string;
  courseEnrollments?: CourseEnrollment[];
}

export interface CourseEnrollment {
  id: string;
  studentProfileID: string;
  courseProfileID: string;
  studentProfile: StudentProfile;
  courseProfile: CourseProfile;
  enrollmentDate: string; 
  progress: Progress;
  state: CourseState;
}

export interface UserSettings {
  id: string;
  notificationsEnabled: boolean;
  darkModeEnabled: boolean;
  language: string;
  isAdmin: boolean;
}

export enum Progress {
  NOT_STARTED = "NOT_STARTED",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
}

export enum CourseState {
  ACTIVE = "ACTIVE",
  PAUSED = "PAUSED",
  COMPLETED = "COMPLETED",
}

export interface SettingsHook {
  settings: UserSettings;
  setSettings: React.Dispatch<React.SetStateAction<UserSettings>>;
}
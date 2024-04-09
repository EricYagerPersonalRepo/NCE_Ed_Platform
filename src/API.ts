/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateStudentProfileInput = {
  id?: string | null,
  name: string,
  email: string,
  status: StudentStatus,
  notificationsEnabled: boolean,
  darkModeEnabled: boolean,
  language: string,
  isAdmin: boolean,
};

export enum StudentStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}


export type ModelStudentProfileConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  status?: ModelStudentStatusInput | null,
  notificationsEnabled?: ModelBooleanInput | null,
  darkModeEnabled?: ModelBooleanInput | null,
  language?: ModelStringInput | null,
  isAdmin?: ModelBooleanInput | null,
  and?: Array< ModelStudentProfileConditionInput | null > | null,
  or?: Array< ModelStudentProfileConditionInput | null > | null,
  not?: ModelStudentProfileConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStudentStatusInput = {
  eq?: StudentStatus | null,
  ne?: StudentStatus | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type StudentProfile = {
  __typename: "StudentProfile",
  id: string,
  name: string,
  email: string,
  status: StudentStatus,
  notificationsEnabled: boolean,
  darkModeEnabled: boolean,
  language: string,
  isAdmin: boolean,
  enrollments?: ModelEnrollmentConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelEnrollmentConnection = {
  __typename: "ModelEnrollmentConnection",
  items:  Array<Enrollment | null >,
  nextToken?: string | null,
};

export type Enrollment = {
  __typename: "Enrollment",
  id: string,
  userID: string,
  courseID: string,
  progress?: number | null,
  completed?: boolean | null,
  achievements?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
  studentProfileEnrollmentsId?: string | null,
};

export type UpdateStudentProfileInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  status?: StudentStatus | null,
  notificationsEnabled?: boolean | null,
  darkModeEnabled?: boolean | null,
  language?: string | null,
  isAdmin?: boolean | null,
};

export type DeleteStudentProfileInput = {
  id: string,
};

export type CreateBroadcastNotificationInput = {
  id?: string | null,
  targetStudent?: string | null,
  title: string,
  message: string,
  createdAt?: string | null,
  type: NotificationType,
  redirect?: string | null,
};

export enum NotificationType {
  MESSAGE = "MESSAGE",
  ALERT = "ALERT",
  REMINDER = "REMINDER",
}


export type ModelBroadcastNotificationConditionInput = {
  targetStudent?: ModelStringInput | null,
  title?: ModelStringInput | null,
  message?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  type?: ModelNotificationTypeInput | null,
  redirect?: ModelStringInput | null,
  and?: Array< ModelBroadcastNotificationConditionInput | null > | null,
  or?: Array< ModelBroadcastNotificationConditionInput | null > | null,
  not?: ModelBroadcastNotificationConditionInput | null,
};

export type ModelNotificationTypeInput = {
  eq?: NotificationType | null,
  ne?: NotificationType | null,
};

export type BroadcastNotification = {
  __typename: "BroadcastNotification",
  id: string,
  targetStudent?: string | null,
  title: string,
  message: string,
  createdAt: string,
  type: NotificationType,
  redirect?: string | null,
  updatedAt: string,
};

export type UpdateBroadcastNotificationInput = {
  id: string,
  targetStudent?: string | null,
  title?: string | null,
  message?: string | null,
  createdAt?: string | null,
  type?: NotificationType | null,
  redirect?: string | null,
};

export type DeleteBroadcastNotificationInput = {
  id: string,
};

export type CreateUserNotificationReadInput = {
  id?: string | null,
  notificationID: string,
  readAt?: string | null,
  readBy: string,
};

export type ModelUserNotificationReadConditionInput = {
  notificationID?: ModelIDInput | null,
  readAt?: ModelStringInput | null,
  readBy?: ModelIDInput | null,
  and?: Array< ModelUserNotificationReadConditionInput | null > | null,
  or?: Array< ModelUserNotificationReadConditionInput | null > | null,
  not?: ModelUserNotificationReadConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UserNotificationRead = {
  __typename: "UserNotificationRead",
  id: string,
  notificationID: string,
  readAt?: string | null,
  readBy: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserNotificationReadInput = {
  id: string,
  notificationID?: string | null,
  readAt?: string | null,
  readBy?: string | null,
};

export type DeleteUserNotificationReadInput = {
  id: string,
};

export type CreateCourseInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  subject: CourseSubject,
  difficulty?: string | null,
  creator: string,
};

export enum CourseSubject {
  MATH = "MATH",
  COMPUTER_SCIENCE = "COMPUTER_SCIENCE",
}


export type ModelCourseConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  subject?: ModelCourseSubjectInput | null,
  difficulty?: ModelStringInput | null,
  creator?: ModelIDInput | null,
  and?: Array< ModelCourseConditionInput | null > | null,
  or?: Array< ModelCourseConditionInput | null > | null,
  not?: ModelCourseConditionInput | null,
};

export type ModelCourseSubjectInput = {
  eq?: CourseSubject | null,
  ne?: CourseSubject | null,
};

export type Course = {
  __typename: "Course",
  id: string,
  title: string,
  description?: string | null,
  subject: CourseSubject,
  difficulty?: string | null,
  creator: string,
  modules?: ModelModuleConnection | null,
  approval?: ModelCourseApprovalConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelModuleConnection = {
  __typename: "ModelModuleConnection",
  items:  Array<Module | null >,
  nextToken?: string | null,
};

export type Module = {
  __typename: "Module",
  id: string,
  title: string,
  description?: string | null,
  courseID: string,
  course: Course,
  lessons?: ModelLessonConnection | null,
  createdAt: string,
  updatedAt: string,
  courseModulesId?: string | null,
};

export type ModelLessonConnection = {
  __typename: "ModelLessonConnection",
  items:  Array<Lesson | null >,
  nextToken?: string | null,
};

export type Lesson = {
  __typename: "Lesson",
  id: string,
  title: string,
  content?: string | null,
  videoURL?: string | null,
  moduleID: string,
  module: Module,
  quizzes?: ModelQuizConnection | null,
  exercises?: ModelExerciseConnection | null,
  createdAt: string,
  updatedAt: string,
  moduleLessonsId?: string | null,
};

export type ModelQuizConnection = {
  __typename: "ModelQuizConnection",
  items:  Array<Quiz | null >,
  nextToken?: string | null,
};

export type Quiz = {
  __typename: "Quiz",
  id: string,
  title: string,
  lessonID: string,
  lesson: Lesson,
  questions?: ModelQuestionConnection | null,
  createdAt: string,
  updatedAt: string,
  lessonQuizzesId?: string | null,
};

export type ModelQuestionConnection = {
  __typename: "ModelQuestionConnection",
  items:  Array<Question | null >,
  nextToken?: string | null,
};

export type Question = {
  __typename: "Question",
  id: string,
  text: string,
  options?: string | null,
  correctAnswer: string,
  quizID: string,
  quiz: Quiz,
  createdAt: string,
  updatedAt: string,
  quizQuestionsId?: string | null,
};

export type ModelExerciseConnection = {
  __typename: "ModelExerciseConnection",
  items:  Array<Exercise | null >,
  nextToken?: string | null,
};

export type Exercise = {
  __typename: "Exercise",
  id: string,
  question: string,
  solution?: string | null,
  lessonID: string,
  lesson: Lesson,
  exerciseType: ExerciseType,
  data?: string | null,
  createdAt: string,
  updatedAt: string,
  lessonExercisesId?: string | null,
};

export enum ExerciseType {
  CODING = "CODING",
  PROBLEM_SOLVING = "PROBLEM_SOLVING",
}


export type ModelCourseApprovalConnection = {
  __typename: "ModelCourseApprovalConnection",
  items:  Array<CourseApproval | null >,
  nextToken?: string | null,
};

export type CourseApproval = {
  __typename: "CourseApproval",
  id: string,
  status: CourseApprovalStatus,
  comments?: string | null,
  approvingAdmin: string,
  createdAt: string,
  updatedAt: string,
  courseApprovalId?: string | null,
};

export enum CourseApprovalStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  DISAPPROVED = "DISAPPROVED",
}


export type UpdateCourseInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  subject?: CourseSubject | null,
  difficulty?: string | null,
  creator?: string | null,
};

export type DeleteCourseInput = {
  id: string,
};

export type CreateEnrollmentInput = {
  id?: string | null,
  userID: string,
  courseID: string,
  progress?: number | null,
  completed?: boolean | null,
  achievements?: Array< string | null > | null,
  studentProfileEnrollmentsId?: string | null,
};

export type ModelEnrollmentConditionInput = {
  userID?: ModelIDInput | null,
  courseID?: ModelIDInput | null,
  progress?: ModelFloatInput | null,
  completed?: ModelBooleanInput | null,
  achievements?: ModelStringInput | null,
  and?: Array< ModelEnrollmentConditionInput | null > | null,
  or?: Array< ModelEnrollmentConditionInput | null > | null,
  not?: ModelEnrollmentConditionInput | null,
  studentProfileEnrollmentsId?: ModelIDInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateEnrollmentInput = {
  id: string,
  userID?: string | null,
  courseID?: string | null,
  progress?: number | null,
  completed?: boolean | null,
  achievements?: Array< string | null > | null,
  studentProfileEnrollmentsId?: string | null,
};

export type DeleteEnrollmentInput = {
  id: string,
};

export type CreateCourseApprovalInput = {
  id?: string | null,
  status: CourseApprovalStatus,
  comments?: string | null,
  approvingAdmin: string,
  courseApprovalId?: string | null,
};

export type ModelCourseApprovalConditionInput = {
  status?: ModelCourseApprovalStatusInput | null,
  comments?: ModelStringInput | null,
  approvingAdmin?: ModelIDInput | null,
  and?: Array< ModelCourseApprovalConditionInput | null > | null,
  or?: Array< ModelCourseApprovalConditionInput | null > | null,
  not?: ModelCourseApprovalConditionInput | null,
  courseApprovalId?: ModelIDInput | null,
};

export type ModelCourseApprovalStatusInput = {
  eq?: CourseApprovalStatus | null,
  ne?: CourseApprovalStatus | null,
};

export type UpdateCourseApprovalInput = {
  id: string,
  status?: CourseApprovalStatus | null,
  comments?: string | null,
  approvingAdmin?: string | null,
  courseApprovalId?: string | null,
};

export type DeleteCourseApprovalInput = {
  id: string,
};

export type CreateModuleInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  courseID: string,
  courseModulesId?: string | null,
};

export type ModelModuleConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  courseID?: ModelIDInput | null,
  and?: Array< ModelModuleConditionInput | null > | null,
  or?: Array< ModelModuleConditionInput | null > | null,
  not?: ModelModuleConditionInput | null,
  courseModulesId?: ModelIDInput | null,
};

export type UpdateModuleInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  courseID?: string | null,
  courseModulesId?: string | null,
};

export type DeleteModuleInput = {
  id: string,
};

export type CreateLessonInput = {
  id?: string | null,
  title: string,
  content?: string | null,
  videoURL?: string | null,
  moduleID: string,
  moduleLessonsId?: string | null,
};

export type ModelLessonConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  videoURL?: ModelStringInput | null,
  moduleID?: ModelIDInput | null,
  and?: Array< ModelLessonConditionInput | null > | null,
  or?: Array< ModelLessonConditionInput | null > | null,
  not?: ModelLessonConditionInput | null,
  moduleLessonsId?: ModelIDInput | null,
};

export type UpdateLessonInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  videoURL?: string | null,
  moduleID?: string | null,
  moduleLessonsId?: string | null,
};

export type DeleteLessonInput = {
  id: string,
};

export type CreateExerciseInput = {
  id?: string | null,
  question: string,
  solution?: string | null,
  lessonID: string,
  exerciseType: ExerciseType,
  data?: string | null,
  lessonExercisesId?: string | null,
};

export type ModelExerciseConditionInput = {
  question?: ModelStringInput | null,
  solution?: ModelStringInput | null,
  lessonID?: ModelIDInput | null,
  exerciseType?: ModelExerciseTypeInput | null,
  data?: ModelStringInput | null,
  and?: Array< ModelExerciseConditionInput | null > | null,
  or?: Array< ModelExerciseConditionInput | null > | null,
  not?: ModelExerciseConditionInput | null,
  lessonExercisesId?: ModelIDInput | null,
};

export type ModelExerciseTypeInput = {
  eq?: ExerciseType | null,
  ne?: ExerciseType | null,
};

export type UpdateExerciseInput = {
  id: string,
  question?: string | null,
  solution?: string | null,
  lessonID?: string | null,
  exerciseType?: ExerciseType | null,
  data?: string | null,
  lessonExercisesId?: string | null,
};

export type DeleteExerciseInput = {
  id: string,
};

export type CreateQuizInput = {
  id?: string | null,
  title: string,
  lessonID: string,
  lessonQuizzesId?: string | null,
};

export type ModelQuizConditionInput = {
  title?: ModelStringInput | null,
  lessonID?: ModelIDInput | null,
  and?: Array< ModelQuizConditionInput | null > | null,
  or?: Array< ModelQuizConditionInput | null > | null,
  not?: ModelQuizConditionInput | null,
  lessonQuizzesId?: ModelIDInput | null,
};

export type UpdateQuizInput = {
  id: string,
  title?: string | null,
  lessonID?: string | null,
  lessonQuizzesId?: string | null,
};

export type DeleteQuizInput = {
  id: string,
};

export type CreateQuestionInput = {
  id?: string | null,
  text: string,
  options?: string | null,
  correctAnswer: string,
  quizID: string,
  quizQuestionsId?: string | null,
};

export type ModelQuestionConditionInput = {
  text?: ModelStringInput | null,
  options?: ModelStringInput | null,
  correctAnswer?: ModelStringInput | null,
  quizID?: ModelIDInput | null,
  and?: Array< ModelQuestionConditionInput | null > | null,
  or?: Array< ModelQuestionConditionInput | null > | null,
  not?: ModelQuestionConditionInput | null,
  quizQuestionsId?: ModelIDInput | null,
};

export type UpdateQuestionInput = {
  id: string,
  text?: string | null,
  options?: string | null,
  correctAnswer?: string | null,
  quizID?: string | null,
  quizQuestionsId?: string | null,
};

export type DeleteQuestionInput = {
  id: string,
};

export type CreateInstructorProfileInput = {
  id?: string | null,
  name: string,
  email: string,
  instructorProfileBiographyId: string,
  instructorProfileContactId: string,
};

export type ModelInstructorProfileConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelInstructorProfileConditionInput | null > | null,
  or?: Array< ModelInstructorProfileConditionInput | null > | null,
  not?: ModelInstructorProfileConditionInput | null,
  instructorProfileBiographyId?: ModelIDInput | null,
  instructorProfileContactId?: ModelIDInput | null,
};

export type InstructorProfile = {
  __typename: "InstructorProfile",
  id: string,
  name: string,
  email: string,
  biography: InstructorBiography,
  contact: InstructorContact,
  createdAt: string,
  updatedAt: string,
  instructorProfileBiographyId: string,
  instructorProfileContactId: string,
  owner?: string | null,
};

export type InstructorBiography = {
  __typename: "InstructorBiography",
  id: string,
  overview: string,
  professionalExperience?: ModelExperienceConnection | null,
  awards?: ModelAwardConnection | null,
  instructor: InstructorProfile,
  createdAt: string,
  updatedAt: string,
  instructorBiographyInstructorId: string,
  owner?: string | null,
};

export type ModelExperienceConnection = {
  __typename: "ModelExperienceConnection",
  items:  Array<Experience | null >,
  nextToken?: string | null,
};

export type Experience = {
  __typename: "Experience",
  id: string,
  startDate: string,
  endDate?: string | null,
  isCurrent: boolean,
  companyName: string,
  jobTitle: string,
  description: string,
  createdAt: string,
  updatedAt: string,
  instructorBiographyProfessionalExperienceId?: string | null,
  owner?: string | null,
};

export type ModelAwardConnection = {
  __typename: "ModelAwardConnection",
  items:  Array<Award | null >,
  nextToken?: string | null,
};

export type Award = {
  __typename: "Award",
  id: string,
  awardDate: string,
  awardSource: string,
  description: string,
  createdAt: string,
  updatedAt: string,
  instructorBiographyAwardsId?: string | null,
  owner?: string | null,
};

export type InstructorContact = {
  __typename: "InstructorContact",
  id: string,
  phone?: string | null,
  email?: string | null,
  instructorID: InstructorProfile,
  createdAt: string,
  updatedAt: string,
  instructorContactInstructorIDId: string,
  owner?: string | null,
};

export type UpdateInstructorProfileInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  instructorProfileBiographyId?: string | null,
  instructorProfileContactId?: string | null,
};

export type DeleteInstructorProfileInput = {
  id: string,
};

export type CreateInstructorBiographyInput = {
  id?: string | null,
  overview: string,
  instructorBiographyInstructorId: string,
};

export type ModelInstructorBiographyConditionInput = {
  overview?: ModelStringInput | null,
  and?: Array< ModelInstructorBiographyConditionInput | null > | null,
  or?: Array< ModelInstructorBiographyConditionInput | null > | null,
  not?: ModelInstructorBiographyConditionInput | null,
  instructorBiographyInstructorId?: ModelIDInput | null,
};

export type UpdateInstructorBiographyInput = {
  id: string,
  overview?: string | null,
  instructorBiographyInstructorId?: string | null,
};

export type DeleteInstructorBiographyInput = {
  id: string,
};

export type CreateInstructorContactInput = {
  id?: string | null,
  phone?: string | null,
  email?: string | null,
  instructorContactInstructorIDId: string,
};

export type ModelInstructorContactConditionInput = {
  phone?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelInstructorContactConditionInput | null > | null,
  or?: Array< ModelInstructorContactConditionInput | null > | null,
  not?: ModelInstructorContactConditionInput | null,
  instructorContactInstructorIDId?: ModelIDInput | null,
};

export type UpdateInstructorContactInput = {
  id: string,
  phone?: string | null,
  email?: string | null,
  instructorContactInstructorIDId?: string | null,
};

export type DeleteInstructorContactInput = {
  id: string,
};

export type CreateExperienceInput = {
  id?: string | null,
  startDate: string,
  endDate?: string | null,
  isCurrent: boolean,
  companyName: string,
  jobTitle: string,
  description: string,
  instructorBiographyProfessionalExperienceId?: string | null,
};

export type ModelExperienceConditionInput = {
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  isCurrent?: ModelBooleanInput | null,
  companyName?: ModelStringInput | null,
  jobTitle?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelExperienceConditionInput | null > | null,
  or?: Array< ModelExperienceConditionInput | null > | null,
  not?: ModelExperienceConditionInput | null,
  instructorBiographyProfessionalExperienceId?: ModelIDInput | null,
};

export type UpdateExperienceInput = {
  id: string,
  startDate?: string | null,
  endDate?: string | null,
  isCurrent?: boolean | null,
  companyName?: string | null,
  jobTitle?: string | null,
  description?: string | null,
  instructorBiographyProfessionalExperienceId?: string | null,
};

export type DeleteExperienceInput = {
  id: string,
};

export type CreateAwardInput = {
  id?: string | null,
  awardDate: string,
  awardSource: string,
  description: string,
  instructorBiographyAwardsId?: string | null,
};

export type ModelAwardConditionInput = {
  awardDate?: ModelStringInput | null,
  awardSource?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelAwardConditionInput | null > | null,
  or?: Array< ModelAwardConditionInput | null > | null,
  not?: ModelAwardConditionInput | null,
  instructorBiographyAwardsId?: ModelIDInput | null,
};

export type UpdateAwardInput = {
  id: string,
  awardDate?: string | null,
  awardSource?: string | null,
  description?: string | null,
  instructorBiographyAwardsId?: string | null,
};

export type DeleteAwardInput = {
  id: string,
};

export type ModelStudentProfileFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  status?: ModelStudentStatusInput | null,
  notificationsEnabled?: ModelBooleanInput | null,
  darkModeEnabled?: ModelBooleanInput | null,
  language?: ModelStringInput | null,
  isAdmin?: ModelBooleanInput | null,
  and?: Array< ModelStudentProfileFilterInput | null > | null,
  or?: Array< ModelStudentProfileFilterInput | null > | null,
  not?: ModelStudentProfileFilterInput | null,
};

export type ModelStudentProfileConnection = {
  __typename: "ModelStudentProfileConnection",
  items:  Array<StudentProfile | null >,
  nextToken?: string | null,
};

export type ModelBroadcastNotificationFilterInput = {
  id?: ModelIDInput | null,
  targetStudent?: ModelStringInput | null,
  title?: ModelStringInput | null,
  message?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  type?: ModelNotificationTypeInput | null,
  redirect?: ModelStringInput | null,
  and?: Array< ModelBroadcastNotificationFilterInput | null > | null,
  or?: Array< ModelBroadcastNotificationFilterInput | null > | null,
  not?: ModelBroadcastNotificationFilterInput | null,
};

export type ModelBroadcastNotificationConnection = {
  __typename: "ModelBroadcastNotificationConnection",
  items:  Array<BroadcastNotification | null >,
  nextToken?: string | null,
};

export type ModelUserNotificationReadFilterInput = {
  id?: ModelIDInput | null,
  notificationID?: ModelIDInput | null,
  readAt?: ModelStringInput | null,
  readBy?: ModelIDInput | null,
  and?: Array< ModelUserNotificationReadFilterInput | null > | null,
  or?: Array< ModelUserNotificationReadFilterInput | null > | null,
  not?: ModelUserNotificationReadFilterInput | null,
};

export type ModelUserNotificationReadConnection = {
  __typename: "ModelUserNotificationReadConnection",
  items:  Array<UserNotificationRead | null >,
  nextToken?: string | null,
};

export type ModelCourseFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  subject?: ModelCourseSubjectInput | null,
  difficulty?: ModelStringInput | null,
  creator?: ModelIDInput | null,
  and?: Array< ModelCourseFilterInput | null > | null,
  or?: Array< ModelCourseFilterInput | null > | null,
  not?: ModelCourseFilterInput | null,
};

export type ModelCourseConnection = {
  __typename: "ModelCourseConnection",
  items:  Array<Course | null >,
  nextToken?: string | null,
};

export type ModelEnrollmentFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  courseID?: ModelIDInput | null,
  progress?: ModelFloatInput | null,
  completed?: ModelBooleanInput | null,
  achievements?: ModelStringInput | null,
  and?: Array< ModelEnrollmentFilterInput | null > | null,
  or?: Array< ModelEnrollmentFilterInput | null > | null,
  not?: ModelEnrollmentFilterInput | null,
  studentProfileEnrollmentsId?: ModelIDInput | null,
};

export type ModelCourseApprovalFilterInput = {
  id?: ModelIDInput | null,
  status?: ModelCourseApprovalStatusInput | null,
  comments?: ModelStringInput | null,
  approvingAdmin?: ModelIDInput | null,
  and?: Array< ModelCourseApprovalFilterInput | null > | null,
  or?: Array< ModelCourseApprovalFilterInput | null > | null,
  not?: ModelCourseApprovalFilterInput | null,
  courseApprovalId?: ModelIDInput | null,
};

export type ModelModuleFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  courseID?: ModelIDInput | null,
  and?: Array< ModelModuleFilterInput | null > | null,
  or?: Array< ModelModuleFilterInput | null > | null,
  not?: ModelModuleFilterInput | null,
  courseModulesId?: ModelIDInput | null,
};

export type ModelLessonFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  videoURL?: ModelStringInput | null,
  moduleID?: ModelIDInput | null,
  and?: Array< ModelLessonFilterInput | null > | null,
  or?: Array< ModelLessonFilterInput | null > | null,
  not?: ModelLessonFilterInput | null,
  moduleLessonsId?: ModelIDInput | null,
};

export type ModelExerciseFilterInput = {
  id?: ModelIDInput | null,
  question?: ModelStringInput | null,
  solution?: ModelStringInput | null,
  lessonID?: ModelIDInput | null,
  exerciseType?: ModelExerciseTypeInput | null,
  data?: ModelStringInput | null,
  and?: Array< ModelExerciseFilterInput | null > | null,
  or?: Array< ModelExerciseFilterInput | null > | null,
  not?: ModelExerciseFilterInput | null,
  lessonExercisesId?: ModelIDInput | null,
};

export type ModelQuizFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  lessonID?: ModelIDInput | null,
  and?: Array< ModelQuizFilterInput | null > | null,
  or?: Array< ModelQuizFilterInput | null > | null,
  not?: ModelQuizFilterInput | null,
  lessonQuizzesId?: ModelIDInput | null,
};

export type ModelQuestionFilterInput = {
  id?: ModelIDInput | null,
  text?: ModelStringInput | null,
  options?: ModelStringInput | null,
  correctAnswer?: ModelStringInput | null,
  quizID?: ModelIDInput | null,
  and?: Array< ModelQuestionFilterInput | null > | null,
  or?: Array< ModelQuestionFilterInput | null > | null,
  not?: ModelQuestionFilterInput | null,
  quizQuestionsId?: ModelIDInput | null,
};

export type ModelInstructorProfileFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelInstructorProfileFilterInput | null > | null,
  or?: Array< ModelInstructorProfileFilterInput | null > | null,
  not?: ModelInstructorProfileFilterInput | null,
  instructorProfileBiographyId?: ModelIDInput | null,
  instructorProfileContactId?: ModelIDInput | null,
};

export type ModelInstructorProfileConnection = {
  __typename: "ModelInstructorProfileConnection",
  items:  Array<InstructorProfile | null >,
  nextToken?: string | null,
};

export type ModelInstructorBiographyFilterInput = {
  id?: ModelIDInput | null,
  overview?: ModelStringInput | null,
  and?: Array< ModelInstructorBiographyFilterInput | null > | null,
  or?: Array< ModelInstructorBiographyFilterInput | null > | null,
  not?: ModelInstructorBiographyFilterInput | null,
  instructorBiographyInstructorId?: ModelIDInput | null,
};

export type ModelInstructorBiographyConnection = {
  __typename: "ModelInstructorBiographyConnection",
  items:  Array<InstructorBiography | null >,
  nextToken?: string | null,
};

export type ModelInstructorContactFilterInput = {
  id?: ModelIDInput | null,
  phone?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelInstructorContactFilterInput | null > | null,
  or?: Array< ModelInstructorContactFilterInput | null > | null,
  not?: ModelInstructorContactFilterInput | null,
  instructorContactInstructorIDId?: ModelIDInput | null,
};

export type ModelInstructorContactConnection = {
  __typename: "ModelInstructorContactConnection",
  items:  Array<InstructorContact | null >,
  nextToken?: string | null,
};

export type ModelExperienceFilterInput = {
  id?: ModelIDInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  isCurrent?: ModelBooleanInput | null,
  companyName?: ModelStringInput | null,
  jobTitle?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelExperienceFilterInput | null > | null,
  or?: Array< ModelExperienceFilterInput | null > | null,
  not?: ModelExperienceFilterInput | null,
  instructorBiographyProfessionalExperienceId?: ModelIDInput | null,
};

export type ModelAwardFilterInput = {
  id?: ModelIDInput | null,
  awardDate?: ModelStringInput | null,
  awardSource?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelAwardFilterInput | null > | null,
  or?: Array< ModelAwardFilterInput | null > | null,
  not?: ModelAwardFilterInput | null,
  instructorBiographyAwardsId?: ModelIDInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelSubscriptionStudentProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  notificationsEnabled?: ModelSubscriptionBooleanInput | null,
  darkModeEnabled?: ModelSubscriptionBooleanInput | null,
  language?: ModelSubscriptionStringInput | null,
  isAdmin?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionStudentProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionStudentProfileFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionBroadcastNotificationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  targetStudent?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  message?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  redirect?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBroadcastNotificationFilterInput | null > | null,
  or?: Array< ModelSubscriptionBroadcastNotificationFilterInput | null > | null,
};

export type ModelSubscriptionUserNotificationReadFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  notificationID?: ModelSubscriptionIDInput | null,
  readAt?: ModelSubscriptionStringInput | null,
  readBy?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserNotificationReadFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserNotificationReadFilterInput | null > | null,
};

export type ModelSubscriptionCourseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  subject?: ModelSubscriptionStringInput | null,
  difficulty?: ModelSubscriptionStringInput | null,
  creator?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCourseFilterInput | null > | null,
  or?: Array< ModelSubscriptionCourseFilterInput | null > | null,
};

export type ModelSubscriptionEnrollmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  courseID?: ModelSubscriptionIDInput | null,
  progress?: ModelSubscriptionFloatInput | null,
  completed?: ModelSubscriptionBooleanInput | null,
  achievements?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEnrollmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionEnrollmentFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionCourseApprovalFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  comments?: ModelSubscriptionStringInput | null,
  approvingAdmin?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCourseApprovalFilterInput | null > | null,
  or?: Array< ModelSubscriptionCourseApprovalFilterInput | null > | null,
};

export type ModelSubscriptionModuleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  courseID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionModuleFilterInput | null > | null,
  or?: Array< ModelSubscriptionModuleFilterInput | null > | null,
};

export type ModelSubscriptionLessonFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  videoURL?: ModelSubscriptionStringInput | null,
  moduleID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionLessonFilterInput | null > | null,
  or?: Array< ModelSubscriptionLessonFilterInput | null > | null,
};

export type ModelSubscriptionExerciseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  question?: ModelSubscriptionStringInput | null,
  solution?: ModelSubscriptionStringInput | null,
  lessonID?: ModelSubscriptionIDInput | null,
  exerciseType?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionExerciseFilterInput | null > | null,
  or?: Array< ModelSubscriptionExerciseFilterInput | null > | null,
};

export type ModelSubscriptionQuizFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  lessonID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionQuizFilterInput | null > | null,
  or?: Array< ModelSubscriptionQuizFilterInput | null > | null,
};

export type ModelSubscriptionQuestionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  text?: ModelSubscriptionStringInput | null,
  options?: ModelSubscriptionStringInput | null,
  correctAnswer?: ModelSubscriptionStringInput | null,
  quizID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionQuestionFilterInput | null > | null,
  or?: Array< ModelSubscriptionQuestionFilterInput | null > | null,
};

export type ModelSubscriptionInstructorProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionInstructorProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionInstructorProfileFilterInput | null > | null,
};

export type ModelSubscriptionInstructorBiographyFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  overview?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionInstructorBiographyFilterInput | null > | null,
  or?: Array< ModelSubscriptionInstructorBiographyFilterInput | null > | null,
};

export type ModelSubscriptionInstructorContactFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  phone?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionInstructorContactFilterInput | null > | null,
  or?: Array< ModelSubscriptionInstructorContactFilterInput | null > | null,
};

export type ModelSubscriptionExperienceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  startDate?: ModelSubscriptionStringInput | null,
  endDate?: ModelSubscriptionStringInput | null,
  isCurrent?: ModelSubscriptionBooleanInput | null,
  companyName?: ModelSubscriptionStringInput | null,
  jobTitle?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionExperienceFilterInput | null > | null,
  or?: Array< ModelSubscriptionExperienceFilterInput | null > | null,
};

export type ModelSubscriptionAwardFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  awardDate?: ModelSubscriptionStringInput | null,
  awardSource?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAwardFilterInput | null > | null,
  or?: Array< ModelSubscriptionAwardFilterInput | null > | null,
};

export type CreateStudentProfileMutationVariables = {
  input: CreateStudentProfileInput,
  condition?: ModelStudentProfileConditionInput | null,
};

export type CreateStudentProfileMutation = {
  createStudentProfile?:  {
    __typename: "StudentProfile",
    id: string,
    name: string,
    email: string,
    status: StudentStatus,
    notificationsEnabled: boolean,
    darkModeEnabled: boolean,
    language: string,
    isAdmin: boolean,
    enrollments?:  {
      __typename: "ModelEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStudentProfileMutationVariables = {
  input: UpdateStudentProfileInput,
  condition?: ModelStudentProfileConditionInput | null,
};

export type UpdateStudentProfileMutation = {
  updateStudentProfile?:  {
    __typename: "StudentProfile",
    id: string,
    name: string,
    email: string,
    status: StudentStatus,
    notificationsEnabled: boolean,
    darkModeEnabled: boolean,
    language: string,
    isAdmin: boolean,
    enrollments?:  {
      __typename: "ModelEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStudentProfileMutationVariables = {
  input: DeleteStudentProfileInput,
  condition?: ModelStudentProfileConditionInput | null,
};

export type DeleteStudentProfileMutation = {
  deleteStudentProfile?:  {
    __typename: "StudentProfile",
    id: string,
    name: string,
    email: string,
    status: StudentStatus,
    notificationsEnabled: boolean,
    darkModeEnabled: boolean,
    language: string,
    isAdmin: boolean,
    enrollments?:  {
      __typename: "ModelEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateBroadcastNotificationMutationVariables = {
  input: CreateBroadcastNotificationInput,
  condition?: ModelBroadcastNotificationConditionInput | null,
};

export type CreateBroadcastNotificationMutation = {
  createBroadcastNotification?:  {
    __typename: "BroadcastNotification",
    id: string,
    targetStudent?: string | null,
    title: string,
    message: string,
    createdAt: string,
    type: NotificationType,
    redirect?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateBroadcastNotificationMutationVariables = {
  input: UpdateBroadcastNotificationInput,
  condition?: ModelBroadcastNotificationConditionInput | null,
};

export type UpdateBroadcastNotificationMutation = {
  updateBroadcastNotification?:  {
    __typename: "BroadcastNotification",
    id: string,
    targetStudent?: string | null,
    title: string,
    message: string,
    createdAt: string,
    type: NotificationType,
    redirect?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteBroadcastNotificationMutationVariables = {
  input: DeleteBroadcastNotificationInput,
  condition?: ModelBroadcastNotificationConditionInput | null,
};

export type DeleteBroadcastNotificationMutation = {
  deleteBroadcastNotification?:  {
    __typename: "BroadcastNotification",
    id: string,
    targetStudent?: string | null,
    title: string,
    message: string,
    createdAt: string,
    type: NotificationType,
    redirect?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateUserNotificationReadMutationVariables = {
  input: CreateUserNotificationReadInput,
  condition?: ModelUserNotificationReadConditionInput | null,
};

export type CreateUserNotificationReadMutation = {
  createUserNotificationRead?:  {
    __typename: "UserNotificationRead",
    id: string,
    notificationID: string,
    readAt?: string | null,
    readBy: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserNotificationReadMutationVariables = {
  input: UpdateUserNotificationReadInput,
  condition?: ModelUserNotificationReadConditionInput | null,
};

export type UpdateUserNotificationReadMutation = {
  updateUserNotificationRead?:  {
    __typename: "UserNotificationRead",
    id: string,
    notificationID: string,
    readAt?: string | null,
    readBy: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserNotificationReadMutationVariables = {
  input: DeleteUserNotificationReadInput,
  condition?: ModelUserNotificationReadConditionInput | null,
};

export type DeleteUserNotificationReadMutation = {
  deleteUserNotificationRead?:  {
    __typename: "UserNotificationRead",
    id: string,
    notificationID: string,
    readAt?: string | null,
    readBy: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCourseMutationVariables = {
  input: CreateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type CreateCourseMutation = {
  createCourse?:  {
    __typename: "Course",
    id: string,
    title: string,
    description?: string | null,
    subject: CourseSubject,
    difficulty?: string | null,
    creator: string,
    modules?:  {
      __typename: "ModelModuleConnection",
      nextToken?: string | null,
    } | null,
    approval?:  {
      __typename: "ModelCourseApprovalConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCourseMutationVariables = {
  input: UpdateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type UpdateCourseMutation = {
  updateCourse?:  {
    __typename: "Course",
    id: string,
    title: string,
    description?: string | null,
    subject: CourseSubject,
    difficulty?: string | null,
    creator: string,
    modules?:  {
      __typename: "ModelModuleConnection",
      nextToken?: string | null,
    } | null,
    approval?:  {
      __typename: "ModelCourseApprovalConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCourseMutationVariables = {
  input: DeleteCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type DeleteCourseMutation = {
  deleteCourse?:  {
    __typename: "Course",
    id: string,
    title: string,
    description?: string | null,
    subject: CourseSubject,
    difficulty?: string | null,
    creator: string,
    modules?:  {
      __typename: "ModelModuleConnection",
      nextToken?: string | null,
    } | null,
    approval?:  {
      __typename: "ModelCourseApprovalConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEnrollmentMutationVariables = {
  input: CreateEnrollmentInput,
  condition?: ModelEnrollmentConditionInput | null,
};

export type CreateEnrollmentMutation = {
  createEnrollment?:  {
    __typename: "Enrollment",
    id: string,
    userID: string,
    courseID: string,
    progress?: number | null,
    completed?: boolean | null,
    achievements?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    studentProfileEnrollmentsId?: string | null,
  } | null,
};

export type UpdateEnrollmentMutationVariables = {
  input: UpdateEnrollmentInput,
  condition?: ModelEnrollmentConditionInput | null,
};

export type UpdateEnrollmentMutation = {
  updateEnrollment?:  {
    __typename: "Enrollment",
    id: string,
    userID: string,
    courseID: string,
    progress?: number | null,
    completed?: boolean | null,
    achievements?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    studentProfileEnrollmentsId?: string | null,
  } | null,
};

export type DeleteEnrollmentMutationVariables = {
  input: DeleteEnrollmentInput,
  condition?: ModelEnrollmentConditionInput | null,
};

export type DeleteEnrollmentMutation = {
  deleteEnrollment?:  {
    __typename: "Enrollment",
    id: string,
    userID: string,
    courseID: string,
    progress?: number | null,
    completed?: boolean | null,
    achievements?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    studentProfileEnrollmentsId?: string | null,
  } | null,
};

export type CreateCourseApprovalMutationVariables = {
  input: CreateCourseApprovalInput,
  condition?: ModelCourseApprovalConditionInput | null,
};

export type CreateCourseApprovalMutation = {
  createCourseApproval?:  {
    __typename: "CourseApproval",
    id: string,
    status: CourseApprovalStatus,
    comments?: string | null,
    approvingAdmin: string,
    createdAt: string,
    updatedAt: string,
    courseApprovalId?: string | null,
  } | null,
};

export type UpdateCourseApprovalMutationVariables = {
  input: UpdateCourseApprovalInput,
  condition?: ModelCourseApprovalConditionInput | null,
};

export type UpdateCourseApprovalMutation = {
  updateCourseApproval?:  {
    __typename: "CourseApproval",
    id: string,
    status: CourseApprovalStatus,
    comments?: string | null,
    approvingAdmin: string,
    createdAt: string,
    updatedAt: string,
    courseApprovalId?: string | null,
  } | null,
};

export type DeleteCourseApprovalMutationVariables = {
  input: DeleteCourseApprovalInput,
  condition?: ModelCourseApprovalConditionInput | null,
};

export type DeleteCourseApprovalMutation = {
  deleteCourseApproval?:  {
    __typename: "CourseApproval",
    id: string,
    status: CourseApprovalStatus,
    comments?: string | null,
    approvingAdmin: string,
    createdAt: string,
    updatedAt: string,
    courseApprovalId?: string | null,
  } | null,
};

export type CreateModuleMutationVariables = {
  input: CreateModuleInput,
  condition?: ModelModuleConditionInput | null,
};

export type CreateModuleMutation = {
  createModule?:  {
    __typename: "Module",
    id: string,
    title: string,
    description?: string | null,
    courseID: string,
    course:  {
      __typename: "Course",
      id: string,
      title: string,
      description?: string | null,
      subject: CourseSubject,
      difficulty?: string | null,
      creator: string,
      createdAt: string,
      updatedAt: string,
    },
    lessons?:  {
      __typename: "ModelLessonConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    courseModulesId?: string | null,
  } | null,
};

export type UpdateModuleMutationVariables = {
  input: UpdateModuleInput,
  condition?: ModelModuleConditionInput | null,
};

export type UpdateModuleMutation = {
  updateModule?:  {
    __typename: "Module",
    id: string,
    title: string,
    description?: string | null,
    courseID: string,
    course:  {
      __typename: "Course",
      id: string,
      title: string,
      description?: string | null,
      subject: CourseSubject,
      difficulty?: string | null,
      creator: string,
      createdAt: string,
      updatedAt: string,
    },
    lessons?:  {
      __typename: "ModelLessonConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    courseModulesId?: string | null,
  } | null,
};

export type DeleteModuleMutationVariables = {
  input: DeleteModuleInput,
  condition?: ModelModuleConditionInput | null,
};

export type DeleteModuleMutation = {
  deleteModule?:  {
    __typename: "Module",
    id: string,
    title: string,
    description?: string | null,
    courseID: string,
    course:  {
      __typename: "Course",
      id: string,
      title: string,
      description?: string | null,
      subject: CourseSubject,
      difficulty?: string | null,
      creator: string,
      createdAt: string,
      updatedAt: string,
    },
    lessons?:  {
      __typename: "ModelLessonConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    courseModulesId?: string | null,
  } | null,
};

export type CreateLessonMutationVariables = {
  input: CreateLessonInput,
  condition?: ModelLessonConditionInput | null,
};

export type CreateLessonMutation = {
  createLesson?:  {
    __typename: "Lesson",
    id: string,
    title: string,
    content?: string | null,
    videoURL?: string | null,
    moduleID: string,
    module:  {
      __typename: "Module",
      id: string,
      title: string,
      description?: string | null,
      courseID: string,
      createdAt: string,
      updatedAt: string,
      courseModulesId?: string | null,
    },
    quizzes?:  {
      __typename: "ModelQuizConnection",
      nextToken?: string | null,
    } | null,
    exercises?:  {
      __typename: "ModelExerciseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    moduleLessonsId?: string | null,
  } | null,
};

export type UpdateLessonMutationVariables = {
  input: UpdateLessonInput,
  condition?: ModelLessonConditionInput | null,
};

export type UpdateLessonMutation = {
  updateLesson?:  {
    __typename: "Lesson",
    id: string,
    title: string,
    content?: string | null,
    videoURL?: string | null,
    moduleID: string,
    module:  {
      __typename: "Module",
      id: string,
      title: string,
      description?: string | null,
      courseID: string,
      createdAt: string,
      updatedAt: string,
      courseModulesId?: string | null,
    },
    quizzes?:  {
      __typename: "ModelQuizConnection",
      nextToken?: string | null,
    } | null,
    exercises?:  {
      __typename: "ModelExerciseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    moduleLessonsId?: string | null,
  } | null,
};

export type DeleteLessonMutationVariables = {
  input: DeleteLessonInput,
  condition?: ModelLessonConditionInput | null,
};

export type DeleteLessonMutation = {
  deleteLesson?:  {
    __typename: "Lesson",
    id: string,
    title: string,
    content?: string | null,
    videoURL?: string | null,
    moduleID: string,
    module:  {
      __typename: "Module",
      id: string,
      title: string,
      description?: string | null,
      courseID: string,
      createdAt: string,
      updatedAt: string,
      courseModulesId?: string | null,
    },
    quizzes?:  {
      __typename: "ModelQuizConnection",
      nextToken?: string | null,
    } | null,
    exercises?:  {
      __typename: "ModelExerciseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    moduleLessonsId?: string | null,
  } | null,
};

export type CreateExerciseMutationVariables = {
  input: CreateExerciseInput,
  condition?: ModelExerciseConditionInput | null,
};

export type CreateExerciseMutation = {
  createExercise?:  {
    __typename: "Exercise",
    id: string,
    question: string,
    solution?: string | null,
    lessonID: string,
    lesson:  {
      __typename: "Lesson",
      id: string,
      title: string,
      content?: string | null,
      videoURL?: string | null,
      moduleID: string,
      createdAt: string,
      updatedAt: string,
      moduleLessonsId?: string | null,
    },
    exerciseType: ExerciseType,
    data?: string | null,
    createdAt: string,
    updatedAt: string,
    lessonExercisesId?: string | null,
  } | null,
};

export type UpdateExerciseMutationVariables = {
  input: UpdateExerciseInput,
  condition?: ModelExerciseConditionInput | null,
};

export type UpdateExerciseMutation = {
  updateExercise?:  {
    __typename: "Exercise",
    id: string,
    question: string,
    solution?: string | null,
    lessonID: string,
    lesson:  {
      __typename: "Lesson",
      id: string,
      title: string,
      content?: string | null,
      videoURL?: string | null,
      moduleID: string,
      createdAt: string,
      updatedAt: string,
      moduleLessonsId?: string | null,
    },
    exerciseType: ExerciseType,
    data?: string | null,
    createdAt: string,
    updatedAt: string,
    lessonExercisesId?: string | null,
  } | null,
};

export type DeleteExerciseMutationVariables = {
  input: DeleteExerciseInput,
  condition?: ModelExerciseConditionInput | null,
};

export type DeleteExerciseMutation = {
  deleteExercise?:  {
    __typename: "Exercise",
    id: string,
    question: string,
    solution?: string | null,
    lessonID: string,
    lesson:  {
      __typename: "Lesson",
      id: string,
      title: string,
      content?: string | null,
      videoURL?: string | null,
      moduleID: string,
      createdAt: string,
      updatedAt: string,
      moduleLessonsId?: string | null,
    },
    exerciseType: ExerciseType,
    data?: string | null,
    createdAt: string,
    updatedAt: string,
    lessonExercisesId?: string | null,
  } | null,
};

export type CreateQuizMutationVariables = {
  input: CreateQuizInput,
  condition?: ModelQuizConditionInput | null,
};

export type CreateQuizMutation = {
  createQuiz?:  {
    __typename: "Quiz",
    id: string,
    title: string,
    lessonID: string,
    lesson:  {
      __typename: "Lesson",
      id: string,
      title: string,
      content?: string | null,
      videoURL?: string | null,
      moduleID: string,
      createdAt: string,
      updatedAt: string,
      moduleLessonsId?: string | null,
    },
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    lessonQuizzesId?: string | null,
  } | null,
};

export type UpdateQuizMutationVariables = {
  input: UpdateQuizInput,
  condition?: ModelQuizConditionInput | null,
};

export type UpdateQuizMutation = {
  updateQuiz?:  {
    __typename: "Quiz",
    id: string,
    title: string,
    lessonID: string,
    lesson:  {
      __typename: "Lesson",
      id: string,
      title: string,
      content?: string | null,
      videoURL?: string | null,
      moduleID: string,
      createdAt: string,
      updatedAt: string,
      moduleLessonsId?: string | null,
    },
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    lessonQuizzesId?: string | null,
  } | null,
};

export type DeleteQuizMutationVariables = {
  input: DeleteQuizInput,
  condition?: ModelQuizConditionInput | null,
};

export type DeleteQuizMutation = {
  deleteQuiz?:  {
    __typename: "Quiz",
    id: string,
    title: string,
    lessonID: string,
    lesson:  {
      __typename: "Lesson",
      id: string,
      title: string,
      content?: string | null,
      videoURL?: string | null,
      moduleID: string,
      createdAt: string,
      updatedAt: string,
      moduleLessonsId?: string | null,
    },
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    lessonQuizzesId?: string | null,
  } | null,
};

export type CreateQuestionMutationVariables = {
  input: CreateQuestionInput,
  condition?: ModelQuestionConditionInput | null,
};

export type CreateQuestionMutation = {
  createQuestion?:  {
    __typename: "Question",
    id: string,
    text: string,
    options?: string | null,
    correctAnswer: string,
    quizID: string,
    quiz:  {
      __typename: "Quiz",
      id: string,
      title: string,
      lessonID: string,
      createdAt: string,
      updatedAt: string,
      lessonQuizzesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    quizQuestionsId?: string | null,
  } | null,
};

export type UpdateQuestionMutationVariables = {
  input: UpdateQuestionInput,
  condition?: ModelQuestionConditionInput | null,
};

export type UpdateQuestionMutation = {
  updateQuestion?:  {
    __typename: "Question",
    id: string,
    text: string,
    options?: string | null,
    correctAnswer: string,
    quizID: string,
    quiz:  {
      __typename: "Quiz",
      id: string,
      title: string,
      lessonID: string,
      createdAt: string,
      updatedAt: string,
      lessonQuizzesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    quizQuestionsId?: string | null,
  } | null,
};

export type DeleteQuestionMutationVariables = {
  input: DeleteQuestionInput,
  condition?: ModelQuestionConditionInput | null,
};

export type DeleteQuestionMutation = {
  deleteQuestion?:  {
    __typename: "Question",
    id: string,
    text: string,
    options?: string | null,
    correctAnswer: string,
    quizID: string,
    quiz:  {
      __typename: "Quiz",
      id: string,
      title: string,
      lessonID: string,
      createdAt: string,
      updatedAt: string,
      lessonQuizzesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    quizQuestionsId?: string | null,
  } | null,
};

export type CreateInstructorProfileMutationVariables = {
  input: CreateInstructorProfileInput,
  condition?: ModelInstructorProfileConditionInput | null,
};

export type CreateInstructorProfileMutation = {
  createInstructorProfile?:  {
    __typename: "InstructorProfile",
    id: string,
    name: string,
    email: string,
    biography:  {
      __typename: "InstructorBiography",
      id: string,
      overview: string,
      createdAt: string,
      updatedAt: string,
      instructorBiographyInstructorId: string,
      owner?: string | null,
    },
    contact:  {
      __typename: "InstructorContact",
      id: string,
      phone?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      instructorContactInstructorIDId: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    instructorProfileBiographyId: string,
    instructorProfileContactId: string,
    owner?: string | null,
  } | null,
};

export type UpdateInstructorProfileMutationVariables = {
  input: UpdateInstructorProfileInput,
  condition?: ModelInstructorProfileConditionInput | null,
};

export type UpdateInstructorProfileMutation = {
  updateInstructorProfile?:  {
    __typename: "InstructorProfile",
    id: string,
    name: string,
    email: string,
    biography:  {
      __typename: "InstructorBiography",
      id: string,
      overview: string,
      createdAt: string,
      updatedAt: string,
      instructorBiographyInstructorId: string,
      owner?: string | null,
    },
    contact:  {
      __typename: "InstructorContact",
      id: string,
      phone?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      instructorContactInstructorIDId: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    instructorProfileBiographyId: string,
    instructorProfileContactId: string,
    owner?: string | null,
  } | null,
};

export type DeleteInstructorProfileMutationVariables = {
  input: DeleteInstructorProfileInput,
  condition?: ModelInstructorProfileConditionInput | null,
};

export type DeleteInstructorProfileMutation = {
  deleteInstructorProfile?:  {
    __typename: "InstructorProfile",
    id: string,
    name: string,
    email: string,
    biography:  {
      __typename: "InstructorBiography",
      id: string,
      overview: string,
      createdAt: string,
      updatedAt: string,
      instructorBiographyInstructorId: string,
      owner?: string | null,
    },
    contact:  {
      __typename: "InstructorContact",
      id: string,
      phone?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      instructorContactInstructorIDId: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    instructorProfileBiographyId: string,
    instructorProfileContactId: string,
    owner?: string | null,
  } | null,
};

export type CreateInstructorBiographyMutationVariables = {
  input: CreateInstructorBiographyInput,
  condition?: ModelInstructorBiographyConditionInput | null,
};

export type CreateInstructorBiographyMutation = {
  createInstructorBiography?:  {
    __typename: "InstructorBiography",
    id: string,
    overview: string,
    professionalExperience?:  {
      __typename: "ModelExperienceConnection",
      nextToken?: string | null,
    } | null,
    awards?:  {
      __typename: "ModelAwardConnection",
      nextToken?: string | null,
    } | null,
    instructor:  {
      __typename: "InstructorProfile",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      instructorProfileBiographyId: string,
      instructorProfileContactId: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    instructorBiographyInstructorId: string,
    owner?: string | null,
  } | null,
};

export type UpdateInstructorBiographyMutationVariables = {
  input: UpdateInstructorBiographyInput,
  condition?: ModelInstructorBiographyConditionInput | null,
};

export type UpdateInstructorBiographyMutation = {
  updateInstructorBiography?:  {
    __typename: "InstructorBiography",
    id: string,
    overview: string,
    professionalExperience?:  {
      __typename: "ModelExperienceConnection",
      nextToken?: string | null,
    } | null,
    awards?:  {
      __typename: "ModelAwardConnection",
      nextToken?: string | null,
    } | null,
    instructor:  {
      __typename: "InstructorProfile",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      instructorProfileBiographyId: string,
      instructorProfileContactId: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    instructorBiographyInstructorId: string,
    owner?: string | null,
  } | null,
};

export type DeleteInstructorBiographyMutationVariables = {
  input: DeleteInstructorBiographyInput,
  condition?: ModelInstructorBiographyConditionInput | null,
};

export type DeleteInstructorBiographyMutation = {
  deleteInstructorBiography?:  {
    __typename: "InstructorBiography",
    id: string,
    overview: string,
    professionalExperience?:  {
      __typename: "ModelExperienceConnection",
      nextToken?: string | null,
    } | null,
    awards?:  {
      __typename: "ModelAwardConnection",
      nextToken?: string | null,
    } | null,
    instructor:  {
      __typename: "InstructorProfile",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      instructorProfileBiographyId: string,
      instructorProfileContactId: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    instructorBiographyInstructorId: string,
    owner?: string | null,
  } | null,
};

export type CreateInstructorContactMutationVariables = {
  input: CreateInstructorContactInput,
  condition?: ModelInstructorContactConditionInput | null,
};

export type CreateInstructorContactMutation = {
  createInstructorContact?:  {
    __typename: "InstructorContact",
    id: string,
    phone?: string | null,
    email?: string | null,
    instructorID:  {
      __typename: "InstructorProfile",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      instructorProfileBiographyId: string,
      instructorProfileContactId: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    instructorContactInstructorIDId: string,
    owner?: string | null,
  } | null,
};

export type UpdateInstructorContactMutationVariables = {
  input: UpdateInstructorContactInput,
  condition?: ModelInstructorContactConditionInput | null,
};

export type UpdateInstructorContactMutation = {
  updateInstructorContact?:  {
    __typename: "InstructorContact",
    id: string,
    phone?: string | null,
    email?: string | null,
    instructorID:  {
      __typename: "InstructorProfile",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      instructorProfileBiographyId: string,
      instructorProfileContactId: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    instructorContactInstructorIDId: string,
    owner?: string | null,
  } | null,
};

export type DeleteInstructorContactMutationVariables = {
  input: DeleteInstructorContactInput,
  condition?: ModelInstructorContactConditionInput | null,
};

export type DeleteInstructorContactMutation = {
  deleteInstructorContact?:  {
    __typename: "InstructorContact",
    id: string,
    phone?: string | null,
    email?: string | null,
    instructorID:  {
      __typename: "InstructorProfile",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      instructorProfileBiographyId: string,
      instructorProfileContactId: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    instructorContactInstructorIDId: string,
    owner?: string | null,
  } | null,
};

export type CreateExperienceMutationVariables = {
  input: CreateExperienceInput,
  condition?: ModelExperienceConditionInput | null,
};

export type CreateExperienceMutation = {
  createExperience?:  {
    __typename: "Experience",
    id: string,
    startDate: string,
    endDate?: string | null,
    isCurrent: boolean,
    companyName: string,
    jobTitle: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    instructorBiographyProfessionalExperienceId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateExperienceMutationVariables = {
  input: UpdateExperienceInput,
  condition?: ModelExperienceConditionInput | null,
};

export type UpdateExperienceMutation = {
  updateExperience?:  {
    __typename: "Experience",
    id: string,
    startDate: string,
    endDate?: string | null,
    isCurrent: boolean,
    companyName: string,
    jobTitle: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    instructorBiographyProfessionalExperienceId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteExperienceMutationVariables = {
  input: DeleteExperienceInput,
  condition?: ModelExperienceConditionInput | null,
};

export type DeleteExperienceMutation = {
  deleteExperience?:  {
    __typename: "Experience",
    id: string,
    startDate: string,
    endDate?: string | null,
    isCurrent: boolean,
    companyName: string,
    jobTitle: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    instructorBiographyProfessionalExperienceId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateAwardMutationVariables = {
  input: CreateAwardInput,
  condition?: ModelAwardConditionInput | null,
};

export type CreateAwardMutation = {
  createAward?:  {
    __typename: "Award",
    id: string,
    awardDate: string,
    awardSource: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    instructorBiographyAwardsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateAwardMutationVariables = {
  input: UpdateAwardInput,
  condition?: ModelAwardConditionInput | null,
};

export type UpdateAwardMutation = {
  updateAward?:  {
    __typename: "Award",
    id: string,
    awardDate: string,
    awardSource: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    instructorBiographyAwardsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteAwardMutationVariables = {
  input: DeleteAwardInput,
  condition?: ModelAwardConditionInput | null,
};

export type DeleteAwardMutation = {
  deleteAward?:  {
    __typename: "Award",
    id: string,
    awardDate: string,
    awardSource: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    instructorBiographyAwardsId?: string | null,
    owner?: string | null,
  } | null,
};

export type GetStudentProfileQueryVariables = {
  id: string,
};

export type GetStudentProfileQuery = {
  getStudentProfile?:  {
    __typename: "StudentProfile",
    id: string,
    name: string,
    email: string,
    status: StudentStatus,
    notificationsEnabled: boolean,
    darkModeEnabled: boolean,
    language: string,
    isAdmin: boolean,
    enrollments?:  {
      __typename: "ModelEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStudentProfilesQueryVariables = {
  filter?: ModelStudentProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStudentProfilesQuery = {
  listStudentProfiles?:  {
    __typename: "ModelStudentProfileConnection",
    items:  Array< {
      __typename: "StudentProfile",
      id: string,
      name: string,
      email: string,
      status: StudentStatus,
      notificationsEnabled: boolean,
      darkModeEnabled: boolean,
      language: string,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBroadcastNotificationQueryVariables = {
  id: string,
};

export type GetBroadcastNotificationQuery = {
  getBroadcastNotification?:  {
    __typename: "BroadcastNotification",
    id: string,
    targetStudent?: string | null,
    title: string,
    message: string,
    createdAt: string,
    type: NotificationType,
    redirect?: string | null,
    updatedAt: string,
  } | null,
};

export type ListBroadcastNotificationsQueryVariables = {
  filter?: ModelBroadcastNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBroadcastNotificationsQuery = {
  listBroadcastNotifications?:  {
    __typename: "ModelBroadcastNotificationConnection",
    items:  Array< {
      __typename: "BroadcastNotification",
      id: string,
      targetStudent?: string | null,
      title: string,
      message: string,
      createdAt: string,
      type: NotificationType,
      redirect?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserNotificationReadQueryVariables = {
  id: string,
};

export type GetUserNotificationReadQuery = {
  getUserNotificationRead?:  {
    __typename: "UserNotificationRead",
    id: string,
    notificationID: string,
    readAt?: string | null,
    readBy: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserNotificationReadsQueryVariables = {
  filter?: ModelUserNotificationReadFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserNotificationReadsQuery = {
  listUserNotificationReads?:  {
    __typename: "ModelUserNotificationReadConnection",
    items:  Array< {
      __typename: "UserNotificationRead",
      id: string,
      notificationID: string,
      readAt?: string | null,
      readBy: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCourseQueryVariables = {
  id: string,
};

export type GetCourseQuery = {
  getCourse?:  {
    __typename: "Course",
    id: string,
    title: string,
    description?: string | null,
    subject: CourseSubject,
    difficulty?: string | null,
    creator: string,
    modules?:  {
      __typename: "ModelModuleConnection",
      nextToken?: string | null,
    } | null,
    approval?:  {
      __typename: "ModelCourseApprovalConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCoursesQueryVariables = {
  filter?: ModelCourseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCoursesQuery = {
  listCourses?:  {
    __typename: "ModelCourseConnection",
    items:  Array< {
      __typename: "Course",
      id: string,
      title: string,
      description?: string | null,
      subject: CourseSubject,
      difficulty?: string | null,
      creator: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEnrollmentQueryVariables = {
  id: string,
};

export type GetEnrollmentQuery = {
  getEnrollment?:  {
    __typename: "Enrollment",
    id: string,
    userID: string,
    courseID: string,
    progress?: number | null,
    completed?: boolean | null,
    achievements?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    studentProfileEnrollmentsId?: string | null,
  } | null,
};

export type ListEnrollmentsQueryVariables = {
  filter?: ModelEnrollmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEnrollmentsQuery = {
  listEnrollments?:  {
    __typename: "ModelEnrollmentConnection",
    items:  Array< {
      __typename: "Enrollment",
      id: string,
      userID: string,
      courseID: string,
      progress?: number | null,
      completed?: boolean | null,
      achievements?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      studentProfileEnrollmentsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCourseApprovalQueryVariables = {
  id: string,
};

export type GetCourseApprovalQuery = {
  getCourseApproval?:  {
    __typename: "CourseApproval",
    id: string,
    status: CourseApprovalStatus,
    comments?: string | null,
    approvingAdmin: string,
    createdAt: string,
    updatedAt: string,
    courseApprovalId?: string | null,
  } | null,
};

export type ListCourseApprovalsQueryVariables = {
  filter?: ModelCourseApprovalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCourseApprovalsQuery = {
  listCourseApprovals?:  {
    __typename: "ModelCourseApprovalConnection",
    items:  Array< {
      __typename: "CourseApproval",
      id: string,
      status: CourseApprovalStatus,
      comments?: string | null,
      approvingAdmin: string,
      createdAt: string,
      updatedAt: string,
      courseApprovalId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetModuleQueryVariables = {
  id: string,
};

export type GetModuleQuery = {
  getModule?:  {
    __typename: "Module",
    id: string,
    title: string,
    description?: string | null,
    courseID: string,
    course:  {
      __typename: "Course",
      id: string,
      title: string,
      description?: string | null,
      subject: CourseSubject,
      difficulty?: string | null,
      creator: string,
      createdAt: string,
      updatedAt: string,
    },
    lessons?:  {
      __typename: "ModelLessonConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    courseModulesId?: string | null,
  } | null,
};

export type ListModulesQueryVariables = {
  filter?: ModelModuleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListModulesQuery = {
  listModules?:  {
    __typename: "ModelModuleConnection",
    items:  Array< {
      __typename: "Module",
      id: string,
      title: string,
      description?: string | null,
      courseID: string,
      createdAt: string,
      updatedAt: string,
      courseModulesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLessonQueryVariables = {
  id: string,
};

export type GetLessonQuery = {
  getLesson?:  {
    __typename: "Lesson",
    id: string,
    title: string,
    content?: string | null,
    videoURL?: string | null,
    moduleID: string,
    module:  {
      __typename: "Module",
      id: string,
      title: string,
      description?: string | null,
      courseID: string,
      createdAt: string,
      updatedAt: string,
      courseModulesId?: string | null,
    },
    quizzes?:  {
      __typename: "ModelQuizConnection",
      nextToken?: string | null,
    } | null,
    exercises?:  {
      __typename: "ModelExerciseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    moduleLessonsId?: string | null,
  } | null,
};

export type ListLessonsQueryVariables = {
  filter?: ModelLessonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLessonsQuery = {
  listLessons?:  {
    __typename: "ModelLessonConnection",
    items:  Array< {
      __typename: "Lesson",
      id: string,
      title: string,
      content?: string | null,
      videoURL?: string | null,
      moduleID: string,
      createdAt: string,
      updatedAt: string,
      moduleLessonsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetExerciseQueryVariables = {
  id: string,
};

export type GetExerciseQuery = {
  getExercise?:  {
    __typename: "Exercise",
    id: string,
    question: string,
    solution?: string | null,
    lessonID: string,
    lesson:  {
      __typename: "Lesson",
      id: string,
      title: string,
      content?: string | null,
      videoURL?: string | null,
      moduleID: string,
      createdAt: string,
      updatedAt: string,
      moduleLessonsId?: string | null,
    },
    exerciseType: ExerciseType,
    data?: string | null,
    createdAt: string,
    updatedAt: string,
    lessonExercisesId?: string | null,
  } | null,
};

export type ListExercisesQueryVariables = {
  filter?: ModelExerciseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExercisesQuery = {
  listExercises?:  {
    __typename: "ModelExerciseConnection",
    items:  Array< {
      __typename: "Exercise",
      id: string,
      question: string,
      solution?: string | null,
      lessonID: string,
      exerciseType: ExerciseType,
      data?: string | null,
      createdAt: string,
      updatedAt: string,
      lessonExercisesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetQuizQueryVariables = {
  id: string,
};

export type GetQuizQuery = {
  getQuiz?:  {
    __typename: "Quiz",
    id: string,
    title: string,
    lessonID: string,
    lesson:  {
      __typename: "Lesson",
      id: string,
      title: string,
      content?: string | null,
      videoURL?: string | null,
      moduleID: string,
      createdAt: string,
      updatedAt: string,
      moduleLessonsId?: string | null,
    },
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    lessonQuizzesId?: string | null,
  } | null,
};

export type ListQuizzesQueryVariables = {
  filter?: ModelQuizFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuizzesQuery = {
  listQuizzes?:  {
    __typename: "ModelQuizConnection",
    items:  Array< {
      __typename: "Quiz",
      id: string,
      title: string,
      lessonID: string,
      createdAt: string,
      updatedAt: string,
      lessonQuizzesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetQuestionQueryVariables = {
  id: string,
};

export type GetQuestionQuery = {
  getQuestion?:  {
    __typename: "Question",
    id: string,
    text: string,
    options?: string | null,
    correctAnswer: string,
    quizID: string,
    quiz:  {
      __typename: "Quiz",
      id: string,
      title: string,
      lessonID: string,
      createdAt: string,
      updatedAt: string,
      lessonQuizzesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    quizQuestionsId?: string | null,
  } | null,
};

export type ListQuestionsQueryVariables = {
  filter?: ModelQuestionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuestionsQuery = {
  listQuestions?:  {
    __typename: "ModelQuestionConnection",
    items:  Array< {
      __typename: "Question",
      id: string,
      text: string,
      options?: string | null,
      correctAnswer: string,
      quizID: string,
      createdAt: string,
      updatedAt: string,
      quizQuestionsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetInstructorProfileQueryVariables = {
  id: string,
};

export type GetInstructorProfileQuery = {
  getInstructorProfile?:  {
    __typename: "InstructorProfile",
    id: string,
    name: string,
    email: string,
    biography:  {
      __typename: "InstructorBiography",
      id: string,
      overview: string,
      createdAt: string,
      updatedAt: string,
      instructorBiographyInstructorId: string,
      owner?: string | null,
    },
    contact:  {
      __typename: "InstructorContact",
      id: string,
      phone?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      instructorContactInstructorIDId: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    instructorProfileBiographyId: string,
    instructorProfileContactId: string,
    owner?: string | null,
  } | null,
};

export type ListInstructorProfilesQueryVariables = {
  filter?: ModelInstructorProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInstructorProfilesQuery = {
  listInstructorProfiles?:  {
    __typename: "ModelInstructorProfileConnection",
    items:  Array< {
      __typename: "InstructorProfile",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      instructorProfileBiographyId: string,
      instructorProfileContactId: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetInstructorBiographyQueryVariables = {
  id: string,
};

export type GetInstructorBiographyQuery = {
  getInstructorBiography?:  {
    __typename: "InstructorBiography",
    id: string,
    overview: string,
    professionalExperience?:  {
      __typename: "ModelExperienceConnection",
      nextToken?: string | null,
    } | null,
    awards?:  {
      __typename: "ModelAwardConnection",
      nextToken?: string | null,
    } | null,
    instructor:  {
      __typename: "InstructorProfile",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      instructorProfileBiographyId: string,
      instructorProfileContactId: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    instructorBiographyInstructorId: string,
    owner?: string | null,
  } | null,
};

export type ListInstructorBiographiesQueryVariables = {
  filter?: ModelInstructorBiographyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInstructorBiographiesQuery = {
  listInstructorBiographies?:  {
    __typename: "ModelInstructorBiographyConnection",
    items:  Array< {
      __typename: "InstructorBiography",
      id: string,
      overview: string,
      createdAt: string,
      updatedAt: string,
      instructorBiographyInstructorId: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetInstructorContactQueryVariables = {
  id: string,
};

export type GetInstructorContactQuery = {
  getInstructorContact?:  {
    __typename: "InstructorContact",
    id: string,
    phone?: string | null,
    email?: string | null,
    instructorID:  {
      __typename: "InstructorProfile",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      instructorProfileBiographyId: string,
      instructorProfileContactId: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    instructorContactInstructorIDId: string,
    owner?: string | null,
  } | null,
};

export type ListInstructorContactsQueryVariables = {
  filter?: ModelInstructorContactFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInstructorContactsQuery = {
  listInstructorContacts?:  {
    __typename: "ModelInstructorContactConnection",
    items:  Array< {
      __typename: "InstructorContact",
      id: string,
      phone?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      instructorContactInstructorIDId: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetExperienceQueryVariables = {
  id: string,
};

export type GetExperienceQuery = {
  getExperience?:  {
    __typename: "Experience",
    id: string,
    startDate: string,
    endDate?: string | null,
    isCurrent: boolean,
    companyName: string,
    jobTitle: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    instructorBiographyProfessionalExperienceId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListExperiencesQueryVariables = {
  filter?: ModelExperienceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExperiencesQuery = {
  listExperiences?:  {
    __typename: "ModelExperienceConnection",
    items:  Array< {
      __typename: "Experience",
      id: string,
      startDate: string,
      endDate?: string | null,
      isCurrent: boolean,
      companyName: string,
      jobTitle: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      instructorBiographyProfessionalExperienceId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAwardQueryVariables = {
  id: string,
};

export type GetAwardQuery = {
  getAward?:  {
    __typename: "Award",
    id: string,
    awardDate: string,
    awardSource: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    instructorBiographyAwardsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListAwardsQueryVariables = {
  filter?: ModelAwardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAwardsQuery = {
  listAwards?:  {
    __typename: "ModelAwardConnection",
    items:  Array< {
      __typename: "Award",
      id: string,
      awardDate: string,
      awardSource: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      instructorBiographyAwardsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CoursesByCreatorQueryVariables = {
  creator: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCourseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CoursesByCreatorQuery = {
  coursesByCreator?:  {
    __typename: "ModelCourseConnection",
    items:  Array< {
      __typename: "Course",
      id: string,
      title: string,
      description?: string | null,
      subject: CourseSubject,
      difficulty?: string | null,
      creator: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ModulesByCourseIDAndIdQueryVariables = {
  courseID: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelModuleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ModulesByCourseIDAndIdQuery = {
  modulesByCourseIDAndId?:  {
    __typename: "ModelModuleConnection",
    items:  Array< {
      __typename: "Module",
      id: string,
      title: string,
      description?: string | null,
      courseID: string,
      createdAt: string,
      updatedAt: string,
      courseModulesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type LessonsByModuleIDAndIdQueryVariables = {
  moduleID: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLessonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LessonsByModuleIDAndIdQuery = {
  lessonsByModuleIDAndId?:  {
    __typename: "ModelLessonConnection",
    items:  Array< {
      __typename: "Lesson",
      id: string,
      title: string,
      content?: string | null,
      videoURL?: string | null,
      moduleID: string,
      createdAt: string,
      updatedAt: string,
      moduleLessonsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ExercisesByLessonIDAndIdQueryVariables = {
  lessonID: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelExerciseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ExercisesByLessonIDAndIdQuery = {
  exercisesByLessonIDAndId?:  {
    __typename: "ModelExerciseConnection",
    items:  Array< {
      __typename: "Exercise",
      id: string,
      question: string,
      solution?: string | null,
      lessonID: string,
      exerciseType: ExerciseType,
      data?: string | null,
      createdAt: string,
      updatedAt: string,
      lessonExercisesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type QuizzesByLessonIDAndIdQueryVariables = {
  lessonID: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelQuizFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type QuizzesByLessonIDAndIdQuery = {
  quizzesByLessonIDAndId?:  {
    __typename: "ModelQuizConnection",
    items:  Array< {
      __typename: "Quiz",
      id: string,
      title: string,
      lessonID: string,
      createdAt: string,
      updatedAt: string,
      lessonQuizzesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type QuestionsByQuizIDAndIdQueryVariables = {
  quizID: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelQuestionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type QuestionsByQuizIDAndIdQuery = {
  questionsByQuizIDAndId?:  {
    __typename: "ModelQuestionConnection",
    items:  Array< {
      __typename: "Question",
      id: string,
      text: string,
      options?: string | null,
      correctAnswer: string,
      quizID: string,
      createdAt: string,
      updatedAt: string,
      quizQuestionsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateStudentProfileSubscriptionVariables = {
  filter?: ModelSubscriptionStudentProfileFilterInput | null,
  owner?: string | null,
};

export type OnCreateStudentProfileSubscription = {
  onCreateStudentProfile?:  {
    __typename: "StudentProfile",
    id: string,
    name: string,
    email: string,
    status: StudentStatus,
    notificationsEnabled: boolean,
    darkModeEnabled: boolean,
    language: string,
    isAdmin: boolean,
    enrollments?:  {
      __typename: "ModelEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStudentProfileSubscriptionVariables = {
  filter?: ModelSubscriptionStudentProfileFilterInput | null,
  owner?: string | null,
};

export type OnUpdateStudentProfileSubscription = {
  onUpdateStudentProfile?:  {
    __typename: "StudentProfile",
    id: string,
    name: string,
    email: string,
    status: StudentStatus,
    notificationsEnabled: boolean,
    darkModeEnabled: boolean,
    language: string,
    isAdmin: boolean,
    enrollments?:  {
      __typename: "ModelEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStudentProfileSubscriptionVariables = {
  filter?: ModelSubscriptionStudentProfileFilterInput | null,
  owner?: string | null,
};

export type OnDeleteStudentProfileSubscription = {
  onDeleteStudentProfile?:  {
    __typename: "StudentProfile",
    id: string,
    name: string,
    email: string,
    status: StudentStatus,
    notificationsEnabled: boolean,
    darkModeEnabled: boolean,
    language: string,
    isAdmin: boolean,
    enrollments?:  {
      __typename: "ModelEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateBroadcastNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionBroadcastNotificationFilterInput | null,
};

export type OnCreateBroadcastNotificationSubscription = {
  onCreateBroadcastNotification?:  {
    __typename: "BroadcastNotification",
    id: string,
    targetStudent?: string | null,
    title: string,
    message: string,
    createdAt: string,
    type: NotificationType,
    redirect?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateBroadcastNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionBroadcastNotificationFilterInput | null,
};

export type OnUpdateBroadcastNotificationSubscription = {
  onUpdateBroadcastNotification?:  {
    __typename: "BroadcastNotification",
    id: string,
    targetStudent?: string | null,
    title: string,
    message: string,
    createdAt: string,
    type: NotificationType,
    redirect?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteBroadcastNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionBroadcastNotificationFilterInput | null,
};

export type OnDeleteBroadcastNotificationSubscription = {
  onDeleteBroadcastNotification?:  {
    __typename: "BroadcastNotification",
    id: string,
    targetStudent?: string | null,
    title: string,
    message: string,
    createdAt: string,
    type: NotificationType,
    redirect?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateUserNotificationReadSubscriptionVariables = {
  filter?: ModelSubscriptionUserNotificationReadFilterInput | null,
};

export type OnCreateUserNotificationReadSubscription = {
  onCreateUserNotificationRead?:  {
    __typename: "UserNotificationRead",
    id: string,
    notificationID: string,
    readAt?: string | null,
    readBy: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserNotificationReadSubscriptionVariables = {
  filter?: ModelSubscriptionUserNotificationReadFilterInput | null,
};

export type OnUpdateUserNotificationReadSubscription = {
  onUpdateUserNotificationRead?:  {
    __typename: "UserNotificationRead",
    id: string,
    notificationID: string,
    readAt?: string | null,
    readBy: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserNotificationReadSubscriptionVariables = {
  filter?: ModelSubscriptionUserNotificationReadFilterInput | null,
};

export type OnDeleteUserNotificationReadSubscription = {
  onDeleteUserNotificationRead?:  {
    __typename: "UserNotificationRead",
    id: string,
    notificationID: string,
    readAt?: string | null,
    readBy: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
};

export type OnCreateCourseSubscription = {
  onCreateCourse?:  {
    __typename: "Course",
    id: string,
    title: string,
    description?: string | null,
    subject: CourseSubject,
    difficulty?: string | null,
    creator: string,
    modules?:  {
      __typename: "ModelModuleConnection",
      nextToken?: string | null,
    } | null,
    approval?:  {
      __typename: "ModelCourseApprovalConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
};

export type OnUpdateCourseSubscription = {
  onUpdateCourse?:  {
    __typename: "Course",
    id: string,
    title: string,
    description?: string | null,
    subject: CourseSubject,
    difficulty?: string | null,
    creator: string,
    modules?:  {
      __typename: "ModelModuleConnection",
      nextToken?: string | null,
    } | null,
    approval?:  {
      __typename: "ModelCourseApprovalConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
};

export type OnDeleteCourseSubscription = {
  onDeleteCourse?:  {
    __typename: "Course",
    id: string,
    title: string,
    description?: string | null,
    subject: CourseSubject,
    difficulty?: string | null,
    creator: string,
    modules?:  {
      __typename: "ModelModuleConnection",
      nextToken?: string | null,
    } | null,
    approval?:  {
      __typename: "ModelCourseApprovalConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEnrollmentSubscriptionVariables = {
  filter?: ModelSubscriptionEnrollmentFilterInput | null,
};

export type OnCreateEnrollmentSubscription = {
  onCreateEnrollment?:  {
    __typename: "Enrollment",
    id: string,
    userID: string,
    courseID: string,
    progress?: number | null,
    completed?: boolean | null,
    achievements?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    studentProfileEnrollmentsId?: string | null,
  } | null,
};

export type OnUpdateEnrollmentSubscriptionVariables = {
  filter?: ModelSubscriptionEnrollmentFilterInput | null,
};

export type OnUpdateEnrollmentSubscription = {
  onUpdateEnrollment?:  {
    __typename: "Enrollment",
    id: string,
    userID: string,
    courseID: string,
    progress?: number | null,
    completed?: boolean | null,
    achievements?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    studentProfileEnrollmentsId?: string | null,
  } | null,
};

export type OnDeleteEnrollmentSubscriptionVariables = {
  filter?: ModelSubscriptionEnrollmentFilterInput | null,
};

export type OnDeleteEnrollmentSubscription = {
  onDeleteEnrollment?:  {
    __typename: "Enrollment",
    id: string,
    userID: string,
    courseID: string,
    progress?: number | null,
    completed?: boolean | null,
    achievements?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    studentProfileEnrollmentsId?: string | null,
  } | null,
};

export type OnCreateCourseApprovalSubscriptionVariables = {
  filter?: ModelSubscriptionCourseApprovalFilterInput | null,
};

export type OnCreateCourseApprovalSubscription = {
  onCreateCourseApproval?:  {
    __typename: "CourseApproval",
    id: string,
    status: CourseApprovalStatus,
    comments?: string | null,
    approvingAdmin: string,
    createdAt: string,
    updatedAt: string,
    courseApprovalId?: string | null,
  } | null,
};

export type OnUpdateCourseApprovalSubscriptionVariables = {
  filter?: ModelSubscriptionCourseApprovalFilterInput | null,
};

export type OnUpdateCourseApprovalSubscription = {
  onUpdateCourseApproval?:  {
    __typename: "CourseApproval",
    id: string,
    status: CourseApprovalStatus,
    comments?: string | null,
    approvingAdmin: string,
    createdAt: string,
    updatedAt: string,
    courseApprovalId?: string | null,
  } | null,
};

export type OnDeleteCourseApprovalSubscriptionVariables = {
  filter?: ModelSubscriptionCourseApprovalFilterInput | null,
};

export type OnDeleteCourseApprovalSubscription = {
  onDeleteCourseApproval?:  {
    __typename: "CourseApproval",
    id: string,
    status: CourseApprovalStatus,
    comments?: string | null,
    approvingAdmin: string,
    createdAt: string,
    updatedAt: string,
    courseApprovalId?: string | null,
  } | null,
};

export type OnCreateModuleSubscriptionVariables = {
  filter?: ModelSubscriptionModuleFilterInput | null,
};

export type OnCreateModuleSubscription = {
  onCreateModule?:  {
    __typename: "Module",
    id: string,
    title: string,
    description?: string | null,
    courseID: string,
    course:  {
      __typename: "Course",
      id: string,
      title: string,
      description?: string | null,
      subject: CourseSubject,
      difficulty?: string | null,
      creator: string,
      createdAt: string,
      updatedAt: string,
    },
    lessons?:  {
      __typename: "ModelLessonConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    courseModulesId?: string | null,
  } | null,
};

export type OnUpdateModuleSubscriptionVariables = {
  filter?: ModelSubscriptionModuleFilterInput | null,
};

export type OnUpdateModuleSubscription = {
  onUpdateModule?:  {
    __typename: "Module",
    id: string,
    title: string,
    description?: string | null,
    courseID: string,
    course:  {
      __typename: "Course",
      id: string,
      title: string,
      description?: string | null,
      subject: CourseSubject,
      difficulty?: string | null,
      creator: string,
      createdAt: string,
      updatedAt: string,
    },
    lessons?:  {
      __typename: "ModelLessonConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    courseModulesId?: string | null,
  } | null,
};

export type OnDeleteModuleSubscriptionVariables = {
  filter?: ModelSubscriptionModuleFilterInput | null,
};

export type OnDeleteModuleSubscription = {
  onDeleteModule?:  {
    __typename: "Module",
    id: string,
    title: string,
    description?: string | null,
    courseID: string,
    course:  {
      __typename: "Course",
      id: string,
      title: string,
      description?: string | null,
      subject: CourseSubject,
      difficulty?: string | null,
      creator: string,
      createdAt: string,
      updatedAt: string,
    },
    lessons?:  {
      __typename: "ModelLessonConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    courseModulesId?: string | null,
  } | null,
};

export type OnCreateLessonSubscriptionVariables = {
  filter?: ModelSubscriptionLessonFilterInput | null,
};

export type OnCreateLessonSubscription = {
  onCreateLesson?:  {
    __typename: "Lesson",
    id: string,
    title: string,
    content?: string | null,
    videoURL?: string | null,
    moduleID: string,
    module:  {
      __typename: "Module",
      id: string,
      title: string,
      description?: string | null,
      courseID: string,
      createdAt: string,
      updatedAt: string,
      courseModulesId?: string | null,
    },
    quizzes?:  {
      __typename: "ModelQuizConnection",
      nextToken?: string | null,
    } | null,
    exercises?:  {
      __typename: "ModelExerciseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    moduleLessonsId?: string | null,
  } | null,
};

export type OnUpdateLessonSubscriptionVariables = {
  filter?: ModelSubscriptionLessonFilterInput | null,
};

export type OnUpdateLessonSubscription = {
  onUpdateLesson?:  {
    __typename: "Lesson",
    id: string,
    title: string,
    content?: string | null,
    videoURL?: string | null,
    moduleID: string,
    module:  {
      __typename: "Module",
      id: string,
      title: string,
      description?: string | null,
      courseID: string,
      createdAt: string,
      updatedAt: string,
      courseModulesId?: string | null,
    },
    quizzes?:  {
      __typename: "ModelQuizConnection",
      nextToken?: string | null,
    } | null,
    exercises?:  {
      __typename: "ModelExerciseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    moduleLessonsId?: string | null,
  } | null,
};

export type OnDeleteLessonSubscriptionVariables = {
  filter?: ModelSubscriptionLessonFilterInput | null,
};

export type OnDeleteLessonSubscription = {
  onDeleteLesson?:  {
    __typename: "Lesson",
    id: string,
    title: string,
    content?: string | null,
    videoURL?: string | null,
    moduleID: string,
    module:  {
      __typename: "Module",
      id: string,
      title: string,
      description?: string | null,
      courseID: string,
      createdAt: string,
      updatedAt: string,
      courseModulesId?: string | null,
    },
    quizzes?:  {
      __typename: "ModelQuizConnection",
      nextToken?: string | null,
    } | null,
    exercises?:  {
      __typename: "ModelExerciseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    moduleLessonsId?: string | null,
  } | null,
};

export type OnCreateExerciseSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseFilterInput | null,
};

export type OnCreateExerciseSubscription = {
  onCreateExercise?:  {
    __typename: "Exercise",
    id: string,
    question: string,
    solution?: string | null,
    lessonID: string,
    lesson:  {
      __typename: "Lesson",
      id: string,
      title: string,
      content?: string | null,
      videoURL?: string | null,
      moduleID: string,
      createdAt: string,
      updatedAt: string,
      moduleLessonsId?: string | null,
    },
    exerciseType: ExerciseType,
    data?: string | null,
    createdAt: string,
    updatedAt: string,
    lessonExercisesId?: string | null,
  } | null,
};

export type OnUpdateExerciseSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseFilterInput | null,
};

export type OnUpdateExerciseSubscription = {
  onUpdateExercise?:  {
    __typename: "Exercise",
    id: string,
    question: string,
    solution?: string | null,
    lessonID: string,
    lesson:  {
      __typename: "Lesson",
      id: string,
      title: string,
      content?: string | null,
      videoURL?: string | null,
      moduleID: string,
      createdAt: string,
      updatedAt: string,
      moduleLessonsId?: string | null,
    },
    exerciseType: ExerciseType,
    data?: string | null,
    createdAt: string,
    updatedAt: string,
    lessonExercisesId?: string | null,
  } | null,
};

export type OnDeleteExerciseSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseFilterInput | null,
};

export type OnDeleteExerciseSubscription = {
  onDeleteExercise?:  {
    __typename: "Exercise",
    id: string,
    question: string,
    solution?: string | null,
    lessonID: string,
    lesson:  {
      __typename: "Lesson",
      id: string,
      title: string,
      content?: string | null,
      videoURL?: string | null,
      moduleID: string,
      createdAt: string,
      updatedAt: string,
      moduleLessonsId?: string | null,
    },
    exerciseType: ExerciseType,
    data?: string | null,
    createdAt: string,
    updatedAt: string,
    lessonExercisesId?: string | null,
  } | null,
};

export type OnCreateQuizSubscriptionVariables = {
  filter?: ModelSubscriptionQuizFilterInput | null,
};

export type OnCreateQuizSubscription = {
  onCreateQuiz?:  {
    __typename: "Quiz",
    id: string,
    title: string,
    lessonID: string,
    lesson:  {
      __typename: "Lesson",
      id: string,
      title: string,
      content?: string | null,
      videoURL?: string | null,
      moduleID: string,
      createdAt: string,
      updatedAt: string,
      moduleLessonsId?: string | null,
    },
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    lessonQuizzesId?: string | null,
  } | null,
};

export type OnUpdateQuizSubscriptionVariables = {
  filter?: ModelSubscriptionQuizFilterInput | null,
};

export type OnUpdateQuizSubscription = {
  onUpdateQuiz?:  {
    __typename: "Quiz",
    id: string,
    title: string,
    lessonID: string,
    lesson:  {
      __typename: "Lesson",
      id: string,
      title: string,
      content?: string | null,
      videoURL?: string | null,
      moduleID: string,
      createdAt: string,
      updatedAt: string,
      moduleLessonsId?: string | null,
    },
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    lessonQuizzesId?: string | null,
  } | null,
};

export type OnDeleteQuizSubscriptionVariables = {
  filter?: ModelSubscriptionQuizFilterInput | null,
};

export type OnDeleteQuizSubscription = {
  onDeleteQuiz?:  {
    __typename: "Quiz",
    id: string,
    title: string,
    lessonID: string,
    lesson:  {
      __typename: "Lesson",
      id: string,
      title: string,
      content?: string | null,
      videoURL?: string | null,
      moduleID: string,
      createdAt: string,
      updatedAt: string,
      moduleLessonsId?: string | null,
    },
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    lessonQuizzesId?: string | null,
  } | null,
};

export type OnCreateQuestionSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionFilterInput | null,
};

export type OnCreateQuestionSubscription = {
  onCreateQuestion?:  {
    __typename: "Question",
    id: string,
    text: string,
    options?: string | null,
    correctAnswer: string,
    quizID: string,
    quiz:  {
      __typename: "Quiz",
      id: string,
      title: string,
      lessonID: string,
      createdAt: string,
      updatedAt: string,
      lessonQuizzesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    quizQuestionsId?: string | null,
  } | null,
};

export type OnUpdateQuestionSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionFilterInput | null,
};

export type OnUpdateQuestionSubscription = {
  onUpdateQuestion?:  {
    __typename: "Question",
    id: string,
    text: string,
    options?: string | null,
    correctAnswer: string,
    quizID: string,
    quiz:  {
      __typename: "Quiz",
      id: string,
      title: string,
      lessonID: string,
      createdAt: string,
      updatedAt: string,
      lessonQuizzesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    quizQuestionsId?: string | null,
  } | null,
};

export type OnDeleteQuestionSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionFilterInput | null,
};

export type OnDeleteQuestionSubscription = {
  onDeleteQuestion?:  {
    __typename: "Question",
    id: string,
    text: string,
    options?: string | null,
    correctAnswer: string,
    quizID: string,
    quiz:  {
      __typename: "Quiz",
      id: string,
      title: string,
      lessonID: string,
      createdAt: string,
      updatedAt: string,
      lessonQuizzesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    quizQuestionsId?: string | null,
  } | null,
};

export type OnCreateInstructorProfileSubscriptionVariables = {
  filter?: ModelSubscriptionInstructorProfileFilterInput | null,
  owner?: string | null,
};

export type OnCreateInstructorProfileSubscription = {
  onCreateInstructorProfile?:  {
    __typename: "InstructorProfile",
    id: string,
    name: string,
    email: string,
    biography:  {
      __typename: "InstructorBiography",
      id: string,
      overview: string,
      createdAt: string,
      updatedAt: string,
      instructorBiographyInstructorId: string,
      owner?: string | null,
    },
    contact:  {
      __typename: "InstructorContact",
      id: string,
      phone?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      instructorContactInstructorIDId: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    instructorProfileBiographyId: string,
    instructorProfileContactId: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateInstructorProfileSubscriptionVariables = {
  filter?: ModelSubscriptionInstructorProfileFilterInput | null,
  owner?: string | null,
};

export type OnUpdateInstructorProfileSubscription = {
  onUpdateInstructorProfile?:  {
    __typename: "InstructorProfile",
    id: string,
    name: string,
    email: string,
    biography:  {
      __typename: "InstructorBiography",
      id: string,
      overview: string,
      createdAt: string,
      updatedAt: string,
      instructorBiographyInstructorId: string,
      owner?: string | null,
    },
    contact:  {
      __typename: "InstructorContact",
      id: string,
      phone?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      instructorContactInstructorIDId: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    instructorProfileBiographyId: string,
    instructorProfileContactId: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteInstructorProfileSubscriptionVariables = {
  filter?: ModelSubscriptionInstructorProfileFilterInput | null,
  owner?: string | null,
};

export type OnDeleteInstructorProfileSubscription = {
  onDeleteInstructorProfile?:  {
    __typename: "InstructorProfile",
    id: string,
    name: string,
    email: string,
    biography:  {
      __typename: "InstructorBiography",
      id: string,
      overview: string,
      createdAt: string,
      updatedAt: string,
      instructorBiographyInstructorId: string,
      owner?: string | null,
    },
    contact:  {
      __typename: "InstructorContact",
      id: string,
      phone?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      instructorContactInstructorIDId: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    instructorProfileBiographyId: string,
    instructorProfileContactId: string,
    owner?: string | null,
  } | null,
};

export type OnCreateInstructorBiographySubscriptionVariables = {
  filter?: ModelSubscriptionInstructorBiographyFilterInput | null,
  owner?: string | null,
};

export type OnCreateInstructorBiographySubscription = {
  onCreateInstructorBiography?:  {
    __typename: "InstructorBiography",
    id: string,
    overview: string,
    professionalExperience?:  {
      __typename: "ModelExperienceConnection",
      nextToken?: string | null,
    } | null,
    awards?:  {
      __typename: "ModelAwardConnection",
      nextToken?: string | null,
    } | null,
    instructor:  {
      __typename: "InstructorProfile",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      instructorProfileBiographyId: string,
      instructorProfileContactId: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    instructorBiographyInstructorId: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateInstructorBiographySubscriptionVariables = {
  filter?: ModelSubscriptionInstructorBiographyFilterInput | null,
  owner?: string | null,
};

export type OnUpdateInstructorBiographySubscription = {
  onUpdateInstructorBiography?:  {
    __typename: "InstructorBiography",
    id: string,
    overview: string,
    professionalExperience?:  {
      __typename: "ModelExperienceConnection",
      nextToken?: string | null,
    } | null,
    awards?:  {
      __typename: "ModelAwardConnection",
      nextToken?: string | null,
    } | null,
    instructor:  {
      __typename: "InstructorProfile",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      instructorProfileBiographyId: string,
      instructorProfileContactId: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    instructorBiographyInstructorId: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteInstructorBiographySubscriptionVariables = {
  filter?: ModelSubscriptionInstructorBiographyFilterInput | null,
  owner?: string | null,
};

export type OnDeleteInstructorBiographySubscription = {
  onDeleteInstructorBiography?:  {
    __typename: "InstructorBiography",
    id: string,
    overview: string,
    professionalExperience?:  {
      __typename: "ModelExperienceConnection",
      nextToken?: string | null,
    } | null,
    awards?:  {
      __typename: "ModelAwardConnection",
      nextToken?: string | null,
    } | null,
    instructor:  {
      __typename: "InstructorProfile",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      instructorProfileBiographyId: string,
      instructorProfileContactId: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    instructorBiographyInstructorId: string,
    owner?: string | null,
  } | null,
};

export type OnCreateInstructorContactSubscriptionVariables = {
  filter?: ModelSubscriptionInstructorContactFilterInput | null,
  owner?: string | null,
};

export type OnCreateInstructorContactSubscription = {
  onCreateInstructorContact?:  {
    __typename: "InstructorContact",
    id: string,
    phone?: string | null,
    email?: string | null,
    instructorID:  {
      __typename: "InstructorProfile",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      instructorProfileBiographyId: string,
      instructorProfileContactId: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    instructorContactInstructorIDId: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateInstructorContactSubscriptionVariables = {
  filter?: ModelSubscriptionInstructorContactFilterInput | null,
  owner?: string | null,
};

export type OnUpdateInstructorContactSubscription = {
  onUpdateInstructorContact?:  {
    __typename: "InstructorContact",
    id: string,
    phone?: string | null,
    email?: string | null,
    instructorID:  {
      __typename: "InstructorProfile",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      instructorProfileBiographyId: string,
      instructorProfileContactId: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    instructorContactInstructorIDId: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteInstructorContactSubscriptionVariables = {
  filter?: ModelSubscriptionInstructorContactFilterInput | null,
  owner?: string | null,
};

export type OnDeleteInstructorContactSubscription = {
  onDeleteInstructorContact?:  {
    __typename: "InstructorContact",
    id: string,
    phone?: string | null,
    email?: string | null,
    instructorID:  {
      __typename: "InstructorProfile",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      instructorProfileBiographyId: string,
      instructorProfileContactId: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    instructorContactInstructorIDId: string,
    owner?: string | null,
  } | null,
};

export type OnCreateExperienceSubscriptionVariables = {
  filter?: ModelSubscriptionExperienceFilterInput | null,
  owner?: string | null,
};

export type OnCreateExperienceSubscription = {
  onCreateExperience?:  {
    __typename: "Experience",
    id: string,
    startDate: string,
    endDate?: string | null,
    isCurrent: boolean,
    companyName: string,
    jobTitle: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    instructorBiographyProfessionalExperienceId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateExperienceSubscriptionVariables = {
  filter?: ModelSubscriptionExperienceFilterInput | null,
  owner?: string | null,
};

export type OnUpdateExperienceSubscription = {
  onUpdateExperience?:  {
    __typename: "Experience",
    id: string,
    startDate: string,
    endDate?: string | null,
    isCurrent: boolean,
    companyName: string,
    jobTitle: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    instructorBiographyProfessionalExperienceId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteExperienceSubscriptionVariables = {
  filter?: ModelSubscriptionExperienceFilterInput | null,
  owner?: string | null,
};

export type OnDeleteExperienceSubscription = {
  onDeleteExperience?:  {
    __typename: "Experience",
    id: string,
    startDate: string,
    endDate?: string | null,
    isCurrent: boolean,
    companyName: string,
    jobTitle: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    instructorBiographyProfessionalExperienceId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateAwardSubscriptionVariables = {
  filter?: ModelSubscriptionAwardFilterInput | null,
  owner?: string | null,
};

export type OnCreateAwardSubscription = {
  onCreateAward?:  {
    __typename: "Award",
    id: string,
    awardDate: string,
    awardSource: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    instructorBiographyAwardsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateAwardSubscriptionVariables = {
  filter?: ModelSubscriptionAwardFilterInput | null,
  owner?: string | null,
};

export type OnUpdateAwardSubscription = {
  onUpdateAward?:  {
    __typename: "Award",
    id: string,
    awardDate: string,
    awardSource: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    instructorBiographyAwardsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteAwardSubscriptionVariables = {
  filter?: ModelSubscriptionAwardFilterInput | null,
  owner?: string | null,
};

export type OnDeleteAwardSubscription = {
  onDeleteAward?:  {
    __typename: "Award",
    id: string,
    awardDate: string,
    awardSource: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    instructorBiographyAwardsId?: string | null,
    owner?: string | null,
  } | null,
};

/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateNCEStudentProfileInput = {
  id?: string | null,
  name: string,
  email: string,
  birthdate: string,
};

export type ModelNCEStudentProfileConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  birthdate?: ModelStringInput | null,
  and?: Array< ModelNCEStudentProfileConditionInput | null > | null,
  or?: Array< ModelNCEStudentProfileConditionInput | null > | null,
  not?: ModelNCEStudentProfileConditionInput | null,
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

export type NCEStudentProfile = {
  __typename: "NCEStudentProfile",
  id: string,
  name: string,
  email: string,
  birthdate: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateNCEStudentProfileInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  birthdate?: string | null,
};

export type DeleteNCEStudentProfileInput = {
  id: string,
};

export type CreateNCEUserSettingsInput = {
  id?: string | null,
  notificationsEnabled: boolean,
  darkModeEnabled: boolean,
  language: string,
  isAdmin: boolean,
};

export type ModelNCEUserSettingsConditionInput = {
  notificationsEnabled?: ModelBooleanInput | null,
  darkModeEnabled?: ModelBooleanInput | null,
  language?: ModelStringInput | null,
  isAdmin?: ModelBooleanInput | null,
  and?: Array< ModelNCEUserSettingsConditionInput | null > | null,
  or?: Array< ModelNCEUserSettingsConditionInput | null > | null,
  not?: ModelNCEUserSettingsConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type NCEUserSettings = {
  __typename: "NCEUserSettings",
  id: string,
  notificationsEnabled: boolean,
  darkModeEnabled: boolean,
  language: string,
  isAdmin: boolean,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateNCEUserSettingsInput = {
  id: string,
  notificationsEnabled?: boolean | null,
  darkModeEnabled?: boolean | null,
  language?: string | null,
  isAdmin?: boolean | null,
};

export type DeleteNCEUserSettingsInput = {
  id: string,
};

export type CreateBroadcastNotificationInput = {
  id?: string | null,
  targetStudent: string,
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
  targetStudent: string,
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
};

export type ModelUserNotificationReadConditionInput = {
  notificationID?: ModelIDInput | null,
  readAt?: ModelStringInput | null,
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
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateUserNotificationReadInput = {
  id: string,
  notificationID?: string | null,
  readAt?: string | null,
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
  createdAt: string,
  updatedAt: string,
  moduleLessonsId?: string | null,
};

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

export type ModelNCEStudentProfileFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  birthdate?: ModelStringInput | null,
  and?: Array< ModelNCEStudentProfileFilterInput | null > | null,
  or?: Array< ModelNCEStudentProfileFilterInput | null > | null,
  not?: ModelNCEStudentProfileFilterInput | null,
};

export type ModelNCEStudentProfileConnection = {
  __typename: "ModelNCEStudentProfileConnection",
  items:  Array<NCEStudentProfile | null >,
  nextToken?: string | null,
};

export type ModelNCEUserSettingsFilterInput = {
  id?: ModelIDInput | null,
  notificationsEnabled?: ModelBooleanInput | null,
  darkModeEnabled?: ModelBooleanInput | null,
  language?: ModelStringInput | null,
  isAdmin?: ModelBooleanInput | null,
  and?: Array< ModelNCEUserSettingsFilterInput | null > | null,
  or?: Array< ModelNCEUserSettingsFilterInput | null > | null,
  not?: ModelNCEUserSettingsFilterInput | null,
};

export type ModelNCEUserSettingsConnection = {
  __typename: "ModelNCEUserSettingsConnection",
  items:  Array<NCEUserSettings | null >,
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

export type ModelSubscriptionNCEStudentProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  birthdate?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionNCEStudentProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionNCEStudentProfileFilterInput | null > | null,
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

export type ModelSubscriptionNCEUserSettingsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  notificationsEnabled?: ModelSubscriptionBooleanInput | null,
  darkModeEnabled?: ModelSubscriptionBooleanInput | null,
  language?: ModelSubscriptionStringInput | null,
  isAdmin?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionNCEUserSettingsFilterInput | null > | null,
  or?: Array< ModelSubscriptionNCEUserSettingsFilterInput | null > | null,
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

export type CreateNCEStudentProfileMutationVariables = {
  input: CreateNCEStudentProfileInput,
  condition?: ModelNCEStudentProfileConditionInput | null,
};

export type CreateNCEStudentProfileMutation = {
  createNCEStudentProfile?:  {
    __typename: "NCEStudentProfile",
    id: string,
    name: string,
    email: string,
    birthdate: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateNCEStudentProfileMutationVariables = {
  input: UpdateNCEStudentProfileInput,
  condition?: ModelNCEStudentProfileConditionInput | null,
};

export type UpdateNCEStudentProfileMutation = {
  updateNCEStudentProfile?:  {
    __typename: "NCEStudentProfile",
    id: string,
    name: string,
    email: string,
    birthdate: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteNCEStudentProfileMutationVariables = {
  input: DeleteNCEStudentProfileInput,
  condition?: ModelNCEStudentProfileConditionInput | null,
};

export type DeleteNCEStudentProfileMutation = {
  deleteNCEStudentProfile?:  {
    __typename: "NCEStudentProfile",
    id: string,
    name: string,
    email: string,
    birthdate: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateNCEUserSettingsMutationVariables = {
  input: CreateNCEUserSettingsInput,
  condition?: ModelNCEUserSettingsConditionInput | null,
};

export type CreateNCEUserSettingsMutation = {
  createNCEUserSettings?:  {
    __typename: "NCEUserSettings",
    id: string,
    notificationsEnabled: boolean,
    darkModeEnabled: boolean,
    language: string,
    isAdmin: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateNCEUserSettingsMutationVariables = {
  input: UpdateNCEUserSettingsInput,
  condition?: ModelNCEUserSettingsConditionInput | null,
};

export type UpdateNCEUserSettingsMutation = {
  updateNCEUserSettings?:  {
    __typename: "NCEUserSettings",
    id: string,
    notificationsEnabled: boolean,
    darkModeEnabled: boolean,
    language: string,
    isAdmin: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteNCEUserSettingsMutationVariables = {
  input: DeleteNCEUserSettingsInput,
  condition?: ModelNCEUserSettingsConditionInput | null,
};

export type DeleteNCEUserSettingsMutation = {
  deleteNCEUserSettings?:  {
    __typename: "NCEUserSettings",
    id: string,
    notificationsEnabled: boolean,
    darkModeEnabled: boolean,
    language: string,
    isAdmin: boolean,
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
    targetStudent: string,
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
    targetStudent: string,
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
    targetStudent: string,
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
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    createdAt: string,
    updatedAt: string,
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
    createdAt: string,
    updatedAt: string,
    moduleLessonsId?: string | null,
  } | null,
};

export type GetNCEStudentProfileQueryVariables = {
  id: string,
};

export type GetNCEStudentProfileQuery = {
  getNCEStudentProfile?:  {
    __typename: "NCEStudentProfile",
    id: string,
    name: string,
    email: string,
    birthdate: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListNCEStudentProfilesQueryVariables = {
  filter?: ModelNCEStudentProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNCEStudentProfilesQuery = {
  listNCEStudentProfiles?:  {
    __typename: "ModelNCEStudentProfileConnection",
    items:  Array< {
      __typename: "NCEStudentProfile",
      id: string,
      name: string,
      email: string,
      birthdate: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetNCEUserSettingsQueryVariables = {
  id: string,
};

export type GetNCEUserSettingsQuery = {
  getNCEUserSettings?:  {
    __typename: "NCEUserSettings",
    id: string,
    notificationsEnabled: boolean,
    darkModeEnabled: boolean,
    language: string,
    isAdmin: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListNCEUserSettingsQueryVariables = {
  filter?: ModelNCEUserSettingsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNCEUserSettingsQuery = {
  listNCEUserSettings?:  {
    __typename: "ModelNCEUserSettingsConnection",
    items:  Array< {
      __typename: "NCEUserSettings",
      id: string,
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
    targetStudent: string,
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
      targetStudent: string,
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
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
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

export type OnCreateNCEStudentProfileSubscriptionVariables = {
  filter?: ModelSubscriptionNCEStudentProfileFilterInput | null,
  owner?: string | null,
};

export type OnCreateNCEStudentProfileSubscription = {
  onCreateNCEStudentProfile?:  {
    __typename: "NCEStudentProfile",
    id: string,
    name: string,
    email: string,
    birthdate: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateNCEStudentProfileSubscriptionVariables = {
  filter?: ModelSubscriptionNCEStudentProfileFilterInput | null,
  owner?: string | null,
};

export type OnUpdateNCEStudentProfileSubscription = {
  onUpdateNCEStudentProfile?:  {
    __typename: "NCEStudentProfile",
    id: string,
    name: string,
    email: string,
    birthdate: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteNCEStudentProfileSubscriptionVariables = {
  filter?: ModelSubscriptionNCEStudentProfileFilterInput | null,
  owner?: string | null,
};

export type OnDeleteNCEStudentProfileSubscription = {
  onDeleteNCEStudentProfile?:  {
    __typename: "NCEStudentProfile",
    id: string,
    name: string,
    email: string,
    birthdate: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateNCEUserSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionNCEUserSettingsFilterInput | null,
  owner?: string | null,
};

export type OnCreateNCEUserSettingsSubscription = {
  onCreateNCEUserSettings?:  {
    __typename: "NCEUserSettings",
    id: string,
    notificationsEnabled: boolean,
    darkModeEnabled: boolean,
    language: string,
    isAdmin: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateNCEUserSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionNCEUserSettingsFilterInput | null,
  owner?: string | null,
};

export type OnUpdateNCEUserSettingsSubscription = {
  onUpdateNCEUserSettings?:  {
    __typename: "NCEUserSettings",
    id: string,
    notificationsEnabled: boolean,
    darkModeEnabled: boolean,
    language: string,
    isAdmin: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteNCEUserSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionNCEUserSettingsFilterInput | null,
  owner?: string | null,
};

export type OnDeleteNCEUserSettingsSubscription = {
  onDeleteNCEUserSettings?:  {
    __typename: "NCEUserSettings",
    id: string,
    notificationsEnabled: boolean,
    darkModeEnabled: boolean,
    language: string,
    isAdmin: boolean,
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
    targetStudent: string,
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
    targetStudent: string,
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
    targetStudent: string,
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
  owner?: string | null,
};

export type OnCreateUserNotificationReadSubscription = {
  onCreateUserNotificationRead?:  {
    __typename: "UserNotificationRead",
    id: string,
    notificationID: string,
    readAt?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserNotificationReadSubscriptionVariables = {
  filter?: ModelSubscriptionUserNotificationReadFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserNotificationReadSubscription = {
  onUpdateUserNotificationRead?:  {
    __typename: "UserNotificationRead",
    id: string,
    notificationID: string,
    readAt?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserNotificationReadSubscriptionVariables = {
  filter?: ModelSubscriptionUserNotificationReadFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserNotificationReadSubscription = {
  onDeleteUserNotificationRead?:  {
    __typename: "UserNotificationRead",
    id: string,
    notificationID: string,
    readAt?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    createdAt: string,
    updatedAt: string,
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
    createdAt: string,
    updatedAt: string,
    moduleLessonsId?: string | null,
  } | null,
};

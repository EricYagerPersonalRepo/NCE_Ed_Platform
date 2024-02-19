/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateStudentProfileInput = {
  id?: string | null,
  cognitoUserID: string,
  name: string,
  email: string,
  birthdate: string,
};

export type ModelStudentProfileConditionInput = {
  cognitoUserID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  birthdate?: ModelStringInput | null,
  and?: Array< ModelStudentProfileConditionInput | null > | null,
  or?: Array< ModelStudentProfileConditionInput | null > | null,
  not?: ModelStudentProfileConditionInput | null,
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

export type StudentProfile = {
  __typename: "StudentProfile",
  id: string,
  cognitoUserID: string,
  name: string,
  email: string,
  birthdate: string,
  courseEnrollments?: ModelCourseEnrollmentConnection | null,
  userSettings?: ModelUserSettingsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCourseEnrollmentConnection = {
  __typename: "ModelCourseEnrollmentConnection",
  items:  Array<CourseEnrollment | null >,
  nextToken?: string | null,
};

export type CourseEnrollment = {
  __typename: "CourseEnrollment",
  id: string,
  studentProfileID: string,
  courseProfileID: string,
  studentProfile: StudentProfile,
  courseProfile: CourseProfile,
  enrollmentDate?: string | null,
  progress?: Progress | null,
  state?: CourseState | null,
  createdAt: string,
  updatedAt: string,
};

export type CourseProfile = {
  __typename: "CourseProfile",
  id: string,
  title: string,
  description?: string | null,
  courseEnrollments?: ModelCourseEnrollmentConnection | null,
  createdAt: string,
  updatedAt: string,
};

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


export type ModelUserSettingsConnection = {
  __typename: "ModelUserSettingsConnection",
  items:  Array<UserSettings | null >,
  nextToken?: string | null,
};

export type UserSettings = {
  __typename: "UserSettings",
  id: string,
  studentProfileID: string,
  studentProfile: StudentProfile,
  notificationsEnabled: boolean,
  darkModeEnabled: boolean,
  language?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateStudentProfileInput = {
  id: string,
  cognitoUserID?: string | null,
  name?: string | null,
  email?: string | null,
  birthdate?: string | null,
};

export type DeleteStudentProfileInput = {
  id: string,
};

export type CreateCourseProfileInput = {
  id?: string | null,
  title: string,
  description?: string | null,
};

export type ModelCourseProfileConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelCourseProfileConditionInput | null > | null,
  or?: Array< ModelCourseProfileConditionInput | null > | null,
  not?: ModelCourseProfileConditionInput | null,
};

export type UpdateCourseProfileInput = {
  id: string,
  title?: string | null,
  description?: string | null,
};

export type DeleteCourseProfileInput = {
  id: string,
};

export type CreateCourseEnrollmentInput = {
  id?: string | null,
  studentProfileID: string,
  courseProfileID: string,
  enrollmentDate?: string | null,
  progress?: Progress | null,
  state?: CourseState | null,
};

export type ModelCourseEnrollmentConditionInput = {
  studentProfileID?: ModelIDInput | null,
  courseProfileID?: ModelIDInput | null,
  enrollmentDate?: ModelStringInput | null,
  progress?: ModelProgressInput | null,
  state?: ModelCourseStateInput | null,
  and?: Array< ModelCourseEnrollmentConditionInput | null > | null,
  or?: Array< ModelCourseEnrollmentConditionInput | null > | null,
  not?: ModelCourseEnrollmentConditionInput | null,
};

export type ModelProgressInput = {
  eq?: Progress | null,
  ne?: Progress | null,
};

export type ModelCourseStateInput = {
  eq?: CourseState | null,
  ne?: CourseState | null,
};

export type UpdateCourseEnrollmentInput = {
  id: string,
  studentProfileID?: string | null,
  courseProfileID?: string | null,
  enrollmentDate?: string | null,
  progress?: Progress | null,
  state?: CourseState | null,
};

export type DeleteCourseEnrollmentInput = {
  id: string,
};

export type CreateUserSettingsInput = {
  id?: string | null,
  studentProfileID: string,
  notificationsEnabled: boolean,
  darkModeEnabled: boolean,
  language?: string | null,
};

export type ModelUserSettingsConditionInput = {
  studentProfileID?: ModelIDInput | null,
  notificationsEnabled?: ModelBooleanInput | null,
  darkModeEnabled?: ModelBooleanInput | null,
  language?: ModelStringInput | null,
  and?: Array< ModelUserSettingsConditionInput | null > | null,
  or?: Array< ModelUserSettingsConditionInput | null > | null,
  not?: ModelUserSettingsConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateUserSettingsInput = {
  id: string,
  studentProfileID?: string | null,
  notificationsEnabled?: boolean | null,
  darkModeEnabled?: boolean | null,
  language?: string | null,
};

export type DeleteUserSettingsInput = {
  id: string,
};

export type ModelStudentProfileFilterInput = {
  id?: ModelIDInput | null,
  cognitoUserID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  birthdate?: ModelStringInput | null,
  and?: Array< ModelStudentProfileFilterInput | null > | null,
  or?: Array< ModelStudentProfileFilterInput | null > | null,
  not?: ModelStudentProfileFilterInput | null,
};

export type ModelStudentProfileConnection = {
  __typename: "ModelStudentProfileConnection",
  items:  Array<StudentProfile | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCourseProfileFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelCourseProfileFilterInput | null > | null,
  or?: Array< ModelCourseProfileFilterInput | null > | null,
  not?: ModelCourseProfileFilterInput | null,
};

export type ModelCourseProfileConnection = {
  __typename: "ModelCourseProfileConnection",
  items:  Array<CourseProfile | null >,
  nextToken?: string | null,
};

export type ModelCourseEnrollmentFilterInput = {
  id?: ModelIDInput | null,
  studentProfileID?: ModelIDInput | null,
  courseProfileID?: ModelIDInput | null,
  enrollmentDate?: ModelStringInput | null,
  progress?: ModelProgressInput | null,
  state?: ModelCourseStateInput | null,
  and?: Array< ModelCourseEnrollmentFilterInput | null > | null,
  or?: Array< ModelCourseEnrollmentFilterInput | null > | null,
  not?: ModelCourseEnrollmentFilterInput | null,
};

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelUserSettingsFilterInput = {
  id?: ModelIDInput | null,
  studentProfileID?: ModelIDInput | null,
  notificationsEnabled?: ModelBooleanInput | null,
  darkModeEnabled?: ModelBooleanInput | null,
  language?: ModelStringInput | null,
  and?: Array< ModelUserSettingsFilterInput | null > | null,
  or?: Array< ModelUserSettingsFilterInput | null > | null,
  not?: ModelUserSettingsFilterInput | null,
};

export type ModelSubscriptionStudentProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  cognitoUserID?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  birthdate?: ModelSubscriptionStringInput | null,
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

export type ModelSubscriptionCourseProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCourseProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionCourseProfileFilterInput | null > | null,
};

export type ModelSubscriptionCourseEnrollmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  studentProfileID?: ModelSubscriptionIDInput | null,
  courseProfileID?: ModelSubscriptionIDInput | null,
  enrollmentDate?: ModelSubscriptionStringInput | null,
  progress?: ModelSubscriptionStringInput | null,
  state?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCourseEnrollmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionCourseEnrollmentFilterInput | null > | null,
};

export type ModelSubscriptionUserSettingsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  studentProfileID?: ModelSubscriptionIDInput | null,
  notificationsEnabled?: ModelSubscriptionBooleanInput | null,
  darkModeEnabled?: ModelSubscriptionBooleanInput | null,
  language?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserSettingsFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserSettingsFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateStudentProfileMutationVariables = {
  input: CreateStudentProfileInput,
  condition?: ModelStudentProfileConditionInput | null,
};

export type CreateStudentProfileMutation = {
  createStudentProfile?:  {
    __typename: "StudentProfile",
    id: string,
    cognitoUserID: string,
    name: string,
    email: string,
    birthdate: string,
    courseEnrollments?:  {
      __typename: "ModelCourseEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    userSettings?:  {
      __typename: "ModelUserSettingsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    cognitoUserID: string,
    name: string,
    email: string,
    birthdate: string,
    courseEnrollments?:  {
      __typename: "ModelCourseEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    userSettings?:  {
      __typename: "ModelUserSettingsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    cognitoUserID: string,
    name: string,
    email: string,
    birthdate: string,
    courseEnrollments?:  {
      __typename: "ModelCourseEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    userSettings?:  {
      __typename: "ModelUserSettingsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCourseProfileMutationVariables = {
  input: CreateCourseProfileInput,
  condition?: ModelCourseProfileConditionInput | null,
};

export type CreateCourseProfileMutation = {
  createCourseProfile?:  {
    __typename: "CourseProfile",
    id: string,
    title: string,
    description?: string | null,
    courseEnrollments?:  {
      __typename: "ModelCourseEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCourseProfileMutationVariables = {
  input: UpdateCourseProfileInput,
  condition?: ModelCourseProfileConditionInput | null,
};

export type UpdateCourseProfileMutation = {
  updateCourseProfile?:  {
    __typename: "CourseProfile",
    id: string,
    title: string,
    description?: string | null,
    courseEnrollments?:  {
      __typename: "ModelCourseEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCourseProfileMutationVariables = {
  input: DeleteCourseProfileInput,
  condition?: ModelCourseProfileConditionInput | null,
};

export type DeleteCourseProfileMutation = {
  deleteCourseProfile?:  {
    __typename: "CourseProfile",
    id: string,
    title: string,
    description?: string | null,
    courseEnrollments?:  {
      __typename: "ModelCourseEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCourseEnrollmentMutationVariables = {
  input: CreateCourseEnrollmentInput,
  condition?: ModelCourseEnrollmentConditionInput | null,
};

export type CreateCourseEnrollmentMutation = {
  createCourseEnrollment?:  {
    __typename: "CourseEnrollment",
    id: string,
    studentProfileID: string,
    courseProfileID: string,
    studentProfile:  {
      __typename: "StudentProfile",
      id: string,
      cognitoUserID: string,
      name: string,
      email: string,
      birthdate: string,
      createdAt: string,
      updatedAt: string,
    },
    courseProfile:  {
      __typename: "CourseProfile",
      id: string,
      title: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    enrollmentDate?: string | null,
    progress?: Progress | null,
    state?: CourseState | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCourseEnrollmentMutationVariables = {
  input: UpdateCourseEnrollmentInput,
  condition?: ModelCourseEnrollmentConditionInput | null,
};

export type UpdateCourseEnrollmentMutation = {
  updateCourseEnrollment?:  {
    __typename: "CourseEnrollment",
    id: string,
    studentProfileID: string,
    courseProfileID: string,
    studentProfile:  {
      __typename: "StudentProfile",
      id: string,
      cognitoUserID: string,
      name: string,
      email: string,
      birthdate: string,
      createdAt: string,
      updatedAt: string,
    },
    courseProfile:  {
      __typename: "CourseProfile",
      id: string,
      title: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    enrollmentDate?: string | null,
    progress?: Progress | null,
    state?: CourseState | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCourseEnrollmentMutationVariables = {
  input: DeleteCourseEnrollmentInput,
  condition?: ModelCourseEnrollmentConditionInput | null,
};

export type DeleteCourseEnrollmentMutation = {
  deleteCourseEnrollment?:  {
    __typename: "CourseEnrollment",
    id: string,
    studentProfileID: string,
    courseProfileID: string,
    studentProfile:  {
      __typename: "StudentProfile",
      id: string,
      cognitoUserID: string,
      name: string,
      email: string,
      birthdate: string,
      createdAt: string,
      updatedAt: string,
    },
    courseProfile:  {
      __typename: "CourseProfile",
      id: string,
      title: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    enrollmentDate?: string | null,
    progress?: Progress | null,
    state?: CourseState | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserSettingsMutationVariables = {
  input: CreateUserSettingsInput,
  condition?: ModelUserSettingsConditionInput | null,
};

export type CreateUserSettingsMutation = {
  createUserSettings?:  {
    __typename: "UserSettings",
    id: string,
    studentProfileID: string,
    studentProfile:  {
      __typename: "StudentProfile",
      id: string,
      cognitoUserID: string,
      name: string,
      email: string,
      birthdate: string,
      createdAt: string,
      updatedAt: string,
    },
    notificationsEnabled: boolean,
    darkModeEnabled: boolean,
    language?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserSettingsMutationVariables = {
  input: UpdateUserSettingsInput,
  condition?: ModelUserSettingsConditionInput | null,
};

export type UpdateUserSettingsMutation = {
  updateUserSettings?:  {
    __typename: "UserSettings",
    id: string,
    studentProfileID: string,
    studentProfile:  {
      __typename: "StudentProfile",
      id: string,
      cognitoUserID: string,
      name: string,
      email: string,
      birthdate: string,
      createdAt: string,
      updatedAt: string,
    },
    notificationsEnabled: boolean,
    darkModeEnabled: boolean,
    language?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserSettingsMutationVariables = {
  input: DeleteUserSettingsInput,
  condition?: ModelUserSettingsConditionInput | null,
};

export type DeleteUserSettingsMutation = {
  deleteUserSettings?:  {
    __typename: "UserSettings",
    id: string,
    studentProfileID: string,
    studentProfile:  {
      __typename: "StudentProfile",
      id: string,
      cognitoUserID: string,
      name: string,
      email: string,
      birthdate: string,
      createdAt: string,
      updatedAt: string,
    },
    notificationsEnabled: boolean,
    darkModeEnabled: boolean,
    language?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetStudentProfileQueryVariables = {
  id: string,
};

export type GetStudentProfileQuery = {
  getStudentProfile?:  {
    __typename: "StudentProfile",
    id: string,
    cognitoUserID: string,
    name: string,
    email: string,
    birthdate: string,
    courseEnrollments?:  {
      __typename: "ModelCourseEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    userSettings?:  {
      __typename: "ModelUserSettingsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      cognitoUserID: string,
      name: string,
      email: string,
      birthdate: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type StudentProfilesByCognitoUserIDQueryVariables = {
  cognitoUserID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStudentProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StudentProfilesByCognitoUserIDQuery = {
  studentProfilesByCognitoUserID?:  {
    __typename: "ModelStudentProfileConnection",
    items:  Array< {
      __typename: "StudentProfile",
      id: string,
      cognitoUserID: string,
      name: string,
      email: string,
      birthdate: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCourseProfileQueryVariables = {
  id: string,
};

export type GetCourseProfileQuery = {
  getCourseProfile?:  {
    __typename: "CourseProfile",
    id: string,
    title: string,
    description?: string | null,
    courseEnrollments?:  {
      __typename: "ModelCourseEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCourseProfilesQueryVariables = {
  filter?: ModelCourseProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCourseProfilesQuery = {
  listCourseProfiles?:  {
    __typename: "ModelCourseProfileConnection",
    items:  Array< {
      __typename: "CourseProfile",
      id: string,
      title: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCourseEnrollmentQueryVariables = {
  id: string,
};

export type GetCourseEnrollmentQuery = {
  getCourseEnrollment?:  {
    __typename: "CourseEnrollment",
    id: string,
    studentProfileID: string,
    courseProfileID: string,
    studentProfile:  {
      __typename: "StudentProfile",
      id: string,
      cognitoUserID: string,
      name: string,
      email: string,
      birthdate: string,
      createdAt: string,
      updatedAt: string,
    },
    courseProfile:  {
      __typename: "CourseProfile",
      id: string,
      title: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    enrollmentDate?: string | null,
    progress?: Progress | null,
    state?: CourseState | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCourseEnrollmentsQueryVariables = {
  filter?: ModelCourseEnrollmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCourseEnrollmentsQuery = {
  listCourseEnrollments?:  {
    __typename: "ModelCourseEnrollmentConnection",
    items:  Array< {
      __typename: "CourseEnrollment",
      id: string,
      studentProfileID: string,
      courseProfileID: string,
      enrollmentDate?: string | null,
      progress?: Progress | null,
      state?: CourseState | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CourseEnrollmentsByStudentProfileIDAndIdQueryVariables = {
  studentProfileID: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCourseEnrollmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CourseEnrollmentsByStudentProfileIDAndIdQuery = {
  courseEnrollmentsByStudentProfileIDAndId?:  {
    __typename: "ModelCourseEnrollmentConnection",
    items:  Array< {
      __typename: "CourseEnrollment",
      id: string,
      studentProfileID: string,
      courseProfileID: string,
      enrollmentDate?: string | null,
      progress?: Progress | null,
      state?: CourseState | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CourseEnrollmentsByCourseProfileIDAndIdQueryVariables = {
  courseProfileID: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCourseEnrollmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CourseEnrollmentsByCourseProfileIDAndIdQuery = {
  courseEnrollmentsByCourseProfileIDAndId?:  {
    __typename: "ModelCourseEnrollmentConnection",
    items:  Array< {
      __typename: "CourseEnrollment",
      id: string,
      studentProfileID: string,
      courseProfileID: string,
      enrollmentDate?: string | null,
      progress?: Progress | null,
      state?: CourseState | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserSettingsQueryVariables = {
  id: string,
};

export type GetUserSettingsQuery = {
  getUserSettings?:  {
    __typename: "UserSettings",
    id: string,
    studentProfileID: string,
    studentProfile:  {
      __typename: "StudentProfile",
      id: string,
      cognitoUserID: string,
      name: string,
      email: string,
      birthdate: string,
      createdAt: string,
      updatedAt: string,
    },
    notificationsEnabled: boolean,
    darkModeEnabled: boolean,
    language?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserSettingsQueryVariables = {
  filter?: ModelUserSettingsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserSettingsQuery = {
  listUserSettings?:  {
    __typename: "ModelUserSettingsConnection",
    items:  Array< {
      __typename: "UserSettings",
      id: string,
      studentProfileID: string,
      notificationsEnabled: boolean,
      darkModeEnabled: boolean,
      language?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserSettingsByStudentProfileIDAndIdQueryVariables = {
  studentProfileID: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserSettingsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserSettingsByStudentProfileIDAndIdQuery = {
  userSettingsByStudentProfileIDAndId?:  {
    __typename: "ModelUserSettingsConnection",
    items:  Array< {
      __typename: "UserSettings",
      id: string,
      studentProfileID: string,
      notificationsEnabled: boolean,
      darkModeEnabled: boolean,
      language?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateStudentProfileSubscriptionVariables = {
  filter?: ModelSubscriptionStudentProfileFilterInput | null,
};

export type OnCreateStudentProfileSubscription = {
  onCreateStudentProfile?:  {
    __typename: "StudentProfile",
    id: string,
    cognitoUserID: string,
    name: string,
    email: string,
    birthdate: string,
    courseEnrollments?:  {
      __typename: "ModelCourseEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    userSettings?:  {
      __typename: "ModelUserSettingsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStudentProfileSubscriptionVariables = {
  filter?: ModelSubscriptionStudentProfileFilterInput | null,
};

export type OnUpdateStudentProfileSubscription = {
  onUpdateStudentProfile?:  {
    __typename: "StudentProfile",
    id: string,
    cognitoUserID: string,
    name: string,
    email: string,
    birthdate: string,
    courseEnrollments?:  {
      __typename: "ModelCourseEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    userSettings?:  {
      __typename: "ModelUserSettingsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStudentProfileSubscriptionVariables = {
  filter?: ModelSubscriptionStudentProfileFilterInput | null,
};

export type OnDeleteStudentProfileSubscription = {
  onDeleteStudentProfile?:  {
    __typename: "StudentProfile",
    id: string,
    cognitoUserID: string,
    name: string,
    email: string,
    birthdate: string,
    courseEnrollments?:  {
      __typename: "ModelCourseEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    userSettings?:  {
      __typename: "ModelUserSettingsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCourseProfileSubscriptionVariables = {
  filter?: ModelSubscriptionCourseProfileFilterInput | null,
};

export type OnCreateCourseProfileSubscription = {
  onCreateCourseProfile?:  {
    __typename: "CourseProfile",
    id: string,
    title: string,
    description?: string | null,
    courseEnrollments?:  {
      __typename: "ModelCourseEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCourseProfileSubscriptionVariables = {
  filter?: ModelSubscriptionCourseProfileFilterInput | null,
};

export type OnUpdateCourseProfileSubscription = {
  onUpdateCourseProfile?:  {
    __typename: "CourseProfile",
    id: string,
    title: string,
    description?: string | null,
    courseEnrollments?:  {
      __typename: "ModelCourseEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCourseProfileSubscriptionVariables = {
  filter?: ModelSubscriptionCourseProfileFilterInput | null,
};

export type OnDeleteCourseProfileSubscription = {
  onDeleteCourseProfile?:  {
    __typename: "CourseProfile",
    id: string,
    title: string,
    description?: string | null,
    courseEnrollments?:  {
      __typename: "ModelCourseEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCourseEnrollmentSubscriptionVariables = {
  filter?: ModelSubscriptionCourseEnrollmentFilterInput | null,
};

export type OnCreateCourseEnrollmentSubscription = {
  onCreateCourseEnrollment?:  {
    __typename: "CourseEnrollment",
    id: string,
    studentProfileID: string,
    courseProfileID: string,
    studentProfile:  {
      __typename: "StudentProfile",
      id: string,
      cognitoUserID: string,
      name: string,
      email: string,
      birthdate: string,
      createdAt: string,
      updatedAt: string,
    },
    courseProfile:  {
      __typename: "CourseProfile",
      id: string,
      title: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    enrollmentDate?: string | null,
    progress?: Progress | null,
    state?: CourseState | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCourseEnrollmentSubscriptionVariables = {
  filter?: ModelSubscriptionCourseEnrollmentFilterInput | null,
};

export type OnUpdateCourseEnrollmentSubscription = {
  onUpdateCourseEnrollment?:  {
    __typename: "CourseEnrollment",
    id: string,
    studentProfileID: string,
    courseProfileID: string,
    studentProfile:  {
      __typename: "StudentProfile",
      id: string,
      cognitoUserID: string,
      name: string,
      email: string,
      birthdate: string,
      createdAt: string,
      updatedAt: string,
    },
    courseProfile:  {
      __typename: "CourseProfile",
      id: string,
      title: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    enrollmentDate?: string | null,
    progress?: Progress | null,
    state?: CourseState | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCourseEnrollmentSubscriptionVariables = {
  filter?: ModelSubscriptionCourseEnrollmentFilterInput | null,
};

export type OnDeleteCourseEnrollmentSubscription = {
  onDeleteCourseEnrollment?:  {
    __typename: "CourseEnrollment",
    id: string,
    studentProfileID: string,
    courseProfileID: string,
    studentProfile:  {
      __typename: "StudentProfile",
      id: string,
      cognitoUserID: string,
      name: string,
      email: string,
      birthdate: string,
      createdAt: string,
      updatedAt: string,
    },
    courseProfile:  {
      __typename: "CourseProfile",
      id: string,
      title: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    enrollmentDate?: string | null,
    progress?: Progress | null,
    state?: CourseState | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionUserSettingsFilterInput | null,
};

export type OnCreateUserSettingsSubscription = {
  onCreateUserSettings?:  {
    __typename: "UserSettings",
    id: string,
    studentProfileID: string,
    studentProfile:  {
      __typename: "StudentProfile",
      id: string,
      cognitoUserID: string,
      name: string,
      email: string,
      birthdate: string,
      createdAt: string,
      updatedAt: string,
    },
    notificationsEnabled: boolean,
    darkModeEnabled: boolean,
    language?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionUserSettingsFilterInput | null,
};

export type OnUpdateUserSettingsSubscription = {
  onUpdateUserSettings?:  {
    __typename: "UserSettings",
    id: string,
    studentProfileID: string,
    studentProfile:  {
      __typename: "StudentProfile",
      id: string,
      cognitoUserID: string,
      name: string,
      email: string,
      birthdate: string,
      createdAt: string,
      updatedAt: string,
    },
    notificationsEnabled: boolean,
    darkModeEnabled: boolean,
    language?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionUserSettingsFilterInput | null,
};

export type OnDeleteUserSettingsSubscription = {
  onDeleteUserSettings?:  {
    __typename: "UserSettings",
    id: string,
    studentProfileID: string,
    studentProfile:  {
      __typename: "StudentProfile",
      id: string,
      cognitoUserID: string,
      name: string,
      email: string,
      birthdate: string,
      createdAt: string,
      updatedAt: string,
    },
    notificationsEnabled: boolean,
    darkModeEnabled: boolean,
    language?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

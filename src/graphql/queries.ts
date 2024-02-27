/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getStudentProfile = /* GraphQL */ `query GetStudentProfile($id: ID!) {
  getStudentProfile(id: $id) {
    id
    cognitoUserID
    name
    email
    birthdate
    courseEnrollments {
      nextToken
      __typename
    }
    userSettings {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetStudentProfileQueryVariables,
  APITypes.GetStudentProfileQuery
>;
export const listStudentProfiles = /* GraphQL */ `query ListStudentProfiles(
  $filter: ModelStudentProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listStudentProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      cognitoUserID
      name
      email
      birthdate
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStudentProfilesQueryVariables,
  APITypes.ListStudentProfilesQuery
>;
export const studentProfilesByCognitoUserID = /* GraphQL */ `query StudentProfilesByCognitoUserID(
  $cognitoUserID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelStudentProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  studentProfilesByCognitoUserID(
    cognitoUserID: $cognitoUserID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      cognitoUserID
      name
      email
      birthdate
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StudentProfilesByCognitoUserIDQueryVariables,
  APITypes.StudentProfilesByCognitoUserIDQuery
>;
export const getCourseProfile = /* GraphQL */ `query GetCourseProfile($id: ID!) {
  getCourseProfile(id: $id) {
    id
    title
    description
    courseEnrollments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCourseProfileQueryVariables,
  APITypes.GetCourseProfileQuery
>;
export const listCourseProfiles = /* GraphQL */ `query ListCourseProfiles(
  $filter: ModelCourseProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listCourseProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCourseProfilesQueryVariables,
  APITypes.ListCourseProfilesQuery
>;
export const getCourseEnrollment = /* GraphQL */ `query GetCourseEnrollment($id: ID!) {
  getCourseEnrollment(id: $id) {
    id
    studentProfileID
    courseProfileID
    studentProfile {
      id
      cognitoUserID
      name
      email
      birthdate
      createdAt
      updatedAt
      __typename
    }
    courseProfile {
      id
      title
      description
      createdAt
      updatedAt
      __typename
    }
    enrollmentDate
    progress
    state
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCourseEnrollmentQueryVariables,
  APITypes.GetCourseEnrollmentQuery
>;
export const listCourseEnrollments = /* GraphQL */ `query ListCourseEnrollments(
  $filter: ModelCourseEnrollmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listCourseEnrollments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      studentProfileID
      courseProfileID
      enrollmentDate
      progress
      state
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCourseEnrollmentsQueryVariables,
  APITypes.ListCourseEnrollmentsQuery
>;
export const courseEnrollmentsByStudentProfileIDAndId = /* GraphQL */ `query CourseEnrollmentsByStudentProfileIDAndId(
  $studentProfileID: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCourseEnrollmentFilterInput
  $limit: Int
  $nextToken: String
) {
  courseEnrollmentsByStudentProfileIDAndId(
    studentProfileID: $studentProfileID
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      studentProfileID
      courseProfileID
      enrollmentDate
      progress
      state
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CourseEnrollmentsByStudentProfileIDAndIdQueryVariables,
  APITypes.CourseEnrollmentsByStudentProfileIDAndIdQuery
>;
export const courseEnrollmentsByCourseProfileIDAndId = /* GraphQL */ `query CourseEnrollmentsByCourseProfileIDAndId(
  $courseProfileID: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCourseEnrollmentFilterInput
  $limit: Int
  $nextToken: String
) {
  courseEnrollmentsByCourseProfileIDAndId(
    courseProfileID: $courseProfileID
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      studentProfileID
      courseProfileID
      enrollmentDate
      progress
      state
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CourseEnrollmentsByCourseProfileIDAndIdQueryVariables,
  APITypes.CourseEnrollmentsByCourseProfileIDAndIdQuery
>;
export const getUserSettings = /* GraphQL */ `query GetUserSettings($id: ID!) {
  getUserSettings(id: $id) {
    id
    studentProfileID
    studentProfile {
      id
      cognitoUserID
      name
      email
      birthdate
      createdAt
      updatedAt
      __typename
    }
    notificationsEnabled
    darkModeEnabled
    language
    isAdmin
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserSettingsQueryVariables,
  APITypes.GetUserSettingsQuery
>;
export const listUserSettings = /* GraphQL */ `query ListUserSettings(
  $filter: ModelUserSettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserSettings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      studentProfileID
      notificationsEnabled
      darkModeEnabled
      language
      isAdmin
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserSettingsQueryVariables,
  APITypes.ListUserSettingsQuery
>;
export const userSettingsByStudentProfileIDAndId = /* GraphQL */ `query UserSettingsByStudentProfileIDAndId(
  $studentProfileID: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelUserSettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  userSettingsByStudentProfileIDAndId(
    studentProfileID: $studentProfileID
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      studentProfileID
      notificationsEnabled
      darkModeEnabled
      language
      isAdmin
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserSettingsByStudentProfileIDAndIdQueryVariables,
  APITypes.UserSettingsByStudentProfileIDAndIdQuery
>;

/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateStudentProfile = /* GraphQL */ `subscription OnCreateStudentProfile(
  $filter: ModelSubscriptionStudentProfileFilterInput
) {
  onCreateStudentProfile(filter: $filter) {
    id
    cognitoUserID
    name
    email
    birthdate
    courseEnrollments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateStudentProfileSubscriptionVariables,
  APITypes.OnCreateStudentProfileSubscription
>;
export const onUpdateStudentProfile = /* GraphQL */ `subscription OnUpdateStudentProfile(
  $filter: ModelSubscriptionStudentProfileFilterInput
) {
  onUpdateStudentProfile(filter: $filter) {
    id
    cognitoUserID
    name
    email
    birthdate
    courseEnrollments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateStudentProfileSubscriptionVariables,
  APITypes.OnUpdateStudentProfileSubscription
>;
export const onDeleteStudentProfile = /* GraphQL */ `subscription OnDeleteStudentProfile(
  $filter: ModelSubscriptionStudentProfileFilterInput
) {
  onDeleteStudentProfile(filter: $filter) {
    id
    cognitoUserID
    name
    email
    birthdate
    courseEnrollments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteStudentProfileSubscriptionVariables,
  APITypes.OnDeleteStudentProfileSubscription
>;
export const onCreateCourseProfile = /* GraphQL */ `subscription OnCreateCourseProfile(
  $filter: ModelSubscriptionCourseProfileFilterInput
) {
  onCreateCourseProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCourseProfileSubscriptionVariables,
  APITypes.OnCreateCourseProfileSubscription
>;
export const onUpdateCourseProfile = /* GraphQL */ `subscription OnUpdateCourseProfile(
  $filter: ModelSubscriptionCourseProfileFilterInput
) {
  onUpdateCourseProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCourseProfileSubscriptionVariables,
  APITypes.OnUpdateCourseProfileSubscription
>;
export const onDeleteCourseProfile = /* GraphQL */ `subscription OnDeleteCourseProfile(
  $filter: ModelSubscriptionCourseProfileFilterInput
) {
  onDeleteCourseProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCourseProfileSubscriptionVariables,
  APITypes.OnDeleteCourseProfileSubscription
>;
export const onCreateCourseEnrollment = /* GraphQL */ `subscription OnCreateCourseEnrollment(
  $filter: ModelSubscriptionCourseEnrollmentFilterInput
) {
  onCreateCourseEnrollment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCourseEnrollmentSubscriptionVariables,
  APITypes.OnCreateCourseEnrollmentSubscription
>;
export const onUpdateCourseEnrollment = /* GraphQL */ `subscription OnUpdateCourseEnrollment(
  $filter: ModelSubscriptionCourseEnrollmentFilterInput
) {
  onUpdateCourseEnrollment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCourseEnrollmentSubscriptionVariables,
  APITypes.OnUpdateCourseEnrollmentSubscription
>;
export const onDeleteCourseEnrollment = /* GraphQL */ `subscription OnDeleteCourseEnrollment(
  $filter: ModelSubscriptionCourseEnrollmentFilterInput
) {
  onDeleteCourseEnrollment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCourseEnrollmentSubscriptionVariables,
  APITypes.OnDeleteCourseEnrollmentSubscription
>;
export const onCreateUserSettings = /* GraphQL */ `subscription OnCreateUserSettings(
  $filter: ModelSubscriptionUserSettingsFilterInput
) {
  onCreateUserSettings(filter: $filter) {
    id
    notificationsEnabled
    darkModeEnabled
    language
    isAdmin
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSettingsSubscriptionVariables,
  APITypes.OnCreateUserSettingsSubscription
>;
export const onUpdateUserSettings = /* GraphQL */ `subscription OnUpdateUserSettings(
  $filter: ModelSubscriptionUserSettingsFilterInput
) {
  onUpdateUserSettings(filter: $filter) {
    id
    notificationsEnabled
    darkModeEnabled
    language
    isAdmin
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSettingsSubscriptionVariables,
  APITypes.OnUpdateUserSettingsSubscription
>;
export const onDeleteUserSettings = /* GraphQL */ `subscription OnDeleteUserSettings(
  $filter: ModelSubscriptionUserSettingsFilterInput
) {
  onDeleteUserSettings(filter: $filter) {
    id
    notificationsEnabled
    darkModeEnabled
    language
    isAdmin
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSettingsSubscriptionVariables,
  APITypes.OnDeleteUserSettingsSubscription
>;

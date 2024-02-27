/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createStudentProfile = /* GraphQL */ `mutation CreateStudentProfile(
  $input: CreateStudentProfileInput!
  $condition: ModelStudentProfileConditionInput
) {
  createStudentProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateStudentProfileMutationVariables,
  APITypes.CreateStudentProfileMutation
>;
export const updateStudentProfile = /* GraphQL */ `mutation UpdateStudentProfile(
  $input: UpdateStudentProfileInput!
  $condition: ModelStudentProfileConditionInput
) {
  updateStudentProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateStudentProfileMutationVariables,
  APITypes.UpdateStudentProfileMutation
>;
export const deleteStudentProfile = /* GraphQL */ `mutation DeleteStudentProfile(
  $input: DeleteStudentProfileInput!
  $condition: ModelStudentProfileConditionInput
) {
  deleteStudentProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteStudentProfileMutationVariables,
  APITypes.DeleteStudentProfileMutation
>;
export const createCourseProfile = /* GraphQL */ `mutation CreateCourseProfile(
  $input: CreateCourseProfileInput!
  $condition: ModelCourseProfileConditionInput
) {
  createCourseProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCourseProfileMutationVariables,
  APITypes.CreateCourseProfileMutation
>;
export const updateCourseProfile = /* GraphQL */ `mutation UpdateCourseProfile(
  $input: UpdateCourseProfileInput!
  $condition: ModelCourseProfileConditionInput
) {
  updateCourseProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCourseProfileMutationVariables,
  APITypes.UpdateCourseProfileMutation
>;
export const deleteCourseProfile = /* GraphQL */ `mutation DeleteCourseProfile(
  $input: DeleteCourseProfileInput!
  $condition: ModelCourseProfileConditionInput
) {
  deleteCourseProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCourseProfileMutationVariables,
  APITypes.DeleteCourseProfileMutation
>;
export const createCourseEnrollment = /* GraphQL */ `mutation CreateCourseEnrollment(
  $input: CreateCourseEnrollmentInput!
  $condition: ModelCourseEnrollmentConditionInput
) {
  createCourseEnrollment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCourseEnrollmentMutationVariables,
  APITypes.CreateCourseEnrollmentMutation
>;
export const updateCourseEnrollment = /* GraphQL */ `mutation UpdateCourseEnrollment(
  $input: UpdateCourseEnrollmentInput!
  $condition: ModelCourseEnrollmentConditionInput
) {
  updateCourseEnrollment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCourseEnrollmentMutationVariables,
  APITypes.UpdateCourseEnrollmentMutation
>;
export const deleteCourseEnrollment = /* GraphQL */ `mutation DeleteCourseEnrollment(
  $input: DeleteCourseEnrollmentInput!
  $condition: ModelCourseEnrollmentConditionInput
) {
  deleteCourseEnrollment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCourseEnrollmentMutationVariables,
  APITypes.DeleteCourseEnrollmentMutation
>;
export const createUserSettings = /* GraphQL */ `mutation CreateUserSettings(
  $input: CreateUserSettingsInput!
  $condition: ModelUserSettingsConditionInput
) {
  createUserSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserSettingsMutationVariables,
  APITypes.CreateUserSettingsMutation
>;
export const updateUserSettings = /* GraphQL */ `mutation UpdateUserSettings(
  $input: UpdateUserSettingsInput!
  $condition: ModelUserSettingsConditionInput
) {
  updateUserSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserSettingsMutationVariables,
  APITypes.UpdateUserSettingsMutation
>;
export const deleteUserSettings = /* GraphQL */ `mutation DeleteUserSettings(
  $input: DeleteUserSettingsInput!
  $condition: ModelUserSettingsConditionInput
) {
  deleteUserSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserSettingsMutationVariables,
  APITypes.DeleteUserSettingsMutation
>;

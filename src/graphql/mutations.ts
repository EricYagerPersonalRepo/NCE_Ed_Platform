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
    CourseProfiles {
      nextToken
      __typename
    }
    birthdate
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
    CourseProfiles {
      nextToken
      __typename
    }
    birthdate
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
    CourseProfiles {
      nextToken
      __typename
    }
    birthdate
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
    studentprofiles {
      nextToken
      __typename
    }
    title
    description
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
    studentprofiles {
      nextToken
      __typename
    }
    title
    description
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
    studentprofiles {
      nextToken
      __typename
    }
    title
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCourseProfileMutationVariables,
  APITypes.DeleteCourseProfileMutation
>;
export const createStudentProfileCourseProfile = /* GraphQL */ `mutation CreateStudentProfileCourseProfile(
  $input: CreateStudentProfileCourseProfileInput!
  $condition: ModelStudentProfileCourseProfileConditionInput
) {
  createStudentProfileCourseProfile(input: $input, condition: $condition) {
    id
    studentProfileId
    courseProfileId
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateStudentProfileCourseProfileMutationVariables,
  APITypes.CreateStudentProfileCourseProfileMutation
>;
export const updateStudentProfileCourseProfile = /* GraphQL */ `mutation UpdateStudentProfileCourseProfile(
  $input: UpdateStudentProfileCourseProfileInput!
  $condition: ModelStudentProfileCourseProfileConditionInput
) {
  updateStudentProfileCourseProfile(input: $input, condition: $condition) {
    id
    studentProfileId
    courseProfileId
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateStudentProfileCourseProfileMutationVariables,
  APITypes.UpdateStudentProfileCourseProfileMutation
>;
export const deleteStudentProfileCourseProfile = /* GraphQL */ `mutation DeleteStudentProfileCourseProfile(
  $input: DeleteStudentProfileCourseProfileInput!
  $condition: ModelStudentProfileCourseProfileConditionInput
) {
  deleteStudentProfileCourseProfile(input: $input, condition: $condition) {
    id
    studentProfileId
    courseProfileId
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteStudentProfileCourseProfileMutationVariables,
  APITypes.DeleteStudentProfileCourseProfileMutation
>;

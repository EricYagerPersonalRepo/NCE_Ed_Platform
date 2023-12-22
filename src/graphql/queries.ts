/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getRegistrant = /* GraphQL */ `query GetRegistrant($id: ID!) {
  getRegistrant(id: $id) {
    id
    firstName
    lastName
    email
    phone
    StudentProfiles {
      nextToken
      __typename
    }
    address {
      city
      state
      zipCode
      __typename
    }
    birthdate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRegistrantQueryVariables,
  APITypes.GetRegistrantQuery
>;
export const listRegistrants = /* GraphQL */ `query ListRegistrants(
  $filter: ModelRegistrantFilterInput
  $limit: Int
  $nextToken: String
) {
  listRegistrants(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstName
      lastName
      email
      phone
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
  APITypes.ListRegistrantsQueryVariables,
  APITypes.ListRegistrantsQuery
>;
export const getStudentProfile = /* GraphQL */ `query GetStudentProfile($id: ID!) {
  getStudentProfile(id: $id) {
    id
    firstName
    email
    password
    phone
    CourseProfiles {
      nextToken
      __typename
    }
    birthdate
    registrantID
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
      firstName
      email
      password
      phone
      birthdate
      registrantID
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
export const studentProfilesByRegistrantID = /* GraphQL */ `query StudentProfilesByRegistrantID(
  $registrantID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelStudentProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  studentProfilesByRegistrantID(
    registrantID: $registrantID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      firstName
      email
      password
      phone
      birthdate
      registrantID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StudentProfilesByRegistrantIDQueryVariables,
  APITypes.StudentProfilesByRegistrantIDQuery
>;
export const getCourseProfile = /* GraphQL */ `query GetCourseProfile($id: ID!) {
  getCourseProfile(id: $id) {
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
export const getStudentProfileCourseProfile = /* GraphQL */ `query GetStudentProfileCourseProfile($id: ID!) {
  getStudentProfileCourseProfile(id: $id) {
    id
    studentProfileId
    courseProfileId
    studentProfile {
      id
      firstName
      email
      password
      phone
      birthdate
      registrantID
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
` as GeneratedQuery<
  APITypes.GetStudentProfileCourseProfileQueryVariables,
  APITypes.GetStudentProfileCourseProfileQuery
>;
export const listStudentProfileCourseProfiles = /* GraphQL */ `query ListStudentProfileCourseProfiles(
  $filter: ModelStudentProfileCourseProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listStudentProfileCourseProfiles(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      studentProfileId
      courseProfileId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStudentProfileCourseProfilesQueryVariables,
  APITypes.ListStudentProfileCourseProfilesQuery
>;
export const studentProfileCourseProfilesByStudentProfileId = /* GraphQL */ `query StudentProfileCourseProfilesByStudentProfileId(
  $studentProfileId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelStudentProfileCourseProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  studentProfileCourseProfilesByStudentProfileId(
    studentProfileId: $studentProfileId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      studentProfileId
      courseProfileId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StudentProfileCourseProfilesByStudentProfileIdQueryVariables,
  APITypes.StudentProfileCourseProfilesByStudentProfileIdQuery
>;
export const studentProfileCourseProfilesByCourseProfileId = /* GraphQL */ `query StudentProfileCourseProfilesByCourseProfileId(
  $courseProfileId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelStudentProfileCourseProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  studentProfileCourseProfilesByCourseProfileId(
    courseProfileId: $courseProfileId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      studentProfileId
      courseProfileId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StudentProfileCourseProfilesByCourseProfileIdQueryVariables,
  APITypes.StudentProfileCourseProfilesByCourseProfileIdQuery
>;

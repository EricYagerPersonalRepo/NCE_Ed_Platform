/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateRegistrant = /* GraphQL */ `subscription OnCreateRegistrant(
  $filter: ModelSubscriptionRegistrantFilterInput
) {
  onCreateRegistrant(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRegistrantSubscriptionVariables,
  APITypes.OnCreateRegistrantSubscription
>;
export const onUpdateRegistrant = /* GraphQL */ `subscription OnUpdateRegistrant(
  $filter: ModelSubscriptionRegistrantFilterInput
) {
  onUpdateRegistrant(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRegistrantSubscriptionVariables,
  APITypes.OnUpdateRegistrantSubscription
>;
export const onDeleteRegistrant = /* GraphQL */ `subscription OnDeleteRegistrant(
  $filter: ModelSubscriptionRegistrantFilterInput
) {
  onDeleteRegistrant(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRegistrantSubscriptionVariables,
  APITypes.OnDeleteRegistrantSubscription
>;
export const onCreateStudentProfile = /* GraphQL */ `subscription OnCreateStudentProfile(
  $filter: ModelSubscriptionStudentProfileFilterInput
) {
  onCreateStudentProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateStudentProfileSubscriptionVariables,
  APITypes.OnCreateStudentProfileSubscription
>;
export const onUpdateStudentProfile = /* GraphQL */ `subscription OnUpdateStudentProfile(
  $filter: ModelSubscriptionStudentProfileFilterInput
) {
  onUpdateStudentProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateStudentProfileSubscriptionVariables,
  APITypes.OnUpdateStudentProfileSubscription
>;
export const onDeleteStudentProfile = /* GraphQL */ `subscription OnDeleteStudentProfile(
  $filter: ModelSubscriptionStudentProfileFilterInput
) {
  onDeleteStudentProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteStudentProfileSubscriptionVariables,
  APITypes.OnDeleteStudentProfileSubscription
>;
export const onCreateCourseProfile = /* GraphQL */ `subscription OnCreateCourseProfile(
  $filter: ModelSubscriptionCourseProfileFilterInput
) {
  onCreateCourseProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCourseProfileSubscriptionVariables,
  APITypes.OnCreateCourseProfileSubscription
>;
export const onUpdateCourseProfile = /* GraphQL */ `subscription OnUpdateCourseProfile(
  $filter: ModelSubscriptionCourseProfileFilterInput
) {
  onUpdateCourseProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCourseProfileSubscriptionVariables,
  APITypes.OnUpdateCourseProfileSubscription
>;
export const onDeleteCourseProfile = /* GraphQL */ `subscription OnDeleteCourseProfile(
  $filter: ModelSubscriptionCourseProfileFilterInput
) {
  onDeleteCourseProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCourseProfileSubscriptionVariables,
  APITypes.OnDeleteCourseProfileSubscription
>;
export const onCreateStudentProfileCourseProfile = /* GraphQL */ `subscription OnCreateStudentProfileCourseProfile(
  $filter: ModelSubscriptionStudentProfileCourseProfileFilterInput
) {
  onCreateStudentProfileCourseProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateStudentProfileCourseProfileSubscriptionVariables,
  APITypes.OnCreateStudentProfileCourseProfileSubscription
>;
export const onUpdateStudentProfileCourseProfile = /* GraphQL */ `subscription OnUpdateStudentProfileCourseProfile(
  $filter: ModelSubscriptionStudentProfileCourseProfileFilterInput
) {
  onUpdateStudentProfileCourseProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateStudentProfileCourseProfileSubscriptionVariables,
  APITypes.OnUpdateStudentProfileCourseProfileSubscription
>;
export const onDeleteStudentProfileCourseProfile = /* GraphQL */ `subscription OnDeleteStudentProfileCourseProfile(
  $filter: ModelSubscriptionStudentProfileCourseProfileFilterInput
) {
  onDeleteStudentProfileCourseProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteStudentProfileCourseProfileSubscriptionVariables,
  APITypes.OnDeleteStudentProfileCourseProfileSubscription
>;

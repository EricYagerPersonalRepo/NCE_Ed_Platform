/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getNCEStudentProfile = /* GraphQL */ `query GetNCEStudentProfile($id: ID!) {
  getNCEStudentProfile(id: $id) {
    id
    name
    email
    birthdate
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetNCEStudentProfileQueryVariables,
  APITypes.GetNCEStudentProfileQuery
>;
export const listNCEStudentProfiles = /* GraphQL */ `query ListNCEStudentProfiles(
  $filter: ModelNCEStudentProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listNCEStudentProfiles(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      email
      birthdate
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListNCEStudentProfilesQueryVariables,
  APITypes.ListNCEStudentProfilesQuery
>;
export const getNCEUserSettings = /* GraphQL */ `query GetNCEUserSettings($id: ID!) {
  getNCEUserSettings(id: $id) {
    id
    notificationsEnabled
    darkModeEnabled
    language
    isAdmin
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetNCEUserSettingsQueryVariables,
  APITypes.GetNCEUserSettingsQuery
>;
export const listNCEUserSettings = /* GraphQL */ `query ListNCEUserSettings(
  $filter: ModelNCEUserSettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  listNCEUserSettings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      notificationsEnabled
      darkModeEnabled
      language
      isAdmin
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListNCEUserSettingsQueryVariables,
  APITypes.ListNCEUserSettingsQuery
>;
export const getBroadcastNotification = /* GraphQL */ `query GetBroadcastNotification($id: ID!) {
  getBroadcastNotification(id: $id) {
    id
    targetStudent
    title
    message
    createdAt
    type
    redirect
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBroadcastNotificationQueryVariables,
  APITypes.GetBroadcastNotificationQuery
>;
export const listBroadcastNotifications = /* GraphQL */ `query ListBroadcastNotifications(
  $filter: ModelBroadcastNotificationFilterInput
  $limit: Int
  $nextToken: String
) {
  listBroadcastNotifications(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      targetStudent
      title
      message
      createdAt
      type
      redirect
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBroadcastNotificationsQueryVariables,
  APITypes.ListBroadcastNotificationsQuery
>;
export const getUserNotificationRead = /* GraphQL */ `query GetUserNotificationRead($id: ID!) {
  getUserNotificationRead(id: $id) {
    id
    notificationID
    readAt
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserNotificationReadQueryVariables,
  APITypes.GetUserNotificationReadQuery
>;
export const listUserNotificationReads = /* GraphQL */ `query ListUserNotificationReads(
  $filter: ModelUserNotificationReadFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserNotificationReads(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      notificationID
      readAt
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserNotificationReadsQueryVariables,
  APITypes.ListUserNotificationReadsQuery
>;
export const getCourse = /* GraphQL */ `query GetCourse($id: ID!) {
  getCourse(id: $id) {
    id
    title
    description
    subject
    difficulty
    creator
    modules {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetCourseQueryVariables, APITypes.GetCourseQuery>;
export const listCourses = /* GraphQL */ `query ListCourses(
  $filter: ModelCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      subject
      difficulty
      creator
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCoursesQueryVariables,
  APITypes.ListCoursesQuery
>;
export const getModule = /* GraphQL */ `query GetModule($id: ID!) {
  getModule(id: $id) {
    id
    title
    description
    createdAt
    updatedAt
    courseModulesId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetModuleQueryVariables, APITypes.GetModuleQuery>;
export const listModules = /* GraphQL */ `query ListModules(
  $filter: ModelModuleFilterInput
  $limit: Int
  $nextToken: String
) {
  listModules(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      createdAt
      updatedAt
      courseModulesId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListModulesQueryVariables,
  APITypes.ListModulesQuery
>;
export const coursesByCreator = /* GraphQL */ `query CoursesByCreator(
  $creator: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  coursesByCreator(
    creator: $creator
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      description
      subject
      difficulty
      creator
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CoursesByCreatorQueryVariables,
  APITypes.CoursesByCreatorQuery
>;

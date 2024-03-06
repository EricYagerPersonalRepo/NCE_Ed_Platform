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
    title
    message
    createdAt
    type
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
      title
      message
      createdAt
      type
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

/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getTask = /* GraphQL */ `query GetTask($id: ID!) {
  getTask(id: $id) {
    id
    title
    description
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTaskQueryVariables, APITypes.GetTaskQuery>;
export const listTasks = /* GraphQL */ `query ListTasks(
  $filter: ModelTaskFilterInput
  $limit: Int
  $nextToken: String
) {
  listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTasksQueryVariables, APITypes.ListTasksQuery>;
export const getPrivateNote = /* GraphQL */ `query GetPrivateNote($id: ID!) {
  getPrivateNote(id: $id) {
    id
    content
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPrivateNoteQueryVariables,
  APITypes.GetPrivateNoteQuery
>;
export const listPrivateNotes = /* GraphQL */ `query ListPrivateNotes(
  $filter: ModelPrivateNoteFilterInput
  $limit: Int
  $nextToken: String
) {
  listPrivateNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
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
  APITypes.ListPrivateNotesQueryVariables,
  APITypes.ListPrivateNotesQuery
>;
export const getStudentProfile = /* GraphQL */ `query GetStudentProfile($id: ID!) {
  getStudentProfile(id: $id) {
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
  APITypes.ListStudentProfilesQueryVariables,
  APITypes.ListStudentProfilesQuery
>;
export const getUserSettings = /* GraphQL */ `query GetUserSettings($id: ID!) {
  getUserSettings(id: $id) {
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
  APITypes.ListUserSettingsQueryVariables,
  APITypes.ListUserSettingsQuery
>;

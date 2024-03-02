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

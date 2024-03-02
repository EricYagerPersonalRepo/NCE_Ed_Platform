/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTask = /* GraphQL */ `subscription OnCreateTask($filter: ModelSubscriptionTaskFilterInput) {
  onCreateTask(filter: $filter) {
    id
    title
    description
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTaskSubscriptionVariables,
  APITypes.OnCreateTaskSubscription
>;
export const onUpdateTask = /* GraphQL */ `subscription OnUpdateTask($filter: ModelSubscriptionTaskFilterInput) {
  onUpdateTask(filter: $filter) {
    id
    title
    description
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTaskSubscriptionVariables,
  APITypes.OnUpdateTaskSubscription
>;
export const onDeleteTask = /* GraphQL */ `subscription OnDeleteTask($filter: ModelSubscriptionTaskFilterInput) {
  onDeleteTask(filter: $filter) {
    id
    title
    description
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTaskSubscriptionVariables,
  APITypes.OnDeleteTaskSubscription
>;
export const onCreatePrivateNote = /* GraphQL */ `subscription OnCreatePrivateNote(
  $filter: ModelSubscriptionPrivateNoteFilterInput
  $owner: String
) {
  onCreatePrivateNote(filter: $filter, owner: $owner) {
    id
    content
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePrivateNoteSubscriptionVariables,
  APITypes.OnCreatePrivateNoteSubscription
>;
export const onUpdatePrivateNote = /* GraphQL */ `subscription OnUpdatePrivateNote(
  $filter: ModelSubscriptionPrivateNoteFilterInput
  $owner: String
) {
  onUpdatePrivateNote(filter: $filter, owner: $owner) {
    id
    content
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePrivateNoteSubscriptionVariables,
  APITypes.OnUpdatePrivateNoteSubscription
>;
export const onDeletePrivateNote = /* GraphQL */ `subscription OnDeletePrivateNote(
  $filter: ModelSubscriptionPrivateNoteFilterInput
  $owner: String
) {
  onDeletePrivateNote(filter: $filter, owner: $owner) {
    id
    content
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePrivateNoteSubscriptionVariables,
  APITypes.OnDeletePrivateNoteSubscription
>;
export const onCreateStudentProfile = /* GraphQL */ `subscription OnCreateStudentProfile(
  $filter: ModelSubscriptionStudentProfileFilterInput
  $owner: String
) {
  onCreateStudentProfile(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateStudentProfileSubscriptionVariables,
  APITypes.OnCreateStudentProfileSubscription
>;
export const onUpdateStudentProfile = /* GraphQL */ `subscription OnUpdateStudentProfile(
  $filter: ModelSubscriptionStudentProfileFilterInput
  $owner: String
) {
  onUpdateStudentProfile(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateStudentProfileSubscriptionVariables,
  APITypes.OnUpdateStudentProfileSubscription
>;
export const onDeleteStudentProfile = /* GraphQL */ `subscription OnDeleteStudentProfile(
  $filter: ModelSubscriptionStudentProfileFilterInput
  $owner: String
) {
  onDeleteStudentProfile(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteStudentProfileSubscriptionVariables,
  APITypes.OnDeleteStudentProfileSubscription
>;
export const onCreateUserSettings = /* GraphQL */ `subscription OnCreateUserSettings(
  $filter: ModelSubscriptionUserSettingsFilterInput
  $owner: String
) {
  onCreateUserSettings(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSettingsSubscriptionVariables,
  APITypes.OnCreateUserSettingsSubscription
>;
export const onUpdateUserSettings = /* GraphQL */ `subscription OnUpdateUserSettings(
  $filter: ModelSubscriptionUserSettingsFilterInput
  $owner: String
) {
  onUpdateUserSettings(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSettingsSubscriptionVariables,
  APITypes.OnUpdateUserSettingsSubscription
>;
export const onDeleteUserSettings = /* GraphQL */ `subscription OnDeleteUserSettings(
  $filter: ModelSubscriptionUserSettingsFilterInput
  $owner: String
) {
  onDeleteUserSettings(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSettingsSubscriptionVariables,
  APITypes.OnDeleteUserSettingsSubscription
>;

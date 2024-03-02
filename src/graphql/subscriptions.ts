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
export const onCreateNCEStudentProfile = /* GraphQL */ `subscription OnCreateNCEStudentProfile(
  $filter: ModelSubscriptionNCEStudentProfileFilterInput
  $owner: String
) {
  onCreateNCEStudentProfile(filter: $filter, owner: $owner) {
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
  APITypes.OnCreateNCEStudentProfileSubscriptionVariables,
  APITypes.OnCreateNCEStudentProfileSubscription
>;
export const onUpdateNCEStudentProfile = /* GraphQL */ `subscription OnUpdateNCEStudentProfile(
  $filter: ModelSubscriptionNCEStudentProfileFilterInput
  $owner: String
) {
  onUpdateNCEStudentProfile(filter: $filter, owner: $owner) {
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
  APITypes.OnUpdateNCEStudentProfileSubscriptionVariables,
  APITypes.OnUpdateNCEStudentProfileSubscription
>;
export const onDeleteNCEStudentProfile = /* GraphQL */ `subscription OnDeleteNCEStudentProfile(
  $filter: ModelSubscriptionNCEStudentProfileFilterInput
  $owner: String
) {
  onDeleteNCEStudentProfile(filter: $filter, owner: $owner) {
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
  APITypes.OnDeleteNCEStudentProfileSubscriptionVariables,
  APITypes.OnDeleteNCEStudentProfileSubscription
>;
export const onCreateNCEUserSettings = /* GraphQL */ `subscription OnCreateNCEUserSettings(
  $filter: ModelSubscriptionNCEUserSettingsFilterInput
  $owner: String
) {
  onCreateNCEUserSettings(filter: $filter, owner: $owner) {
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
  APITypes.OnCreateNCEUserSettingsSubscriptionVariables,
  APITypes.OnCreateNCEUserSettingsSubscription
>;
export const onUpdateNCEUserSettings = /* GraphQL */ `subscription OnUpdateNCEUserSettings(
  $filter: ModelSubscriptionNCEUserSettingsFilterInput
  $owner: String
) {
  onUpdateNCEUserSettings(filter: $filter, owner: $owner) {
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
  APITypes.OnUpdateNCEUserSettingsSubscriptionVariables,
  APITypes.OnUpdateNCEUserSettingsSubscription
>;
export const onDeleteNCEUserSettings = /* GraphQL */ `subscription OnDeleteNCEUserSettings(
  $filter: ModelSubscriptionNCEUserSettingsFilterInput
  $owner: String
) {
  onDeleteNCEUserSettings(filter: $filter, owner: $owner) {
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
  APITypes.OnDeleteNCEUserSettingsSubscriptionVariables,
  APITypes.OnDeleteNCEUserSettingsSubscription
>;

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask($filter: ModelSubscriptionTaskFilterInput) {
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
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask($filter: ModelSubscriptionTaskFilterInput) {
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
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask($filter: ModelSubscriptionTaskFilterInput) {
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
`;
export const onCreatePrivateNote = /* GraphQL */ `
  subscription OnCreatePrivateNote(
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
`;
export const onUpdatePrivateNote = /* GraphQL */ `
  subscription OnUpdatePrivateNote(
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
`;
export const onDeletePrivateNote = /* GraphQL */ `
  subscription OnDeletePrivateNote(
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
`;
export const onCreateStudentProfile = /* GraphQL */ `
  subscription OnCreateStudentProfile(
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
`;
export const onUpdateStudentProfile = /* GraphQL */ `
  subscription OnUpdateStudentProfile(
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
`;
export const onDeleteStudentProfile = /* GraphQL */ `
  subscription OnDeleteStudentProfile(
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
`;
export const onCreateUserSettings = /* GraphQL */ `
  subscription OnCreateUserSettings(
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
`;
export const onUpdateUserSettings = /* GraphQL */ `
  subscription OnUpdateUserSettings(
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
`;
export const onDeleteUserSettings = /* GraphQL */ `
  subscription OnDeleteUserSettings(
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
`;

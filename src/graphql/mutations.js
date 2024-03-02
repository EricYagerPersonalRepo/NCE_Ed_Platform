/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
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
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
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
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
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
export const createPrivateNote = /* GraphQL */ `
  mutation CreatePrivateNote(
    $input: CreatePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    createPrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updatePrivateNote = /* GraphQL */ `
  mutation UpdatePrivateNote(
    $input: UpdatePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    updatePrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deletePrivateNote = /* GraphQL */ `
  mutation DeletePrivateNote(
    $input: DeletePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    deletePrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createStudentProfile = /* GraphQL */ `
  mutation CreateStudentProfile(
    $input: CreateStudentProfileInput!
    $condition: ModelStudentProfileConditionInput
  ) {
    createStudentProfile(input: $input, condition: $condition) {
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
export const updateStudentProfile = /* GraphQL */ `
  mutation UpdateStudentProfile(
    $input: UpdateStudentProfileInput!
    $condition: ModelStudentProfileConditionInput
  ) {
    updateStudentProfile(input: $input, condition: $condition) {
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
export const deleteStudentProfile = /* GraphQL */ `
  mutation DeleteStudentProfile(
    $input: DeleteStudentProfileInput!
    $condition: ModelStudentProfileConditionInput
  ) {
    deleteStudentProfile(input: $input, condition: $condition) {
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
export const createUserSettings = /* GraphQL */ `
  mutation CreateUserSettings(
    $input: CreateUserSettingsInput!
    $condition: ModelUserSettingsConditionInput
  ) {
    createUserSettings(input: $input, condition: $condition) {
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
export const updateUserSettings = /* GraphQL */ `
  mutation UpdateUserSettings(
    $input: UpdateUserSettingsInput!
    $condition: ModelUserSettingsConditionInput
  ) {
    updateUserSettings(input: $input, condition: $condition) {
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
export const deleteUserSettings = /* GraphQL */ `
  mutation DeleteUserSettings(
    $input: DeleteUserSettingsInput!
    $condition: ModelUserSettingsConditionInput
  ) {
    deleteUserSettings(input: $input, condition: $condition) {
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

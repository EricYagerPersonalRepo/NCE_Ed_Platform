/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createNCEStudentProfile = /* GraphQL */ `mutation CreateNCEStudentProfile(
  $input: CreateNCEStudentProfileInput!
  $condition: ModelNCEStudentProfileConditionInput
) {
  createNCEStudentProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateNCEStudentProfileMutationVariables,
  APITypes.CreateNCEStudentProfileMutation
>;
export const updateNCEStudentProfile = /* GraphQL */ `mutation UpdateNCEStudentProfile(
  $input: UpdateNCEStudentProfileInput!
  $condition: ModelNCEStudentProfileConditionInput
) {
  updateNCEStudentProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateNCEStudentProfileMutationVariables,
  APITypes.UpdateNCEStudentProfileMutation
>;
export const deleteNCEStudentProfile = /* GraphQL */ `mutation DeleteNCEStudentProfile(
  $input: DeleteNCEStudentProfileInput!
  $condition: ModelNCEStudentProfileConditionInput
) {
  deleteNCEStudentProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteNCEStudentProfileMutationVariables,
  APITypes.DeleteNCEStudentProfileMutation
>;
export const createNCEUserSettings = /* GraphQL */ `mutation CreateNCEUserSettings(
  $input: CreateNCEUserSettingsInput!
  $condition: ModelNCEUserSettingsConditionInput
) {
  createNCEUserSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateNCEUserSettingsMutationVariables,
  APITypes.CreateNCEUserSettingsMutation
>;
export const updateNCEUserSettings = /* GraphQL */ `mutation UpdateNCEUserSettings(
  $input: UpdateNCEUserSettingsInput!
  $condition: ModelNCEUserSettingsConditionInput
) {
  updateNCEUserSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateNCEUserSettingsMutationVariables,
  APITypes.UpdateNCEUserSettingsMutation
>;
export const deleteNCEUserSettings = /* GraphQL */ `mutation DeleteNCEUserSettings(
  $input: DeleteNCEUserSettingsInput!
  $condition: ModelNCEUserSettingsConditionInput
) {
  deleteNCEUserSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteNCEUserSettingsMutationVariables,
  APITypes.DeleteNCEUserSettingsMutation
>;
export const createBroadcastNotification = /* GraphQL */ `mutation CreateBroadcastNotification(
  $input: CreateBroadcastNotificationInput!
  $condition: ModelBroadcastNotificationConditionInput
) {
  createBroadcastNotification(input: $input, condition: $condition) {
    id
    title
    message
    createdAt
    type
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBroadcastNotificationMutationVariables,
  APITypes.CreateBroadcastNotificationMutation
>;
export const updateBroadcastNotification = /* GraphQL */ `mutation UpdateBroadcastNotification(
  $input: UpdateBroadcastNotificationInput!
  $condition: ModelBroadcastNotificationConditionInput
) {
  updateBroadcastNotification(input: $input, condition: $condition) {
    id
    title
    message
    createdAt
    type
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBroadcastNotificationMutationVariables,
  APITypes.UpdateBroadcastNotificationMutation
>;
export const deleteBroadcastNotification = /* GraphQL */ `mutation DeleteBroadcastNotification(
  $input: DeleteBroadcastNotificationInput!
  $condition: ModelBroadcastNotificationConditionInput
) {
  deleteBroadcastNotification(input: $input, condition: $condition) {
    id
    title
    message
    createdAt
    type
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBroadcastNotificationMutationVariables,
  APITypes.DeleteBroadcastNotificationMutation
>;
export const createUserNotificationRead = /* GraphQL */ `mutation CreateUserNotificationRead(
  $input: CreateUserNotificationReadInput!
  $condition: ModelUserNotificationReadConditionInput
) {
  createUserNotificationRead(input: $input, condition: $condition) {
    id
    notificationID
    readAt
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserNotificationReadMutationVariables,
  APITypes.CreateUserNotificationReadMutation
>;
export const updateUserNotificationRead = /* GraphQL */ `mutation UpdateUserNotificationRead(
  $input: UpdateUserNotificationReadInput!
  $condition: ModelUserNotificationReadConditionInput
) {
  updateUserNotificationRead(input: $input, condition: $condition) {
    id
    notificationID
    readAt
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserNotificationReadMutationVariables,
  APITypes.UpdateUserNotificationReadMutation
>;
export const deleteUserNotificationRead = /* GraphQL */ `mutation DeleteUserNotificationRead(
  $input: DeleteUserNotificationReadInput!
  $condition: ModelUserNotificationReadConditionInput
) {
  deleteUserNotificationRead(input: $input, condition: $condition) {
    id
    notificationID
    readAt
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserNotificationReadMutationVariables,
  APITypes.DeleteUserNotificationReadMutation
>;

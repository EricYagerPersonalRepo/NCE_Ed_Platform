/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

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
export const onCreateBroadcastNotification = /* GraphQL */ `subscription OnCreateBroadcastNotification(
  $filter: ModelSubscriptionBroadcastNotificationFilterInput
) {
  onCreateBroadcastNotification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBroadcastNotificationSubscriptionVariables,
  APITypes.OnCreateBroadcastNotificationSubscription
>;
export const onUpdateBroadcastNotification = /* GraphQL */ `subscription OnUpdateBroadcastNotification(
  $filter: ModelSubscriptionBroadcastNotificationFilterInput
) {
  onUpdateBroadcastNotification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBroadcastNotificationSubscriptionVariables,
  APITypes.OnUpdateBroadcastNotificationSubscription
>;
export const onDeleteBroadcastNotification = /* GraphQL */ `subscription OnDeleteBroadcastNotification(
  $filter: ModelSubscriptionBroadcastNotificationFilterInput
) {
  onDeleteBroadcastNotification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBroadcastNotificationSubscriptionVariables,
  APITypes.OnDeleteBroadcastNotificationSubscription
>;
export const onCreateUserNotificationRead = /* GraphQL */ `subscription OnCreateUserNotificationRead(
  $filter: ModelSubscriptionUserNotificationReadFilterInput
  $owner: String
) {
  onCreateUserNotificationRead(filter: $filter, owner: $owner) {
    id
    notificationID
    readAt
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserNotificationReadSubscriptionVariables,
  APITypes.OnCreateUserNotificationReadSubscription
>;
export const onUpdateUserNotificationRead = /* GraphQL */ `subscription OnUpdateUserNotificationRead(
  $filter: ModelSubscriptionUserNotificationReadFilterInput
  $owner: String
) {
  onUpdateUserNotificationRead(filter: $filter, owner: $owner) {
    id
    notificationID
    readAt
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserNotificationReadSubscriptionVariables,
  APITypes.OnUpdateUserNotificationReadSubscription
>;
export const onDeleteUserNotificationRead = /* GraphQL */ `subscription OnDeleteUserNotificationRead(
  $filter: ModelSubscriptionUserNotificationReadFilterInput
  $owner: String
) {
  onDeleteUserNotificationRead(filter: $filter, owner: $owner) {
    id
    notificationID
    readAt
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserNotificationReadSubscriptionVariables,
  APITypes.OnDeleteUserNotificationReadSubscription
>;
export const onCreateCourse = /* GraphQL */ `subscription OnCreateCourse($filter: ModelSubscriptionCourseFilterInput) {
  onCreateCourse(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCourseSubscriptionVariables,
  APITypes.OnCreateCourseSubscription
>;
export const onUpdateCourse = /* GraphQL */ `subscription OnUpdateCourse($filter: ModelSubscriptionCourseFilterInput) {
  onUpdateCourse(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCourseSubscriptionVariables,
  APITypes.OnUpdateCourseSubscription
>;
export const onDeleteCourse = /* GraphQL */ `subscription OnDeleteCourse($filter: ModelSubscriptionCourseFilterInput) {
  onDeleteCourse(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCourseSubscriptionVariables,
  APITypes.OnDeleteCourseSubscription
>;
export const onCreateModule = /* GraphQL */ `subscription OnCreateModule($filter: ModelSubscriptionModuleFilterInput) {
  onCreateModule(filter: $filter) {
    id
    title
    description
    createdAt
    updatedAt
    courseModulesId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateModuleSubscriptionVariables,
  APITypes.OnCreateModuleSubscription
>;
export const onUpdateModule = /* GraphQL */ `subscription OnUpdateModule($filter: ModelSubscriptionModuleFilterInput) {
  onUpdateModule(filter: $filter) {
    id
    title
    description
    createdAt
    updatedAt
    courseModulesId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateModuleSubscriptionVariables,
  APITypes.OnUpdateModuleSubscription
>;
export const onDeleteModule = /* GraphQL */ `subscription OnDeleteModule($filter: ModelSubscriptionModuleFilterInput) {
  onDeleteModule(filter: $filter) {
    id
    title
    description
    createdAt
    updatedAt
    courseModulesId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteModuleSubscriptionVariables,
  APITypes.OnDeleteModuleSubscription
>;

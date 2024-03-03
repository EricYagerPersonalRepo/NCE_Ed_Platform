/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateNCEStudentProfileInput = {
  id?: string | null,
  name: string,
  email: string,
  birthdate: string,
};

export type ModelNCEStudentProfileConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  birthdate?: ModelStringInput | null,
  and?: Array< ModelNCEStudentProfileConditionInput | null > | null,
  or?: Array< ModelNCEStudentProfileConditionInput | null > | null,
  not?: ModelNCEStudentProfileConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type NCEStudentProfile = {
  __typename: "NCEStudentProfile",
  id: string,
  name: string,
  email: string,
  birthdate: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateNCEStudentProfileInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  birthdate?: string | null,
};

export type DeleteNCEStudentProfileInput = {
  id: string,
};

export type CreateNCEUserSettingsInput = {
  id?: string | null,
  notificationsEnabled: boolean,
  darkModeEnabled: boolean,
  language: string,
  isAdmin: boolean,
};

export type ModelNCEUserSettingsConditionInput = {
  notificationsEnabled?: ModelBooleanInput | null,
  darkModeEnabled?: ModelBooleanInput | null,
  language?: ModelStringInput | null,
  isAdmin?: ModelBooleanInput | null,
  and?: Array< ModelNCEUserSettingsConditionInput | null > | null,
  or?: Array< ModelNCEUserSettingsConditionInput | null > | null,
  not?: ModelNCEUserSettingsConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type NCEUserSettings = {
  __typename: "NCEUserSettings",
  id: string,
  notificationsEnabled: boolean,
  darkModeEnabled: boolean,
  language: string,
  isAdmin: boolean,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateNCEUserSettingsInput = {
  id: string,
  notificationsEnabled?: boolean | null,
  darkModeEnabled?: boolean | null,
  language?: string | null,
  isAdmin?: boolean | null,
};

export type DeleteNCEUserSettingsInput = {
  id: string,
};

export type CreateBroadcastNotificationInput = {
  id?: string | null,
  message: string,
  createdAt?: string | null,
  type: NotificationType,
};

export enum NotificationType {
  MESSAGE = "MESSAGE",
  ALERT = "ALERT",
  REMINDER = "REMINDER",
}


export type ModelBroadcastNotificationConditionInput = {
  message?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  type?: ModelNotificationTypeInput | null,
  and?: Array< ModelBroadcastNotificationConditionInput | null > | null,
  or?: Array< ModelBroadcastNotificationConditionInput | null > | null,
  not?: ModelBroadcastNotificationConditionInput | null,
};

export type ModelNotificationTypeInput = {
  eq?: NotificationType | null,
  ne?: NotificationType | null,
};

export type BroadcastNotification = {
  __typename: "BroadcastNotification",
  id: string,
  message: string,
  createdAt: string,
  type: NotificationType,
  updatedAt: string,
};

export type UpdateBroadcastNotificationInput = {
  id: string,
  message?: string | null,
  createdAt?: string | null,
  type?: NotificationType | null,
};

export type DeleteBroadcastNotificationInput = {
  id: string,
};

export type CreateUserNotificationReadInput = {
  id?: string | null,
  notificationID: string,
  readAt?: string | null,
};

export type ModelUserNotificationReadConditionInput = {
  notificationID?: ModelIDInput | null,
  readAt?: ModelStringInput | null,
  and?: Array< ModelUserNotificationReadConditionInput | null > | null,
  or?: Array< ModelUserNotificationReadConditionInput | null > | null,
  not?: ModelUserNotificationReadConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UserNotificationRead = {
  __typename: "UserNotificationRead",
  id: string,
  notificationID: string,
  readAt?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserNotificationReadInput = {
  id: string,
  notificationID?: string | null,
  readAt?: string | null,
};

export type DeleteUserNotificationReadInput = {
  id: string,
};

export type ModelNCEStudentProfileFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  birthdate?: ModelStringInput | null,
  and?: Array< ModelNCEStudentProfileFilterInput | null > | null,
  or?: Array< ModelNCEStudentProfileFilterInput | null > | null,
  not?: ModelNCEStudentProfileFilterInput | null,
};

export type ModelNCEStudentProfileConnection = {
  __typename: "ModelNCEStudentProfileConnection",
  items:  Array<NCEStudentProfile | null >,
  nextToken?: string | null,
};

export type ModelNCEUserSettingsFilterInput = {
  id?: ModelIDInput | null,
  notificationsEnabled?: ModelBooleanInput | null,
  darkModeEnabled?: ModelBooleanInput | null,
  language?: ModelStringInput | null,
  isAdmin?: ModelBooleanInput | null,
  and?: Array< ModelNCEUserSettingsFilterInput | null > | null,
  or?: Array< ModelNCEUserSettingsFilterInput | null > | null,
  not?: ModelNCEUserSettingsFilterInput | null,
};

export type ModelNCEUserSettingsConnection = {
  __typename: "ModelNCEUserSettingsConnection",
  items:  Array<NCEUserSettings | null >,
  nextToken?: string | null,
};

export type ModelBroadcastNotificationFilterInput = {
  id?: ModelIDInput | null,
  message?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  type?: ModelNotificationTypeInput | null,
  and?: Array< ModelBroadcastNotificationFilterInput | null > | null,
  or?: Array< ModelBroadcastNotificationFilterInput | null > | null,
  not?: ModelBroadcastNotificationFilterInput | null,
};

export type ModelBroadcastNotificationConnection = {
  __typename: "ModelBroadcastNotificationConnection",
  items:  Array<BroadcastNotification | null >,
  nextToken?: string | null,
};

export type ModelUserNotificationReadFilterInput = {
  id?: ModelIDInput | null,
  notificationID?: ModelIDInput | null,
  readAt?: ModelStringInput | null,
  and?: Array< ModelUserNotificationReadFilterInput | null > | null,
  or?: Array< ModelUserNotificationReadFilterInput | null > | null,
  not?: ModelUserNotificationReadFilterInput | null,
};

export type ModelUserNotificationReadConnection = {
  __typename: "ModelUserNotificationReadConnection",
  items:  Array<UserNotificationRead | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionNCEStudentProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  birthdate?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionNCEStudentProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionNCEStudentProfileFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionNCEUserSettingsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  notificationsEnabled?: ModelSubscriptionBooleanInput | null,
  darkModeEnabled?: ModelSubscriptionBooleanInput | null,
  language?: ModelSubscriptionStringInput | null,
  isAdmin?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionNCEUserSettingsFilterInput | null > | null,
  or?: Array< ModelSubscriptionNCEUserSettingsFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionBroadcastNotificationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  message?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBroadcastNotificationFilterInput | null > | null,
  or?: Array< ModelSubscriptionBroadcastNotificationFilterInput | null > | null,
};

export type ModelSubscriptionUserNotificationReadFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  notificationID?: ModelSubscriptionIDInput | null,
  readAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserNotificationReadFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserNotificationReadFilterInput | null > | null,
};

export type CreateNCEStudentProfileMutationVariables = {
  input: CreateNCEStudentProfileInput,
  condition?: ModelNCEStudentProfileConditionInput | null,
};

export type CreateNCEStudentProfileMutation = {
  createNCEStudentProfile?:  {
    __typename: "NCEStudentProfile",
    id: string,
    name: string,
    email: string,
    birthdate: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateNCEStudentProfileMutationVariables = {
  input: UpdateNCEStudentProfileInput,
  condition?: ModelNCEStudentProfileConditionInput | null,
};

export type UpdateNCEStudentProfileMutation = {
  updateNCEStudentProfile?:  {
    __typename: "NCEStudentProfile",
    id: string,
    name: string,
    email: string,
    birthdate: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteNCEStudentProfileMutationVariables = {
  input: DeleteNCEStudentProfileInput,
  condition?: ModelNCEStudentProfileConditionInput | null,
};

export type DeleteNCEStudentProfileMutation = {
  deleteNCEStudentProfile?:  {
    __typename: "NCEStudentProfile",
    id: string,
    name: string,
    email: string,
    birthdate: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateNCEUserSettingsMutationVariables = {
  input: CreateNCEUserSettingsInput,
  condition?: ModelNCEUserSettingsConditionInput | null,
};

export type CreateNCEUserSettingsMutation = {
  createNCEUserSettings?:  {
    __typename: "NCEUserSettings",
    id: string,
    notificationsEnabled: boolean,
    darkModeEnabled: boolean,
    language: string,
    isAdmin: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateNCEUserSettingsMutationVariables = {
  input: UpdateNCEUserSettingsInput,
  condition?: ModelNCEUserSettingsConditionInput | null,
};

export type UpdateNCEUserSettingsMutation = {
  updateNCEUserSettings?:  {
    __typename: "NCEUserSettings",
    id: string,
    notificationsEnabled: boolean,
    darkModeEnabled: boolean,
    language: string,
    isAdmin: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteNCEUserSettingsMutationVariables = {
  input: DeleteNCEUserSettingsInput,
  condition?: ModelNCEUserSettingsConditionInput | null,
};

export type DeleteNCEUserSettingsMutation = {
  deleteNCEUserSettings?:  {
    __typename: "NCEUserSettings",
    id: string,
    notificationsEnabled: boolean,
    darkModeEnabled: boolean,
    language: string,
    isAdmin: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateBroadcastNotificationMutationVariables = {
  input: CreateBroadcastNotificationInput,
  condition?: ModelBroadcastNotificationConditionInput | null,
};

export type CreateBroadcastNotificationMutation = {
  createBroadcastNotification?:  {
    __typename: "BroadcastNotification",
    id: string,
    message: string,
    createdAt: string,
    type: NotificationType,
    updatedAt: string,
  } | null,
};

export type UpdateBroadcastNotificationMutationVariables = {
  input: UpdateBroadcastNotificationInput,
  condition?: ModelBroadcastNotificationConditionInput | null,
};

export type UpdateBroadcastNotificationMutation = {
  updateBroadcastNotification?:  {
    __typename: "BroadcastNotification",
    id: string,
    message: string,
    createdAt: string,
    type: NotificationType,
    updatedAt: string,
  } | null,
};

export type DeleteBroadcastNotificationMutationVariables = {
  input: DeleteBroadcastNotificationInput,
  condition?: ModelBroadcastNotificationConditionInput | null,
};

export type DeleteBroadcastNotificationMutation = {
  deleteBroadcastNotification?:  {
    __typename: "BroadcastNotification",
    id: string,
    message: string,
    createdAt: string,
    type: NotificationType,
    updatedAt: string,
  } | null,
};

export type CreateUserNotificationReadMutationVariables = {
  input: CreateUserNotificationReadInput,
  condition?: ModelUserNotificationReadConditionInput | null,
};

export type CreateUserNotificationReadMutation = {
  createUserNotificationRead?:  {
    __typename: "UserNotificationRead",
    id: string,
    notificationID: string,
    readAt?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserNotificationReadMutationVariables = {
  input: UpdateUserNotificationReadInput,
  condition?: ModelUserNotificationReadConditionInput | null,
};

export type UpdateUserNotificationReadMutation = {
  updateUserNotificationRead?:  {
    __typename: "UserNotificationRead",
    id: string,
    notificationID: string,
    readAt?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserNotificationReadMutationVariables = {
  input: DeleteUserNotificationReadInput,
  condition?: ModelUserNotificationReadConditionInput | null,
};

export type DeleteUserNotificationReadMutation = {
  deleteUserNotificationRead?:  {
    __typename: "UserNotificationRead",
    id: string,
    notificationID: string,
    readAt?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetNCEStudentProfileQueryVariables = {
  id: string,
};

export type GetNCEStudentProfileQuery = {
  getNCEStudentProfile?:  {
    __typename: "NCEStudentProfile",
    id: string,
    name: string,
    email: string,
    birthdate: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListNCEStudentProfilesQueryVariables = {
  filter?: ModelNCEStudentProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNCEStudentProfilesQuery = {
  listNCEStudentProfiles?:  {
    __typename: "ModelNCEStudentProfileConnection",
    items:  Array< {
      __typename: "NCEStudentProfile",
      id: string,
      name: string,
      email: string,
      birthdate: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetNCEUserSettingsQueryVariables = {
  id: string,
};

export type GetNCEUserSettingsQuery = {
  getNCEUserSettings?:  {
    __typename: "NCEUserSettings",
    id: string,
    notificationsEnabled: boolean,
    darkModeEnabled: boolean,
    language: string,
    isAdmin: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListNCEUserSettingsQueryVariables = {
  filter?: ModelNCEUserSettingsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNCEUserSettingsQuery = {
  listNCEUserSettings?:  {
    __typename: "ModelNCEUserSettingsConnection",
    items:  Array< {
      __typename: "NCEUserSettings",
      id: string,
      notificationsEnabled: boolean,
      darkModeEnabled: boolean,
      language: string,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBroadcastNotificationQueryVariables = {
  id: string,
};

export type GetBroadcastNotificationQuery = {
  getBroadcastNotification?:  {
    __typename: "BroadcastNotification",
    id: string,
    message: string,
    createdAt: string,
    type: NotificationType,
    updatedAt: string,
  } | null,
};

export type ListBroadcastNotificationsQueryVariables = {
  filter?: ModelBroadcastNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBroadcastNotificationsQuery = {
  listBroadcastNotifications?:  {
    __typename: "ModelBroadcastNotificationConnection",
    items:  Array< {
      __typename: "BroadcastNotification",
      id: string,
      message: string,
      createdAt: string,
      type: NotificationType,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserNotificationReadQueryVariables = {
  id: string,
};

export type GetUserNotificationReadQuery = {
  getUserNotificationRead?:  {
    __typename: "UserNotificationRead",
    id: string,
    notificationID: string,
    readAt?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserNotificationReadsQueryVariables = {
  filter?: ModelUserNotificationReadFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserNotificationReadsQuery = {
  listUserNotificationReads?:  {
    __typename: "ModelUserNotificationReadConnection",
    items:  Array< {
      __typename: "UserNotificationRead",
      id: string,
      notificationID: string,
      readAt?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateNCEStudentProfileSubscriptionVariables = {
  filter?: ModelSubscriptionNCEStudentProfileFilterInput | null,
  owner?: string | null,
};

export type OnCreateNCEStudentProfileSubscription = {
  onCreateNCEStudentProfile?:  {
    __typename: "NCEStudentProfile",
    id: string,
    name: string,
    email: string,
    birthdate: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateNCEStudentProfileSubscriptionVariables = {
  filter?: ModelSubscriptionNCEStudentProfileFilterInput | null,
  owner?: string | null,
};

export type OnUpdateNCEStudentProfileSubscription = {
  onUpdateNCEStudentProfile?:  {
    __typename: "NCEStudentProfile",
    id: string,
    name: string,
    email: string,
    birthdate: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteNCEStudentProfileSubscriptionVariables = {
  filter?: ModelSubscriptionNCEStudentProfileFilterInput | null,
  owner?: string | null,
};

export type OnDeleteNCEStudentProfileSubscription = {
  onDeleteNCEStudentProfile?:  {
    __typename: "NCEStudentProfile",
    id: string,
    name: string,
    email: string,
    birthdate: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateNCEUserSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionNCEUserSettingsFilterInput | null,
  owner?: string | null,
};

export type OnCreateNCEUserSettingsSubscription = {
  onCreateNCEUserSettings?:  {
    __typename: "NCEUserSettings",
    id: string,
    notificationsEnabled: boolean,
    darkModeEnabled: boolean,
    language: string,
    isAdmin: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateNCEUserSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionNCEUserSettingsFilterInput | null,
  owner?: string | null,
};

export type OnUpdateNCEUserSettingsSubscription = {
  onUpdateNCEUserSettings?:  {
    __typename: "NCEUserSettings",
    id: string,
    notificationsEnabled: boolean,
    darkModeEnabled: boolean,
    language: string,
    isAdmin: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteNCEUserSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionNCEUserSettingsFilterInput | null,
  owner?: string | null,
};

export type OnDeleteNCEUserSettingsSubscription = {
  onDeleteNCEUserSettings?:  {
    __typename: "NCEUserSettings",
    id: string,
    notificationsEnabled: boolean,
    darkModeEnabled: boolean,
    language: string,
    isAdmin: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateBroadcastNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionBroadcastNotificationFilterInput | null,
};

export type OnCreateBroadcastNotificationSubscription = {
  onCreateBroadcastNotification?:  {
    __typename: "BroadcastNotification",
    id: string,
    message: string,
    createdAt: string,
    type: NotificationType,
    updatedAt: string,
  } | null,
};

export type OnUpdateBroadcastNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionBroadcastNotificationFilterInput | null,
};

export type OnUpdateBroadcastNotificationSubscription = {
  onUpdateBroadcastNotification?:  {
    __typename: "BroadcastNotification",
    id: string,
    message: string,
    createdAt: string,
    type: NotificationType,
    updatedAt: string,
  } | null,
};

export type OnDeleteBroadcastNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionBroadcastNotificationFilterInput | null,
};

export type OnDeleteBroadcastNotificationSubscription = {
  onDeleteBroadcastNotification?:  {
    __typename: "BroadcastNotification",
    id: string,
    message: string,
    createdAt: string,
    type: NotificationType,
    updatedAt: string,
  } | null,
};

export type OnCreateUserNotificationReadSubscriptionVariables = {
  filter?: ModelSubscriptionUserNotificationReadFilterInput | null,
};

export type OnCreateUserNotificationReadSubscription = {
  onCreateUserNotificationRead?:  {
    __typename: "UserNotificationRead",
    id: string,
    notificationID: string,
    readAt?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserNotificationReadSubscriptionVariables = {
  filter?: ModelSubscriptionUserNotificationReadFilterInput | null,
};

export type OnUpdateUserNotificationReadSubscription = {
  onUpdateUserNotificationRead?:  {
    __typename: "UserNotificationRead",
    id: string,
    notificationID: string,
    readAt?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserNotificationReadSubscriptionVariables = {
  filter?: ModelSubscriptionUserNotificationReadFilterInput | null,
};

export type OnDeleteUserNotificationReadSubscription = {
  onDeleteUserNotificationRead?:  {
    __typename: "UserNotificationRead",
    id: string,
    notificationID: string,
    readAt?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

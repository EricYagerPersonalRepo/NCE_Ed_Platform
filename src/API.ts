/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTaskInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  status?: string | null,
};

export type ModelTaskConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelTaskConditionInput | null > | null,
  or?: Array< ModelTaskConditionInput | null > | null,
  not?: ModelTaskConditionInput | null,
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

export type Task = {
  __typename: "Task",
  id: string,
  title: string,
  description?: string | null,
  status?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTaskInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  status?: string | null,
};

export type DeleteTaskInput = {
  id: string,
};

export type CreatePrivateNoteInput = {
  id?: string | null,
  content: string,
};

export type ModelPrivateNoteConditionInput = {
  content?: ModelStringInput | null,
  and?: Array< ModelPrivateNoteConditionInput | null > | null,
  or?: Array< ModelPrivateNoteConditionInput | null > | null,
  not?: ModelPrivateNoteConditionInput | null,
};

export type PrivateNote = {
  __typename: "PrivateNote",
  id: string,
  content: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdatePrivateNoteInput = {
  id: string,
  content?: string | null,
};

export type DeletePrivateNoteInput = {
  id: string,
};

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

export type ModelTaskFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelTaskFilterInput | null > | null,
  or?: Array< ModelTaskFilterInput | null > | null,
  not?: ModelTaskFilterInput | null,
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

export type ModelTaskConnection = {
  __typename: "ModelTaskConnection",
  items:  Array<Task | null >,
  nextToken?: string | null,
};

export type ModelPrivateNoteFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelPrivateNoteFilterInput | null > | null,
  or?: Array< ModelPrivateNoteFilterInput | null > | null,
  not?: ModelPrivateNoteFilterInput | null,
};

export type ModelPrivateNoteConnection = {
  __typename: "ModelPrivateNoteConnection",
  items:  Array<PrivateNote | null >,
  nextToken?: string | null,
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

export type ModelSubscriptionTaskFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTaskFilterInput | null > | null,
  or?: Array< ModelSubscriptionTaskFilterInput | null > | null,
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

export type ModelSubscriptionPrivateNoteFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPrivateNoteFilterInput | null > | null,
  or?: Array< ModelSubscriptionPrivateNoteFilterInput | null > | null,
};

export type ModelSubscriptionNCEStudentProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  birthdate?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionNCEStudentProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionNCEStudentProfileFilterInput | null > | null,
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

export type CreateTaskMutationVariables = {
  input: CreateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type CreateTaskMutation = {
  createTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTaskMutationVariables = {
  input: UpdateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type UpdateTaskMutation = {
  updateTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTaskMutationVariables = {
  input: DeleteTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type DeleteTaskMutation = {
  deleteTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePrivateNoteMutationVariables = {
  input: CreatePrivateNoteInput,
  condition?: ModelPrivateNoteConditionInput | null,
};

export type CreatePrivateNoteMutation = {
  createPrivateNote?:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdatePrivateNoteMutationVariables = {
  input: UpdatePrivateNoteInput,
  condition?: ModelPrivateNoteConditionInput | null,
};

export type UpdatePrivateNoteMutation = {
  updatePrivateNote?:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeletePrivateNoteMutationVariables = {
  input: DeletePrivateNoteInput,
  condition?: ModelPrivateNoteConditionInput | null,
};

export type DeletePrivateNoteMutation = {
  deletePrivateNote?:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
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

export type GetTaskQueryVariables = {
  id: string,
};

export type GetTaskQuery = {
  getTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTasksQueryVariables = {
  filter?: ModelTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTasksQuery = {
  listTasks?:  {
    __typename: "ModelTaskConnection",
    items:  Array< {
      __typename: "Task",
      id: string,
      title: string,
      description?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPrivateNoteQueryVariables = {
  id: string,
};

export type GetPrivateNoteQuery = {
  getPrivateNote?:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListPrivateNotesQueryVariables = {
  filter?: ModelPrivateNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPrivateNotesQuery = {
  listPrivateNotes?:  {
    __typename: "ModelPrivateNoteConnection",
    items:  Array< {
      __typename: "PrivateNote",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
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

export type OnCreateTaskSubscriptionVariables = {
  filter?: ModelSubscriptionTaskFilterInput | null,
};

export type OnCreateTaskSubscription = {
  onCreateTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTaskSubscriptionVariables = {
  filter?: ModelSubscriptionTaskFilterInput | null,
};

export type OnUpdateTaskSubscription = {
  onUpdateTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTaskSubscriptionVariables = {
  filter?: ModelSubscriptionTaskFilterInput | null,
};

export type OnDeleteTaskSubscription = {
  onDeleteTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePrivateNoteSubscriptionVariables = {
  filter?: ModelSubscriptionPrivateNoteFilterInput | null,
  owner?: string | null,
};

export type OnCreatePrivateNoteSubscription = {
  onCreatePrivateNote?:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdatePrivateNoteSubscriptionVariables = {
  filter?: ModelSubscriptionPrivateNoteFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePrivateNoteSubscription = {
  onUpdatePrivateNote?:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeletePrivateNoteSubscriptionVariables = {
  filter?: ModelSubscriptionPrivateNoteFilterInput | null,
  owner?: string | null,
};

export type OnDeletePrivateNoteSubscription = {
  onDeletePrivateNote?:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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

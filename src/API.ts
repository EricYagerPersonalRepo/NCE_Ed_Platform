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

export type CreateStudentProfileInput = {
  id?: string | null,
  name: string,
  email: string,
  birthdate: string,
};

export type ModelStudentProfileConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  birthdate?: ModelStringInput | null,
  and?: Array< ModelStudentProfileConditionInput | null > | null,
  or?: Array< ModelStudentProfileConditionInput | null > | null,
  not?: ModelStudentProfileConditionInput | null,
};

export type StudentProfile = {
  __typename: "StudentProfile",
  id: string,
  name: string,
  email: string,
  birthdate: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStudentProfileInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  birthdate?: string | null,
};

export type DeleteStudentProfileInput = {
  id: string,
};

export type CreateUserSettingsInput = {
  id?: string | null,
  notificationsEnabled: boolean,
  darkModeEnabled: boolean,
  language: string,
  isAdmin: boolean,
};

export type ModelUserSettingsConditionInput = {
  notificationsEnabled?: ModelBooleanInput | null,
  darkModeEnabled?: ModelBooleanInput | null,
  language?: ModelStringInput | null,
  isAdmin?: ModelBooleanInput | null,
  and?: Array< ModelUserSettingsConditionInput | null > | null,
  or?: Array< ModelUserSettingsConditionInput | null > | null,
  not?: ModelUserSettingsConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UserSettings = {
  __typename: "UserSettings",
  id: string,
  notificationsEnabled: boolean,
  darkModeEnabled: boolean,
  language: string,
  isAdmin: boolean,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateUserSettingsInput = {
  id: string,
  notificationsEnabled?: boolean | null,
  darkModeEnabled?: boolean | null,
  language?: string | null,
  isAdmin?: boolean | null,
};

export type DeleteUserSettingsInput = {
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

export type ModelStudentProfileFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  birthdate?: ModelStringInput | null,
  and?: Array< ModelStudentProfileFilterInput | null > | null,
  or?: Array< ModelStudentProfileFilterInput | null > | null,
  not?: ModelStudentProfileFilterInput | null,
};

export type ModelStudentProfileConnection = {
  __typename: "ModelStudentProfileConnection",
  items:  Array<StudentProfile | null >,
  nextToken?: string | null,
};

export type ModelUserSettingsFilterInput = {
  id?: ModelIDInput | null,
  notificationsEnabled?: ModelBooleanInput | null,
  darkModeEnabled?: ModelBooleanInput | null,
  language?: ModelStringInput | null,
  isAdmin?: ModelBooleanInput | null,
  and?: Array< ModelUserSettingsFilterInput | null > | null,
  or?: Array< ModelUserSettingsFilterInput | null > | null,
  not?: ModelUserSettingsFilterInput | null,
};

export type ModelUserSettingsConnection = {
  __typename: "ModelUserSettingsConnection",
  items:  Array<UserSettings | null >,
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

export type ModelSubscriptionStudentProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  birthdate?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStudentProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionStudentProfileFilterInput | null > | null,
};

export type ModelSubscriptionUserSettingsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  notificationsEnabled?: ModelSubscriptionBooleanInput | null,
  darkModeEnabled?: ModelSubscriptionBooleanInput | null,
  language?: ModelSubscriptionStringInput | null,
  isAdmin?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionUserSettingsFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserSettingsFilterInput | null > | null,
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

export type CreateStudentProfileMutationVariables = {
  input: CreateStudentProfileInput,
  condition?: ModelStudentProfileConditionInput | null,
};

export type CreateStudentProfileMutation = {
  createStudentProfile?:  {
    __typename: "StudentProfile",
    id: string,
    name: string,
    email: string,
    birthdate: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStudentProfileMutationVariables = {
  input: UpdateStudentProfileInput,
  condition?: ModelStudentProfileConditionInput | null,
};

export type UpdateStudentProfileMutation = {
  updateStudentProfile?:  {
    __typename: "StudentProfile",
    id: string,
    name: string,
    email: string,
    birthdate: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStudentProfileMutationVariables = {
  input: DeleteStudentProfileInput,
  condition?: ModelStudentProfileConditionInput | null,
};

export type DeleteStudentProfileMutation = {
  deleteStudentProfile?:  {
    __typename: "StudentProfile",
    id: string,
    name: string,
    email: string,
    birthdate: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateUserSettingsMutationVariables = {
  input: CreateUserSettingsInput,
  condition?: ModelUserSettingsConditionInput | null,
};

export type CreateUserSettingsMutation = {
  createUserSettings?:  {
    __typename: "UserSettings",
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

export type UpdateUserSettingsMutationVariables = {
  input: UpdateUserSettingsInput,
  condition?: ModelUserSettingsConditionInput | null,
};

export type UpdateUserSettingsMutation = {
  updateUserSettings?:  {
    __typename: "UserSettings",
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

export type DeleteUserSettingsMutationVariables = {
  input: DeleteUserSettingsInput,
  condition?: ModelUserSettingsConditionInput | null,
};

export type DeleteUserSettingsMutation = {
  deleteUserSettings?:  {
    __typename: "UserSettings",
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

export type GetStudentProfileQueryVariables = {
  id: string,
};

export type GetStudentProfileQuery = {
  getStudentProfile?:  {
    __typename: "StudentProfile",
    id: string,
    name: string,
    email: string,
    birthdate: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStudentProfilesQueryVariables = {
  filter?: ModelStudentProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStudentProfilesQuery = {
  listStudentProfiles?:  {
    __typename: "ModelStudentProfileConnection",
    items:  Array< {
      __typename: "StudentProfile",
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

export type GetUserSettingsQueryVariables = {
  id: string,
};

export type GetUserSettingsQuery = {
  getUserSettings?:  {
    __typename: "UserSettings",
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

export type ListUserSettingsQueryVariables = {
  filter?: ModelUserSettingsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserSettingsQuery = {
  listUserSettings?:  {
    __typename: "ModelUserSettingsConnection",
    items:  Array< {
      __typename: "UserSettings",
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

export type OnCreateStudentProfileSubscriptionVariables = {
  filter?: ModelSubscriptionStudentProfileFilterInput | null,
  owner?: string | null,
};

export type OnCreateStudentProfileSubscription = {
  onCreateStudentProfile?:  {
    __typename: "StudentProfile",
    id: string,
    name: string,
    email: string,
    birthdate: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStudentProfileSubscriptionVariables = {
  filter?: ModelSubscriptionStudentProfileFilterInput | null,
  owner?: string | null,
};

export type OnUpdateStudentProfileSubscription = {
  onUpdateStudentProfile?:  {
    __typename: "StudentProfile",
    id: string,
    name: string,
    email: string,
    birthdate: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStudentProfileSubscriptionVariables = {
  filter?: ModelSubscriptionStudentProfileFilterInput | null,
  owner?: string | null,
};

export type OnDeleteStudentProfileSubscription = {
  onDeleteStudentProfile?:  {
    __typename: "StudentProfile",
    id: string,
    name: string,
    email: string,
    birthdate: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateUserSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionUserSettingsFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSettingsSubscription = {
  onCreateUserSettings?:  {
    __typename: "UserSettings",
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

export type OnUpdateUserSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionUserSettingsFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSettingsSubscription = {
  onUpdateUserSettings?:  {
    __typename: "UserSettings",
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

export type OnDeleteUserSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionUserSettingsFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSettingsSubscription = {
  onDeleteUserSettings?:  {
    __typename: "UserSettings",
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

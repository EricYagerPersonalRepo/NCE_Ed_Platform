/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateStudentProfileInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  email: string,
  address: AddressInput,
};

export type AddressInput = {
  street: string,
  city: string,
  state: string,
  zipCode: string,
};

export type ModelStudentProfileConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelStudentProfileConditionInput | null > | null,
  or?: Array< ModelStudentProfileConditionInput | null > | null,
  not?: ModelStudentProfileConditionInput | null,
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

export type StudentProfile = {
  __typename: "StudentProfile",
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  address: Address,
  CourseProfiles?: ModelStudentProfileCourseProfileConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type Address = {
  __typename: "Address",
  street: string,
  city: string,
  state: string,
  zipCode: string,
};

export type ModelStudentProfileCourseProfileConnection = {
  __typename: "ModelStudentProfileCourseProfileConnection",
  items:  Array<StudentProfileCourseProfile | null >,
  nextToken?: string | null,
};

export type StudentProfileCourseProfile = {
  __typename: "StudentProfileCourseProfile",
  id: string,
  studentProfileId: string,
  courseProfileId: string,
  studentProfile: StudentProfile,
  courseProfile: CourseProfile,
  createdAt: string,
  updatedAt: string,
};

export type CourseProfile = {
  __typename: "CourseProfile",
  id: string,
  studentprofiles?: ModelStudentProfileCourseProfileConnection | null,
  title?: string | null,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateStudentProfileInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  address?: AddressInput | null,
};

export type DeleteStudentProfileInput = {
  id: string,
};

export type CreateCourseProfileInput = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
};

export type ModelCourseProfileConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelCourseProfileConditionInput | null > | null,
  or?: Array< ModelCourseProfileConditionInput | null > | null,
  not?: ModelCourseProfileConditionInput | null,
};

export type UpdateCourseProfileInput = {
  id: string,
  title?: string | null,
  description?: string | null,
};

export type DeleteCourseProfileInput = {
  id: string,
};

export type CreateStudentProfileCourseProfileInput = {
  id?: string | null,
  studentProfileId: string,
  courseProfileId: string,
};

export type ModelStudentProfileCourseProfileConditionInput = {
  studentProfileId?: ModelIDInput | null,
  courseProfileId?: ModelIDInput | null,
  and?: Array< ModelStudentProfileCourseProfileConditionInput | null > | null,
  or?: Array< ModelStudentProfileCourseProfileConditionInput | null > | null,
  not?: ModelStudentProfileCourseProfileConditionInput | null,
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

export type UpdateStudentProfileCourseProfileInput = {
  id: string,
  studentProfileId?: string | null,
  courseProfileId?: string | null,
};

export type DeleteStudentProfileCourseProfileInput = {
  id: string,
};

export type ModelStudentProfileFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelStudentProfileFilterInput | null > | null,
  or?: Array< ModelStudentProfileFilterInput | null > | null,
  not?: ModelStudentProfileFilterInput | null,
};

export type ModelStudentProfileConnection = {
  __typename: "ModelStudentProfileConnection",
  items:  Array<StudentProfile | null >,
  nextToken?: string | null,
};

export type ModelCourseProfileFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelCourseProfileFilterInput | null > | null,
  or?: Array< ModelCourseProfileFilterInput | null > | null,
  not?: ModelCourseProfileFilterInput | null,
};

export type ModelCourseProfileConnection = {
  __typename: "ModelCourseProfileConnection",
  items:  Array<CourseProfile | null >,
  nextToken?: string | null,
};

export type ModelStudentProfileCourseProfileFilterInput = {
  id?: ModelIDInput | null,
  studentProfileId?: ModelIDInput | null,
  courseProfileId?: ModelIDInput | null,
  and?: Array< ModelStudentProfileCourseProfileFilterInput | null > | null,
  or?: Array< ModelStudentProfileCourseProfileFilterInput | null > | null,
  not?: ModelStudentProfileCourseProfileFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionStudentProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStudentProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionStudentProfileFilterInput | null > | null,
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

export type ModelSubscriptionCourseProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCourseProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionCourseProfileFilterInput | null > | null,
};

export type ModelSubscriptionStudentProfileCourseProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  studentProfileId?: ModelSubscriptionIDInput | null,
  courseProfileId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionStudentProfileCourseProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionStudentProfileCourseProfileFilterInput | null > | null,
};

export type CreateStudentProfileMutationVariables = {
  input: CreateStudentProfileInput,
  condition?: ModelStudentProfileConditionInput | null,
};

export type CreateStudentProfileMutation = {
  createStudentProfile?:  {
    __typename: "StudentProfile",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    address:  {
      __typename: "Address",
      street: string,
      city: string,
      state: string,
      zipCode: string,
    },
    CourseProfiles?:  {
      __typename: "ModelStudentProfileCourseProfileConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    firstName: string,
    lastName: string,
    email: string,
    address:  {
      __typename: "Address",
      street: string,
      city: string,
      state: string,
      zipCode: string,
    },
    CourseProfiles?:  {
      __typename: "ModelStudentProfileCourseProfileConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    firstName: string,
    lastName: string,
    email: string,
    address:  {
      __typename: "Address",
      street: string,
      city: string,
      state: string,
      zipCode: string,
    },
    CourseProfiles?:  {
      __typename: "ModelStudentProfileCourseProfileConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCourseProfileMutationVariables = {
  input: CreateCourseProfileInput,
  condition?: ModelCourseProfileConditionInput | null,
};

export type CreateCourseProfileMutation = {
  createCourseProfile?:  {
    __typename: "CourseProfile",
    id: string,
    studentprofiles?:  {
      __typename: "ModelStudentProfileCourseProfileConnection",
      nextToken?: string | null,
    } | null,
    title?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCourseProfileMutationVariables = {
  input: UpdateCourseProfileInput,
  condition?: ModelCourseProfileConditionInput | null,
};

export type UpdateCourseProfileMutation = {
  updateCourseProfile?:  {
    __typename: "CourseProfile",
    id: string,
    studentprofiles?:  {
      __typename: "ModelStudentProfileCourseProfileConnection",
      nextToken?: string | null,
    } | null,
    title?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCourseProfileMutationVariables = {
  input: DeleteCourseProfileInput,
  condition?: ModelCourseProfileConditionInput | null,
};

export type DeleteCourseProfileMutation = {
  deleteCourseProfile?:  {
    __typename: "CourseProfile",
    id: string,
    studentprofiles?:  {
      __typename: "ModelStudentProfileCourseProfileConnection",
      nextToken?: string | null,
    } | null,
    title?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStudentProfileCourseProfileMutationVariables = {
  input: CreateStudentProfileCourseProfileInput,
  condition?: ModelStudentProfileCourseProfileConditionInput | null,
};

export type CreateStudentProfileCourseProfileMutation = {
  createStudentProfileCourseProfile?:  {
    __typename: "StudentProfileCourseProfile",
    id: string,
    studentProfileId: string,
    courseProfileId: string,
    studentProfile:  {
      __typename: "StudentProfile",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    },
    courseProfile:  {
      __typename: "CourseProfile",
      id: string,
      title?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStudentProfileCourseProfileMutationVariables = {
  input: UpdateStudentProfileCourseProfileInput,
  condition?: ModelStudentProfileCourseProfileConditionInput | null,
};

export type UpdateStudentProfileCourseProfileMutation = {
  updateStudentProfileCourseProfile?:  {
    __typename: "StudentProfileCourseProfile",
    id: string,
    studentProfileId: string,
    courseProfileId: string,
    studentProfile:  {
      __typename: "StudentProfile",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    },
    courseProfile:  {
      __typename: "CourseProfile",
      id: string,
      title?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStudentProfileCourseProfileMutationVariables = {
  input: DeleteStudentProfileCourseProfileInput,
  condition?: ModelStudentProfileCourseProfileConditionInput | null,
};

export type DeleteStudentProfileCourseProfileMutation = {
  deleteStudentProfileCourseProfile?:  {
    __typename: "StudentProfileCourseProfile",
    id: string,
    studentProfileId: string,
    courseProfileId: string,
    studentProfile:  {
      __typename: "StudentProfile",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    },
    courseProfile:  {
      __typename: "CourseProfile",
      id: string,
      title?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetStudentProfileQueryVariables = {
  id: string,
};

export type GetStudentProfileQuery = {
  getStudentProfile?:  {
    __typename: "StudentProfile",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    address:  {
      __typename: "Address",
      street: string,
      city: string,
      state: string,
      zipCode: string,
    },
    CourseProfiles?:  {
      __typename: "ModelStudentProfileCourseProfileConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      firstName: string,
      lastName: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCourseProfileQueryVariables = {
  id: string,
};

export type GetCourseProfileQuery = {
  getCourseProfile?:  {
    __typename: "CourseProfile",
    id: string,
    studentprofiles?:  {
      __typename: "ModelStudentProfileCourseProfileConnection",
      nextToken?: string | null,
    } | null,
    title?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCourseProfilesQueryVariables = {
  filter?: ModelCourseProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCourseProfilesQuery = {
  listCourseProfiles?:  {
    __typename: "ModelCourseProfileConnection",
    items:  Array< {
      __typename: "CourseProfile",
      id: string,
      title?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStudentProfileCourseProfileQueryVariables = {
  id: string,
};

export type GetStudentProfileCourseProfileQuery = {
  getStudentProfileCourseProfile?:  {
    __typename: "StudentProfileCourseProfile",
    id: string,
    studentProfileId: string,
    courseProfileId: string,
    studentProfile:  {
      __typename: "StudentProfile",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    },
    courseProfile:  {
      __typename: "CourseProfile",
      id: string,
      title?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStudentProfileCourseProfilesQueryVariables = {
  filter?: ModelStudentProfileCourseProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStudentProfileCourseProfilesQuery = {
  listStudentProfileCourseProfiles?:  {
    __typename: "ModelStudentProfileCourseProfileConnection",
    items:  Array< {
      __typename: "StudentProfileCourseProfile",
      id: string,
      studentProfileId: string,
      courseProfileId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type StudentProfileCourseProfilesByStudentProfileIdQueryVariables = {
  studentProfileId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStudentProfileCourseProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StudentProfileCourseProfilesByStudentProfileIdQuery = {
  studentProfileCourseProfilesByStudentProfileId?:  {
    __typename: "ModelStudentProfileCourseProfileConnection",
    items:  Array< {
      __typename: "StudentProfileCourseProfile",
      id: string,
      studentProfileId: string,
      courseProfileId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type StudentProfileCourseProfilesByCourseProfileIdQueryVariables = {
  courseProfileId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStudentProfileCourseProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StudentProfileCourseProfilesByCourseProfileIdQuery = {
  studentProfileCourseProfilesByCourseProfileId?:  {
    __typename: "ModelStudentProfileCourseProfileConnection",
    items:  Array< {
      __typename: "StudentProfileCourseProfile",
      id: string,
      studentProfileId: string,
      courseProfileId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateStudentProfileSubscriptionVariables = {
  filter?: ModelSubscriptionStudentProfileFilterInput | null,
};

export type OnCreateStudentProfileSubscription = {
  onCreateStudentProfile?:  {
    __typename: "StudentProfile",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    address:  {
      __typename: "Address",
      street: string,
      city: string,
      state: string,
      zipCode: string,
    },
    CourseProfiles?:  {
      __typename: "ModelStudentProfileCourseProfileConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStudentProfileSubscriptionVariables = {
  filter?: ModelSubscriptionStudentProfileFilterInput | null,
};

export type OnUpdateStudentProfileSubscription = {
  onUpdateStudentProfile?:  {
    __typename: "StudentProfile",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    address:  {
      __typename: "Address",
      street: string,
      city: string,
      state: string,
      zipCode: string,
    },
    CourseProfiles?:  {
      __typename: "ModelStudentProfileCourseProfileConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStudentProfileSubscriptionVariables = {
  filter?: ModelSubscriptionStudentProfileFilterInput | null,
};

export type OnDeleteStudentProfileSubscription = {
  onDeleteStudentProfile?:  {
    __typename: "StudentProfile",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    address:  {
      __typename: "Address",
      street: string,
      city: string,
      state: string,
      zipCode: string,
    },
    CourseProfiles?:  {
      __typename: "ModelStudentProfileCourseProfileConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCourseProfileSubscriptionVariables = {
  filter?: ModelSubscriptionCourseProfileFilterInput | null,
};

export type OnCreateCourseProfileSubscription = {
  onCreateCourseProfile?:  {
    __typename: "CourseProfile",
    id: string,
    studentprofiles?:  {
      __typename: "ModelStudentProfileCourseProfileConnection",
      nextToken?: string | null,
    } | null,
    title?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCourseProfileSubscriptionVariables = {
  filter?: ModelSubscriptionCourseProfileFilterInput | null,
};

export type OnUpdateCourseProfileSubscription = {
  onUpdateCourseProfile?:  {
    __typename: "CourseProfile",
    id: string,
    studentprofiles?:  {
      __typename: "ModelStudentProfileCourseProfileConnection",
      nextToken?: string | null,
    } | null,
    title?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCourseProfileSubscriptionVariables = {
  filter?: ModelSubscriptionCourseProfileFilterInput | null,
};

export type OnDeleteCourseProfileSubscription = {
  onDeleteCourseProfile?:  {
    __typename: "CourseProfile",
    id: string,
    studentprofiles?:  {
      __typename: "ModelStudentProfileCourseProfileConnection",
      nextToken?: string | null,
    } | null,
    title?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStudentProfileCourseProfileSubscriptionVariables = {
  filter?: ModelSubscriptionStudentProfileCourseProfileFilterInput | null,
};

export type OnCreateStudentProfileCourseProfileSubscription = {
  onCreateStudentProfileCourseProfile?:  {
    __typename: "StudentProfileCourseProfile",
    id: string,
    studentProfileId: string,
    courseProfileId: string,
    studentProfile:  {
      __typename: "StudentProfile",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    },
    courseProfile:  {
      __typename: "CourseProfile",
      id: string,
      title?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStudentProfileCourseProfileSubscriptionVariables = {
  filter?: ModelSubscriptionStudentProfileCourseProfileFilterInput | null,
};

export type OnUpdateStudentProfileCourseProfileSubscription = {
  onUpdateStudentProfileCourseProfile?:  {
    __typename: "StudentProfileCourseProfile",
    id: string,
    studentProfileId: string,
    courseProfileId: string,
    studentProfile:  {
      __typename: "StudentProfile",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    },
    courseProfile:  {
      __typename: "CourseProfile",
      id: string,
      title?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStudentProfileCourseProfileSubscriptionVariables = {
  filter?: ModelSubscriptionStudentProfileCourseProfileFilterInput | null,
};

export type OnDeleteStudentProfileCourseProfileSubscription = {
  onDeleteStudentProfileCourseProfile?:  {
    __typename: "StudentProfileCourseProfile",
    id: string,
    studentProfileId: string,
    courseProfileId: string,
    studentProfile:  {
      __typename: "StudentProfile",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    },
    courseProfile:  {
      __typename: "CourseProfile",
      id: string,
      title?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

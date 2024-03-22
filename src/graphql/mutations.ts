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
    status
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
    status
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
    status
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
export const createCourse = /* GraphQL */ `mutation CreateCourse(
  $input: CreateCourseInput!
  $condition: ModelCourseConditionInput
) {
  createCourse(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCourseMutationVariables,
  APITypes.CreateCourseMutation
>;
export const updateCourse = /* GraphQL */ `mutation UpdateCourse(
  $input: UpdateCourseInput!
  $condition: ModelCourseConditionInput
) {
  updateCourse(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCourseMutationVariables,
  APITypes.UpdateCourseMutation
>;
export const deleteCourse = /* GraphQL */ `mutation DeleteCourse(
  $input: DeleteCourseInput!
  $condition: ModelCourseConditionInput
) {
  deleteCourse(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCourseMutationVariables,
  APITypes.DeleteCourseMutation
>;
export const createModule = /* GraphQL */ `mutation CreateModule(
  $input: CreateModuleInput!
  $condition: ModelModuleConditionInput
) {
  createModule(input: $input, condition: $condition) {
    id
    title
    description
    courseID
    course {
      id
      title
      description
      subject
      difficulty
      creator
      createdAt
      updatedAt
      __typename
    }
    lessons {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    courseModulesId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateModuleMutationVariables,
  APITypes.CreateModuleMutation
>;
export const updateModule = /* GraphQL */ `mutation UpdateModule(
  $input: UpdateModuleInput!
  $condition: ModelModuleConditionInput
) {
  updateModule(input: $input, condition: $condition) {
    id
    title
    description
    courseID
    course {
      id
      title
      description
      subject
      difficulty
      creator
      createdAt
      updatedAt
      __typename
    }
    lessons {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    courseModulesId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateModuleMutationVariables,
  APITypes.UpdateModuleMutation
>;
export const deleteModule = /* GraphQL */ `mutation DeleteModule(
  $input: DeleteModuleInput!
  $condition: ModelModuleConditionInput
) {
  deleteModule(input: $input, condition: $condition) {
    id
    title
    description
    courseID
    course {
      id
      title
      description
      subject
      difficulty
      creator
      createdAt
      updatedAt
      __typename
    }
    lessons {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    courseModulesId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteModuleMutationVariables,
  APITypes.DeleteModuleMutation
>;
export const createLesson = /* GraphQL */ `mutation CreateLesson(
  $input: CreateLessonInput!
  $condition: ModelLessonConditionInput
) {
  createLesson(input: $input, condition: $condition) {
    id
    title
    content
    videoURL
    moduleID
    module {
      id
      title
      description
      courseID
      createdAt
      updatedAt
      courseModulesId
      __typename
    }
    quizzes {
      nextToken
      __typename
    }
    exercises {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    moduleLessonsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateLessonMutationVariables,
  APITypes.CreateLessonMutation
>;
export const updateLesson = /* GraphQL */ `mutation UpdateLesson(
  $input: UpdateLessonInput!
  $condition: ModelLessonConditionInput
) {
  updateLesson(input: $input, condition: $condition) {
    id
    title
    content
    videoURL
    moduleID
    module {
      id
      title
      description
      courseID
      createdAt
      updatedAt
      courseModulesId
      __typename
    }
    quizzes {
      nextToken
      __typename
    }
    exercises {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    moduleLessonsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateLessonMutationVariables,
  APITypes.UpdateLessonMutation
>;
export const deleteLesson = /* GraphQL */ `mutation DeleteLesson(
  $input: DeleteLessonInput!
  $condition: ModelLessonConditionInput
) {
  deleteLesson(input: $input, condition: $condition) {
    id
    title
    content
    videoURL
    moduleID
    module {
      id
      title
      description
      courseID
      createdAt
      updatedAt
      courseModulesId
      __typename
    }
    quizzes {
      nextToken
      __typename
    }
    exercises {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    moduleLessonsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteLessonMutationVariables,
  APITypes.DeleteLessonMutation
>;
export const createExercise = /* GraphQL */ `mutation CreateExercise(
  $input: CreateExerciseInput!
  $condition: ModelExerciseConditionInput
) {
  createExercise(input: $input, condition: $condition) {
    id
    question
    solution
    lessonID
    lesson {
      id
      title
      content
      videoURL
      moduleID
      createdAt
      updatedAt
      moduleLessonsId
      __typename
    }
    exerciseType
    data
    createdAt
    updatedAt
    lessonExercisesId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateExerciseMutationVariables,
  APITypes.CreateExerciseMutation
>;
export const updateExercise = /* GraphQL */ `mutation UpdateExercise(
  $input: UpdateExerciseInput!
  $condition: ModelExerciseConditionInput
) {
  updateExercise(input: $input, condition: $condition) {
    id
    question
    solution
    lessonID
    lesson {
      id
      title
      content
      videoURL
      moduleID
      createdAt
      updatedAt
      moduleLessonsId
      __typename
    }
    exerciseType
    data
    createdAt
    updatedAt
    lessonExercisesId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateExerciseMutationVariables,
  APITypes.UpdateExerciseMutation
>;
export const deleteExercise = /* GraphQL */ `mutation DeleteExercise(
  $input: DeleteExerciseInput!
  $condition: ModelExerciseConditionInput
) {
  deleteExercise(input: $input, condition: $condition) {
    id
    question
    solution
    lessonID
    lesson {
      id
      title
      content
      videoURL
      moduleID
      createdAt
      updatedAt
      moduleLessonsId
      __typename
    }
    exerciseType
    data
    createdAt
    updatedAt
    lessonExercisesId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteExerciseMutationVariables,
  APITypes.DeleteExerciseMutation
>;
export const createQuiz = /* GraphQL */ `mutation CreateQuiz(
  $input: CreateQuizInput!
  $condition: ModelQuizConditionInput
) {
  createQuiz(input: $input, condition: $condition) {
    id
    title
    lessonID
    lesson {
      id
      title
      content
      videoURL
      moduleID
      createdAt
      updatedAt
      moduleLessonsId
      __typename
    }
    questions {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    lessonQuizzesId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateQuizMutationVariables,
  APITypes.CreateQuizMutation
>;
export const updateQuiz = /* GraphQL */ `mutation UpdateQuiz(
  $input: UpdateQuizInput!
  $condition: ModelQuizConditionInput
) {
  updateQuiz(input: $input, condition: $condition) {
    id
    title
    lessonID
    lesson {
      id
      title
      content
      videoURL
      moduleID
      createdAt
      updatedAt
      moduleLessonsId
      __typename
    }
    questions {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    lessonQuizzesId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateQuizMutationVariables,
  APITypes.UpdateQuizMutation
>;
export const deleteQuiz = /* GraphQL */ `mutation DeleteQuiz(
  $input: DeleteQuizInput!
  $condition: ModelQuizConditionInput
) {
  deleteQuiz(input: $input, condition: $condition) {
    id
    title
    lessonID
    lesson {
      id
      title
      content
      videoURL
      moduleID
      createdAt
      updatedAt
      moduleLessonsId
      __typename
    }
    questions {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    lessonQuizzesId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteQuizMutationVariables,
  APITypes.DeleteQuizMutation
>;
export const createQuestion = /* GraphQL */ `mutation CreateQuestion(
  $input: CreateQuestionInput!
  $condition: ModelQuestionConditionInput
) {
  createQuestion(input: $input, condition: $condition) {
    id
    text
    options
    correctAnswer
    quizID
    quiz {
      id
      title
      lessonID
      createdAt
      updatedAt
      lessonQuizzesId
      __typename
    }
    createdAt
    updatedAt
    quizQuestionsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateQuestionMutationVariables,
  APITypes.CreateQuestionMutation
>;
export const updateQuestion = /* GraphQL */ `mutation UpdateQuestion(
  $input: UpdateQuestionInput!
  $condition: ModelQuestionConditionInput
) {
  updateQuestion(input: $input, condition: $condition) {
    id
    text
    options
    correctAnswer
    quizID
    quiz {
      id
      title
      lessonID
      createdAt
      updatedAt
      lessonQuizzesId
      __typename
    }
    createdAt
    updatedAt
    quizQuestionsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateQuestionMutationVariables,
  APITypes.UpdateQuestionMutation
>;
export const deleteQuestion = /* GraphQL */ `mutation DeleteQuestion(
  $input: DeleteQuestionInput!
  $condition: ModelQuestionConditionInput
) {
  deleteQuestion(input: $input, condition: $condition) {
    id
    text
    options
    correctAnswer
    quizID
    quiz {
      id
      title
      lessonID
      createdAt
      updatedAt
      lessonQuizzesId
      __typename
    }
    createdAt
    updatedAt
    quizQuestionsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteQuestionMutationVariables,
  APITypes.DeleteQuestionMutation
>;
export const createEnrollment = /* GraphQL */ `mutation CreateEnrollment(
  $input: CreateEnrollmentInput!
  $condition: ModelEnrollmentConditionInput
) {
  createEnrollment(input: $input, condition: $condition) {
    id
    userID
    courseID
    progress
    completed
    achievements
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEnrollmentMutationVariables,
  APITypes.CreateEnrollmentMutation
>;
export const updateEnrollment = /* GraphQL */ `mutation UpdateEnrollment(
  $input: UpdateEnrollmentInput!
  $condition: ModelEnrollmentConditionInput
) {
  updateEnrollment(input: $input, condition: $condition) {
    id
    userID
    courseID
    progress
    completed
    achievements
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEnrollmentMutationVariables,
  APITypes.UpdateEnrollmentMutation
>;
export const deleteEnrollment = /* GraphQL */ `mutation DeleteEnrollment(
  $input: DeleteEnrollmentInput!
  $condition: ModelEnrollmentConditionInput
) {
  deleteEnrollment(input: $input, condition: $condition) {
    id
    userID
    courseID
    progress
    completed
    achievements
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEnrollmentMutationVariables,
  APITypes.DeleteEnrollmentMutation
>;

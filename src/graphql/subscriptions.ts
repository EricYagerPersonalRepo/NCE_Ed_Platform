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
) {
  onCreateNCEStudentProfile(filter: $filter) {
    id
    name
    email
    birthdate
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateNCEStudentProfileSubscriptionVariables,
  APITypes.OnCreateNCEStudentProfileSubscription
>;
export const onUpdateNCEStudentProfile = /* GraphQL */ `subscription OnUpdateNCEStudentProfile(
  $filter: ModelSubscriptionNCEStudentProfileFilterInput
) {
  onUpdateNCEStudentProfile(filter: $filter) {
    id
    name
    email
    birthdate
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateNCEStudentProfileSubscriptionVariables,
  APITypes.OnUpdateNCEStudentProfileSubscription
>;
export const onDeleteNCEStudentProfile = /* GraphQL */ `subscription OnDeleteNCEStudentProfile(
  $filter: ModelSubscriptionNCEStudentProfileFilterInput
) {
  onDeleteNCEStudentProfile(filter: $filter) {
    id
    name
    email
    birthdate
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteNCEStudentProfileSubscriptionVariables,
  APITypes.OnDeleteNCEStudentProfileSubscription
>;
export const onCreateNCEUserSettings = /* GraphQL */ `subscription OnCreateNCEUserSettings(
  $filter: ModelSubscriptionNCEUserSettingsFilterInput
) {
  onCreateNCEUserSettings(filter: $filter) {
    id
    notificationsEnabled
    darkModeEnabled
    language
    isAdmin
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateNCEUserSettingsSubscriptionVariables,
  APITypes.OnCreateNCEUserSettingsSubscription
>;
export const onUpdateNCEUserSettings = /* GraphQL */ `subscription OnUpdateNCEUserSettings(
  $filter: ModelSubscriptionNCEUserSettingsFilterInput
) {
  onUpdateNCEUserSettings(filter: $filter) {
    id
    notificationsEnabled
    darkModeEnabled
    language
    isAdmin
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateNCEUserSettingsSubscriptionVariables,
  APITypes.OnUpdateNCEUserSettingsSubscription
>;
export const onDeleteNCEUserSettings = /* GraphQL */ `subscription OnDeleteNCEUserSettings(
  $filter: ModelSubscriptionNCEUserSettingsFilterInput
) {
  onDeleteNCEUserSettings(filter: $filter) {
    id
    notificationsEnabled
    darkModeEnabled
    language
    isAdmin
    createdAt
    updatedAt
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
) {
  onCreateUserNotificationRead(filter: $filter) {
    id
    notificationID
    readAt
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserNotificationReadSubscriptionVariables,
  APITypes.OnCreateUserNotificationReadSubscription
>;
export const onUpdateUserNotificationRead = /* GraphQL */ `subscription OnUpdateUserNotificationRead(
  $filter: ModelSubscriptionUserNotificationReadFilterInput
) {
  onUpdateUserNotificationRead(filter: $filter) {
    id
    notificationID
    readAt
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserNotificationReadSubscriptionVariables,
  APITypes.OnUpdateUserNotificationReadSubscription
>;
export const onDeleteUserNotificationRead = /* GraphQL */ `subscription OnDeleteUserNotificationRead(
  $filter: ModelSubscriptionUserNotificationReadFilterInput
) {
  onDeleteUserNotificationRead(filter: $filter) {
    id
    notificationID
    readAt
    createdAt
    updatedAt
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
` as GeneratedSubscription<
  APITypes.OnCreateModuleSubscriptionVariables,
  APITypes.OnCreateModuleSubscription
>;
export const onUpdateModule = /* GraphQL */ `subscription OnUpdateModule($filter: ModelSubscriptionModuleFilterInput) {
  onUpdateModule(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateModuleSubscriptionVariables,
  APITypes.OnUpdateModuleSubscription
>;
export const onDeleteModule = /* GraphQL */ `subscription OnDeleteModule($filter: ModelSubscriptionModuleFilterInput) {
  onDeleteModule(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteModuleSubscriptionVariables,
  APITypes.OnDeleteModuleSubscription
>;
export const onCreateLesson = /* GraphQL */ `subscription OnCreateLesson($filter: ModelSubscriptionLessonFilterInput) {
  onCreateLesson(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateLessonSubscriptionVariables,
  APITypes.OnCreateLessonSubscription
>;
export const onUpdateLesson = /* GraphQL */ `subscription OnUpdateLesson($filter: ModelSubscriptionLessonFilterInput) {
  onUpdateLesson(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateLessonSubscriptionVariables,
  APITypes.OnUpdateLessonSubscription
>;
export const onDeleteLesson = /* GraphQL */ `subscription OnDeleteLesson($filter: ModelSubscriptionLessonFilterInput) {
  onDeleteLesson(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteLessonSubscriptionVariables,
  APITypes.OnDeleteLessonSubscription
>;
export const onCreateExercise = /* GraphQL */ `subscription OnCreateExercise($filter: ModelSubscriptionExerciseFilterInput) {
  onCreateExercise(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateExerciseSubscriptionVariables,
  APITypes.OnCreateExerciseSubscription
>;
export const onUpdateExercise = /* GraphQL */ `subscription OnUpdateExercise($filter: ModelSubscriptionExerciseFilterInput) {
  onUpdateExercise(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateExerciseSubscriptionVariables,
  APITypes.OnUpdateExerciseSubscription
>;
export const onDeleteExercise = /* GraphQL */ `subscription OnDeleteExercise($filter: ModelSubscriptionExerciseFilterInput) {
  onDeleteExercise(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteExerciseSubscriptionVariables,
  APITypes.OnDeleteExerciseSubscription
>;
export const onCreateQuiz = /* GraphQL */ `subscription OnCreateQuiz($filter: ModelSubscriptionQuizFilterInput) {
  onCreateQuiz(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateQuizSubscriptionVariables,
  APITypes.OnCreateQuizSubscription
>;
export const onUpdateQuiz = /* GraphQL */ `subscription OnUpdateQuiz($filter: ModelSubscriptionQuizFilterInput) {
  onUpdateQuiz(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateQuizSubscriptionVariables,
  APITypes.OnUpdateQuizSubscription
>;
export const onDeleteQuiz = /* GraphQL */ `subscription OnDeleteQuiz($filter: ModelSubscriptionQuizFilterInput) {
  onDeleteQuiz(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteQuizSubscriptionVariables,
  APITypes.OnDeleteQuizSubscription
>;
export const onCreateQuestion = /* GraphQL */ `subscription OnCreateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
  onCreateQuestion(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateQuestionSubscriptionVariables,
  APITypes.OnCreateQuestionSubscription
>;
export const onUpdateQuestion = /* GraphQL */ `subscription OnUpdateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
  onUpdateQuestion(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateQuestionSubscriptionVariables,
  APITypes.OnUpdateQuestionSubscription
>;
export const onDeleteQuestion = /* GraphQL */ `subscription OnDeleteQuestion($filter: ModelSubscriptionQuestionFilterInput) {
  onDeleteQuestion(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteQuestionSubscriptionVariables,
  APITypes.OnDeleteQuestionSubscription
>;
export const onCreateEnrollment = /* GraphQL */ `subscription OnCreateEnrollment(
  $filter: ModelSubscriptionEnrollmentFilterInput
) {
  onCreateEnrollment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEnrollmentSubscriptionVariables,
  APITypes.OnCreateEnrollmentSubscription
>;
export const onUpdateEnrollment = /* GraphQL */ `subscription OnUpdateEnrollment(
  $filter: ModelSubscriptionEnrollmentFilterInput
) {
  onUpdateEnrollment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEnrollmentSubscriptionVariables,
  APITypes.OnUpdateEnrollmentSubscription
>;
export const onDeleteEnrollment = /* GraphQL */ `subscription OnDeleteEnrollment(
  $filter: ModelSubscriptionEnrollmentFilterInput
) {
  onDeleteEnrollment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEnrollmentSubscriptionVariables,
  APITypes.OnDeleteEnrollmentSubscription
>;

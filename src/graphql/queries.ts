/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getNCEStudentProfile = /* GraphQL */ `query GetNCEStudentProfile($id: ID!) {
  getNCEStudentProfile(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetNCEStudentProfileQueryVariables,
  APITypes.GetNCEStudentProfileQuery
>;
export const listNCEStudentProfiles = /* GraphQL */ `query ListNCEStudentProfiles(
  $filter: ModelNCEStudentProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listNCEStudentProfiles(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      email
      birthdate
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListNCEStudentProfilesQueryVariables,
  APITypes.ListNCEStudentProfilesQuery
>;
export const getNCEUserSettings = /* GraphQL */ `query GetNCEUserSettings($id: ID!) {
  getNCEUserSettings(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetNCEUserSettingsQueryVariables,
  APITypes.GetNCEUserSettingsQuery
>;
export const listNCEUserSettings = /* GraphQL */ `query ListNCEUserSettings(
  $filter: ModelNCEUserSettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  listNCEUserSettings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListNCEUserSettingsQueryVariables,
  APITypes.ListNCEUserSettingsQuery
>;
export const getBroadcastNotification = /* GraphQL */ `query GetBroadcastNotification($id: ID!) {
  getBroadcastNotification(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetBroadcastNotificationQueryVariables,
  APITypes.GetBroadcastNotificationQuery
>;
export const listBroadcastNotifications = /* GraphQL */ `query ListBroadcastNotifications(
  $filter: ModelBroadcastNotificationFilterInput
  $limit: Int
  $nextToken: String
) {
  listBroadcastNotifications(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBroadcastNotificationsQueryVariables,
  APITypes.ListBroadcastNotificationsQuery
>;
export const getUserNotificationRead = /* GraphQL */ `query GetUserNotificationRead($id: ID!) {
  getUserNotificationRead(id: $id) {
    id
    notificationID
    readAt
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserNotificationReadQueryVariables,
  APITypes.GetUserNotificationReadQuery
>;
export const listUserNotificationReads = /* GraphQL */ `query ListUserNotificationReads(
  $filter: ModelUserNotificationReadFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserNotificationReads(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      notificationID
      readAt
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserNotificationReadsQueryVariables,
  APITypes.ListUserNotificationReadsQuery
>;
export const getCourse = /* GraphQL */ `query GetCourse($id: ID!) {
  getCourse(id: $id) {
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
` as GeneratedQuery<APITypes.GetCourseQueryVariables, APITypes.GetCourseQuery>;
export const listCourses = /* GraphQL */ `query ListCourses(
  $filter: ModelCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCoursesQueryVariables,
  APITypes.ListCoursesQuery
>;
export const getModule = /* GraphQL */ `query GetModule($id: ID!) {
  getModule(id: $id) {
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
` as GeneratedQuery<APITypes.GetModuleQueryVariables, APITypes.GetModuleQuery>;
export const listModules = /* GraphQL */ `query ListModules(
  $filter: ModelModuleFilterInput
  $limit: Int
  $nextToken: String
) {
  listModules(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      courseID
      createdAt
      updatedAt
      courseModulesId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListModulesQueryVariables,
  APITypes.ListModulesQuery
>;
export const getLesson = /* GraphQL */ `query GetLesson($id: ID!) {
  getLesson(id: $id) {
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
` as GeneratedQuery<APITypes.GetLessonQueryVariables, APITypes.GetLessonQuery>;
export const listLessons = /* GraphQL */ `query ListLessons(
  $filter: ModelLessonFilterInput
  $limit: Int
  $nextToken: String
) {
  listLessons(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLessonsQueryVariables,
  APITypes.ListLessonsQuery
>;
export const getExercise = /* GraphQL */ `query GetExercise($id: ID!) {
  getExercise(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetExerciseQueryVariables,
  APITypes.GetExerciseQuery
>;
export const listExercises = /* GraphQL */ `query ListExercises(
  $filter: ModelExerciseFilterInput
  $limit: Int
  $nextToken: String
) {
  listExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      question
      solution
      lessonID
      exerciseType
      data
      createdAt
      updatedAt
      lessonExercisesId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExercisesQueryVariables,
  APITypes.ListExercisesQuery
>;
export const getQuiz = /* GraphQL */ `query GetQuiz($id: ID!) {
  getQuiz(id: $id) {
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
` as GeneratedQuery<APITypes.GetQuizQueryVariables, APITypes.GetQuizQuery>;
export const listQuizzes = /* GraphQL */ `query ListQuizzes(
  $filter: ModelQuizFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuizzes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      lessonID
      createdAt
      updatedAt
      lessonQuizzesId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListQuizzesQueryVariables,
  APITypes.ListQuizzesQuery
>;
export const getQuestion = /* GraphQL */ `query GetQuestion($id: ID!) {
  getQuestion(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetQuestionQueryVariables,
  APITypes.GetQuestionQuery
>;
export const listQuestions = /* GraphQL */ `query ListQuestions(
  $filter: ModelQuestionFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      text
      options
      correctAnswer
      quizID
      createdAt
      updatedAt
      quizQuestionsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListQuestionsQueryVariables,
  APITypes.ListQuestionsQuery
>;
export const getEnrollment = /* GraphQL */ `query GetEnrollment($id: ID!) {
  getEnrollment(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetEnrollmentQueryVariables,
  APITypes.GetEnrollmentQuery
>;
export const listEnrollments = /* GraphQL */ `query ListEnrollments(
  $filter: ModelEnrollmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listEnrollments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEnrollmentsQueryVariables,
  APITypes.ListEnrollmentsQuery
>;
export const coursesByCreator = /* GraphQL */ `query CoursesByCreator(
  $creator: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  coursesByCreator(
    creator: $creator
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CoursesByCreatorQueryVariables,
  APITypes.CoursesByCreatorQuery
>;
export const modulesByCourseIDAndId = /* GraphQL */ `query ModulesByCourseIDAndId(
  $courseID: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelModuleFilterInput
  $limit: Int
  $nextToken: String
) {
  modulesByCourseIDAndId(
    courseID: $courseID
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      description
      courseID
      createdAt
      updatedAt
      courseModulesId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ModulesByCourseIDAndIdQueryVariables,
  APITypes.ModulesByCourseIDAndIdQuery
>;
export const lessonsByModuleIDAndId = /* GraphQL */ `query LessonsByModuleIDAndId(
  $moduleID: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelLessonFilterInput
  $limit: Int
  $nextToken: String
) {
  lessonsByModuleIDAndId(
    moduleID: $moduleID
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LessonsByModuleIDAndIdQueryVariables,
  APITypes.LessonsByModuleIDAndIdQuery
>;
export const exercisesByLessonIDAndId = /* GraphQL */ `query ExercisesByLessonIDAndId(
  $lessonID: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelExerciseFilterInput
  $limit: Int
  $nextToken: String
) {
  exercisesByLessonIDAndId(
    lessonID: $lessonID
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      question
      solution
      lessonID
      exerciseType
      data
      createdAt
      updatedAt
      lessonExercisesId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ExercisesByLessonIDAndIdQueryVariables,
  APITypes.ExercisesByLessonIDAndIdQuery
>;
export const quizzesByLessonIDAndId = /* GraphQL */ `query QuizzesByLessonIDAndId(
  $lessonID: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelQuizFilterInput
  $limit: Int
  $nextToken: String
) {
  quizzesByLessonIDAndId(
    lessonID: $lessonID
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      lessonID
      createdAt
      updatedAt
      lessonQuizzesId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.QuizzesByLessonIDAndIdQueryVariables,
  APITypes.QuizzesByLessonIDAndIdQuery
>;
export const questionsByQuizIDAndId = /* GraphQL */ `query QuestionsByQuizIDAndId(
  $quizID: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelQuestionFilterInput
  $limit: Int
  $nextToken: String
) {
  questionsByQuizIDAndId(
    quizID: $quizID
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      text
      options
      correctAnswer
      quizID
      createdAt
      updatedAt
      quizQuestionsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.QuestionsByQuizIDAndIdQueryVariables,
  APITypes.QuestionsByQuizIDAndIdQuery
>;

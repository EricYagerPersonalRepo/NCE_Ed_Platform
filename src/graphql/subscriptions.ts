/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateStudentProfile = /* GraphQL */ `subscription OnCreateStudentProfile(
  $filter: ModelSubscriptionStudentProfileFilterInput
  $owner: String
) {
  onCreateStudentProfile(filter: $filter, owner: $owner) {
    id
    name
    email
    status
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
  APITypes.OnCreateStudentProfileSubscriptionVariables,
  APITypes.OnCreateStudentProfileSubscription
>;
export const onUpdateStudentProfile = /* GraphQL */ `subscription OnUpdateStudentProfile(
  $filter: ModelSubscriptionStudentProfileFilterInput
  $owner: String
) {
  onUpdateStudentProfile(filter: $filter, owner: $owner) {
    id
    name
    email
    status
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
  APITypes.OnUpdateStudentProfileSubscriptionVariables,
  APITypes.OnUpdateStudentProfileSubscription
>;
export const onDeleteStudentProfile = /* GraphQL */ `subscription OnDeleteStudentProfile(
  $filter: ModelSubscriptionStudentProfileFilterInput
  $owner: String
) {
  onDeleteStudentProfile(filter: $filter, owner: $owner) {
    id
    name
    email
    status
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
  APITypes.OnDeleteStudentProfileSubscriptionVariables,
  APITypes.OnDeleteStudentProfileSubscription
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
    readBy
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
    readBy
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
    readBy
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
export const onCreateInstructorProfile = /* GraphQL */ `subscription OnCreateInstructorProfile(
  $filter: ModelSubscriptionInstructorProfileFilterInput
  $owner: String
) {
  onCreateInstructorProfile(filter: $filter, owner: $owner) {
    id
    name
    email
    biography {
      id
      overview
      createdAt
      updatedAt
      owner
      __typename
    }
    contact {
      id
      phone
      email
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateInstructorProfileSubscriptionVariables,
  APITypes.OnCreateInstructorProfileSubscription
>;
export const onUpdateInstructorProfile = /* GraphQL */ `subscription OnUpdateInstructorProfile(
  $filter: ModelSubscriptionInstructorProfileFilterInput
  $owner: String
) {
  onUpdateInstructorProfile(filter: $filter, owner: $owner) {
    id
    name
    email
    biography {
      id
      overview
      createdAt
      updatedAt
      owner
      __typename
    }
    contact {
      id
      phone
      email
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateInstructorProfileSubscriptionVariables,
  APITypes.OnUpdateInstructorProfileSubscription
>;
export const onDeleteInstructorProfile = /* GraphQL */ `subscription OnDeleteInstructorProfile(
  $filter: ModelSubscriptionInstructorProfileFilterInput
  $owner: String
) {
  onDeleteInstructorProfile(filter: $filter, owner: $owner) {
    id
    name
    email
    biography {
      id
      overview
      createdAt
      updatedAt
      owner
      __typename
    }
    contact {
      id
      phone
      email
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteInstructorProfileSubscriptionVariables,
  APITypes.OnDeleteInstructorProfileSubscription
>;
export const onCreateInstructorContact = /* GraphQL */ `subscription OnCreateInstructorContact(
  $filter: ModelSubscriptionInstructorContactFilterInput
  $owner: String
) {
  onCreateInstructorContact(filter: $filter, owner: $owner) {
    id
    phone
    email
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateInstructorContactSubscriptionVariables,
  APITypes.OnCreateInstructorContactSubscription
>;
export const onUpdateInstructorContact = /* GraphQL */ `subscription OnUpdateInstructorContact(
  $filter: ModelSubscriptionInstructorContactFilterInput
  $owner: String
) {
  onUpdateInstructorContact(filter: $filter, owner: $owner) {
    id
    phone
    email
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateInstructorContactSubscriptionVariables,
  APITypes.OnUpdateInstructorContactSubscription
>;
export const onDeleteInstructorContact = /* GraphQL */ `subscription OnDeleteInstructorContact(
  $filter: ModelSubscriptionInstructorContactFilterInput
  $owner: String
) {
  onDeleteInstructorContact(filter: $filter, owner: $owner) {
    id
    phone
    email
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteInstructorContactSubscriptionVariables,
  APITypes.OnDeleteInstructorContactSubscription
>;
export const onCreateInstructorBiography = /* GraphQL */ `subscription OnCreateInstructorBiography(
  $filter: ModelSubscriptionInstructorBiographyFilterInput
  $owner: String
) {
  onCreateInstructorBiography(filter: $filter, owner: $owner) {
    id
    overview
    professionalExperience {
      nextToken
      __typename
    }
    awards {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateInstructorBiographySubscriptionVariables,
  APITypes.OnCreateInstructorBiographySubscription
>;
export const onUpdateInstructorBiography = /* GraphQL */ `subscription OnUpdateInstructorBiography(
  $filter: ModelSubscriptionInstructorBiographyFilterInput
  $owner: String
) {
  onUpdateInstructorBiography(filter: $filter, owner: $owner) {
    id
    overview
    professionalExperience {
      nextToken
      __typename
    }
    awards {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateInstructorBiographySubscriptionVariables,
  APITypes.OnUpdateInstructorBiographySubscription
>;
export const onDeleteInstructorBiography = /* GraphQL */ `subscription OnDeleteInstructorBiography(
  $filter: ModelSubscriptionInstructorBiographyFilterInput
  $owner: String
) {
  onDeleteInstructorBiography(filter: $filter, owner: $owner) {
    id
    overview
    professionalExperience {
      nextToken
      __typename
    }
    awards {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteInstructorBiographySubscriptionVariables,
  APITypes.OnDeleteInstructorBiographySubscription
>;
export const onCreateExperience = /* GraphQL */ `subscription OnCreateExperience(
  $filter: ModelSubscriptionExperienceFilterInput
  $owner: String
) {
  onCreateExperience(filter: $filter, owner: $owner) {
    id
    startDate
    endDate
    isCurrent
    companyName
    jobTitle
    description
    createdAt
    updatedAt
    instructorBiographyProfessionalExperienceId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateExperienceSubscriptionVariables,
  APITypes.OnCreateExperienceSubscription
>;
export const onUpdateExperience = /* GraphQL */ `subscription OnUpdateExperience(
  $filter: ModelSubscriptionExperienceFilterInput
  $owner: String
) {
  onUpdateExperience(filter: $filter, owner: $owner) {
    id
    startDate
    endDate
    isCurrent
    companyName
    jobTitle
    description
    createdAt
    updatedAt
    instructorBiographyProfessionalExperienceId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateExperienceSubscriptionVariables,
  APITypes.OnUpdateExperienceSubscription
>;
export const onDeleteExperience = /* GraphQL */ `subscription OnDeleteExperience(
  $filter: ModelSubscriptionExperienceFilterInput
  $owner: String
) {
  onDeleteExperience(filter: $filter, owner: $owner) {
    id
    startDate
    endDate
    isCurrent
    companyName
    jobTitle
    description
    createdAt
    updatedAt
    instructorBiographyProfessionalExperienceId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteExperienceSubscriptionVariables,
  APITypes.OnDeleteExperienceSubscription
>;
export const onCreateAward = /* GraphQL */ `subscription OnCreateAward(
  $filter: ModelSubscriptionAwardFilterInput
  $owner: String
) {
  onCreateAward(filter: $filter, owner: $owner) {
    id
    awardDate
    awardSource
    description
    createdAt
    updatedAt
    instructorBiographyAwardsId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAwardSubscriptionVariables,
  APITypes.OnCreateAwardSubscription
>;
export const onUpdateAward = /* GraphQL */ `subscription OnUpdateAward(
  $filter: ModelSubscriptionAwardFilterInput
  $owner: String
) {
  onUpdateAward(filter: $filter, owner: $owner) {
    id
    awardDate
    awardSource
    description
    createdAt
    updatedAt
    instructorBiographyAwardsId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAwardSubscriptionVariables,
  APITypes.OnUpdateAwardSubscription
>;
export const onDeleteAward = /* GraphQL */ `subscription OnDeleteAward(
  $filter: ModelSubscriptionAwardFilterInput
  $owner: String
) {
  onDeleteAward(filter: $filter, owner: $owner) {
    id
    awardDate
    awardSource
    description
    createdAt
    updatedAt
    instructorBiographyAwardsId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAwardSubscriptionVariables,
  APITypes.OnDeleteAwardSubscription
>;

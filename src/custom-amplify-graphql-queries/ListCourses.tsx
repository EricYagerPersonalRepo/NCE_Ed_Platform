export const customListCourses = /* GraphQL */ `query CustomListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
){
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
        items {
            modules {
                items {
                    id
                    title
                    createdAt
                    description
                    updatedAt
                }
            }
            approval {
                items {
                    id
                    courseApprovalId
                    approvingAdmin
                    comments
                    createdAt
                    status
                    updatedAt
                }
            }
            createdAt
            creator
            description
            difficulty
            id
            subject
            title
            updatedAt
        }
    }
}`

export const ListPendingCourses = /* GraphQL */ `query ListPendingCourses {
    listCourseApprovals(filter: {status: {eq: PENDING}}) {
      items {
        id
        status
        updatedAt
        approvingAdmin
        comments
        courseApprovalId
        createdAt
      }
    }
  }
  `
export type AmplifyDependentResourcesAttributes = {
  "api": {
    "avatarHandlerApiGateway": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    },
    "nceed": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string"
    }
  },
  "auth": {
    "nceed07f38101": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "HostedUIDomain": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "OAuthMetadata": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    }
  },
  "function": {
    "nceAvatarHandlerLambdaFunction": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  },
  "storage": {
    "nceEdAvatars": {
      "BucketName": "string",
      "Region": "string"
    }
  }
}
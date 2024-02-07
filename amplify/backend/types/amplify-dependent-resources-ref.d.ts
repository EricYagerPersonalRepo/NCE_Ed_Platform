export type AmplifyDependentResourcesAttributes = {
  "api": {
    "avatarHandlerGateway": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    },
    "nceeducationplatform": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string",
      "GraphQLAPIKeyOutput": "string"
    }
  },
  "auth": {
    "nceeducationplatform6bfa7874": {
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
    "nceAvatarHandler": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  },
  "storage": {
    "NCEEdAvatar": {
      "BucketName": "string",
      "Region": "string"
    }
  }
}
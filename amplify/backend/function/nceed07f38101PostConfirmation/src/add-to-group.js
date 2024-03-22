const {
  CognitoIdentityProviderClient,
  AdminAddUserToGroupCommand,
  GetGroupCommand,
  CreateGroupCommand,
} = require('@aws-sdk/client-cognito-identity-provider');

const cognitoIdentityServiceProvider = new CognitoIdentityProviderClient({});

/**
 * @type {import('@types/aws-lambda').PostConfirmationTriggerHandler}
 */
exports.handler = async (event) => {
  const groupParams = {
    GroupName: process.env.GROUP,
    UserPoolId: event.userPoolId,
  };
  const addUserParams = {
    GroupName: process.env.GROUP,
    UserPoolId: event.userPoolId,
    Username: event.userName,
  };

  try {
    await cognitoIdentityServiceProvider.send(new GetGroupCommand(groupParams));
    await cognitoIdentityServiceProvider.send(new AdminAddUserToGroupCommand(addUserParams));
  } catch(error){
    if (error.response) {
        console.error("Error status:", error.response.status);
        console.error("Error data:", error.response.data);
    } else {
        console.error("Error message:", error.message);
    }
  }

  return event;

};

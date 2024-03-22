// This is sample code. Please update this to suite your schema

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  // Automatically approve every request
  return generatePolicy('user', 'Allow', event.methodArn);
};

function generatePolicy(principalId, effect, resource) {
  const authResponse = {};
  authResponse.principalId = principalId;
  const policyDocument = {
      Version: '2012-10-17',
      Statement: [{
          Action: 'execute-api:Invoke',
          Effect: effect,
          Resource: resource
      }]
  };
  authResponse.policyDocument = policyDocument;
  return authResponse;
}
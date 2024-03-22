/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');
const axios = require('axios');
require('dotenv').config();

AWS.config.update({ region: process.env.REGION });

/**
 * Helper function to sign the request and make a POST request to AppSync GraphQL endpoint.
 */
async function makeAppSyncCall(query, variables = {}) {
  const env = process.env.ENV
  const endpoint = env==="PROD" ? new URL(process.env.API_NCEED_GRAPHQLAPIENDPOINTOUTPUT_PROD) : new URL(process.env.API_NCEED_GRAPHQLAPIENDPOINTOUTPUT_DEV)
  const apiKey = env==="PROD" ? process.env.API_NCEED_GRAPHQLAPIKEYOUTPUT_PROD : process.env.API_NCEED_GRAPHQLAPIKEYOUTPUT_DEV
  let responseBody = null;

  console.log("HIT: ", query, variables)

  console.log("ENDPOINT: ", endpoint, apiKey)
  try{
    const response = await axios.post(endpoint, {
      query: query,
      variables: variables
    }, {
      headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
      }
    });
    responseBody = await response.data;
    console.log('GraphQL response:', responseBody);
  }catch(error){
    if (error.response) {
        console.error("Error status:", error.response.status);
        console.error("Error data:", error.response.data);
    } else {
        console.error("Error message:", error.message);
    }
}
  
  return responseBody;
}

exports.handler = async (event) => {
    const createStudentProfileMutation = `
      mutation CreateStudentProfile($input: CreateNCEStudentProfileInput!) {
          createNCEStudentProfile(input: $input) {
              id
              name
              email
          }
      }
    `;

    const createNCEUserSettingsMutation = `
      mutation CreateNCEUserSettings($input: CreateNCEUserSettingsInput!) {
        createNCEUserSettings(input: $input) {
          id
          notificationsEnabled
          darkModeEnabled
          language
          isAdmin
        }
      }
    `;

    const userSettingsInput = {
      input: {
        id: event.request.userAttributes.sub,
        notificationsEnabled: true,
        darkModeEnabled: false, 
        language: 'en',
        isAdmin: false,
      }
    }

    const studentProfileInput = {
      input: {
          id: event.request.userAttributes.sub,
          name: `${event.request.userAttributes.given_name} ${event.request.userAttributes.family_name}`,
          email: event.request.userAttributes.email,
          status: "INACTIVE",
      },
    };

    try {
        const profileResult = await makeAppSyncCall(createStudentProfileMutation, studentProfileInput);
        const settingsResult = await makeAppSyncCall(createNCEUserSettingsMutation, userSettingsInput)
        console.log("Student profile creation result:", profileResult);
        console.log("Settings creation result: ", settingsResult)
    } catch (error) {
        console.error(error);
    }
    return event;
  }

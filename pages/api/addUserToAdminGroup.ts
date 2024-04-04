import type { NextApiRequest, NextApiResponse } from 'next'
import { AdminAddUserToGroupCommand, AdminListGroupsForUserCommand, CognitoIdentityProviderClient } from '@aws-sdk/client-cognito-identity-provider';
import config from '../../src/amplifyconfiguration.json'

const cognitoIdentityProviderClient = new CognitoIdentityProviderClient({});

const userPoolId = config.aws_user_pools_id;

type ResponseData = {
    Data: object
  }

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
  ) {
    console.log("Received request: ", req.body)
    const params = {
        GroupName: req.body.group,
        UserPoolId: userPoolId,
        Username: req.body.username,
    };

    console.log(`Attempting to add ${req.body.username} to ${req.body.group}`);

    try {
        const response:any = await cognitoIdentityProviderClient.send(new AdminAddUserToGroupCommand(params));
        console.log(`Success adding ${req.body.username} to ${req.body.groupname}: `, response);
        res.status(200).json({Data: response});
    } catch (err) {
        console.log(err);
        throw err;
    }
}
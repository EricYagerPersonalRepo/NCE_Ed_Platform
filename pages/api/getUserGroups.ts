import type { NextApiRequest, NextApiResponse } from 'next'
import { AdminListGroupsForUserCommand, CognitoIdentityProviderClient } from '@aws-sdk/client-cognito-identity-provider';
import config from '../../src/amplifyconfiguration.json'
 
type ResponseData = {
  Data: object
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
    try {
        const listUsers = async({ userPoolId,username }) => {
            const client = new CognitoIdentityProviderClient({});
            const command = new AdminListGroupsForUserCommand({
                UserPoolId: userPoolId,
                Username:username,
            });
            const response = await client.send(command);
            return response.Groups?.map(group => group.GroupName) ?? [];
        }
        const response = await listUsers({userPoolId:config.aws_user_pools_id, username:req.body.username})
        res.status(200).json({Data: response});
    } catch (error) {
        console.error(error);
        res.status(500).json({ Data: {"ERROR: ": error} });
    }
}
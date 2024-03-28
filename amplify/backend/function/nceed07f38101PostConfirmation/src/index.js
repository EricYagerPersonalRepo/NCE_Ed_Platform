/* Amplify Params - DO NOT EDIT
	API_AVATARHANDLERAPIGATEWAY_APIID
	API_AVATARHANDLERAPIGATEWAY_APINAME
	API_NCEED_GRAPHQLAPIENDPOINTOUTPUT
	API_NCEED_GRAPHQLAPIIDOUTPUT
	API_NCEED_GRAPHQLAPIKEYOUTPUT
	API_NCEED_STUDENTPROFILETABLE_ARN
	API_NCEED_STUDENTPROFILETABLE_NAME
	ENV
	REGION
	STORAGE_NCEEDAVATARS_BUCKETNAME
Amplify Params - DO NOT EDIT *//**
 * @fileoverview
 *
 * This CloudFormation Trigger creates a handler which awaits the other handlers
 * specified in the `MODULES` env var, located at `./${MODULE}`.
 */


const moduleNames = process.env.MODULES.split(',');
const modules = moduleNames.map((name) => require(`./${name}`));

/**
 * This async handler iterates over the given modules and awaits them.
 *
 * @see https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html#nodejs-handler-async
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 *
 */
exports.handler = async (event, context) => {
	await Promise.all(modules.map((module) => module.handler(event, context)));
	return event;
};
const AWS = require('aws-sdk');
const S3 = new AWS.S3();
const { getCache, setCache } = require('./cache');

exports.handler = async (event) => {
    const httpMethod = event.httpMethod;
    const { userID } = event.pathParameters;

    switch (httpMethod) {
        case 'GET':
            return handleGetRequest(userID);
        case 'PUT':
            return handlePutRequest(event, userID);
        case 'DELETE':
            return handleDeleteRequest(userID);
        default:
            return {
                statusCode: 400,
                body: JSON.stringify({ message: 'Unsupported request method' }),
            };
    }
};

async function handleGetRequest(userID) {
    let avatar;
    try {
        avatar = await getCache(userID);
        if (!avatar) {
            const s3Response = await S3.getObject({
                Bucket: 'nce-ed-avatar-bucket212417-staging',
                Key: `public/user_files/${userID}/avatar.png`,
            }).promise();

            avatar = s3Response.Body;
            await setCache(userID, avatar);
        }

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'image/png' },
            body: avatar.toString('base64'),
            isBase64Encoded: true,
        };
    } catch (error) {
        console.error('Error fetching avatar:', error);
        return { statusCode: 500, body: 'Internal Server Error' };
    }
}

async function handlePutRequest(event, userID) {
    console.log(`Received event: ${JSON.stringify(event)}`);
    console.log('userID: ', userID)
    const imageData = event.body; 
    const objectKey = `public/user_files/${userID}/avatar.png`;

    try {
        await S3.putObject({
            Bucket: 'nce-ed-avatar-bucket212417-staging',
            Key: objectKey,
            Body: Buffer.from(imageData, 'base64'), // Convert base64 to binary
            ContentType: 'image/png',
        }).promise();

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Avatar updated successfully' }),
        };
    } catch (error) {
        console.error('Error updating avatar:', error);
        return { statusCode: 500, body: JSON.stringify({ message: 'Internal Server Error', error: error.toString() }) };
    }
}

async function handleDeleteRequest(userID) {
    console.log('Deleting avatar for userID:', userID);
    const objectKey = `public/user_files/${userID}/avatar.png`;

    try {
        await S3.deleteObject({
            Bucket: 'nce-ed-avatar-bucket212417-staging',
            Key: objectKey,
        }).promise();

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Avatar deleted successfully' }),
        };
    } catch (error) {
        console.error('Error deleting avatar:', error);
        return { statusCode: 500, body: JSON.stringify({ message: 'Internal Server Error', error: error.toString() }) };
    }
}

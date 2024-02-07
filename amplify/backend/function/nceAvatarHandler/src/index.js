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
        default:
            return {
                statusCode: 400,
                body: JSON.stringify({ message: 'Unsupported request method' }),
            };
    }
};

async function handleGetRequest(userId) {
    let avatar;
    try {
        avatar = await getCache(userId);
        if (!avatar) {
            const s3Response = await S3.getObject({
                Bucket: 'nce-ed-avatar-bucket212417-staging',
                Key: `public/user_files/${userId}/avatar.png`,
            }).promise();

            avatar = s3Response.Body;
            await setCache(userId, avatar);
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
    console.log('UserID: ', userID)
    // Extract the image data from the event body
    const imageData = event.body; // Assume this data is base64 encoded image data

    // Construct the S3 object key dynamically using the userId
    const objectKey = `public/user_files/${userID}/avatar.png`;

    try {
        // Convert imageData from base64 and upload to S3
        await S3.putObject({
            Bucket: 'nce-ed-avatar-bucket212417-staging',
            Key: objectKey,
            Body: Buffer.from(imageData, 'base64'), // Convert base64 to binary
            ContentType: 'image/png',
        }).promise();

        // Optionally update cache here if you're using caching for avatar retrieval
        // await setCache(userId, Buffer.from(imageData, 'base64'));

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Avatar updated successfully' }),
        };
    } catch (error) {
        console.error('Error updating avatar:', error);
        return { statusCode: 500, body: JSON.stringify({ message: 'Internal Server Error', error: error.toString() }) };
    }
}
import { get, put } from "aws-amplify/api"
import { uploadData } from "aws-amplify/storage"

/**
 * uploadFileToS3 Function - Handles the uploading of files to an S3 bucket.
 * 
 * This function takes a file and an optional path to upload the file to an S3 bucket. It utilizes the 'uploadData'
 * function to perform the upload operation. The 'accessLevel' is set to 'guest', allowing for public access. During
 * the upload process, it logs the progress to the console, displaying the percentage of the file that has been
 * transferred. If the upload is successful and a result is returned, the browser window is reloaded to reflect the
 * changes. In case of an error during the upload process, it logs the error message to the console.
 * 
 * @param {any} file - The file to be uploaded.
 * @param {string} path - The path in the S3 bucket where the file will be uploaded. Defaults to an empty string.
 * 
 * @returns {Promise<void>} - The function does not return a value but may trigger a window reload on success.
 */
export async function uploadFileToS3(file:any, path = '') {
    try {
        let result = await uploadData({
            key: path,
            data: file,
            options: {
                accessLevel: 'guest',
                onProgress: ({ transferredBytes, totalBytes }) => {
                    if (totalBytes) {
                        console.log(
                            `Upload progress ${
                                Math.round(transferredBytes / totalBytes) * 100
                            } %`
                        )
                    }
                }
            }
        }).result

        console.log(result)

        if(result) return(result)

    } catch (error) {
        console.log('Error with file upload to S3: ', error)
        return(null)
    }
}

/**
 * downloadAvatarFromS3 Function - Fetches an avatar from an S3 bucket using a specified path.
 * 
 * This function is designed to retrieve a user's avatar stored in an S3 bucket. It takes a 'path'
 * parameter, which specifies the location within the S3 bucket from where the avatar should be downloaded.
 * The function utilizes a REST operation, identified by 'avatarHandlerGateway', to perform the GET request.
 * Upon success, it logs the response indicating the successful retrieval of the avatar. If the operation
 * fails, it catches and logs the error.
 * 
 * @param {string} path - The specific path within the S3 bucket to the desired avatar.
 * 
 * @returns {void} - This function does not return a value. It logs the outcome of the GET operation.
 */
export async function downloadAvatarFromS3(path:string) {
    
    try {
        const restOperation = get({ 
            apiName: 'avatarHandlerApiGateway',
            path: path
        });
    
        const response = await restOperation.response;
        console.log("RESPONSE: ", response)
        return(response)
    } catch (error) {
        console.log('downloadAvatarFromS3 error: GET call failed to retrieve avatar from S3: ', error);
    }
}
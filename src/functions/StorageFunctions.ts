import { get } from "aws-amplify/api"
import { downloadData, uploadData } from "aws-amplify/storage"


export async function uploadFileToS3(file:any, path = '') {
    try {
        const result = await uploadData({
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
        console.log('Succeeded: ', result)
    } catch (error) {
        console.log('Error : ', error)
    }
}

export async function downloadAvatarFromS3(path:string) {
    try {
        const restOperation = get({ 
            apiName: 'avatarHandlerGateway',
            path: path
        });
    
        const response = await restOperation.response;
        console.log('GET call succeeded: ', response);
    } catch (error) {
        console.log('GET call failed: ', error);
    }
}
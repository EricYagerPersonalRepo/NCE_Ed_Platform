import { uploadData } from "aws-amplify/storage"


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
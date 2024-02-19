import { getUrl } from "aws-amplify/storage";

/**
 * getPresignedUrl Function - Asynchronously retrieves a presigned URL for a given filename.
 * 
 * This function is designed to fetch a presigned URL from a backend service, allowing for secure,
 * temporary access to a resource specified by `filename`. It utilizes a custom `getUrl` function,
 * which should be configured to interact with your backend or cloud storage provider (e.g., AWS S3).
 * The `getUrl` function is expected to take an object containing the `key` (the filename) and
 * `options`, with an option to validate the existence of the object. This setup ensures that only
 * existing resources can be accessed and that the URL's validity is confirmed before it's returned.
 * 
 * @param {string} filename - The name of the file for which to generate a presigned URL.
 * @returns {Promise<string>} - A promise that resolves with the presigned URL as a string.
 */

export const getPresignedUrl = async (filename: string): Promise<string> => {
    try{
        const urlExists = await getUrl({
            key: filename,
            options: {
              validateObjectExistence: true
            }
        })
    
        console.log("urlExists: ", urlExists)
    
        return urlExists.url.toString()
    }catch(presignedURLCallError){
        return ""
    }
}

/**
 * getUrlResult Function - Asynchronously retrieves a URL for a specified filename with custom options.
 * 
 * This function interacts with a backend service or cloud storage provider to obtain a URL for the given
 * filename. The URL is generated based on specific options, including access level, expiration time, and
 * whether to use an accelerated endpoint. It's primarily used to access files stored in a secure manner,
 * allowing for controlled access based on the provided options. The `getUrl` call is configured with
 * an object containing the `key` (the filename) and `options`, which dictate how the URL is generated.
 * 
 * @param {string} filename - The name of the file for which to generate a URL.
 * @returns {Promise<any>} - A promise that resolves with the URL object, containing the URL and potentially other metadata.
 */

export const getUrlResult = async(filename:string) => {
    const url = await getUrl({
        key: filename,
        options: {
            accessLevel: 'private' ,
            expiresIn: 1000,
            useAccelerateEndpoint: false 
        },
    })

    return url
}


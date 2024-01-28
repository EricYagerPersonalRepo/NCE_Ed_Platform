import { getUrl } from "aws-amplify/storage";

export const validateFileExists = async(filename:string) => {
    const urlExists = await getUrl({
        key: filename,
        options: {
          validateObjectExistence: true // defaults to false
        }
    })

    return urlExists
}

export const getUrlResult = async(filename:string) => {
    const url = await getUrl({
        key: filename,
        options: {
            accessLevel: 'private' , // can be 'private', 'protected', or 'guest' but defaults to `guest`
            validateObjectExistence: false,  // defaults to false
            expiresIn: 20, // validity of the URL, in seconds. defaults to 900 (15 minutes) and maxes at 3600 (1 hour)
            useAccelerateEndpoint: true // Whether to use accelerate endpoint.
        },
    })

    return url
}



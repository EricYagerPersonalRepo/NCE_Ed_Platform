import { getUrl } from "aws-amplify/storage";

export const validateFileExists = async(filename:string) => {
    console.log("validateURL call", filename)
    const urlExists = await getUrl({
        key: filename,
        options: {
          validateObjectExistence: true
        }
    })
    
    return urlExists
}

export const getUrlResult = async(filename:string) => {
    const url = await getUrl({
        key: filename,
        options: {
            accessLevel: 'private' , // can be 'private', 'protected', or 'guest' but defaults to `guest`
            expiresIn: 1000, // validity of the URL, in seconds. defaults to 900 (15 minutes) and maxes at 3600 (1 hour)
            useAccelerateEndpoint: false // Whether to use accelerate endpoint.
        },
    })

    return url
}



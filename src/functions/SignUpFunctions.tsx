/**
 * Array of allowed ZIP codes for the signup process.
 *
 * This array 'allowedZipCodes' contains a list of specific ZIP codes that are permitted
 * in the signup process. It serves as a filter to restrict signups to users from
 * certain geographical areas, defined by these ZIP codes. This can be used in the 
 * validation process to check if a user's provided ZIP code matches one of the
 * allowed values, thereby determining their eligibility to complete the signup process.
 *
 * This array is intended to be used in conjunction with other functions that handle
 * signup data validation and processing. The specific ZIP codes listed here are examples,
 * and can be modified or extended based on the application's requirements.
 */
export const allowedZipCodes = [
    13642,
    13630,
    13617,
    13676,
    13699
]

/**
 * Calculates the age based on the provided birthday.
 * 
 * This function computes the age by comparing the current date with the birthday date.
 * It accounts for the month and day of the month to ensure accurate calculation of age.
 * 
 * @param {any} event - The event containing the birthday date.
 * @returns {number} The calculated age.
 */
export const ageCaluclatedFromInputBirthday = (event:any) => {
    const birthday = new Date(event)
    const today = new Date()
    let age = today.getFullYear() - birthday.getFullYear()
    const m = today.getMonth() - birthday.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
        age--
    }

    return(age)
}
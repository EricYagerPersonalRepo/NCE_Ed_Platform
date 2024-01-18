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
    const birthday = new Date(event);
    const today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    const m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }

    return(age)
}
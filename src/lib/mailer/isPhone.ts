const isValidPhoneNumber = (phoneNumber: string): [boolean, string]  => {
    // Define a regular expression pattern for valid phone numbers
    const testPattern = /[a-zA-Z]/; // Assumes a 10-digit phone number

    // Check if the cleaned number matches the phone pattern
    if (testPattern.test(phoneNumber)){
        return [false, "not a phone number"];
    } else {
        return [true, ""]
    }
}

export default isValidPhoneNumber;
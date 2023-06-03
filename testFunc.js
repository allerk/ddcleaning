// function isValidPhoneNumber(phoneNumber: string) {
//     // Define a regular expression pattern for valid phone numbers
//     const testPattern = /[a-zA-Z]/; // Assumes a 10-digit phone number
//
//     // Check if the cleaned number matches the phone pattern
//     return testPattern.test(phoneNumber);
// }
//
// const phoneNumber = '+1 (1a23) 456-7890';
// const isValid = isValidPhoneNumber(phoneNumber);
console.log(/[a-zA-Z]/.test("+37255969946")); // Output: true
// console.log(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test("alexandr.lerko@gmaˇˇil.com"))
console.log(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test("alexandr.lerko@gma\"\@il.com"))
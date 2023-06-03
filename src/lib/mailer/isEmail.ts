const isEmail = (user_email: string): [boolean, string] => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(user_email)){
        // setError("not valid email")
        return [false, "not valid email"];
    } else {
        return [emailRegex.test(user_email), ""];
    }
}

export default isEmail;
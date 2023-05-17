const isEmail = (user_email: string): [boolean, string] => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user_email)){
        // setError("not valid email")
        return [false, "not valid email"];
    } else {
        return [emailRegex.test(user_email), ""];
    }
}

export default isEmail;
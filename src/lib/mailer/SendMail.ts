import emailjs from "@emailjs/browser";

const SendEmail = (serviceId: string, templateId: string, form: string | HTMLFormElement, publicKey: string) => {

    emailjs.sendForm(serviceId, templateId, form, publicKey)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
};

export default SendEmail;
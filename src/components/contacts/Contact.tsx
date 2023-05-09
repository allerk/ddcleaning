import './Contact.css';
import {FormEvent, useEffect, useRef, useState} from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const formRef = useRef<HTMLFormElement>(null);

    // const form = useRef<string | HTMLFormElement>("");
    //
    const [configData, setConfigData] = useState({
        user_name: '',
        user_email: '',
        user_phone: '',
        user_topic: '',
        user_text: ''
    });

    const [isDisabled, setIsDisabled] = useState(true);

    const [error, setError] = useState<string>("")
    const [successMessage, setSuccessMessage] = useState<string>("")

    const sendEmail = (e: FormEvent) => {

        emailjs.sendForm('service_oqhwtiz', 'template_0b0pwhv', formRef.current!, 'sc2hel2uIvylSCfIe')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const handleChange = (event:
                              EventTarget & HTMLInputElement |
                              EventTarget & HTMLSelectElement |
                              EventTarget & HTMLTextAreaElement) => {
        setConfigData({ ...configData, [event.name]: event.value });
    }

    const handleSubmit = (event: FormEvent) => {
        console.log("submit")
        event.preventDefault();
        console.log(isEmail());
        if (isEmail()){
            sendEmail(event)
            clearForm();
        }
    }

    const clearForm = () => {
        setConfigData({
            user_name: '',
            user_email: '',
            user_phone: '',
            user_topic: '',
            user_text: ''
        });

        setError("");
    }
    const isEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(configData.user_email)){
            setError("not valid email")
            return false;
        } else {
            return emailRegex.test(configData.user_email);
        }
    }

    if (isDisabled && (configData.user_name.length !== 0
        && configData.user_email.length !== 0
        && configData.user_phone.length !== 0
        && configData.user_topic.length !== 0
        && configData.user_text.length !== 0)) {
        setIsDisabled(false);
    }

    if (!isDisabled && (configData.user_name.length === 0
        && configData.user_email.length === 0
        && configData.user_phone.length === 0
        && configData.user_topic.length === 0
        && configData.user_text.length === 0)){
        setIsDisabled(true);
    }

    return(
        <div className="bg-contacts pb-5">
            <div className="container max-w-4k">
                <h1 className="h1-about text-md-start p-contacts">Write a latter to connect with us</h1>
                <form ref={formRef} className="row" onSubmit={(e) => handleSubmit(e)}>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6">
                                <label className="contacts-text">Name</label>
                                <input
                                    name="user_name"
                                    className="input-contacts"
                                    type="text"
                                    onChange={(e) => handleChange(e.target)}
                                />
                                <label className="contacts-text">Email</label>
                                <input
                                    name="user_email"
                                    className="input-contacts"
                                    type="text"
                                    onChange={(e) => handleChange(e.target)}
                                />
                                {error !== "" ? (
                                    <span className="text-md-start">
                                        {error}
                                    </span>
                                ) : <></>}
                                <label className="contacts-text">Phone number</label>
                                <input
                                    name="user_phone"
                                    className="input-contacts"
                                    type="text"
                                    onChange={(e) => handleChange(e.target)}
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="contacts-text">Topic</label>
                                <input
                                    name="user_topic"
                                    className="input-contacts"
                                    type="text"
                                    onChange={(e) => handleChange(e.target)}
                                />
                                <div className="pt-2">
                                    <textarea
                                        name="user_text"
                                        className="textarea-contracts"
                                        maxLength={1000}
                                        onChange={(e) => handleChange(e.target)}
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-md-end">
                            <div className="contacts-info-title contacts-text" style={{paddingBottom: "20px"}}>Info</div>
                            <div className="business-Text">
                                Pirita tee 102, 12011, Tallinn
                            </div>
                            <div className="business-Text">
                                Регистрационный код: 11279028
                            </div>
                            <div className="business-Text">
                                Номер лица, обязанного по НСО: EE101080408
                            </div>
                            <div className="business-Text">
                                Номер лица, обязанного по НСО:  EE101080408  Номер расчетного счета: EE301700017001463846  (Luminor Bank AS)
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <p className="reminder text-md-start" style={{paddingLeft: "12"}}>Заполняя форму, вы даете согласие на обраотку персональных данных</p>
                        <div className="col-md-4 text-md-start pb-3">
                            <input disabled={isDisabled} type="submit" className="send-button-contracts" value="Send" style={{marginLeft: "0"}}/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Contact;
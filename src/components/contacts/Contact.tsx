import './Contact.css';
import {FormEvent, useEffect, useRef, useState} from "react";
import ReceiveAnswerBy from "../common/ReceiveAnswerBy";
import sendEmail from "../../lib/mailer/send-mail";
import SendMessageNotification from "../common/SendMessageNotification";
import isEmail from "../../lib/mailer/isEmail";
import isPhone from "../../lib/mailer/isPhone";

interface IErrors{
    id: number,
    errorMsg: string
}
const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const formRef = useRef<HTMLFormElement>(null);

    const [configData, setConfigData] = useState({
        user_name: '',
        user_email: '',
        user_phone: '',
        user_topic: '',
        user_text: '',
        user_answer: ''
    });

    const [isDisabled, setIsDisabled] = useState(true);

    const [error, setError] = useState<IErrors[]>([
        {
            id: 0,
            errorMsg: ""
        },
        {
            id: 1,
            errorMsg: ""
        }
    ])
    const [successMessage, setSuccessMessage] = useState<string>("")

    const handleChange = (event:
                              EventTarget & HTMLInputElement |
                              EventTarget & HTMLSelectElement |
                              EventTarget & HTMLTextAreaElement) => {
        setConfigData({ ...configData, [event.name]: event.value });
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        let tempErrorList: IErrors[] = [...error];
        if (isEmail(configData.user_email)[0] && isPhone(configData.user_phone)[0]){
            // sendEmail('service_oqhwtiz', 'template_0b0pwhv', formRef.current!, 'sc2hel2uIvylSCfIe');
            setSuccessMessage("Message was sent");
            clearForm().then(r => {
                return r;
            });
        }

        if (!isEmail(configData.user_email)[0]){
            tempErrorList[0] = {...tempErrorList[0], errorMsg: isEmail(configData.user_email)[1]};
        }
        if (!isPhone(configData.user_phone)[0]){
            tempErrorList[1] = {...tempErrorList[1], errorMsg: isPhone(configData.user_phone)[1]};
        }

        setError(tempErrorList);
    }

    const clearForm = async () => {
        console.log("clear form was called")
        await setConfigData({
            user_name: '',
            user_email: '',
            user_phone: '',
            user_topic: '',
            user_text: '',
            user_answer: ''
        });

        setError([
            {
            id: 0,
            errorMsg: ""
            },
            {
                id: 1,
                errorMsg: ""
            }
        ]);
    }

    if (isDisabled && (configData.user_name.length !== 0
        && configData.user_email.length !== 0
        && configData.user_phone.length !== 0
        && configData.user_topic.length !== 0
        && configData.user_text.length !== 0
        && configData.user_answer.length !== 0)) {
        setIsDisabled(false);
    }

    if (!isDisabled && (configData.user_name.length === 0
        && configData.user_email.length === 0
        && configData.user_phone.length === 0
        && configData.user_topic.length === 0
        && configData.user_text.length === 0
        && configData.user_answer.length === 0)){
        setIsDisabled(true);
    }

    return(
        <div className="bg-contacts pb-5">
            <div className="container max-w-4k">
                <h1 className="h1-about text-md-start p-contacts">Write a latter to connect with us</h1>
                {successMessage !== "" ? (
                    <>
                        <SendMessageNotification message={successMessage}></SendMessageNotification>
                    </>
                ) : ""}
                <form ref={formRef} className="row" onSubmit={(e) => handleSubmit(e)}>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6">
                                <label className="contacts-text">Name<span style={{color: "red"}}>*</span></label>
                                <input
                                    name="user_name"
                                    className="input-contacts"
                                    type="text"
                                    value={configData.user_name}
                                    onChange={(e) => handleChange(e.target)}
                                />
                                <label className="contacts-text">Email<span style={{color: "red"}}>*</span></label>
                                <input
                                    name="user_email"
                                    className="input-contacts"
                                    type="text"
                                    value={configData.user_email}
                                    onChange={(e) => handleChange(e.target)}
                                />
                                {error[0].errorMsg !== "" ? (
                                    <span className="text-md-start">
                                        {error[0].errorMsg}
                                    </span>
                                ) : <></>}
                                <label className="contacts-text">Phone number<span style={{color: "red"}}>*</span></label>
                                <input
                                    name="user_phone"
                                    className="input-contacts"
                                    type="tel"
                                    value={configData.user_phone}
                                    onChange={(e) => handleChange(e.target)}
                                />
                                {error[1].errorMsg !== "" ? (
                                    <span className="text-md-start">
                                        {error[1].errorMsg}
                                    </span>
                                ) : <></>}
                            </div>
                            <div className="col-md-6">
                                <label className="contacts-text">Topic<span style={{color: "red"}}>*</span></label>
                                <input
                                    name="user_topic"
                                    className="input-contacts"
                                    type="text"
                                    value={configData.user_topic}
                                    onChange={(e) => handleChange(e.target)}
                                />
                                <div className="pt-2">
                                    <textarea
                                        name="user_text"
                                        className="textarea-contracts"
                                        maxLength={1000}
                                        value={configData.user_text}
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
                    <ReceiveAnswerBy handleChange={handleChange} data={configData.user_answer}></ReceiveAnswerBy>
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
import inst from '../../assets/topics/Instagram Black Line.svg';
import './Contact.css';
import {FormEvent, useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import Faq from "../services/faq/Faq";

const Contact = () => {

    // const form = useRef<string | HTMLFormElement>("");
    //
    // const [configData, setConfigData] = useState({
    //     user_name: '',
    //     user_email: '',
    //     user_phone: '',
    //     user_topic: ''
    // });

    // From: {{user_name}}
    //
    // Email: {{user_email}}
    //
    // Phone: {{user_phone}}
    //
    // Topic: {{user_topic}}
    //
    // {{message}}

    // const sendEmail = (e: FormEvent) => {
    //     e.preventDefault();
    //
    //     emailjs.sendForm('service_oqhwtiz', 'template_0b0pwhv', configData.user_name, 'sc2hel2uIvylSCfIe')
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    // };
    //
    // const handleChange = (event:
    //                           EventTarget & HTMLInputElement |
    //                           EventTarget & HTMLSelectElement |
    //                           EventTarget & HTMLTextAreaElement) => {
    //     console.log(configData)
    //     setConfigData({ ...configData, [event.name]: event.value });
    // }

    return(
        <div className="bg-contacts pb-5">
            <div className="container max-w-4k">
                <h1 className="h1-about text-md-start" style={{paddingBottom: "75px", paddingTop: "100px"}}>Write a latter to connect with us</h1>
                <form className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6">
                                <label className="contacts-text">Name</label>
                                <input name="squareMeters" className="input-contacts"/>
                                <label className="contacts-text">Email</label>
                                <input name="squareMeters" className="input-contacts"/>
                                <label className="contacts-text">Phone number</label>
                                <input name="squareMeters" className="input-contacts"/>
                            </div>
                            <div className="col-md-6">
                                <label className="contacts-text">Topic</label>
                                <input name="squareMeters" className="input-contacts"/>
                                <div className="pt-2">
                                    <textarea
                                        className="textarea-contracts"
                                        style={{height: "197px", maxHeight: "197px", width: "100%"}}
                                        maxLength={1000}
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
                </form>
                <p className="reminder text-md-start" style={{paddingLeft: "0"}}>Заполняя форму, вы даете согласие на обраотку персональных данных</p>
                <div className="row">
                    <div className="col-md-4 text-md-start pb-3">
                        <input type="button" className="send-button-contracts" value="Send" style={{marginLeft: "0"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contact;
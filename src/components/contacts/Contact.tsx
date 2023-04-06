import inst from '../../assets/topics/Instagram Black Line.svg';
import './Contact.css';
import {FormEvent, useRef, useState} from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef<string | HTMLFormElement>("");

    const [configData, setConfigData] = useState({
        user_name: '',
        user_email: '',
        user_phone: '',
        user_topic: ''
    });

    // From: {{user_name}}
    //
    // Email: {{user_email}}
    //
    // Phone: {{user_phone}}
    //
    // Topic: {{user_topic}}
    //
    // {{message}}

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();

        emailjs.sendForm('service_oqhwtiz', 'template_0b0pwhv', configData.user_name, 'sc2hel2uIvylSCfIe')
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
        console.log(configData)
        setConfigData({ ...configData, [event.name]: event.value });
    }

    return(
        <div id="contacts">
            <div className="container container-fluid" style={{paddingTop: "12px"}}>
                <div className="row">
                    <section id="info">
                        <h1 className="h1-responsive font-weight-bold text-center my-4">Contact us</h1>
                        <span>Below you can see our contact info</span>
                        <div className="row" style={{marginTop: "25px"}}>
                            <div className="col-md-3"></div>
                            <div className="col-md-6 infoColumn">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-5" style={{textAlign: "left"}}>
                                            <p style={{fontWeight: "bold"}}>
                                                Info
                                            </p>
                                            <p>Pirita tee 102, 12011, Tallinn</p>
                                            <p>Регистрационный код: 11279028</p>
                                            <p>Номер лица, обязанного по НСО: EE101080408</p>
                                            <p>Номер расчетного счета: EE301700017001463846 (Luminor Bank AS)</p>
                                        </div>
                                        <div className="col-md-3">
                                        </div>
                                        <div className="col-md-4" style={{textAlign: "left"}}>
                                            <div className="">
                                                <p className="" style={{fontWeight: "bold"}}>Phone</p>
                                                <p className="">(+372) 6 391 377</p>
                                            </div>
                                            <div className="">
                                                <p className="" style={{fontWeight: "bold"}}>Email</p>
                                                <p className="">ddcleaning@gmail.com</p>
                                            </div>
                                            <div className="row">
                                                <p style={{fontWeight: "bold"}}>Social medias</p>
                                                <div className="col">
                                                    <a href="/">
                                                        <img
                                                            src={inst}
                                                            alt="instagram"
                                                            className="d-inline-block img-fluid mb-4 rounded-4"
                                                            style={{width: "25%", height: "auto"}}
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                    </section>
                    <section id="letter" className="mb-4">
                        <h1 className="h1-responsive font-weight-bold text-center my-4">Write a letter</h1>
                        <div className="row">
                            <div className="col-md-12 mb-md-0 mb-5">
                                <form onSubmit={sendEmail} style={{textAlign: "left"}} id="contact-form" name="contact-form" action="" method="POST">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="md-form mb-0">
                                                <label className="control-label">Name</label>
                                                <input
                                                    placeholder="e.g Deniz Levashov"
                                                    type="text"
                                                    // id="name"
                                                    name="user_name"
                                                    className="form-control"
                                                    onChange={(e) => handleChange(e.target)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="md-form mb-0">
                                                <label className="">Email</label>
                                                <input
                                                    placeholder="e.g ddcleaning@gmail.com"
                                                    type="text"
                                                    // id="email"
                                                    name="user_email"
                                                    className="form-control"
                                                    onChange={(e) => handleChange(e.target)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="md-form mb-0">
                                                <label className="">Phone number</label>
                                                <input
                                                    placeholder="e.g +37256987652"
                                                    type="text"
                                                    // id="email"
                                                    name="user_phone"
                                                    className="form-control"
                                                    onChange={(e) => handleChange(e.target)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="md-form mb-0">
                                                <label className="">Topic</label>
                                                <input
                                                    type="text"
                                                    // id="subject"
                                                    name="user_topic"
                                                    className="form-control"
                                                    onChange={(e) => handleChange(e.target)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="md-form">
                                                <label>Letter</label>
                                                <textarea
                                                    // id="message"
                                                    name="message"
                                                    className="form-control md-textarea"
                                                    onChange={(e) => handleChange(e.target)}
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <input style={{marginTop: "12px"}} type="submit" value="Send" className="btn btn-primary"/>
                                </form>
                                <div className="status"></div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
};

export default Contact;
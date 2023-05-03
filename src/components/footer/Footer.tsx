import './Footer.css';
import logo from "../header/logo.svg";
import insta from '../footer/assets/insta.svg';

const Footer = () => {
    return(
            <footer className="py-3 sticky-footer" style={{backgroundColor: "white"}}>
                <div className="container max-w-4k">
                    <div className="row">
                        <div className="col text-md-start">
                            <a href="/"><img className="logoBig disabled" src={logo} alt="logo"/></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 text-md-start">
                            <div className="footerText">
                                Pirita tee 102, 12011, Tallinn
                            </div>
                            <div className="footerText">
                                Регистрационный код: 11279028
                            </div>
                            <div className="footerText">
                                Номер лица, обязанного по НСО: EE101080408
                            </div>
                        </div>
                        <div className="col-md-3 text-md-end">
                            <div className="footerText test">
                                Home page
                            </div>
                            <div className="footerText">
                                Services
                            </div>
                        </div>
                        <div className="col-md-3 text-md-end">
                            <div className="footerText">
                                Contact us
                            </div>
                        </div>
                        <div className="col-md-3 text-md-end">
                            <div className="footerTextNumber">
                                +(372) 6 391 377
                            </div>
                            <div>
                                <img
                                    src={insta}
                                    alt="instagram"
                                    className="d-inline-block img-fluid mb-4 rounded-4"
                                    style={{width: "15%", height: "auto"}}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    )
}

export default Footer;
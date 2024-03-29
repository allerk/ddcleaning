import picture from "../assets/questions.jpg"
import "./Questions.css"
import {Link} from "react-router-dom";

const Questions = () => {
    return(
        <>
            <div className="row" style={{paddingTop: "150px", paddingBottom: "150px"}}>
                <div className="col-md-6 blank-right">
                    <div className="text-white bg-white parent br-text">
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-11 center-mobile-questions">
                                <h1 className="h1-questions text-center">
                                    Остались вопросы?
                                </h1>
                                <p className="p-questions text-center">
                                    Свяжитесь с нами и получите незамедлительный и полный ответ
                                </p>
                                <div className="row justify-content-center align-content-center">
                                    {/*<button className="btn-contact align-content-center">*/}
                                    {/*    <Link to="/contacts" className="align-content-center" style={{color: "white"}}>*/}
                                    {/*        /!*<button className="btn-contact ">contact</button>*!/*/}
                                    {/*        contact*/}
                                    {/*    </Link>*/}
                                    {/*</button>*/}
                                    <Link to="/contacts" className="btn-contact-link" style={{color: "white"}}>
                                        <button className="btn-contact ">contact</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-end blank-left">
                    <img src={picture} alt="picture" className="d-inline-block img-fluid mb-4 br-image" style={{width: "100%"}}/>
                </div>
            </div>
        </>
    )
}

export default Questions;
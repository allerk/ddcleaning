import {useState} from "react";
import "./PopUpService.css";

const PopUpService = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };
    return(
        <div>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header" style={{backgroundColor: "#EAEFF5", borderBottom: "none"}}>
                            <h5 className="modal-title" id="staticBackdropLabel">Choose what you want</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={{backgroundColor: "#EAEFF5"}}>
                            <div className="row g-2">
                                <div className="col-xl-3 col-md-3 pb-5 pt-3">
                                    <div className="card card-popup">
                                        <div className="mx-2 card-body">
                                            <h5 className="service-subname my-2 ">One-off clean</h5>
                                            <p className="service-subdescription">
                                                All the essentials for starting a business
                                            </p>
                                            <p className="service-price">$12<small className="service-price-date"
                                                                                style={{fontSize: "18px"}}>/mo</small></p>
                                            <a href="#" className=""><input type="button" className="service-button" value="Buy Hobby"/></a>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-2">

                                            </div>
                                            <div className="col-md-8">
                                                <hr className="popup-hr"></hr>
                                            </div>
                                            <div className="col-md-2">

                                            </div>
                                        </div>
                                        <div className="mx-2 card-body" style={{paddingTop: "0"}}>
                                            <p className="popup-included">What's included</p>
                                            <ul className="popup-ul">
                                                <li className="popup-li text-md-start">
                                                    <i className="popup-i">
                                                        Essentials
                                                    </i>
                                                </li>
                                                <li className="popup-li text-md-start">
                                                    <i className="popup-i">
                                                        Essentials
                                                    </i>
                                                </li>
                                                <li className="popup-li text-md-start">
                                                    <i className="popup-i">
                                                        Essentials
                                                    </i>
                                                </li>
                                                <li className="popup-li text-md-start">
                                                    <i className="popup-i">
                                                        Essentials
                                                    </i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-3 pb-5 pt-3">
                                    <div className="card" style={{borderRadius: "20px", border: "none", paddingLeft: "16px", paddingRight: "16px"}}>
                                        <div className="mx-2 card-body">
                                            <h5 className="service-subname my-2 ">Deep clean</h5>
                                            <p className="service-subdescription">
                                                All the essentials for starting a business
                                            </p>
                                            <p className="service-price">$20<small className="service-price-date"
                                                                                style={{fontSize: "18px"}}>/mo</small></p>

                                            <a href="#" className=""><input type="button" className="service-button" value="Buy Freelancer"/></a>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-2">

                                            </div>
                                            <div className="col-md-8">
                                                <hr className="popup-hr"></hr>
                                            </div>
                                            <div className="col-md-2">

                                            </div>
                                        </div>
                                        <div className="mx-2 card-body" style={{paddingTop: "0"}}>
                                            <p className="popup-included">What's included</p>
                                            <ul className="popup-ul">
                                                <li className="popup-li text-md-start">
                                                    <i className="popup-i">
                                                        Essentials
                                                    </i>
                                                </li>
                                                <li className="popup-li text-md-start">
                                                    <i className="popup-i">
                                                        Essentials
                                                    </i>
                                                </li>
                                                <li className="popup-li text-md-start">
                                                    <i className="popup-i">
                                                        Essentials
                                                    </i>
                                                </li>
                                                <li className="popup-li text-md-start">
                                                    <i className="popup-i">
                                                        Essentials
                                                    </i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-3 pb-5 pt-3">
                                    <div className="card" style={{borderRadius: "20px", border: "none", paddingLeft: "16px", paddingRight: "16px"}}>
                                        <div className="mx-2 card-body">
                                            <h5 className="service-subname my-2 ">End of tenancy clean</h5>
                                            <p className="service-subdescription">
                                                All the essentials for starting a business
                                            </p>
                                            <p className="service-price">$40<small className="service-price-date"
                                                                                style={{fontSize: "18px"}}>/mo</small></p>
                                            <a href="#" className=""><input type="button" className="service-button" value="Buy Startup"/></a>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-2">

                                            </div>
                                            <div className="col-md-8">
                                                <hr className="popup-hr"></hr>
                                            </div>
                                            <div className="col-md-2">

                                            </div>
                                        </div>
                                        <div className="mx-2 card-body" style={{paddingTop: "0"}}>
                                            <p className="popup-included">What's included</p>
                                            <ul className="popup-ul">
                                                <li className="popup-li text-md-start">
                                                    <i className="popup-i">
                                                        Essentials
                                                    </i>
                                                </li>
                                                <li className="popup-li text-md-start">
                                                    <i className="popup-i">
                                                        Essentials
                                                    </i>
                                                </li>
                                                <li className="popup-li text-md-start">
                                                    <i className="popup-i">
                                                        Essentials
                                                    </i>
                                                </li>
                                                <li className="popup-li text-md-start">
                                                    <i className="popup-i">
                                                        Essentials
                                                    </i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-3 pb-5 pt-3">
                                    <div className="card" style={{borderRadius: "20px", border: "none", paddingLeft: "16px", paddingRight: "16px"}}>
                                        <div className="mx-2 card-body">
                                            <h5 className="service-subname my-2 ">After builders clean</h5>
                                            <p className="service-subdescription">
                                                All the essentials for starting a business
                                            </p>
                                            <p className="service-price">$55<small className="service-price-date"
                                                                                style={{fontSize: "18px"}}>/mo</small></p>
                                            <a href="#" className=""><input type="button" className="service-button" value="Buy Enterprise"/></a>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-2">

                                            </div>
                                            <div className="col-md-8">
                                                <hr className="popup-hr"></hr>
                                            </div>
                                            <div className="col-md-2">

                                            </div>
                                        </div>
                                        <div className="mx-2 card-body" style={{paddingTop: "0"}}>
                                            <p className="popup-included">What's included</p>
                                            <ul className="popup-ul">
                                                <li className="popup-li text-md-start">
                                                    <i className="popup-i">
                                                        Essentials
                                                    </i>
                                                </li>
                                                <li className="popup-li text-md-start">
                                                    <i className="popup-i">
                                                        Essentials
                                                    </i>
                                                </li>
                                                <li className="popup-li text-md-start">
                                                    <i className="popup-i">
                                                        Essentials
                                                    </i>
                                                </li>
                                                <li className="popup-li text-md-start">
                                                    <i className="popup-i">
                                                        Essentials
                                                    </i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopUpService;
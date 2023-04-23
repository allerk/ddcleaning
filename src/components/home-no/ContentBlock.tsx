import {Link, useNavigate} from "react-router-dom";
import portrait from "../how/about/baby_yoda_baby_yoda_becomes_a_sith_lord_80c99680-21a8-4de5-8f6a-f970841baffa.png";
import {Trans} from "react-i18next";

interface IContentBlockProps {
    reversed: boolean
}

const ContentBlock = (props: IContentBlockProps) => {

    // const navigate = useNavigate();
    //
    // function handleClick(event:
    //     EventTarget & HTMLInputElement |
    //     EventTarget & HTMLSelectElement |
    //     EventTarget & HTMLTextAreaElement, url: string) {
    //     // navigate to a new page
    //     navigate(`/${url}`);
    //
    //     // reset the scroll position
    //     window.scrollTo({
    //         top: 0,
    //         left: 0,
    //         behavior: 'auto'
    //     });
    // }


    return(
        <div className="row"  style={{marginBottom: "50px", marginTop: "50px"}}>
            {!props.reversed ?
                <>
                    <div className="col-md-6">
                        <div className="row">
                            <h1 style={{textAlign: "center", fontSize: "80px", marginBottom: "48px"}}>
                                <Trans i18nKey="homePageBlockName">
                                    Services?
                                </Trans>
                            </h1>
                            <div className="text-black parent">
                                <p style={{ fontSize:'20px', textAlign: "left" }}>
                                    <Trans i18nKey="homePageBlockContent">
                                    </Trans>
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-md-2"></div>
                                <div className="col-md-8">
                                    <Trans i18nKey="hello">
                                        <Link to="/howitworks" onClick={() => window.scrollTo(0, 0)} className="btn btn-danger" active-classname="active">How it works</Link>
                                    </Trans>
                                    {/*<input onClick={(e) => handleClick(e.target, 'howitworks')} style={{marginTop: "12px", alignItems: "center"}} value="How it works" type="submit" className="btn btn-primary"/>*/}
                                </div>
                                <div className="col-md-2"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className="d-inline-block img-fluid mb-4 rounded-4" src={portrait}/>
                    </div>
                </>
                :
                <>
                    <div className="col-md-6">
                        <img className="d-inline-block img-fluid mb-4 rounded-4" src={portrait}/>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <h1 style={{textAlign: "center", fontSize: "80px", marginBottom: "48px"}}>
                                Contacts?
                            </h1>
                            <div className="text-black parent">
                                <p style={{ fontSize:'20px', textAlign: "left" }}>
                                    We can find you a brilliant local cleaner for a regular weekly or fortnightly clean, or a specialist cleaner for one-off cleans including deep cleaning and end of tenancy cleaning.

                                    Wonky walls? Pesky plumbing? Our team can find tradespeople for any job in your home, including plumbers, electricians, carpenters, handypeople, decorators and gardeners.

                                    We make the whole process seamless. No calendar mix ups. No hassle with cash. No stress - and no mess. Just an easy experience, super-responsive customer support and a squad of vetted, experienced professionals.
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-md-2"></div>
                                <div className="col-md-8">
                                    {/*<Link to="/contacts" style={{marginTop: "12px", alignItems: "center"}} type="submit" className="btn btn-primary">Contacts</Link>*/}
                                    <Link to="/contacts" onClick={() => window.scrollTo(0, 0)} className="btn btn-danger" active-classname="active">Contacts</Link>
                                </div>
                                <div className="col-md-2"></div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default ContentBlock;
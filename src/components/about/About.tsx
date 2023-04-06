import portrait from './baby_yoda_baby_yoda_becomes_a_sith_lord_80c99680-21a8-4de5-8f6a-f970841baffa.png'

const About = () => {
    return(
        <div id="about">
            <div className="container" style={{paddingTop: "45px"}}>
                <div className="row">
                    <h1 style={{textAlign: "center", fontSize: "80px", marginBottom: "48px"}}>
                        How it works
                    </h1>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="text-black parent">
                                <p style={{ fontSize:'20px', textAlign: "left" }}>
                                    We can find you a brilliant local cleaner for a regular weekly or fortnightly clean, or a specialist cleaner for one-off cleans including deep cleaning and end of tenancy cleaning.

                                    Wonky walls? Pesky plumbing? Our team can find tradespeople for any job in your home, including plumbers, electricians, carpenters, handypeople, decorators and gardeners.

                                    We make the whole process seamless. No calendar mix ups. No hassle with cash. No stress - and no mess. Just an easy experience, super-responsive customer support and a squad of vetted, experienced professionals.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className="d-inline-block img-fluid mb-4 rounded-4" src={portrait}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
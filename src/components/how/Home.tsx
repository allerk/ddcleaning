import About from "./about/About";
import Selector from "../selector/Selector";
import Category from "../categories/Category";
import './Home.css';
import Welcome from "./Welcome/Welcome";
import picture from "./assets/main.jpg";
import Advantages from "./advantages/Advantages";
import Service from "./services/Service";
import Questions from "./questions/Questions";

const Home = () => {
    return(
        <div className="container-fluid">
            {/*<div className="row">*/}
            <section id="welcome" className="m-0 bg-image-welcome d-flex align-items-center">
                {/*<picture>*/}
                {/*    <img src={picture} alt="welcome" className="background"/>*/}
                {/*</picture>*/}
                <div className="container">
                    <Welcome></Welcome>
                </div>
            </section>
            <section id="about" className="m-0 bg-image-about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <About></About>
                        </div>
                        <div className="col-md-7">
                        </div>
                    </div>
                </div>
            </section>
            <section id="advantages" className="m-0 bg-advantages">
                <div className="container">
                    <Advantages></Advantages>
                </div>
            </section>
            <section id="services" className="m-0 bg-image-services">
                <div className="container">
                    <Service></Service>
                </div>
            </section>
            <section id="questions" className="m-0 bg-advantages">
                <div className="container">
                    <Questions></Questions>
                </div>
            </section>
            {/*<hr></hr>*/}
            {/*<section id="commercial-cleaning">*/}
            {/*    <div className="row">*/}
            {/*        <div className="col-md-2">*/}
            {/*        </div>*/}
            {/*        <div className="col-md-8">*/}
            {/*            <Category categoryName={"Commercial cleaning"}></Category>*/}
            {/*        </div>*/}
            {/*        <div className="col-md-2">*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/*/!*<hr></hr>*!/*/}
            {/*<section id="regular-cleaning">*/}
            {/*    <div className="row">*/}
            {/*        <div className="col-md-2">*/}
            {/*        </div>*/}
            {/*        <div className="col-md-8">*/}
            {/*            <Category categoryName={"Regular cleaning"}></Category>*/}
            {/*        </div>*/}
            {/*        <div className="col-md-2">*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/*/!*<hr></hr>*!/*/}
            {/*<section id="tradespeople">*/}
            {/*    <div className="row">*/}
            {/*        <div className="col-md-2">*/}
            {/*        </div>*/}
            {/*        <div className="col-md-8">*/}
            {/*            <Category categoryName={"Tradespeople"}></Category>*/}
            {/*        </div>*/}
            {/*        <div className="col-md-2">*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/*/!*<hr></hr>*!/*/}
            {/*<section id="end-of-tenancy-cleaning">*/}
            {/*    <div className="row">*/}
            {/*        <div className="col-md-2">*/}
            {/*        </div>*/}
            {/*        <div className="col-md-8">*/}
            {/*            <Category categoryName={"End of tenancy cleaning"}></Category>*/}
            {/*        </div>*/}
            {/*        <div className="col-md-2">*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/*/!*<hr></hr>*!/*/}
            {/*<section id="deep-cleaning">*/}
            {/*    <div className="row">*/}
            {/*        <div className="col-md-2">*/}
            {/*        </div>*/}
            {/*        <div className="col-md-8">*/}
            {/*            <Category categoryName={"Deep cleaning"}></Category>*/}
            {/*        </div>*/}
            {/*        <div className="col-md-2">*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/*/!*<hr></hr>*!/*/}
            {/*<section id="one-off-cleaning">*/}
            {/*    <div className="row">*/}
            {/*        <div className="col-md-2">*/}
            {/*        </div>*/}
            {/*        <div className="col-md-8">*/}
            {/*            <Category categoryName={"One-off cleaning"}></Category>*/}
            {/*        </div>*/}
            {/*        <div className="col-md-2">*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/*    /!*<div className="col-md-2">*!/*/}
            {/*    /!*</div>*!/*/}
            {/*    /!*<div className="col-md-8">*!/*/}
            {/*    /!*    <About></About>*!/*/}
            {/*    /!*    <Selector></Selector>*!/*/}
            {/*    /!*    <hr></hr>*!/*/}
            {/*    /!*    <section id="commercial-cleaning">*!/*/}
            {/*    /!*        <Category categoryName={"Commercial cleaning"}></Category>*!/*/}
            {/*    /!*    </section>*!/*/}
            {/*    /!*    <hr></hr>*!/*/}
            {/*    /!*    <section id="regular-cleaning">*!/*/}
            {/*    /!*        <Category categoryName={"Regular cleaning"}></Category>*!/*/}
            {/*    /!*    </section>*!/*/}
            {/*    /!*    <hr></hr>*!/*/}
            {/*    /!*    <section id="tradespeople">*!/*/}
            {/*    /!*        <Category categoryName={"Tradespeople"}></Category>*!/*/}
            {/*    /!*    </section>*!/*/}
            {/*    /!*    <hr></hr>*!/*/}
            {/*    /!*    <section id="end-of-tenancy-cleaning">*!/*/}
            {/*    /!*        <Category categoryName={"End of tenancy cleaning"}></Category>*!/*/}
            {/*    /!*    </section>*!/*/}
            {/*    /!*    <hr></hr>*!/*/}
            {/*    /!*    <section id="deep-cleaning">*!/*/}
            {/*    /!*        <Category categoryName={"Deep cleaning"}></Category>*!/*/}
            {/*    /!*    </section>*!/*/}
            {/*    /!*    <hr></hr>*!/*/}
            {/*    /!*    <section id="one-off-cleaning">*!/*/}
            {/*    /!*        <Category categoryName={"One-off cleaning"}></Category>*!/*/}
            {/*    /!*    </section>*!/*/}
            {/*    /!*</div>*!/*/}
            {/*    /!*<div className="col-md-2">*!/*/}
            {/*    /!*</div>*!/*/}
            </div>
        // </div>
    )
}

export default Home;
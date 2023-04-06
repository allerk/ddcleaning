import About from "../about/About";
import Selector from "../selector/Selector";
import Category from "../categories/Category";
import './How.css';

const How = () => {
    return(
        <div className="container-fluid">
            {/*<div className="row">*/}
            {/*<section>*/}
                <div className="row pb-5">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8">
                        <About></About>
                        <Selector></Selector>
                    </div>
                    <div className="col-md-2">
                    </div>
                </div>
            {/*</section>*/}
            <hr></hr>
            <section id="commercial-cleaning">
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8">
                        <Category categoryName={"Commercial cleaning"}></Category>
                    </div>
                    <div className="col-md-2">
                    </div>
                </div>
            </section>
            {/*<hr></hr>*/}
            <section id="regular-cleaning">
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8">
                        <Category categoryName={"Regular cleaning"}></Category>
                    </div>
                    <div className="col-md-2">
                    </div>
                </div>
            </section>
            {/*<hr></hr>*/}
            <section id="tradespeople">
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8">
                        <Category categoryName={"Tradespeople"}></Category>
                    </div>
                    <div className="col-md-2">
                    </div>
                </div>
            </section>
            {/*<hr></hr>*/}
            <section id="end-of-tenancy-cleaning">
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8">
                        <Category categoryName={"End of tenancy cleaning"}></Category>
                    </div>
                    <div className="col-md-2">
                    </div>
                </div>
            </section>
            {/*<hr></hr>*/}
            <section id="deep-cleaning">
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8">
                        <Category categoryName={"Deep cleaning"}></Category>
                    </div>
                    <div className="col-md-2">
                    </div>
                </div>
            </section>
            {/*<hr></hr>*/}
            <section id="one-off-cleaning">
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8">
                        <Category categoryName={"One-off cleaning"}></Category>
                    </div>
                    <div className="col-md-2">
                    </div>
                </div>
            </section>
                {/*<div className="col-md-2">*/}
                {/*</div>*/}
                {/*<div className="col-md-8">*/}
                {/*    <About></About>*/}
                {/*    <Selector></Selector>*/}
                {/*    <hr></hr>*/}
                {/*    <section id="commercial-cleaning">*/}
                {/*        <Category categoryName={"Commercial cleaning"}></Category>*/}
                {/*    </section>*/}
                {/*    <hr></hr>*/}
                {/*    <section id="regular-cleaning">*/}
                {/*        <Category categoryName={"Regular cleaning"}></Category>*/}
                {/*    </section>*/}
                {/*    <hr></hr>*/}
                {/*    <section id="tradespeople">*/}
                {/*        <Category categoryName={"Tradespeople"}></Category>*/}
                {/*    </section>*/}
                {/*    <hr></hr>*/}
                {/*    <section id="end-of-tenancy-cleaning">*/}
                {/*        <Category categoryName={"End of tenancy cleaning"}></Category>*/}
                {/*    </section>*/}
                {/*    <hr></hr>*/}
                {/*    <section id="deep-cleaning">*/}
                {/*        <Category categoryName={"Deep cleaning"}></Category>*/}
                {/*    </section>*/}
                {/*    <hr></hr>*/}
                {/*    <section id="one-off-cleaning">*/}
                {/*        <Category categoryName={"One-off cleaning"}></Category>*/}
                {/*    </section>*/}
                {/*</div>*/}
                {/*<div className="col-md-2">*/}
                {/*</div>*/}
            </div>
        // </div>
    )
}

export default How;
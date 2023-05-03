import "./Calculator.css";
const Calculator = () => {
    return(
        <>
            <h1 className="h1-about text-md-start" style={{paddingBottom: "20px", paddingTop: "100px"}}>Calculator</h1>
            <form className="row calculator" style={{paddingBottom: "100px"}}>
                <div className="col-md-6 col-lg-3 inputNames">
                    <label className="mainCalculator">Type of cleaning</label>
                    <select className="select-calculator">
                        <option>Test1</option>
                        <option>Test2</option>
                        <option>Test3</option>
                    </select>
                </div>
                <div className="col-md-6 col-lg-3 inputNames">
                    <label className="mainCalculator">Property type</label>
                    <select className="select-calculator">
                        <option>Test1</option>
                        <option>Test2</option>
                        <option>Test3</option>
                    </select>
                </div>
                <div className="col-md-6 col-lg-3 inputNames">
                    <label className="mainCalculator">Number of square meters</label>
                    <input name="squareMeters" className="input-calculator"/>
                </div>
                <div className="col-md-6 col-lg-3 inputNames">
                    <label className="mainCalculator">Number of cleanings </label>
                    <select className="select-calculator">
                        <option>Test1</option>
                        <option>Test2</option>
                        <option>Test3</option>
                    </select>
                </div>
                <div className="col-md-6 col-lg-3 inputNames">
                    <label className="mainCalculator">Address</label>
                    <input name="squareMeters" className="input-calculator"/>
                </div>
                <div className="col-md-6 col-lg-3 inputNames">
                    <label className="mainCalculator">City</label>
                    <select className="select-calculator">
                        <option>Test1</option>
                        <option>Test2</option>
                        <option>Test3</option>
                    </select>
                </div>
                <div className="col-md-6 col-lg-3 inputNames">
                    <label className="mainCalculator">Area</label>
                    <select className="select-calculator">
                        <option>Test1</option>
                        <option>Test2</option>
                        <option>Test3</option>
                    </select>
                </div>
                <div className="col-md-6 col-lg-3 inputNames">
                    <label className="mainCalculator">Select date</label>
                    <input type="datetime-local" min={new Date().toISOString().slice(0,16)} name="squareMeters" className="input-calculator"/>
                </div>
                <div className="col-md-6 col-lg-3 inputNames">
                    <label className="mainCalculator">Enter your phone number</label>
                    <input name="squareMeters" className="input-calculator"/>
                </div>
                <div className="col-md-6 col-lg-3 inputNames">
                    <label className="mainCalculator">E-mail</label>
                    <input name="squareMeters" className="input-calculator"/>
                </div>
                <div className="col-md-12 col-lg-6 inputNames">
                    <label className="mainCalculator">Message</label>
                    <input name="squareMeters" className="input-calculator"/>
                </div>
                <div className="col-md-12">
                    <label className="inputNames" style={{paddingTop: "30px"}}>Additional services</label>
                    <div className="form-check">
                        <input className="form-check-input shadow-none" type="checkbox" id="gridCheck"/>
                            <label className="form-check-label additional" htmlFor="gridCheck">
                                Sofa cleaning
                                <small> (not included in the price of calculating the online calculator)</small>
                            </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input shadow-none" type="checkbox" id="gridCheck"/>
                            <label className="form-check-label additional" htmlFor="gridCheck">
                                Antiseptic treatment 0.50 € / m2
                                <small> (not included in the calculation cost with an online calculator)</small>
                            </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input shadow-none" type="checkbox" id="gridCheck"/>
                            <label className="form-check-label additional" htmlFor="gridCheck">
                                Window cleaning
                                <small> (price from 7 euros, the price includes washing glass, frame, handles and window sill)</small>
                            </label>
                    </div>
                </div>
                <div className="col-md-3">
                    <label className="inputNames" style={{paddingTop: "30px", paddingBottom: "5px"}}>Public contract:</label>
                    <div className="form-check">
                        <input className="form-check-input shadow-none" type="checkbox" id="gridCheck"/>
                        <label className="form-check-label additional" htmlFor="gridCheck">
                            I agree <a href="/" style={{textDecoration: "underline", color: "black"}} target="_blank">with the contract</a>
                        </label>
                    </div>
                </div>
                <div className="col-md-9">
                    <label className="inputNames" style={{paddingTop: "27px"}}>Coupon:</label>
                    <div className="form-group">
                        <input name="squareMeters" className="input-calculator promo"/>
                        <input type="button" value="apply promo code" name="squareMeters" className="input-calculator promo-button promo"/>
                    </div>
                </div>
                <div className="col-md-3">
                    <label className="estimated inputNames" style={{paddingTop: "30px"}}>Estimated amount:</label>
                    <h3 className="text-md-start price">65.00$</h3>
                </div>
                <div className="col-md-9" style={{paddingLeft: "0"}}>
                    <div className="position-relative">
                        <button id="desktop-send" className="services send-button">Send</button>
                    </div>
                    <button id="mobile-send" className="services mobile-send-button">Send</button>
                </div>
            </form>
        </>
    )
}

export default Calculator;
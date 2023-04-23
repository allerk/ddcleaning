import "./Welcome.css";

const Welcome = () => {
    return(
        <div className="row justify-content-center flex">
            <div className="col-md-8 text-center">
                <h1 className="h1-welcome">
                    Brilliant local cleaners
                </h1>
                <p className="p-welcome">
                    All necessary cleaning services for private and corporate
                    <br/>
                    clients throughout Estonia
                </p>
                <button className="services">Services</button>
            </div>
        </div>
    )
}

export default Welcome;
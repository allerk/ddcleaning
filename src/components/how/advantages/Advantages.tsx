import "./Advantages.css";
import reliability from "../assets/reliability.svg";
import velocity from "../assets/velocity.svg";
import courtesy from "../assets/courtesy.svg";
import quality from "../assets/quality.svg";

const Advantages = () => {
    return(
        <>
            <h1 className="h1-advantages">Our advantages</h1>
            <div className="row align-advantages">
                <div className="col-md-3">
                    <img src={reliability} alt="reliability"/>
                    <h4 className="h4-advantages">Reliability</h4>
                    <p className="p-advantages">
                        На этом месте находится обычный текст среднего размера. Он может использоваться в обычных блоках на всём сайте.
                    </p>
                </div>
                <div className="col-md-3">
                    <img src={velocity} alt="velocity"/>
                    <h4 className="h4-advantages">Velocity</h4>
                    <p className="p-advantages">
                        На этом месте находится обычный текст среднего размера. Он может использоваться в обычных блоках на всём сайте.
                    </p>
                </div>
                <div className="col-md-3">
                    <img src={quality} alt="quality"/>
                    <h4 className="h4-advantages">Quality</h4>
                    <p className="p-advantages">
                        На этом месте находится обычный текст среднего размера. Он может использоваться в обычных блоках на всём сайте.
                    </p>
                </div>
                <div className="col-md-3">
                    <img src={courtesy} alt="courtesy"/>
                    <h4 className="h4-advantages">Courtesy</h4>
                    <p className="p-advantages">
                        На этом месте находится обычный текст среднего размера. Он может использоваться в обычных блоках на всём сайте.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Advantages;
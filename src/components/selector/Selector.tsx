import './Selector.css';
import buildings from '../../assets/topics/buildings.svg';
import gloves from '../../assets/topics/gloves.svg';
import hardHat from '../../assets/topics/hard-hat.svg';
import household from '../../assets/topics/household.svg';
import sponge from '../../assets/topics/sponge.svg';
import sprayBottle from '../../assets/topics/spray-bottle.svg';

const Selector = () => {
    return(
        <div className="container container-md text-center">
            <p className="large mb-8" style={{fontSize: "20px"}}>
                Select a service below to find out more about how it works:
            </p>
            <div className="row">
                <div className="col-xs-6 col-md-4 mb-6">
                    <a href="#commercial-cleaning" className="card mb-4 itemBackground">
                        <img className="d-inline-block img-fluid mb-4 rounded-4 selectorImage" src={buildings}/>
                        <div>
                            Commercial cleaning
                        </div>
                    </a>
                </div>
                <div className="col-xs-6 col-md-4 mb-6">
                    <a href="#regular-cleaning" className="card mb-4 itemBackground">
                        <img className="d-inline-block img-fluid mb-4 rounded-4 selectorImage" src={gloves}/>
                        <div>
                            Regular cleaning
                        </div>
                    </a>
                </div>
                <div className="col-xs-6 col-md-4 mb-6">
                    <a href="#tradespeople" className="card mb-4 itemBackground">
                        <img className="d-inline-block img-fluid mb-4 rounded-4 selectorImage" src={hardHat}/>
                        <div>
                            Tradespeople
                        </div>
                    </a>
                </div>
                <div className="col-xs-6 col-md-4 mb-6">
                    <a href="#end-of-tenancy-cleaning" className="card mb-4 itemBackground">
                        <img className="d-inline-block img-fluid mb-4 rounded-4 selectorImage" src={household}/>
                        <div>
                            End of tenancy cleaning
                        </div>
                    </a>
                </div>
                <div className="col-xs-6 col-md-4 mb-6">
                    <a href="#deep-cleaning" className="card mb-4 itemBackground">
                        <img className="d-inline-block img-fluid mb-4 rounded-4 selectorImage" src={sponge}/>
                        <div>
                            Deep cleaning
                        </div>
                    </a>
                </div>
                <div className="col-xs-6 col-md-4 mb-6">
                    <a href="#one-off-cleaning" className="card mb-4 itemBackground">
                        <img className="d-inline-block img-fluid mb-4 rounded-4 selectorImage" src={sprayBottle}/>
                        <div>
                            One-off cleaning
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Selector;
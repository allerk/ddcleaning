import "./Service.css";
import Description from "./description/Description";
import Calculator from "./business/Calculator";
import Faq from "./faq/Faq";
import {useEffect} from "react";

interface IServiceProps{
    serviceName: string
}

const Service = (props: IServiceProps) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return(
        <div className="container-fluid p-0" id="service-page">
            <section id="service-description" className="m-0 bg-image-description">
                <div className="container-fluid p-0">
                    <div className="container max-w-4k expand">
                        <Description serviceName={props.serviceName}></Description>
                    </div>
                </div>
            </section>
            <section id="service-logic" className="m-0 bg-business-calculator">
                <div className="container max-w-4k">
                    <Calculator></Calculator>
                </div>
            </section>
            <section id="service-faq" className="m-0 bg-faq">
                <div className="container max-w-4k">
                    <Faq></Faq>
                </div>
            </section>
        </div>
    )
}

export default Service;
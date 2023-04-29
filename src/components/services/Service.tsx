import "./Service.css";
import Description from "./description/Description";
import Calculator from "./business/Calculator";

interface IServiceProps{
    serviceName: string
}

const Service = (props: IServiceProps) => {
    return(
        <div className="container-fluid p-0">
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
            <section id="service-faq">

            </section>
        </div>
    )
}

export default Service;
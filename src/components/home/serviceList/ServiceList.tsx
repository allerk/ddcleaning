// import picture1 from '../assets/person-taking-care-office-cleaning_edited.jpg';
import regular from '../assets/regular.jpg';
import commercial from '../assets/commercial.jpg';
import trades from '../assets/tradespeople.jpg';
import './ServiceList.css'

interface IServiceProps{
    serviceName: string
}

// const ServiceList = (props: IServiceProps) => {
const ServiceList = () => {
    return(
        <>
            <h1 className="h1-services">Select a service below to find out more about how it works</h1>
            <div className="row align-services d-flex justify-content-evenly">
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-8">
                            <h4 className="h4-services">Regular cleaning</h4>
                        </div>
                        <div className="col-md-4">
                            <button className="btn-more">more</button>
                        </div>
                    </div>
                    <p className="p-services">Описание вашей услуги. Поместить самое важное, чтобы остальную информацию увидеть по клику на кнопку. Описание вашей услуги. Поместить самое важное, чтобы остальную информацию увидеть.</p>
                    <img src={regular} className="img-fluid mb-4 br-1" alt="regular"/>
                </div>
                <div className="col-md-4">
                    <img src={commercial} className="img-fluid mb-4 br-2" alt="commercial"/>
                    <div className="row">
                        <div className="col-md-8">
                            <h4 className="h4-services">Commercial cleaning</h4>
                        </div>
                        <div className="col-md-4">
                            <button className="btn-more">more</button>
                        </div>
                    </div>
                    <p className="p-services">Описание вашей услуги. Поместить самое важное, чтобы остальную информацию увидеть по клику на кнопку. Описание вашей услуги. Поместить самое важное, чтобы остальную информацию увидеть.</p>
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-8">
                            <h4 className="h4-services">Tradespeople</h4>
                        </div>
                        <div className="col-md-4">
                            <button className="btn-more">more</button>
                        </div>
                    </div>
                    <p className="p-services">Описание вашей услуги. Поместить самое важное, чтобы остальную информацию увидеть по клику на кнопку. Описание вашей услуги. Поместить самое важное, чтобы остальную информацию увидеть.</p>
                    <img src={trades} className="img-fluid mb-4 br-1" alt="trades"/>
                </div>
            </div>
        </>
    )
}

export default ServiceList;
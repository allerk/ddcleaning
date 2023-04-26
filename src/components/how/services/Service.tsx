import picture1 from '../assets/person-taking-care-office-cleaning_edited.jpg';
import './Service.css'

interface IServiceProps{
    serviceName: string
}

// const Service = (props: IServiceProps) => {
const Service = () => {
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
                    <img src={picture1} className="img-fluid mb-4 br-1"/>
                </div>
                <div className="col-md-4">
                    <img src={picture1} className="img-fluid mb-4 br-2"/>
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
                    <img src={picture1} className="img-fluid mb-4 br-1"/>
                </div>
            </div>
        </>
    )
}

export default Service;
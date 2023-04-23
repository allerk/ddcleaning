import picture from "../assets/high-angle-basket-with-cleaning-products_edited.jpg"
import "./Questions.css"

const Questions = () => {
    return(
        <>
            <div className="row" style={{paddingTop: "150px", paddingBottom: "150px"}}>
                <div className="col-md-6" style={{paddingRight: "0"}}>
                    <div className="text-white bg-white parent br-text">
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-11">
                                <h1 className="h1-questions">
                                    Остались вопросы?
                                </h1>
                                <p className="p-questions">
                                    Свяжитесь с нами и получите незамедлительный и полный ответ
                                </p>
                                <button className="btn-contact">
                                    contact
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-end" style={{paddingLeft: "0"}}>
                    {/*<img style={{objectFit: "cover", width: "100%", height: "319px"}} src={pilt} alt={pilt}/>*/}
                    <img src={picture} className="d-inline-block img-fluid mb-4 br-image"/>
                </div>
            </div>
        </>
    )
}

export default Questions;
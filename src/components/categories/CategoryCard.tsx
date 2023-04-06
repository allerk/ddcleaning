import './CategoryCard.css';

interface ICategoryProps{
    categoryName: string
}

const CategoryCard = (props: ICategoryProps) => {
    return(
        <div className="container">
            <div className="row rowExtend">
                <h1 className="title">{props.categoryName}</h1>
                <div className="col-md-6">
                    <div className="row justify-content-center mb-5" style={{fontSize: "45px"}}>
                        Job desctiprion
                    </div>
                    <dl className="row" style={{textAlign: "left"}}>
                        <dt className="col-sm-3">•Description lists</dt>
                        <dd className="col-sm-9">A description list is perfect for defining terms.</dd>

                        <dt className="col-sm-3">•Term</dt>
                        <dd className="col-sm-9">
                            <p>Definition for the term.</p>
                            <p>And some more placeholder definition text.</p>
                        </dd>

                        <dt className="col-sm-3" >•Another term</dt>
                        <dd className="col-sm-9">This definition is short, so no extra paragraphs or anything.</dd>
                    </dl>
                </div>
                <div className="col-md-6">
                    <div className="row justify-content-center mb-5" style={{fontSize: "45px"}}>
                        F.A.Q
                    </div>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target={"#" + props.categoryName.toLowerCase().replace(/\s+/g, '') + "One"}
                                        aria-expanded="false"
                                        aria-controls={props.categoryName.toLowerCase().replace(/\s+/g, '') + "One"}>
                                    Accordion Item #1
                                </button>
                            </h2>
                            <div id={props.categoryName.toLowerCase().replace(/\s+/g, '') + "One"}
                                 className="accordion-collapse collapse"
                                 aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default,
                                    until the collapse plugin adds the appropriate classes that we use to style each
                                    element. These classes control the overall appearance, as well as the showing and
                                    hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                                    our default variables. It's also worth noting that just about any HTML can go within
                                    the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target={"#" + props.categoryName.toLowerCase().replace(/\s+/g, '') + "Two"}
                                        aria-expanded="false"
                                        aria-controls={props.categoryName.toLowerCase().replace(/\s+/g, '') + "Two"}>
                                    Accordion Item #2
                                </button>
                            </h2>
                            <div id={props.categoryName.toLowerCase().replace(/\s+/g, '') + "Two"}
                                 className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                 data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default,
                                    until the collapse plugin adds the appropriate classes that we use to style each
                                    element. These classes control the overall appearance, as well as the showing and
                                    hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                                    our default variables. It's also worth noting that just about any HTML can go within
                                    the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target={"#" + props.categoryName.toLowerCase().replace(/\s+/g, '') + "Three"}
                                        aria-expanded="false"
                                        aria-controls={props.categoryName.toLowerCase().replace(/\s+/g, '') + "Three"}>
                                    Accordion Item #3
                                </button>
                            </h2>
                            <div id={props.categoryName.toLowerCase().replace(/\s+/g, '') + "Three"}
                                 className="accordion-collapse collapse"
                                 aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default,
                                    until the collapse plugin adds the appropriate classes that we use to style each
                                    element. These classes control the overall appearance, as well as the showing and
                                    hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                                    our default variables. It's also worth noting that just about any HTML can go within
                                    the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryCard;
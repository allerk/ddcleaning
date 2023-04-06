import picture from '../../assets/topics/fd3c043c792364368f95.svg';
import './Service.css'

interface IServiceProps{
    serviceName: string
}

const Service = (props: IServiceProps) => {
    return(
        <div className="container container-fluid" style={{marginTop: "50px"}}>
            <section id="description">
                <img className="selectorImage" src={picture} alt="picture"/>
                <h1 className="h1-responsive font-weight-bold text-center my-4">{props.serviceName}</h1>
                <p>We're famous for regular weekly and fortnightly cleans, but we're also experts in one-off professional cleans including deep cleans and end of tenancy cleans.</p>
            </section>
            <section id="table">
                {/*<div className="row">*/}
                {/*    <div className="col-md-2">*/}
                {/*        <table className="table table-bordered border-primary">*/}
                {/*            <thead>*/}
                {/*            <tr>*/}
                {/*                <th scope="col">#</th>*/}
                {/*            </tr>*/}
                {/*            </thead>*/}
                {/*            <tbody>*/}
                {/*            <tr>*/}
                {/*                <th scope="row">1</th>*/}
                {/*            </tr>*/}
                {/*            <tr>*/}
                {/*                <th scope="row">2</th>*/}
                {/*            </tr>*/}
                {/*            <tr>*/}
                {/*                <th scope="row">3</th>*/}
                {/*            </tr>*/}
                {/*            </tbody>*/}
                {/*        </table>*/}
                {/*    </div>*/}
                {/*    <div className="col-md-10">*/}
                {/*        <table className="table table-bordered border-primary">*/}
                {/*            <thead>*/}
                {/*            <tr>*/}
                {/*                <th scope="col">#</th>*/}
                {/*                <th scope="col">First</th>*/}
                {/*                <th scope="col">Last</th>*/}
                {/*                <th scope="col">Handle</th>*/}
                {/*                <th scope="col">Handle</th>*/}
                {/*            </tr>*/}
                {/*            </thead>*/}
                {/*            <tbody>*/}
                {/*            <tr>*/}
                {/*                <th scope="row">1</th>*/}
                {/*                <td>Mark</td>*/}
                {/*                <td>Otto</td>*/}
                {/*                <td>@mdo</td>*/}
                {/*            </tr>*/}
                {/*            <tr>*/}
                {/*                <th scope="row">2</th>*/}
                {/*                <td>Jacob</td>*/}
                {/*                <td>Thornton</td>*/}
                {/*                <td>@fat</td>*/}
                {/*            </tr>*/}
                {/*            <tr>*/}
                {/*                <th scope="row">3</th>*/}
                {/*                <td >Larry the Bird</td>*/}
                {/*                <td>@twitter</td>*/}
                {/*                <td>@twitter</td>*/}
                {/*            </tr>                            */}
                {/*            <tr>*/}
                {/*                <th scope="row">3</th>*/}
                {/*                <td >Larry the Bird</td>*/}
                {/*                <td>@twitter</td>*/}
                {/*                <td>@twitter</td>*/}
                {/*            </tr>*/}
                {/*            </tbody>*/}
                {/*        </table>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <section className="text-center">
                    <h1 className="mb-4"><strong>Which service should I choose?</strong></h1>
                    {/*<div className="btn-group mb-4" role="group" aria-label="Basic example">*/}
                    {/*    <button type="button" className="btn btn-dark active">Monthly billing</button>*/}
                    {/*    <button type="button" className="btn btn-light">*/}
                    {/*        Annual billign <small>(2 months FREE)</small>*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                </section>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="mx-2 card-body">
                                <h5 className="card-title my-2 ">One-off clean</h5>
                                <p className="text-muted">
                                    All the essentials for starting a business
                                </p>
                                <p className="h2 fw-bold">$12<small className="text-muted"
                                                                    style={{fontSize: "18px"}}>/mo</small></p>
                                <a href="#" className="btn btn-dark d-block mb-2 mt-3 text-capitalize">Buy
                                    Hobby</a>
                            </div>
                            <div className="card-footer">
                                <p className="text-uppercase fw-bold" style={{fontSize: "12px"}}>What's included</p>
                                <ol className="list-unstyled mb-0 px-4">
                                    <p className="my-3 fw-bold text-muted text-center">
                                    </p>
                                    <li className="mb-3">
                                        <i className="fas fa-check text-success me-3"></i><small>Essentials:</small>
                                    </li>
                                    <li className="mb-3">
                                        <i className="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>
                                    </li>
                                    <li className="mb-3">
                                        <i className="fas fa-check text-success me-3"></i><small>Tidy-up & wash dishes</small>
                                    </li>
                                    <li className="mb-3">
                                        <i className="fas fa-check text-success me-3"></i><small>Clean inside windows</small>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="mx-2 card-body">
                                <h5 className="card-title my-2 ">Deep clean</h5>
                                <p className="text-muted">
                                    All the essentials for starting a business
                                </p>
                                <p className="h2 fw-bold">$20<small className="text-muted"
                                                                    style={{fontSize: "18px"}}>/mo</small></p>
                                <a href="#" className="btn btn-dark d-block mb-2 mt-3 text-capitalize">Buy
                                    Freelancer</a>
                            </div>
                            <div className="card-footer">
                                <p className="text-uppercase fw-bold" style={{fontSize: "12px"}}>What's included</p>
                                <ol className="list-unstyled mb-0 px-4">
                                    <p className="my-3 fw-bold text-muted text-center">
                                    </p>
                                    <li className="mb-3">
                                        <i className="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>
                                    </li>
                                    <li className="mb-3">
                                        <i className="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>
                                    </li>
                                    <li className="mb-3">
                                        <i className="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="mx-2 card-body">
                                <h5 className="card-title my-2 ">End of tenancy clean</h5>
                                <p className="text-muted">
                                    All the essentials for starting a business
                                </p>
                                <p className="h2 fw-bold">$40<small className="text-muted"
                                                                    style={{fontSize: "18px"}}>/mo</small></p>
                                <a href="#" className="btn btn-dark d-block mb-2 mt-3 text-capitalize">Buy Startup</a>
                            </div>
                            <div className="card-footer">
                                <p className="text-uppercase fw-bold" style={{fontSize: "12px"}}>What's included</p>
                                <ol className="list-unstyled mb-0 px-4">
                                    <p className="my-3 fw-bold text-muted text-center">
                                    </p>
                                    <li className="mb-3">
                                        <i className="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>
                                    </li>
                                    <li className="mb-3">
                                        <i className="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>
                                    </li>
                                    <li className="mb-3">
                                        <i className="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>
                                    </li>
                                    <li className="mb-3">
                                        <i className="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="mx-2 card-body">
                                <h5 className="card-title my-2 ">After builders clean</h5>
                                <p className="text-muted">
                                    All the essentials for starting a business
                                </p>
                                <p className="h2 fw-bold">$55<small className="text-muted"
                                                                    style={{fontSize: "18px"}}>/mo</small></p>
                                <a href="#" className="btn btn-dark d-block mb-2 mt-3 text-capitalize">Buy
                                    Enterprise</a>
                            </div>
                            <div className="card-footer">
                                <p className="text-uppercase fw-bold" style={{fontSize: "12px"}}>What's included</p>
                                <ol className="list-unstyled mb-0 px-4">
                                    <li className="mb-3">
                                        <i className="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>
                                    </li>
                                    <li className="mb-3">
                                        <i className="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>
                                    </li>
                                    <li className="mb-3">
                                        <i className="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>
                                    </li>
                                    <li className="mb-3">
                                        <i className="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>
                                    </li>
                                    <li className="mb-3">
                                        <i className="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>
                                    </li>
                                    <li className="mb-3">
                                        <i className="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>
                                    </li>
                                    <li className="mb-3">
                                        <i className="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Service;
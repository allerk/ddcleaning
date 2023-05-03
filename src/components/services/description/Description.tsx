import "./Description.css"

interface IServiceProps{
    serviceName: string
}

const Description = (props: IServiceProps) => {
    return(
        <>
            <h1 className="h1-about text-md-start">
                {props.serviceName}
            </h1>
            <div className="row g-2 expand-description">
                <div className="col-md-6">
                    <div className="items">
                        <p className="p-about">
                            На этом месте находится обычный текст среднего размера. Он может использоваться в обычных блоках на всём сайте. На этом месте находится обычный текст среднего размера. Он может использоваться в обычных блоках на всём сайте.     На этом месте находится обычный текст среднего размера. Он может использоваться в обычных блоках на всём сайте.
                        </p>
                    </div>
                </div>
                <div className="col-md-7"></div>
            </div>
        </>
    )
}

export default Description;
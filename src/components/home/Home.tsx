import ContentBlock from "./ContentBlock";

const Home = () => {
    return(
        <div className="container" style={{marginTop: "100px"}}>
            <ContentBlock reversed={false}></ContentBlock>
            {/*<hr style={{marginBottom: "50px", marginTop: "50px"}}></hr>*/}
            <ContentBlock reversed={true}></ContentBlock>
        </div>
    )
}

export default Home;
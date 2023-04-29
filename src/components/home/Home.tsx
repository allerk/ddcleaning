import About from "./about/About";
import './Home.css';
import Welcome from "./welcome/Welcome";
import Advantages from "./advantages/Advantages";
import ServiceList from "./serviceList/ServiceList";
import Questions from "./questions/Questions";

const Home = () => {
    return(
        <div className="container-fluid p-0">
            <section id="welcome" className="m-0 bg-image-welcome">
                <div className="container-fluid">
                    <div className="container max-w-4k welcome-text">
                        <Welcome></Welcome>
                    </div>
                </div>
            </section>
            <section id="about" className="m-0 bg-image-about">
                <div className="container-fluid p-0">
                    <div className="container max-w-4k expand">
                        <About></About>
                    </div>
                </div>
            </section>
            <section id="advantages" className="m-0 bg-advantages">
                <div className="container max-w-4k">
                    <Advantages></Advantages>
                </div>
            </section>
            <section id="services" className="m-0 bg-image-services">
                <div className="container max-w-4k mx-auto expand2">
                    <ServiceList></ServiceList>
                </div>
            </section>
            <section id="questions" className="m-0 bg-advantages">
                <div className="container max-w-4k">
                    <Questions></Questions>
                </div>
            </section>
        </div>
    )
}

export default Home;
import "./Welcome.css";
import {Trans, useTranslation} from "react-i18next";

const Welcome = () => {
    function scrollToSection() {
        const section = document.getElementById('services');
        section!.scrollIntoView({ behavior: 'smooth' });
    }

    const { t } = useTranslation();

    return(
        <div className="row justify-content-center flex">
            <div className="col-md-8 text-center">
                <h1 className="h1-welcome">
                    <Trans i18nKey={'home.welcome.title'}>
                    </Trans>
                </h1>
                <p className="p-welcome">
                    <Trans i18nKey={'home.welcome.subtitle'}>
                    </Trans>
                </p>
                {/*<a href="#services"><button className="services">Services</button></a>*/}
                <button onClick={() => scrollToSection()} className="services">{t('home.welcome.button')}</button>
            </div>
        </div>
    )
}

export default Welcome;
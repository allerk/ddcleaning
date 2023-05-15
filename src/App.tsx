import {Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import './App.css'
import Header from "./components/header/Header";
import Contact from "./components/contacts/Contact";
import {I18nContext, I18nextProvider, Trans, useTranslation} from "react-i18next";
import Service from "./components/services/Service";

export const App = () => {

    const {t} = useTranslation();
    return (
        <>
            <Header/>
            <main role="main">
                {/*<p>*/}
                {/*    <Trans i18nKey="hello">*/}
                {/*        <code>Hello mate! How are you?</code>*/}
                {/*    </Trans>*/}
                {/*    {t('learn')}*/}
                {/*</p>*/}
                <Routes>
                    <Route index element={<Home />}/>
                    <Route path="/services/commercial" element={<Service serviceName="Commercial cleaning"></Service>}></Route>
                    <Route path="/services/regular" element={<Service serviceName="Regular cleaning"></Service>}></Route>
                    <Route path="/contacts" element={<Contact/>}></Route>
                </Routes>
            </main>
            <Footer/>
        </>
    )
}

export default App;

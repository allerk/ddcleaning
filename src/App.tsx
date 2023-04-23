import {Route, Routes} from "react-router-dom";
import How from "./components/how/Home";
import Footer from "./components/footer/Footer";
import './App.css'
import Header from "./components/header/Header";
import Contact from "./components/contacts/Contact";
import Service from "./components/how/services/Service";
import Home from "./components/home-no/Home";
import {Trans, useTranslation} from "react-i18next";

export const App = () => {

    const {t} = useTranslation();

    return (
        <>
            <Header/>
            <main role="main" className="pb-3">
                {/*<p>*/}
                {/*    <Trans i18nKey="hello">*/}
                {/*        <code>Hello mate! How are you?</code>*/}
                {/*    </Trans>*/}
                {/*    {t('learn')}*/}
                {/*</p>*/}
                <Routes>
                    <Route index element={<How />}/>
                    <Route path="/contacts" element={<Contact/>}></Route>
                    <Route path="/commercial" element={<Service serviceName="Commercial cleaning"/>}></Route>
                </Routes>
            </main>
            <Footer/>
        </>
    )
}

export default App;

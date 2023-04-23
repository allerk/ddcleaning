import './Header.css';
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import logo from "./logo.svg";
import lang from "./language-svgrepo-com.svg";

const lngs = {
    en: { nativeName: 'English' },
    ee: { nativeName: 'Estonian' },
    ru: { nativeName: 'Russian' }
}

const Header = () => {

    const {t, i18n } = useTranslation();

    const [isScrolled, setIsScrolled] = useState(false);

    // Add a scroll event listener to update the isScrolled state variable
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Update the isScrolled state variable based on the user's scroll position
    const handleScroll = () => {
        const scrollTop = window.pageYOffset;

        if (scrollTop > 0 && !isScrolled) {
            setIsScrolled(true);
        } else if (scrollTop === 0 && isScrolled) {
            setIsScrolled(false);
        }
    };

    const handleLanguageChange = (event:
                                      EventTarget & HTMLInputElement |
                                      EventTarget & HTMLSelectElement |
                                      EventTarget & HTMLTextAreaElement) => {
        Object.keys(lngs).map((lng) => {
            if (lng.toLowerCase() === event.value.toLowerCase()){
                i18n.changeLanguage(event.value)
            }
        })
    }

    return(
        // <div className="container-fluid sticky-top bg-white w-100" style={{padding: "0px"}}>
        //     <header className="sticky-top justify-content-center py-3 w-100 header pt-0">
        //         <div className="container container-fluid">
        <header className="sticky-top">
            <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white box-shadow m3">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between header-font" id="navbarNav">
                        {/*<ul className="navbar-nav">*/}
                        {/*    <li>*/}
                                <img className="logoBig disabled" src={logo} alt="logo" style={{paddingLeft: "24px"}}/>
                            {/*</li>*/}
                        {/*</ul>*/}
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link to="/" className="nav-link active" aria-current="page">Home page</Link></li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDarkDropdownMenuLink"
                                      role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </Link>
                                <ul className="dropdown-menu dropdown-menu"
                                    aria-labelledby="navbarDarkDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="/commercial">Commercial cleaning</Link></li>
                                    <li><Link className="dropdown-item" to="/regular">Regular cleaning</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item"><Link to="/contacts" className="nav-link">Contacts</Link></li>
                        </ul>
                        {/*<ul className="navbar-nav">*/}
                            {/*<li className="nav-item">*/}
                        <div>
                            en
                            <img src={lang} alt="lang" className="logo disabled" style={{paddingLeft: "0px"}}/>
                        </div>
                            {/*</li>*/}
                            {/*<li className="nav-item">*/}
                            {/*    <select*/}
                            {/*        value={i18n.resolvedLanguage}*/}
                            {/*        className="form-select"*/}
                            {/*        aria-label="Default select example"*/}
                            {/*        onChange={(e) => handleLanguageChange(e.target)}*/}
                            {/*    >*/}
                            {/*        <option defaultValue="en">en</option>*/}
                            {/*        <option value="ee">ee</option>*/}
                            {/*        <option value="ru">ru</option>*/}
                            {/*    </select>*/}
                            {/*</li>*/}
                        {/*</ul>*/}
                    </div>
            </nav>
        </header>
            //     </div>
            // </header>
        // </div>
        // <header>
        //     <img className="logo" src={logo} alt="logo"/>
        //     <nav>
        //         <ul className="nav__links">
        //             <li><a href="#">Home</a></li>
        //             <li><a href="#">Services</a></li>
        //             <li><a href="#">Contacts</a></li>
        //         </ul>
        //     </nav>
        //     {/*<select*/}
        //     {/*    value={i18n.resolvedLanguage}*/}
        //     {/*    className="form-select cta"*/}
        //     {/*    aria-label="Default select example"*/}
        //     {/*    onChange={(e) => handleLanguageChange(e.target)}*/}
        //     {/*>*/}
        //     {/*    <option defaultValue="en">en</option>*/}
        //     {/*    <option value="ee">ee</option>*/}
        //     {/*    <option value="ru">ru</option>*/}
        //     {/*</select>*/}
        //     <a href="#">Language</a>
        // </header>
    )
}

export default Header;
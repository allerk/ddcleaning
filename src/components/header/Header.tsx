import './Header.css';
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

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
        <div className="container-fluid sticky-top bg-white" style={{padding: "0px"}}>
            <header className="d-flex justify-content-center py-3">
                <div className="container container-fluid">
                    <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white box-shadow m3">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-center" id="navbarNav">
                            <div className="navbar-collapse collapse d-sm-inline-flex justify-content-center" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item"><Link to="/" className="nav-link active" aria-current="page">Home page</Link></li>
                                    <li className="nav-item"><Link to="/howitworks" className="nav-link">How it works</Link></li>
                                    {/*<li className="nav-item"><a href="#" className="nav-link">Services</a></li>*/}
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
                                    <li className="nav-item">
                                        <select
                                            value={i18n.resolvedLanguage}
                                            className="form-select"
                                            aria-label="Default select example"
                                            onChange={(e) => handleLanguageChange(e.target)}
                                        >
                                            {/*<option defaultValue="en" disabled={i18n.resolvedLanguage === "en"}>en</option>*/}
                                            <option defaultValue="en">en</option>
                                            <option value="ee">ee</option>
                                            <option value="ru">ru</option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/*<ul className="nav nav-pills">*/}
                        {/*    <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home page</a></li>*/}
                        {/*    <li className="nav-item"><a href="#" className="nav-link">How it works</a></li>*/}
                        {/*    <li className="nav-item"><a href="#" className="nav-link">Services</a></li>*/}
                        {/*    <li className="nav-item"><a href="#" className="nav-link">Contacts</a></li>*/}
                        {/*</ul>*/}
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header;
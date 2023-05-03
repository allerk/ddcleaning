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
        <header className="sticky-top">
            <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white box-shadow m3">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between header-font" id="navbarNav">
                        <a href="/"><img className="headerLogo disabled" src={logo} alt="logo"/></a>
                        <ul className="navbar-nav">
                            <li className="nav-item liHeader"><Link to="/" className="nav-link active" aria-current="page">Home page</Link></li>
                            <li className="nav-item liHeader dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDarkDropdownMenuLink"
                                      role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </Link>
                                <ul className="dropdown-menu dropdown-menu"
                                    aria-labelledby="navbarDarkDropdownMenuLink">
                                    <li className="liHeader"><Link className="dropdown-item" to="/services/commercial">Commercial cleaning</Link></li>
                                    <li className="liHeader"><Link className="dropdown-item" to="/services/regular">Regular cleaning</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item liHeader"><Link to="/contacts" className="nav-link">Contacts</Link></li>
                        </ul>
                        <div className="lang-section">
                            <div className="input-group">
                                <select className="select-language selectLanguage">
                                    <option>en</option>
                                    <option>et</option>
                                    <option>ru</option>
                                </select>
                            </div>
                            <img src={lang} alt="lang" className="logo disabled" style={{paddingLeft: "0px"}}/>
                        </div>
                    </div>
            </nav>
        </header>
    )
}

export default Header;
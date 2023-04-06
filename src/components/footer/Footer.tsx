import './Footer.css';
import {Link} from "react-router-dom";

const Footer = () => {
    return(
            <footer className="py-3 sticky-footer" style={{backgroundColor: "#47494f"}}>
                <p className="text-center" style={{marginBottom: "0px", color: "white"}}><Link style={{textDecoration: "none", color: "white"}} to="https://www.linkedin.com/in/aleksandr-lerko-a34863209/">Site created by Aleksandr Lerko</Link></p>
            </footer>
    )
}

export default Footer;
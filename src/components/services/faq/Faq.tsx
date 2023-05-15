import "./Faq.css";
import {useState} from "react";
const Faq = () => {

    const [faqSection, setFaqSection] = useState([
        {
            "id": 1,
            "isActive": false,
            "panelHeight": 0
        },
        {
            "id": 2,
            "isActive": false,
            "panelHeight": 0
        },
        {
            "id": 3,
            "isActive": false,
            "panelHeight": 0
        }
    ])

    const toggleSection = (id: number) => {
        const updatedList = faqSection.map((item) => {
            if (item.id === id) {
                return { ...item, isActive: !item.isActive, panelHeight: item.panelHeight === 0 ? 68 : 0 }; // create a new object with the updated name
            }
            return item; // return the original object if the id does not match
        });
        setFaqSection(updatedList);
    }

    return(
        <>
            <h1 className="h1-about text-md-start" style={{paddingBottom: "75px", paddingTop: "100px"}}>FAQ</h1>
            <div>
                <hr></hr>
                <button className={`accordion faqQuestion ${faqSection[0].isActive ? 'activeFaq' : ''}`} onClick={() => toggleSection(1)}>Question 1</button>
                <div className="panel" style={{maxHeight: `${faqSection[0].panelHeight}px`}}>
                    <p className="faqDescription">    На этом месте находится обычный текст среднего размера. Он может использоваться в обычных блоках на всём сайте. На этом месте находится обычный текст среднего размера. Он может использоваться в обычных блоках на всём сайте.     На этом месте находится обычный текст среднего размера. Он может использоваться в обычных блоках на всём сайте.
                    </p>
                </div>
                <hr></hr>
                <button className={`accordion faqQuestion ${faqSection[1].isActive ? 'activeFaq' : ''}`} onClick={() => toggleSection(2)}>Question 2</button>
                <div className="panel" style={{maxHeight: `${faqSection[1].panelHeight}px`}}>
                    <p className="faqDescription">    На этом месте находится обычный текст среднего размера. Он может использоваться в обычных блоках на всём сайте. На этом месте находится обычный текст среднего размера. Он может использоваться в обычных блоках на всём сайте.     На этом месте находится обычный текст среднего размера. Он может использоваться в обычных блоках на всём сайте.
                    </p>
                </div>
                <hr></hr>
                <button className={`accordion faqQuestion ${faqSection[2].isActive ? 'activeFaq' : ''}`} onClick={() => toggleSection(3)}>Question 3</button>
                <div className="panel" style={{maxHeight: `${faqSection[2].panelHeight}px`}}>
                    <p className="faqDescription">    На этом месте находится обычный текст среднего размера. Он может использоваться в обычных блоках на всём сайте. На этом месте находится обычный текст среднего размера. Он может использоваться в обычных блоках на всём сайте.     На этом месте находится обычный текст среднего размера. Он может использоваться в обычных блоках на всём сайте.
                    </p>
                </div>
                <hr></hr>
            </div>
        </>
    )
}

export default Faq;
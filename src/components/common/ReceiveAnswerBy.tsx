import './ReceiveAnswerBy.css';

interface IProps{
    handleChange: (event:
                       EventTarget & HTMLInputElement |
                       EventTarget & HTMLSelectElement |
                       EventTarget & HTMLTextAreaElement) => void;

    data: string
}
const ReceiveAnswerBy = (props: IProps) => {
    return(
        <div className="radio-container">
            <p className="contacts-text">Please select your preferred contact method:</p>
            <input type="radio" id="option1" name="user_answer" value="email" checked={props.data === "email"} style={{marginLeft: "0.7rem"}} onChange={(e) => props.handleChange(e.target)}/>
            <label htmlFor="option1">Email</label>
            <input type="radio" id="option2" name="user_answer" value="phone" checked={props.data === "phone"} onChange={(e) => props.handleChange(e.target)}/>
            <label htmlFor="option2">Phone</label>
        </div>
    )
}

export default ReceiveAnswerBy;
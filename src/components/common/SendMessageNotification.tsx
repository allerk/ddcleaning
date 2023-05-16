import "./SendMessageNotification.css"
interface IProps{
    message: string
}
const SendMessageNotification = (props: IProps) => {
    return(
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6 messageBox">
                {props.message}
            </div>
            <div className="col-3"></div>
        </div>
    )
}

export default SendMessageNotification;
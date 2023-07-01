import {Fragment} from "react"
import ReactDOM from "react-dom"
import { Backdrop } from "./Loader"

const Modal=({ onClose, children })=>{
    return(
        <Fragment>
            {
                ReactDOM.createPortal(
                    <Fragment>
                        <Backdrop onClose={onClose}/>
                        <div className="modal">
                            <button type="close" onClick={onClose}>x</button>
                            <div className="content">{children}</div>
                        </div>
                    </Fragment>,
                    document.getElementById("modal-root")
                )
            }
        </Fragment>
    )
}
export default Modal
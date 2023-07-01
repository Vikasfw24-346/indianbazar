import Modal from "./Modal"
import OrderSuccessImage from "../../assets/icons/add_cart1.png"

const OrderSuccessModal = ({ onClose }) => {
    return (
        <Modal onClose={onClose}>
            <div className="order-container">
                <div className="order-container--success">
                    <img src={OrderSuccessImage} alt="Success" className="img-fluid"/>
                    <div className="message">
                        <h1>Order Successfully Placed!</h1>
                        <span>OrderID #{Math.random().toString(32).slice(2)}</span>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default OrderSuccessModal
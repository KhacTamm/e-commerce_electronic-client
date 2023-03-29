import { useDispatch, useSelector } from 'react-redux'
import { Link, redirect, useNavigate } from 'react-router-dom'
import { formatPrice } from '../../../untils'

import './CartReceipt.css'

function CartReceipt() {
    const history = useNavigate()
    const cartItems = useSelector((state) => state.cart.cartItems)
    var userInfo = useSelector((state) => state.userSignin.userInfo)
    const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.salePrice, 0)

    const Order = () => {
        if (userInfo) {
            history('/order')
        } else {
            // alert('ban can dang nhap')
            console.log(userInfo)

            history('/login')
        }
    }

    return (
        <div className="bill">
            {/* <div className="inner_bill"> */}
            {/* <span className="text_content_bill prices_text"> */}
            {/* <i className="fas fa-map-marker-alt"></i> */}
            {/* Giao tới */}
            {/* </span> */}
            {/* <div className="location"> */}
            {/* <div className="location_address">{{ User.address }}</div> */}
            {/* </div> */}
            {/* </div> */}
            <ul className="prices_items">
                <li className="prices_item">
                    <span className="prices_text">Tạm tính</span>
                    <span className="prices_value">{formatPrice(totalPrice)} ₫</span>
                </li>
                <li className="prices_item">
                    <span className="prices_text">Phí ship</span>
                    <span className="prices_value">{formatPrice(30000)} ₫</span>
                </li>
            </ul>
            {/* <div className="prices_total">
                <span className="prices_text">Tổng tiền</span>
            </div>
            <button className="buy">
                <span> Mua Hàng </span>
            </button> */}
            <div className="total-price">
                <span className="prices_text">Tổng tiền</span>
                <span className="prices_value">{formatPrice(totalPrice + 30000)}₫</span>
            </div>
            {totalPrice <= 0 ? (
                ''
            ) : (
                <div className="link_Order" onClick={() => Order()}>
                    <div className="order">Đặt Hàng</div>
                </div>
            )}
        </div>
    )
}

export default CartReceipt

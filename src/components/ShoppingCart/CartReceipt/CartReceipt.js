import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { formatPrice } from '../../../untils'

import './CartReceipt.css'

function CartReceipt() {
    const history = useNavigate()
    const cartItems = useSelector((state) => state.cart.cartItems)
    const quantity = useSelector((state) => state.cart.quantity)
    const userSignin = useSelector((state) => state.getUsers)
    const { userInfo } = userSignin
    const totalPrice = cartItems.reduce((total, item) => total + quantity * item.salePrice, 0)

    const Order = () => {
        if (userInfo) {
            history('/order')
        } else {
            history('/login')
        }
    }

    return (
        <div className="bill">
            <ul className="prices_items">
                <li className="prices_item">
                    <span className="prices_text">Tạm tính</span>
                    <span className="prices_value">{formatPrice(totalPrice)} ₫</span>
                </li>
            </ul>
            <div className="total-price">
                <span className="prices_text">Tổng tiền</span>
                <span className="prices_value">{formatPrice(totalPrice)}₫</span>
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

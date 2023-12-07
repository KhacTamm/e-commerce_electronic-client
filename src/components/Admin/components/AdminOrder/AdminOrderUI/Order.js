import React from 'react'
import { formatPrice, formatDateOrderPaypal, formatDate } from '../../../../../untils/index'

import { useNavigate } from 'react-router-dom'
import config from '../../../../../config'

import { useDispatch } from 'react-redux'
import { createOrderGhn, PrintOrderGhn } from '../../../../../redux/actions/GhnAction'
import { deleteOrder, getAllOrder, ShippingOrder } from '../../../../../redux/actions/OrderAction'

import './Order.css'

function Order(props) {
    const { order } = props
    const dispatch = useDispatch()
    const history = useNavigate()

    const { orderItems, totalPrice, paymentMethod, cancelOrder, shippingAddress, status, paymentResult, createdAt } =
        order
    // console.log(order.orderItems)

    const handleShippingOrder = async (order) => {
        await dispatch(createOrderGhn(order._id)) // create order in giaohangnhanh
        await dispatch(ShippingOrder(order._id))

        await dispatch(getAllOrder())
        history(config.routes.orderShipping)
    }

    const handlePrintOrder = (order) => {
        dispatch(PrintOrderGhn(order._id))
    }

    const handleDeleteOrder = async (order) => {
        await dispatch(deleteOrder(order._id))
        await dispatch(getAllOrder())
        history(config.routes.orderCancel)
    }

    return (
        <>
            <div className="order-list">
                <div className="order-list-items">
                    {orderItems.map((item) => (
                        <div className="order-items-item">
                            <span className="img">
                                <img src={item.image}></img>
                            </span>
                            <span className="qty">Số lượng: {item.qty}</span>
                            <span className="name">{item.name}</span>
                            <span className="price">{formatPrice(item.salePrice)}₫</span>
                            <span className="time">{formatDate(createdAt)}</span>
                        </div>
                    ))}
                </div>
                <div className="toatalPrice">
                    <span>Tổng tiền: {formatPrice(totalPrice)}</span>
                </div>
                <div className="order-info">
                    <div className="order-info-address">
                        <div className="order-info-address_item">
                            <p>Khách hàng </p>
                            {shippingAddress.name}
                        </div>
                        <div className="order-info-address_item">
                            <p>Số điện thoại</p>
                            {shippingAddress.phone}
                        </div>
                        <div className="order-info-address_item">
                            <p>Địa chỉ</p>
                            {shippingAddress.ward}, {shippingAddress.detail}, {shippingAddress.province},
                            {shippingAddress.district}
                        </div>
                       
                    </div>
                </div>

                {paymentResult ? (
                    <div className="order-payment-check">Paid : {formatDateOrderPaypal(paymentResult.update_time)}</div>
                ) : (
                    ''
                )}

                <div className="order-bottom">
                    {status === 'shipping' ? (
                        <div className="order-status">
                            <span>Đã xác nhận {paymentMethod === 'payOnline' ? <span>& Đã thanh toán</span> : ''}</span>
                        </div>
                    ) : (
                        ''
                    )}

                    <div className="order-button">
                        {status === 'pendding' && cancelOrder === false ? (
                            <>
                                <button className="shipping" onClick={() => handleShippingOrder(order)}>
                                    Xác nhận đơn hàng
                                </button>
                            </>
                        ) : (
                            ''
                        )}

                        {cancelOrder === true && status !== 'cancel' ? (
                            <>
                                <span> Khách yêu cầu hủy đơn </span>
                                <button className="shipping" onClick={() => handleDeleteOrder(order)}>
                                    Hủy đơn
                                </button>
                            </>
                        ) : (
                            ''
                        )}

                        {status === 'shipping' ? (
                            <button className="shipping" onClick={() => handlePrintOrder(order)}>
                                In đơn hàng
                            </button>
                        ) : (
                            ''
                        )}
                        {status === 'cancel' ? (
                            <span className="order-status" style={{ fontSize: '1.7rem', fontWeight: '600' }}>
                                Đơn hàng đã hủy
                            </span>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order

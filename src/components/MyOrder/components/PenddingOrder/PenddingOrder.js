import React, { useEffect } from 'react'

import { formatPrice } from '../../../../untils/index'

import { useDispatch, useSelector } from 'react-redux'
import { cancelOrder, getOrderPenddingByUser } from '../../../../redux/actions/OrderAction'

import './PenddingOrder.css'
import EmptyOrder from '../AllOrder/EmptyOrder'
import MyOrder from '../../MyOrder'

function PenddingOrder(props) {
    const dispatch = useDispatch()
    const { myOrdersPendding } = useSelector((state) => state.orderByUser)
    const userSignin = useSelector((state) => state.getUsers)
    const { userInfo } = userSignin

    const orderParent = (item) => (
        <div className="all-myorder-parent-item">
            <div className="all-myorder-list">{item.orderItems.map((item) => orderItem(item))}</div>
            <div className="all-myorder-item-totalprice">
                {item.paymentMethod === 'payOnline' ? <span>Đã thanh toán : </span> : <span>Tổng số tiền : </span>}{' '}
                <strong>{formatPrice(item.totalPrice)}đ</strong>
                <div className="myorder-cancel">
                    {item.cancelOrder ? (
                        <span>Đang yêu cầu hủy đơn</span>
                    ) : (
                        <span onClick={() => handleCancelOrder(item)}>Hủy đơn hàng</span>
                    )}
                </div>
            </div>
        </div>
    )
    const orderItem = (item) => (
        <div className="all-myorder-item">
            <div className="all-myorder-item-img">
                <img src={item.image}></img>
            </div>
            <div className="all-myorder-item-name">
                <p>{item.name}</p>
                <span>x{item.qty}</span>
            </div>
            <div className="all-myorder-item-price">{formatPrice(item.salePrice)}đ</div>
        </div>
    )

    const handleCancelOrder = async (item) => {
        await dispatch(cancelOrder(item._id))
        dispatch(getOrderPenddingByUser(userInfo._id))
    }

    useEffect(() => {
        dispatch(getOrderPenddingByUser(userInfo._id))
    }, [dispatch])

    return (
        <div className="myorder-item">
            <MyOrder></MyOrder>
            <div className="all-myorder">
                {myOrdersPendding && myOrdersPendding.length > 0 ? (
                    myOrdersPendding.map((item) => orderParent(item))
                ) : (
                    <EmptyOrder></EmptyOrder>
                )}
            </div>
        </div>
    )
}

export default PenddingOrder

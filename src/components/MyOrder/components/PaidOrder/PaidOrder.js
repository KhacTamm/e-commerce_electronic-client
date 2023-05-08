import React, { useEffect } from 'react'

import { formatPrice } from '../../../../untils/index'

import { useDispatch, useSelector } from 'react-redux'
import { getOrderPaidByUser } from '../../../../redux/actions/OrderAction'
import EmptyOrder from '../AllOrder/EmptyOrder'
import MyOrder from '../../MyOrder'

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

export const orderParent = (item) => (
    <div className="all-myorder-parent-item">
        <div className="all-myorder-list">{item.orderItems.map((item) => orderItem(item))}</div>
        <div className="all-myorder-item-totalprice">
            <span>Tổng số tiền : </span> <strong>{formatPrice(item.totalPrice)}đ</strong>
        </div>
    </div>
)

function PaidOrder(props) {
    const dispatch = useDispatch()

    const { myOrdersPaid } = useSelector((state) => state.orderByUser)
    const userSignin = useSelector((state) => state.getUsers)
    const { userInfo } = userSignin

    useEffect(() => {
        dispatch(getOrderPaidByUser(userInfo._id))
    }, [dispatch])

    return (
        <div className="myorder-item">
            <MyOrder></MyOrder>
            <div className="all-myorder">
                {myOrdersPaid && myOrdersPaid.length > 0 ? (
                    myOrdersPaid.map((item) => orderParent(item))
                ) : (
                    <EmptyOrder></EmptyOrder>
                )}
            </div>
        </div>
    )
}

export default PaidOrder

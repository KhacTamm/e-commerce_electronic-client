import React, { useEffect } from 'react'

import { formatPrice } from '../../../../untils/index'

import { useDispatch, useSelector } from 'react-redux'
// import { getOrderByUser } from "../../../../actions/OrderAction";
import { getOrderByUser } from '../../../../redux/actions/OrderAction'
import MyOrder from '../../MyOrder'

import './AllOrder.css'
import EmptyOrder from './EmptyOrder'

const orderItem = (item) => (
    <div className="all-myorder-item">
        <div className="all-myorder-item-img">
            <img src={item.image}></img>
        </div>
        <div className="all-myorder-item-name">
            <p>{item.name}</p>
            <span>x{item.qty}</span>
        </div>
        <div className="all-myorder-item-price">{formatPrice(item.salePrice)}₫</div>
    </div>
)

export const orderParent = (item) => (
    <div className="all-myorder-parent-item">
        <div className="all-myorder-list">{item.orderItems.map((item) => orderItem(item))}</div>
        <div className="all-myorder-item-totalprice">
            <div>
                <span>Tổng số tiền : </span> <strong>{formatPrice(item.totalPrice)}₫</strong>
            </div>
        </div>
    </div>
)

function AllOrder(props) {
    const dispatch = useDispatch()
    const { myOrders } = useSelector((state) => state.orderByUser)

    const userSignin = useSelector((state) => state.getUsers)
    const { userInfo } = userSignin
    useEffect(() => {
        dispatch(getOrderByUser(userInfo._id))
    }, [])

    return (
        <div className="myorder-item">
            <MyOrder></MyOrder>
            <div className="all-myorder">
                {myOrders && myOrders.length > 0 ? (
                    myOrders.map((item) => orderParent(item))
                ) : (
                    <EmptyOrder></EmptyOrder>
                )}
            </div>
        </div>
    )
}

export default AllOrder

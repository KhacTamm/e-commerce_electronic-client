import React, { useEffect } from 'react'

import { formatPrice } from '../../../../../untils'

import { useDispatch, useSelector } from 'react-redux'
import { GetAllOrderPaid } from '../../../../../redux/actions/OrderAction'
import ListOrder from '../AdminOrderUI/ListOrder'
import MenuOrder from '../MenuOrder/MenuOrder'
import EmptyOrder from '../EmptyOrder/EmptyOrder'

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

function AdminPaidOrder(props) {
    const dispatch = useDispatch()

    const { orderPaid } = useSelector((state) => state.allOrder)
    // const { userInfo } = useSelector((state) => state.userSignin)

    useEffect(() => {
        dispatch(GetAllOrderPaid())
    }, [dispatch])

    return (
        <div>
            <div className="dashboard-top">
                <div className="dashboard-top-search">
                    <p className="admin-TypeProduct_header_title">Quản lý đơn hàng</p>
                </div>
                <div className='menu_order-admin'>
                    <MenuOrder></MenuOrder>
                </div>
            </div>
            {/* <MenuOrder></MenuOrder> */}
            {orderPaid && orderPaid.length > 0 ? <ListOrder orders={orderPaid} /> : <EmptyOrder></EmptyOrder>}
        </div>
    )
}

export default AdminPaidOrder

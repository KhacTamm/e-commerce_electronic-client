import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { cancelOrder, GetAllOrderPendding } from '../../../../../redux/actions/OrderAction'

import './AdminPenddingOrder.css'
import ListOrder from '../AdminOrderUI/ListOrder'
import MenuOrder from '../MenuOrder/MenuOrder'
import EmptyOrder from '../EmptyOrder/EmptyOrder'


function AdminPenddingOrder(props) {
    const dispatch = useDispatch()
    const { orderPendding } = useSelector((state) => state.allOrder)

    useEffect(() => {
        dispatch(GetAllOrderPendding())
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
            {orderPendding && orderPendding.length > 0 ? <ListOrder orders={orderPendding} /> : <EmptyOrder></EmptyOrder>}
        </div>
    )
}

export default AdminPenddingOrder

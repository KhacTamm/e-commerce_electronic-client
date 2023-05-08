import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAllOrder } from '../../../../../redux/actions/OrderAction'

import ListOrder from '../AdminOrderUI/ListOrder'
import EmptyOrder from '../EmptyOrder/EmptyOrder'
import MenuOrder from '../MenuOrder/MenuOrder'

function AdminOrderAll(props) {
    const dispatch = useDispatch()
    const orders = useSelector((state) => state.allOrder.order)
    const orderGhn = useSelector((state) => state.orderGhn)

    useEffect(() => {
        dispatch(getAllOrder())
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
            {orders && orders.length > 0 ? <ListOrder orders={orders} /> : <EmptyOrder></EmptyOrder>}
        </div>
    )
}

export default AdminOrderAll

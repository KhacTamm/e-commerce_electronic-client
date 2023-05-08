import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { GetAllOrderCancel } from '../../../../../redux/actions/OrderAction'

import './AdminCancelOrder.css'
import ListOrder from '../AdminOrderUI/ListOrder'
import MenuOrder from '../MenuOrder/MenuOrder'
import EmptyOrder from '../EmptyOrder/EmptyOrder'

function AdminCancelOrder(props) {
    const dispatch = useDispatch()
    const { orderCancel } = useSelector((state) => state.allOrder)

    useEffect(() => {
        dispatch(GetAllOrderCancel())
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
            {orderCancel && orderCancel.length > 0 ? <ListOrder orders={orderCancel} /> : <EmptyOrder></EmptyOrder>}
        </div>
    )
}

export default AdminCancelOrder

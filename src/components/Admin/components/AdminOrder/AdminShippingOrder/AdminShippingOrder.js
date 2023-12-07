import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { GetAllOrderShipping } from '../../../../../redux/actions/OrderAction'

import ListOrder from '../AdminOrderUI/ListOrder'
import MenuOrder from '../MenuOrder/MenuOrder'
import EmptyOrder from '../EmptyOrder/EmptyOrder'


function AdminShippingOrder(props) {
    const dispatch = useDispatch()
    const { orderShipping } = useSelector((state) => state.allOrder)

    useEffect(() => {
        dispatch(GetAllOrderShipping())
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
            {orderShipping && orderShipping.length > 0 ? <ListOrder orders={orderShipping} /> : <EmptyOrder></EmptyOrder>}
        </div>
    )
}

export default AdminShippingOrder

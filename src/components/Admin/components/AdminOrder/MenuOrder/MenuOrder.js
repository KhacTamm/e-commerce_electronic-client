import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import config from '../../../../../config'

import { useDispatch, useSelector } from 'react-redux'
import { getAllOrder } from '../../../../../redux/actions/OrderAction'
import { GetAllOrderPendding, GetAllOrderPaid, GetAllOrderShipping, GetAllOrderCancel } from '../../../../../redux/actions/OrderAction'

function MenuOrder(props) {
    const dispatch = useDispatch()
    const location = useLocation()

    const { order } = useSelector((state) => state.allOrder)
    const { orderPendding } = useSelector((state) => state.allOrder)
    const { orderShipping } = useSelector((state) => state.allOrder)
    const { orderPaid } = useSelector((state) => state.allOrder)
    const { orderCancel } = useSelector((state) => state.allOrder)

    // console.log(orderShipping)

    useEffect(() => {
        const getAllOrderPenddingAndShippingByUser = () => {
            dispatch(getAllOrder())
            dispatch(GetAllOrderPendding())
            dispatch(GetAllOrderPaid())
            dispatch(GetAllOrderShipping())
            dispatch(GetAllOrderCancel())

        }

        getAllOrderPenddingAndShippingByUser()
        // dispatch(getAllOrder())
    }, [dispatch])

    return (
        <div className="myorder-menu adminorder-menu">
            <div className={location.pathname === '/admin/order' ? 'myorder-menu-item active' : 'myorder-menu-item'}>
                <Link to={config.routes.order}>Tất cả</Link>
                {order ? <div className="myorder-menu-item-newPendding">{order.length}</div> : ''}
            </div>
            <div
                className={
                    location.pathname === '/admin/order/pendding' ? 'myorder-menu-item active' : 'myorder-menu-item'
                }
            >
                <Link to={config.routes.orderPedding}>Chờ xử lí</Link>
                {orderPendding ? <div className="myorder-menu-item-newPendding">{orderPendding.length}</div> : ''}
            </div>
            <div
                className={
                    location.pathname === '/admin/order/shipping' ? 'myorder-menu-item active' : 'myorder-menu-item'
                }
            >
                <Link to={config.routes.orderShipping}>Đang giao</Link>
                {orderShipping ? <div className="myorder-menu-item-newShipping">{orderShipping.length}</div> : ''}
            </div>
            <div
                className={location.pathname === '/admin/order/paid' ? 'myorder-menu-item active' : 'myorder-menu-item'}
            >
                {orderPaid ? <div className="myorder-menu-item-newShipping">{orderPaid.length}</div> : ''}
                <Link to={config.routes.orderPaid}>Đã giao</Link>
            </div>
            <div
                className={location.pathname === '/admin/order/cancel' ? 'myorder-menu-item active' : 'myorder-menu-item'}
            >
                {orderCancel ? <div className="myorder-menu-item-newShipping">{orderCancel.length}</div> : ''}
                <Link to={config.routes.orderCancel}>Đơn hủy</Link>
            </div>
        </div>
    )
}

export default MenuOrder

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

// import { getAllOrder } from '../../../../../actions/OrderAction'
import { getAllOrder } from '../../../../../redux/actions/OrderAction'

import ListOrder from '../AdminOrderUI/ListOrder'

function AdminOrderAll(props) {
    const dispatch = useDispatch()
    const orders = useSelector((state) => state.allOrder.order)
    const { orderGhnInfo } = useSelector((state) => state.orderGhn)
    const orderGhn = useSelector((state) => state.orderGhn)

    useEffect(() => {
        dispatch(getAllOrder())
    }, [])

    return (
        <div>
            <div className="dashboard-top">
                <div className="dashboard-top-search">
                    <p className="admin-TypeProduct_header_title">Quản lý đơn hàng</p>
                </div>
                {/* <div className="dashboard-top-content">
                    <li className="dashboard-top-content-avatar">
                        <Link to="/">Quay lại trang chủ</Link>
                    </li>
                </div> */}
            </div>
            {orders && orders.length > 0 ? <ListOrder orders={orders} /> : <h4>Không có đơn hàng</h4>}
        </div>
    )
}

export default AdminOrderAll

import React from 'react'
import './AdminOrder.css'
// import AdminOrderMenu from './AdminOrderMenu/AdminOrderMenu'
import AdminOrderAll from './AdminOrderAll/AdminOrderAll'

import { Link } from 'react-router-dom'

function AdminOrder(props) {
    return (
        <>
            <div className="dashboard-top">
                <div className="dashboard-top-search">
                    <p className="admin-TypeProduct_header_title">Quản lý thương hiệu</p>
                </div>
                <div className="dashboard-top-content">
                    <li className="dashboard-top-content-avatar">
                        <Link to="/">Quay lại trang chủ</Link>
                    </li>
                </div>
            </div>
            <div className="order">
                <span>Orders</span>
                <AdminOrderAll />
            </div>
        </>
    )
}

export default AdminOrder

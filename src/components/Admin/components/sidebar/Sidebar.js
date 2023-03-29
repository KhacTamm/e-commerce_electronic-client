import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import config from '../../../../config'
import { GetAllOrderPendding } from '../../../../redux/actions/OrderAction'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Sidebar.css'
import {
    AppstoreOutlined,
    UsergroupAddOutlined,
    ShopOutlined,
    OrderedListOutlined,
    WechatOutlined,
} from '@ant-design/icons'
import { BsChatDots } from 'react-icons/bs'

import { SiBrandfolder } from 'react-icons/si'
import { BsMenuButtonWide } from 'react-icons/bs'
import images from '../../../../assets'

function Sidebar(props) {
    const dispatch = useDispatch()
    const location = useLocation()
    const { orderPendding } = useSelector((state) => state.allOrder)
    let totalNewOrder

    if (orderPendding) {
        totalNewOrder = orderPendding.length
    }

    useEffect(() => {
        const getNewOrder = () => {
            dispatch(GetAllOrderPendding())
        }
        getNewOrder()
    }, [dispatch])

    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <Link to="/">
                    <img src={images.logo} />
                    <h1>Ba-Tê Shop</h1>
                </Link>
            </div>
            <div className="sidebar-list">
                <NavLink to={config.routes.admin} className={'sidebar-list-item'} end>
                    <AppstoreOutlined />
                    <p>Bảng điều khiển</p>
                </NavLink>
                <NavLink to={config.routes.customer} className={'sidebar-list-item'} end>
                    <UsergroupAddOutlined />
                    <p>Khách hàng</p>
                </NavLink>
                <NavLink to={config.routes.product} className={'sidebar-list-item'} end>
                    <ShopOutlined></ShopOutlined>
                    <p>Sản phẩm</p>
                </NavLink>
                <NavLink to={config.routes.category} className={'sidebar-list-item'} end>
                    <BsMenuButtonWide />
                    <p>Loại sản phẩm</p>
                </NavLink>
                <NavLink to={config.routes.brand} className={'sidebar-list-item'} end>
                    <SiBrandfolder />
                    <p>Thương hiệu</p>
                </NavLink>
                <NavLink to={config.routes.order} className={'sidebar-list-item'} end>
                    <OrderedListOutlined />
                    <p>
                        Đơn hàng
                        <div className="admin-order-new">{totalNewOrder}</div>
                    </p>
                </NavLink>
                <NavLink
                    to="/admin/chat"
                    className={location.pathname === '/admin/chat' ? 'sidebar-list-item active' : 'sidebar-list-item'}
                >
                    <BsChatDots />
                    <p>Chat</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar

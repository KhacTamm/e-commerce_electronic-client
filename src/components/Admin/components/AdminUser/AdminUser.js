import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { getAllUser } from '../../../../redux/actions/UserAction'

import './AdminUser.css'

import ListUser from './ListUser'

function AdminUser(props) {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users.user)

    useEffect(() => {
        dispatch(getAllUser())
    }, [dispatch])
    return (
        <>
            <div className="dashboard-top">
                <div className="dashboard-top-search">
                    <p className="admin-TypeProduct_header_title">Quản lý khách hàng</p>
                </div>
                <div className="dashboard-top-content">
                    <li className="dashboard-top-content-avatar">
                        <Link to="/">Quay lại trang chủ</Link>
                    </li>
                </div>
            </div>
            <div className="admin-user">
                {/* <span>Khách hàng</span> */}
                {users ? <ListUser users={users}></ListUser> : <h2> Loading</h2>}
            </div>
        </>
    )
}

export default AdminUser

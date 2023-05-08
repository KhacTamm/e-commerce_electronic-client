import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getAllUser } from '../../../../redux/actions/UserAction'

import './AdminUser.css'

import ListUser from './ListUser'

function AdminUser(props) {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.getUsers.user)

    useEffect(() => {
        dispatch(getAllUser())
    }, [dispatch])
    return (
        <>
            <div className="dashboard-top">
                <div className="dashboard-top-search">
                    <p className="admin-TypeProduct_header_title">Quản lý khách hàng</p>
                </div>
            </div>
            <div className="admin-user">
                {users ? <ListUser users={users}></ListUser> : <h2> Loading</h2>}
            </div>
        </>
    )
}

export default AdminUser

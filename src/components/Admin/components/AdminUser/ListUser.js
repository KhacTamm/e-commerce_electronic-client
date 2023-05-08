import React from 'react'
import User from './User'

function ListUser(props) {
    const { users } = props

    return (
        <div className="admin-user-list">
            <table>
                <tr>
                    <th></th>
                    <th>Họ tên khách hàng</th>
                    <th>Email</th>
                    <th>Số điện thoại</th>
                    <th>Địa chỉ</th>
                </tr>
                {users.map((item, index) => ( 
                    item.isAdmin === false ?     
                    <User user={item} number={index}></User> : ''
                ))}
            </table>
        </div>
    )
}

export default ListUser

import React from 'react'
import { useDispatch } from 'react-redux'

import { deleteUser, getAllUser } from '../../../../redux/actions/UserAction'

import { DeleteOutlined } from '@ant-design/icons'

function User(props) {
    const { user, number } = props
    const dispatch = useDispatch()
    const handleDeleteUser = async (user) => {
        await dispatch(deleteUser(user._id))
        dispatch(getAllUser())
    }

    return (
        <tr>
            <td>{number}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.address}</td>
            <td className="delete-user" onClick={() => handleDeleteUser(user)}>
                <DeleteOutlined />
            </td>
        </tr>
    )
}

export default User

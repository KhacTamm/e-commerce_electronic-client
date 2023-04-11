import React from 'react'

import { useDispatch } from 'react-redux'
import { updateUser } from '../../redux/actions/UserAction'
import { useForm } from 'react-hook-form'

import './Account.css'

function Account(props) {
    const { userInfo } = props
    const { register, handleSubmit } = useForm({ defaultValues: {} })
    const dispatch = useDispatch()

    const onSubmit = async (data) => {
        let formData = new FormData()

        formData.append('name', data.name)
        formData.append('phone', data.phone)
        formData.append('amount', data.amount)
        formData.append('email', data.email)
        formData.append('address', data.address)
        // formData.append('image', image)

        await dispatch(updateUser(formData))
    }

    return (
        <form className="account_items" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
            <div className="account_item">
                <lable className="account_lable">Tên tài khoản</lable>
                <input {...register('name')} defaultValue={userInfo.name}></input>
            </div>
            <div className="account_item">
                <lable className="account_lable">Số điện thoại</lable>
                <input {...register('phone')} defaultValue={userInfo.phone} placeholder="Nhập vào số điên thoại" />
            </div>
            <div className="account_item">
                <lable className="account_lable">Email</lable>
                <input {...register('email')} defaultValue={userInfo.email}></input>
            </div>
            <div className="account_item">
                <lable className="account_lable">Địa chỉ</lable>
                <input {...register('address')} defaultValue={userInfo.address} placeholder="Nhập vào địa chỉ" />
            </div>
            <button type="submit" className="btn_account">
                <span>Cập nhật</span>
            </button>
        </form>
    )
}

export default Account

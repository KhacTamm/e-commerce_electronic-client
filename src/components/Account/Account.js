import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../redux/actions/UserAction'
import { useForm } from 'react-hook-form'
import { message } from 'antd'

import './Account.css'
import { useState } from 'react'

function Account(props) {
    const dispatch = useDispatch()
    const userSignin = useSelector((state) => state.getUsers)
    const { userInfo } = userSignin
    const [passwordnew, setPasswordnew] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [stateChangePass, setstateChangePass] = useState(false)

    // console.log(userInfo)


    const { register, handleSubmit } = useForm()

    const success = () => {
        message.success({
            content: 'Cập nhật thông tin tài khoản thành công',
            duration: 1,
            className: 'custom-class',
            style: {
                position: 'absolute',
                left: '43%',
                top: '300px',
                zIndex: '999',
            },
        })
    }

    const onSubmit = async (data) => {
        if (passwordnew === confirmPassword) {
            if (passwordnew !== ''){
                data.password = passwordnew
                console.log("1111")
            }
            localStorage.setItem('userInfo', JSON.stringify(data.name))
            await dispatch(updateUser(data))
            setstateChangePass(false)
            await success()
        }else {
            alert('wrong repeat password')
        }
    
    }

    const changePass = (item) => {
        setstateChangePass = !item
        // console.log(!stateChangePass)
    }

    return (
        <form className="account_items"  onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
            <div className="account_item">
                <lable className="account_lable">Tên tài khoản</lable>
                <input {...register('name')} defaultValue={userInfo.name}></input>
            </div>
            <div className="account_item">
                <lable className="account_lable">Số điện thoại</lable>
                <input {...register('phone')} defaultValue={userInfo.phone} type="number" placeholder="Nhập vào số điên thoại" />
            </div>
            <div className="account_item">
                <lable className="account_lable">Email</lable>
                <input {...register('email')} disabled defaultValue={userInfo.email}></input>
            </div>
            <div className="account_item">
                <lable className="account_lable">Địa chỉ</lable>
                <input {...register('address')} defaultValue={userInfo.address} placeholder="Nhập vào địa chỉ" />
            </div>
            <div className="account_item">
                <div className='pass'>
                    <lable className="account_lable">Mật khẩu</lable>
                    <input {...register('password')} className='noneSelect' type="password" disabled  defaultValue={userInfo.password} placeholder="Mật khẩu" />
                    <div className='updatePass' onClick={()=>setstateChangePass(!stateChangePass)}>Cập nhật</div>
                </div>
            </div>
             {stateChangePass ?
              <div className='passChange'>
              <lable className="account_lable"></lable>
              <input
                      {...register('passwordnew')}
                      placeholder="Nhập mật khẩu mới"
                      type="password"
                      onChange={(e) => setPasswordnew(e.target.value)}
                  ></input>
              <lable className="account_lable"></lable>
                  <input
                      {...register('repeat password')}
                      placeholder="Nhập lại mật khẩu mới"
                      type="password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                  ></input>
              </div> : '' }
           
            <button type="submit" className="btn_account">
                Cập nhật
            </button>
        </form>
    )
}

export default Account

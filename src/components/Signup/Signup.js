import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import config from '../../config'

import { useDispatch } from 'react-redux'
// import { SignupUser } from '../../actions/UserAction'
import { SignupUser } from '../../redux/actions/UserAction'

import './Signup.css'

function Login(props) {
    const dispatch = useDispatch()
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const history = useNavigate()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        if (password === confirmPassword) {
            dispatch(SignupUser(data))
            history('/login')
        } else {
            alert('wrong repeat password')
        }
    }

    return (
        <div className="signup-page">
            <h2>ĐĂNG KÝ</h2>
            <form onSubmit={handleSubmit(onSubmit)} classname="form-signup">
                <input {...register('name')} placeholder="Name" required></input>
                <input {...register('email')} placeholder="Email" type="email" required></input>
                <input
                    {...register('password')}
                    placeholder="Password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                ></input>
                <input
                    {...register('repeat password')}
                    placeholder=" Repeat password"
                    type="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                ></input>
                <input type="submit" value="Đăng Kí"></input>
            </form>
            <div className="toLogin">
                <p>Bạn đã có tài khoản?</p>
                <Link to={config.routes.login}> Đăng nhập</Link>
            </div>
        </div>
    )
}

export default Login

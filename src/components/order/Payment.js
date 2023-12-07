import React, { useEffect, useState } from 'react'
import { PayPalButton } from 'react-paypal-button-v2'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'
import { createOrder, payOrder } from '../../redux/actions/OrderAction'
import { HandlePaymentProduct } from '../../redux/actions/ProductAction'
import { DeleteAllToCart } from '../../redux/actions/CartAction'
import VnPay from './VnPay'

export default function Payment() {
    const history = useNavigate()
    const dispatch = useDispatch()
    const [sdkReady, setSdkReady] = useState(false)
    const [choosePay, setChoosePay] = useState({
        payLater: false,
        payOnline: false,
    })

    const { order } = useSelector((state) => state.orderInfo)
    const userSignin = useSelector((state) => state.getUsers)
    const { userInfo } = userSignin

    const payLater = () => {
        setChoosePay({ payOnline: false, payLater: true })
    }

    const payOnline = () => {
        setChoosePay({ payLater: false, payOnline: true })
    }

    const successPaymentHandler = async (paymentResult) => {
        const OrderPaid = {
            ...order,
            status: 'pendding',
            paymentMethod: 'payOnline',
            paymentResult: { ...paymentResult },
        }
        // await dispatch(createOrder(OrderPaid))
        history('/orderSuccess')
    }

    const SendOrderPayLater = async () => {
        const OrderPaid = {
            ...order,
            status: 'pendding',
            paymentMethod: 'payLater',
        }

        await dispatch(createOrder(OrderPaid))
        await dispatch(DeleteAllToCart(userInfo._id))
        await dispatch(HandlePaymentProduct(order.orderItems))
        history('/orderSuccess')
        console.log(order.orderItems)
    }

    useEffect(() => {
        const addPayPalScript = async () => {
            const { data } = await axios.get('http://localhost:4000/api/config/paypal')
            const script = document.createElement('script')
            script.type = 'text/javascript'
            script.src = `https://www.paypal.com/sdk/js?client-id=${data}`
            script.async = true
            script.onload = () => {
                setSdkReady(true)
            }
            document.body.appendChild(script)

            addPayPalScript()
        }
    }, [])
    return (
        <div className="choose-pay">
            <h4>CHỌN PHƯƠNG THỨC THANH TOÁN </h4>
            <div className="choose">
                <button type="submit" className={choosePay.payLater ? 'active' : ''} onClick={() => payLater()}>
                    Thanh toán khi nhận hàng
                </button>
                <button type="submit" className={choosePay.payOnline ? 'active' : ''} onClick={() => payOnline()}>
                    Thanh toán Online
                </button>
            </div>
            {choosePay.payLater ? (
                <div className="customer-order">
                    <button onClick={SendOrderPayLater}>Đặt Hàng</button>
                </div>
            ) : (
                ''
            )}
            {choosePay.payOnline ? (
                <button type="submit" className="paypal">
                    <VnPay></VnPay>
                    <PayPalButton
                        className="paypal-btn"
                        style={{ color: 'white', marginTop: '1rem' }}
                        amount={1}
                        onSuccess={successPaymentHandler}
                    ></PayPalButton>
                </button>
            ) : (
                ''
            )}
        </div>
    )
}

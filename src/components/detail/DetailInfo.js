import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import config from '../../config'
import { formatPrice } from '../../untils/index'

import { useDispatch, useSelector } from 'react-redux'
import { AddToCart } from '../../redux/actions/CartAction'

import { Rate } from 'antd'
import { message } from 'antd'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useState } from 'react'

function DetailInfo(props) {
    const { product } = props

    const dispatch = useDispatch()
    const history = useNavigate()
    const [qty, setQty] = useState(1)
    const userSignin = useSelector((state) => state.getUsers)
    const { userInfo } = userSignin

    const success = () => {
        message.success({
            content: 'Sản phẩm đã được thêm vào Giỏ hàng',
            duration: 1,
            className: 'custom-class',
            style: {
                position: 'absolute',
                left: '35%',
                top: '300px',
                zIndex: '999',
            },
        })
    }

    const failure = () => {
        message.error({
            content: 'Số lượng bạn chọn đã đạt mức tối đa của sản phẩm này',
            duration: 1,
            className: 'custom-class',
            style: {
                position: 'absolute',
                left: '35%',
                top: '300px',
                zIndex: '999',
            },
        })
    }

    const handleAddToCart = async (product) => {
        if (userInfo) {
            const cartItem = {
                ...product,
                count: qty,
                idUser: userInfo._id,
            }

            const action = AddToCart(cartItem)
            await dispatch(action)
            history(`${config.routes.cart}`)
        } else {
            history(`${config.routes.login}`)
        }
    }

    const AddProductCart = async (product) => {
        if (userInfo) {
            const cartItem = {
                ...product,
                count: qty,
                idUser: userInfo._id,
            }
            const action = AddToCart(cartItem)
            await dispatch(action)
            success()
        } else {
            history(`${config.routes.login}`)
        }
    }

    const countReview = product.reviews.length
    let averageRate = (product.reviews.reduce((a, c) => a + c.star, 0) / countReview).toFixed(1)

    function discount(product) {
        const percentDiscount = 100 - Math.round((product.salePrice * 100) / product.price)
        return percentDiscount
    }

    function handleDecreaseProduct() {
        setQty(qty - 1)
    }

    function handleNoDecreaseProduct(e) {
        if(qty > 1) {

            failure() 
        } 
        e.preventDefault()
    }

    function handleIncreaseProduct() {
        setQty(qty + 1)
    }

    const overQty = () => <div>Số lượng bạn chọn đã đạt mức tối đa của sản phẩm này</div>
    return (
        <div className="detail-info-right">
            <div className="detail-item detail-title">
                <h2>{product.name}</h2>
                <div className="listproduct-product-star">
                    {isNaN(averageRate) ? (
                        <Rate style={{ color: 'orange', fontSize: '20px' }} value={0} disabled={true} />
                    ) : (
                        <Rate style={{ color: 'orange', fontSize: '20px' }} value={averageRate} disabled={true} />
                    )}
                    <span className="total_start" style={{fontSize: '20px' }}>({countReview})</span>
                </div>
            </div>
            <div className="detail-item detail-info-right-price">
                <div className="price-box">
                    <span className="old-price">
                        <span className="price">{formatPrice(product.price)}₫</span>
                    </span>
                    <strong className="saleprice">{formatPrice(product.salePrice)}₫</strong>
                    <div className="discount_detail">
                        {discount(product) >= 5 ? (
                            <div className="discount_detail-item">
                                <p>{discount(product)}% Giảm</p>
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </div>
            <div className=" detail-item">
                <div className="detail-qty-addtocart">
                    <div className='detail-qty'>
                        <ul className="button-add-cart">
                            <li onClick={qty > 1 ? () => handleDecreaseProduct(product) : handleNoDecreaseProduct}>-</li>
                            <li className="qty">{qty}</li>
                            <li
                                onClick={
                                    product.amount > qty ? () => handleIncreaseProduct(product) : handleNoDecreaseProduct
                                }
                            >
                                +
                            </li>
                        </ul>
                        <div className='detail-qty_text'>{product.amount} sản phẩm có sẵn</div>
                    </div>
                    
                    <AiOutlineShoppingCart
                        onClick={(e) => {
                            AddProductCart(product)
                        }}
                        className="cartIcon"
                        style={{ fontSize: '3.2rem', marginRight: '12px' }}
                    />
                </div>
                <div className="detail-info-right-buy">
                    <div className="detail-info-right-buy-now">
                        <div className="button_buy" onClick={() => handleAddToCart(product)}>
                            <strong>MUA NGAY</strong>
                            <br></br>
                            <span>(Giao tận nơi hoặc lấy tại cửa hàng)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailInfo

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import config from '../../config'
import { formatPrice } from '../../untils/index'

import { useDispatch, useSelector } from 'react-redux'
import { AddToCart } from '../../redux/actions/CartAction'

import { Rate } from 'antd'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useState } from 'react'

function DetailInfo(props) {
    const { product } = props

    const dispatch = useDispatch()
    const history = useNavigate()
    const [qty, setQty] = useState(1)
    const { userInfo } = useSelector((state) => state.userSignin)

    // var checkQty = false

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
            // success()
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
        // console.log(checkQty)

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
            {/* <div className="detail-description">
                Thiết kế tinh giản hiện đại, bền bỉ chắc chắn Chất liệu khung nguyên khối và nhựa cứng Giải trí sắc nét,
                sống động từng chi tiết Màn hình HD+ 6.52 inches Cấu hình ổn định trong phân khúc Chip Unisoc SC9863A,
                RAM 3GB Bắt trọn khoảnh khắc - Camera kép 13MP chụp ảnh chi tiết, camera trước 5MP
            </div> */}
            <div className=" detail-item">
                <div className="detail-qty-addtocart">
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
                    {/* <div className="detail-info-right-buy-installment">
                    <a href="">
                        <strong>TRẢ GÓP 0%</strong>
                        <br></br>
                        <span>(Xét duyệt qua điện thoại)</span>
                    </a>
                    <a href="">
                        <strong>TRẢ GÓP QUA THẺ</strong>
                        <br></br>
                        <span>(Visa, Master, JCB)</span>
                    </a>
                </div> */}
                </div>
            </div>
        </div>
    )
}

export default DetailInfo

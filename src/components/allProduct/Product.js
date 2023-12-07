import { Link, useLocation, useNavigate } from 'react-router-dom'
import config from '../../config'

import { formatPrice } from '../../untils/index'

import React, { useDispatch, useSelector } from 'react-redux'
import { AddToCart } from '../../redux/actions/CartAction'

import { message } from 'antd'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Rate } from 'antd'

function Product(props) {
    const { product } = props
    const userSignin = useSelector((state) => state.getUsers)
    const { userInfo } = userSignin
    const countReview = product.reviews.length
    let averageRate = (product.reviews.reduce((a, c) => a + c.star, 0) / countReview).toFixed(1)
    const { quantity } = useSelector((state) => state.cart)

    const dispatch = useDispatch()
    const location = useLocation()
    const history = useNavigate()

    const success = () => {
        message.success({
            content: 'Sản phẩm đã được thêm vào Giỏ hàng',
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

    const AddProductToCart = async (product) => {
        if (userInfo) {
            if (quantity <= product.amount) {
                const cartItem = {
                    ...product,
                    count: 1,
                    idUser: userInfo._id,
                }

                const action = AddToCart(cartItem)
                await dispatch(action)
                history(`${config.routes.cart}`)
            } else {
                history(`${config.routes.cart}`)
            }
        } else {
            history(`${config.routes.login}`)
        }
    }

    const AddProductCart = async (e, product) => {
        if (userInfo) {
            if (quantity <= product.amount) {
                const cartItem = {
                    ...product,
                    count: 1,
                    idUser: userInfo._id,
                }

                const action = AddToCart(cartItem)
                await dispatch(action)
                await success()
            } else {
                e.preventDefault()
            }
        } else {
            history(`${config.routes.login}`)
        }
    }

    return (
        <div className={location.pathname === '/product' ? 'col-product' : 'col-2'}>
            <div className="listproduct-product">
                <Link to={'/detail/' + product._id}>
                    <img className="listproduct-product-img" src={product.image} alt="img product" />
                    <span className="listproduct-product-name">{product.name}</span>
                </Link>
                <div className="listproduct-product-price">
                    <div className="price">
                        <span className="price1">{formatPrice(product.salePrice)}₫</span>
                        <span className="price2">{formatPrice(product.price)}₫</span>
                    </div>
                    <AiOutlineShoppingCart
                        onClick={(e) => {
                            AddProductCart(e,product)
                        }}
                        className="cartIcon"
                    />
                </div>
                <div className="listproduct-product-star">
                    {isNaN(averageRate) ? (
                        <Rate style={{ color: 'orange', fontSize: '14px' }} value={0} disabled={true} />
                    ) : (
                        <Rate style={{ color: 'orange', fontSize: '14px' }} value={averageRate} disabled={true} />
                    )}
                    <span className="total_start">({countReview})</span>
                </div>
                {product.percentDiscount >= 5 ? (
                    <div className="discount">
                        <p>{product.percentDiscount}%</p>
                    </div>
                ) : (
                    ''
                )}
                <div className="buy">
                    <div
                        // to={config.routes.cart}
                        className="button_buy"
                        onClick={(e) => {
                            AddProductToCart(product)
                        }}
                    >
                        Mua Ngay
                    </div>
            
                </div>
            </div>
        </div>
    )
}

export default Product

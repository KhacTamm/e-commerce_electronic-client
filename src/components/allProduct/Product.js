import { Link, useLocation, useNavigate } from 'react-router-dom'
import config from '../../config'

import { formatPrice } from '../../untils/index'

import { useDispatch, useSelector } from 'react-redux'
import { AddToCart } from '../../redux/actions/CartAction'

import { message } from 'antd'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Rate, Row, Col, Divider, Progress } from 'antd'

function Product(props) {
    const { product } = props
    const { userInfo } = useSelector((state) => state.userSignin)
    const countReview = product.reviews.length
    let averageRate = (product.reviews.reduce((a, c) => a + c.star, 0) / countReview).toFixed(1)

    const dispatch = useDispatch()
    const location = useLocation()
    const history = useNavigate()

    const success = () => {
        message.success({
            content: 'Thêm vào giỏ hàng thành công',
            duration: 1,
            className: 'custom-class',
            style: {
                position: 'absolute',
                right: '2rem',
                top: '2rem',
                margin: '1rem 0',
            },
        })
    }

    const AddProductToCart = async (product) => {
        const cartItem = {
            ...product,
            count: 1,
            idUser: userInfo._id,
        }
        const action = AddToCart(cartItem)
        await dispatch(action)
        history(`${config.routes.cart}`)
        success()
    }

    const AddProductCart = async (product) => {
        const cartItem = {
            ...product,
            count: 1,
            idUser: userInfo._id,
        }
        const action = AddToCart(cartItem)
        await dispatch(action)
        success()
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
                            AddProductCart(product)
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
                    <Link
                        // to={config.routes.cart}
                        onClick={(e) => {
                            AddProductToCart(product)
                        }}
                    >
                        Mua Ngay
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Product

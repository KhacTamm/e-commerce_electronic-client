import React from 'react'
import { Link } from 'react-router-dom'

import { formatPrice } from '../../untils/index'

import { useDispatch } from 'react-redux'
import { AddToCart } from '../../redux/actions/CartAction'

import { message } from 'antd'

function Product(props) {
    const { product } = props
    const dispatch = useDispatch()

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
        const action = AddToCart(product)
        await dispatch(action)
        await success()
    }

    return (
        <div className="listproduct-product">
            <Link to={'/detail/' + product._id}>
                <img src={product.image}></img>
                <p className="listproduct-product-name">{product.name}</p>
                <div className="price">
                    <span className="price1">{formatPrice(product.salePrice)}đ</span>
                    <span className="price2">{formatPrice(product.price)}đ</span>
                </div>
            </Link>
            {product.percentDiscount >= 5 ? (
                <div className="discount">
                    <p>{product.percentDiscount}%</p>
                </div>
            ) : (
                ''
            )}
            <div className="buy">
                <Link
                    to=""
                    onClick={(e) => {
                        AddProductToCart(product)
                    }}
                >
                    {' '}
                    Mua Ngay
                </Link>
            </div>
        </div>
    )
}

export default Product

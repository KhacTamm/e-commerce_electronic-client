import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { formatPrice } from '../../untils/index'

import { useDispatch, useSelector } from 'react-redux'
import {
    IncreaseQtyProduct,
    DeleteToCart,
    DeleteQtyProduct,
    getAllCart,
    DecreaseQtyProduct,
} from '../../redux/actions/CartAction'

import { BsTrash } from 'react-icons/bs'
import { useState } from 'react'

// Product.propTypes = {}

function Product(props) {
    const { cartItem } = props
    const dispatch = useDispatch()
    const [qty, setQty] = useState()

    useEffect(() => {
        setQty(cartItem.qty)
    },[cartItem.qty])

    function handleDeleteProduct(cartItem) {
        dispatch(DeleteToCart(cartItem))
    }

    function handleNoDeleteProduct(e) {
        e.preventDefault()
    }

    function handleIncreaseProduct(cartItem) {
        const action = IncreaseQtyProduct(cartItem)
        setQty(qty + 1)
        dispatch(action)
    }

    function handleDecreaseProduct(cartItem) {
        dispatch(DecreaseQtyProduct(cartItem._id))
        setQty(qty - 1)
    }

    return (
        <div className="body__cl1">
            <div className="spcl1">
                <div className="inf4_product">
                    <div className="imgsp">
                        <img src={cartItem.image}></img>
                    </div>
                    <div className="spbcl_2">
                        <Link to={`/detail/${cartItem._id}`}>
                            <p className="product_name">{cartItem.name}</p>
                        </Link>
                        <i className="trash" onClick={() => handleDeleteProduct(cartItem)}>
                            <BsTrash />
                        </i>
                    </div>
                </div>
                <div className="dg body_cl1_item">
                    <p className="giakm">{formatPrice(cartItem.salePrice)} ₫</p>
                    <p className="giagoc">{formatPrice(cartItem.price)} ₫</p>
                </div>
                <ul className="button-event sl">
                    <li onClick={qty > 1 ? () => handleDecreaseProduct(cartItem) : handleNoDeleteProduct}>-</li>
                    <li>{qty}</li>
                    <li onClick={qty < cartItem.amount ? () => handleIncreaseProduct(cartItem): handleNoDeleteProduct}>+</li>
                </ul>
                <div className="tt body_cl1_item">{formatPrice(cartItem.salePrice * qty)} ₫</div>
            </div>
        </div>
    )
}

export default Product

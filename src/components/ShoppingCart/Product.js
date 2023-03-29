import { Link } from 'react-router-dom'

import { formatPrice } from '../../untils/index'

import { useDispatch, useSelector } from 'react-redux'
import {
    AddToCart,
    DeleteToCart,
    DeleteQtyProduct,
    getAllCart,
    DecreaseQtyProduct,
} from '../../redux/actions/CartAction'

import { BsTrash } from 'react-icons/bs'
import { useState } from 'react'

Product.propTypes = {}

function Product(props) {
    const { product } = props
    const dispatch = useDispatch()
    const [qty, setQty] = useState(product.qty)

    function handleDeleteProduct(product) {
        dispatch(DeleteToCart(product))
    }

    function handleNoDeleteProduct(e) {
        e.preventDefault()
    }

    function handleIncreaseProduct(product) {
        const action = AddToCart(product)
        setQty(qty + 1)
        dispatch(action)
    }

    function handleDecreaseProduct(product) {
        // console.log(product)
        dispatch(DecreaseQtyProduct(product._id))
        setQty(qty - 1)
    }

    return (
        <div className="body__cl1">
            <div className="spcl1">
                <div className="inf4_product">
                    <div className="imgsp">
                        <img src={product.image}></img>
                    </div>
                    <div className="spbcl_2">
                        <Link to={`/detail/${product._id}`}>
                            <p className="product_name">{product.name}</p>
                        </Link>
                        <i className="trash" onClick={() => handleDeleteProduct(product)}>
                            <BsTrash />
                        </i>
                    </div>
                </div>
                <div className="dg body_cl1_item">
                    <p className="giakm">{formatPrice(product.salePrice)} ₫</p>
                    <p className="giagoc">{formatPrice(product.price)} ₫</p>
                </div>
                <ul className="button-event sl">
                    <li onClick={qty > 1 ? () => handleDecreaseProduct(product) : handleNoDeleteProduct}>-</li>
                    <li>{qty}</li>
                    <li onClick={() => handleIncreaseProduct(product)}>+</li>
                </ul>
                <div className="tt body_cl1_item">{formatPrice(product.salePrice * product.qty)} ₫</div>
            </div>
        </div>
    )
}

export default Product

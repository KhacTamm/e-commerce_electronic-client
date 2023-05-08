import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BsTrash } from 'react-icons/bs'
import './ShoppingCart.css'

import { useDispatch } from 'react-redux'
import { DeleteAllToCart, getAllCart } from '../../redux/actions/CartAction'
import EmptyCart from './EmtyCart/EmptyCart'
import CartReceipt from './CartReceipt/CartReceipt'
import Product from './Product'

function Cart() {
    const dispatch = useDispatch()
    const { cartItems } = useSelector((state) => state.cart)
    const userSignin = useSelector((state) => state.getUsers)
    const { userInfo } = userSignin

    // const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.salePrice, 0)

    function DeleteAllProduct() {
        const action = DeleteAllToCart(userInfo._id)
        dispatch(action)
    }

    useEffect(() => {
        dispatch(getAllCart(userInfo._id))
        // return () => {
        //     return []
        // }
        // console.log(cartItems)
    }, [dispatch])

    return (
        <section id="shopping-cart">
            <div className="shopping-cart">
                {cartItems.length > 0 ? (
                    <div className="CartNp">
                        <div className="cl1_cart">
                            <div className="header_cl1">
                                <h2 className="title_header">Giỏ Hàng Của Bạn</h2>
                                <ul>
                                    <li className="checkboxAll">
                                        <span className="Namesp">Sản Phẩm</span>
                                        <i className="trash" onClick={() => DeleteAllProduct()}>
                                            <BsTrash />
                                        </i>
                                    </li>
                                    <li className="header_cl1_item item dg">Đơn Giá</li>
                                    <li className="header_cl1_item sl">Số Lượng</li>
                                    <li className="header_cl1_item tt">Thành Tiền</li>
                                </ul>
                            </div>
                            {/* <ListProduct products={cartItems} /> */}
                            <div className="cart">
                                {cartItems.map((product, index) => (
                                    <Product cartItem={product} key={index} />
                                ))}
                            </div>
                        </div>
                        <div className="cl2_cart">
                            <CartReceipt />
                        </div>
                    </div>
                ) : (
                    <EmptyCart />
                )}
            </div>
        </section>
    )
}

export default Cart

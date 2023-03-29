import { Link } from 'react-router-dom'
import { formatPrice } from '../../untils/index'

import { useDispatch, useSelector } from 'react-redux'
import { AddToCart } from '../../redux/actions/CartAction'

import { Rate } from 'antd'
import { AiOutlineShoppingCart } from 'react-icons/ai'

function DetailInfo(props) {
    const dispatch = useDispatch()
    const { userInfo } = useSelector((state) => state.userSignin)
    const { product } = props
    const qty = 1

    function handleAddProduct(product) {
        const action = AddToCart(product)
        dispatch(action)
    }

    const AddProductCart = async (product) => {
        const cartItem = {
            ...product,
            count: 1,
            idUser: userInfo._id,
        }
        const action = AddToCart(cartItem)
        await dispatch(action)
        // success()
    }

    const countReview = product.reviews.length
    let averageRate = (product.reviews.reduce((a, c) => a + c.star, 0) / countReview).toFixed(1)

    function discount(product) {
        const percentDiscount = 100 - Math.round((product.salePrice * 100) / product.price)
        return percentDiscount
    }

    function handleDecreaseProduct() {}

    function handleNoDecreaseProduct() {}
    function handleIncreaseProduct() {}

    return (
        <div className="detail-info-right">
            <div className="detail-title">
                <h2>{product.name}</h2>
                <div className="listproduct-product-star">
                    {isNaN(averageRate) ? (
                        <Rate style={{ color: 'orange', fontSize: '16px' }} value={0} disabled={true} />
                    ) : (
                        <Rate style={{ color: 'orange', fontSize: '16px' }} value={averageRate} disabled={true} />
                    )}
                    <span className="total_start">({countReview})</span>
                </div>
            </div>

            <div className="detail-info-right-price">
                <div className="price-box">
                    <span className="old-price">
                        <span className="price">{formatPrice(product.price)}đ</span>{' '}
                    </span>
                    <strong className="saleprice">{formatPrice(product.salePrice)}đ</strong>
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
            <div className="detail-description">
                Thiết kế tinh giản hiện đại, bền bỉ chắc chắn Chất liệu khung nguyên khối và nhựa cứng Giải trí sắc nét,
                sống động từng chi tiết Màn hình HD+ 6.52 inches Cấu hình ổn định trong phân khúc Chip Unisoc SC9863A,
                RAM 3GB Bắt trọn khoảnh khắc - Camera kép 13MP chụp ảnh chi tiết, camera trước 5MP
            </div>
            <div className="detail-qty-addtocart">
                <ul className="button-add-cart">
                    <li onClick={qty > 1 ? () => handleDecreaseProduct(product) : handleNoDecreaseProduct}>-</li>
                    <li className="qty">{qty}</li>
                    <li onClick={() => handleIncreaseProduct(product)}>+</li>
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
                    <Link to="/cart" onClick={() => handleAddProduct(product)}>
                        <strong>MUA NGAY</strong>
                        <br></br>
                        <span>(Giao tận nơi hoặc lấy tại cửa hàng)</span>
                    </Link>
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
    )
}

export default DetailInfo

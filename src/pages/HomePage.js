// import IPhone from '../components/HotSale/components/Iphone'
// import Samsung from '../components/HotSale/components/Samsung'
// import Xiaomi from '../components/HotSale/components/Xiaomi'
import { useEffect } from 'react'
import Carousel from '../components/Slider/Carousel'
import AppChat from '../components/AppChat/AppChat'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import Catergory from '../components/catergory/Catergory'
import Brands from '../components/brands/Brands'
import ListProduct from '../components/allProduct/ListProduct'

import { useDispatch, useSelector } from 'react-redux'
// import { getAllProduct } from '..//actions/ProductAction'
import { getAllProduct } from '../redux/actions/ProductAction'
import { handlePercentDiscount } from '../untils'
import Blog from '../components/Blog/Blog'

function HomePage(props) {
    const { userInfo } = useSelector((state) => state.userSignin)

    const dispatch = useDispatch()

    const product = useSelector((state) => state.allProduct.product)

    // console.log(product)

    useEffect(() => {
        dispatch(getAllProduct())

        return () => {
            return []
        }
    }, [dispatch])

    return (
        <div style={{ position: 'relative' }}>
            <Carousel />

            <Catergory />

            {product && product.length > 0 ? (
                <ListProduct
                    HotSaleProducts={handlePercentDiscount(product)}
                    newProduct={true}
                    title="Sản phẩm mới nhất"
                />
            ) : (
                <span>Không có sản phẩm</span>
            )}

            <Brands />

            {product && product.length > 0 ? (
                <ListProduct HotSaleProducts={handlePercentDiscount(product)} discount={40} title="Giảm giá sốc" />
            ) : (
                <span>Không có sản phẩm</span>
            )}

            {/* <ScrollToTop></ScrollToTop> */}

            <Blog></Blog>

            {userInfo && userInfo.isAdmin === false ? <AppChat /> : ''}
        </div>
    )
}

export default HomePage

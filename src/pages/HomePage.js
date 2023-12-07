// import IPhone from '../components/HotSale/components/Iphone'
// import Samsung from '../components/HotSale/components/Samsung'
// import Xiaomi from '../components/HotSale/components/Xiaomi'
import React, { useEffect } from 'react'
import Carousel from '../components/Slider/Carousel'
import AppChat from '../components/AppChat/AppChat'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import Catergory from '../components/catergory/Catergory'
import Brands from '../components/brands/Brands'
import ListProduct from '../components/allProduct/ListProduct'

import { handlePercentDiscount } from '../untils'
import { useDispatch, useSelector } from 'react-redux'

import { getAllProduct } from '../redux/actions/ProductAction'
import { getAllTypeProduct } from '../redux/actions/ListTypeProductAction'
import { getAllBrandProduct } from '../redux/actions/ListBrandProductAction'

import Blog from '../components/Blog/Blog'

function HomePage() {
    const userSignin = useSelector((state) => state.getUsers)
    const { userInfo } = userSignin

    const dispatch = useDispatch()

    const {product} = useSelector((state) => state.allProduct)
    const {typeProduct} = useSelector((state) => state.allTypeProduct)
    const {ListBrannd} = useSelector((state) => state.allBrandProduct)

    // console.log(product)
    // console.log(typeProduct)
    // console.log(useSelector((state) => state.allTypeProduct.typeProduct))

    useEffect(() => {
        dispatch(getAllProduct())
        dispatch(getAllTypeProduct())
        dispatch(getAllBrandProduct())
    }, [dispatch])

    const handleDataType = (typeProduct) => {
        if ( typeProduct.typeProducts !== undefined) {
            return typeProduct.typeProducts
        }
        return typeProduct
    }

    const handleDataBrand = (ListBrannd) => {
        if ( ListBrannd.ListBrannd !== undefined) {
            return ListBrannd.ListBrannd
        }
        return ListBrannd
    }



    return (
        <div style={{ position: 'relative' }}>

            <Carousel />
           
            {typeProduct ? <Catergory typeProducts={handleDataType(typeProduct)}/> : ''}
            


            {product && product.length > 0 ? (
                
                <ListProduct
                    HotSaleProducts={handlePercentDiscount(product.reverse().slice(0,12))}
                    title="Sản phẩm mới nhất"
                />
            ) : (
               ''
            )}

             {ListBrannd ? <Brands ListBrannd = {handleDataBrand(ListBrannd)}/> : '' } 

            {product && product.length > 0 ? (
                <ListProduct HotSaleProducts={handlePercentDiscount(product)} discount={30} title="Giảm giá sốc" />
            ) : (
                ''
            )}


            <Blog></Blog>

            <ScrollToTop></ScrollToTop>

            {userInfo && userInfo.isAdmin === false ? <AppChat /> : ''}
        </div>
    )
}

export default HomePage

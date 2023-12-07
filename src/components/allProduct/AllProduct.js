import React from 'react'
import { useEffect } from 'react'

import { handlePercentDiscount } from '../../untils/index'

import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../../redux/actions/ProductAction'

import './Product.css'
import ListProduct from './ListProduct'

import FilterProduct from './FilterProduct'
import SortByPrice from './SortByPrice/SortByPrice'
import NavProduct from './NavProduct/NavProduct'

function AllProduct(props) {
    const dispatch = useDispatch()

    const product = useSelector((state) => state.allProduct.product)

    useEffect(() => {
        dispatch(getAllProduct())

        return () => {
            return []
        }
    }, [dispatch])

    return (
        <section id="hotsale iphone">
            <div className="hotsale">
                <div className="header_allProduct">
                    <div className="display_allProduct">
                        <span className="nav_title">Sắp xếp theo</span>
                        <SortByPrice products={product} />
                    </div>
                    <FilterProduct></FilterProduct>
                </div>
                <div className="allProduct">
                    <div className="col-2">
                        <NavProduct></NavProduct>
                    </div>
                    <div className="col-10">
                        {product && product.length > 0 ? (
                            <ListProduct HotSaleProducts={handlePercentDiscount(product)} />
                            
                        ) : (
                            <span>Không có sản phẩm</span>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AllProduct

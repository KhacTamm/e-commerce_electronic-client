import React from 'react'
import { useSelector } from 'react-redux'

import { handlePercentDiscount } from '../../untils/index'
import ListProduct from '../allProduct/ListProduct'
import NotFoundSearch from './NotFoundSearch'
import SortByPrice from './SortByPrice/SortByPrice'

function BrandFilter() {
    const searchBrand = useSelector((state) => state.searchBrand)
    const { products } = searchBrand

    // console.log(searchBrand)

    return (
        <section id="hotsale iphone">
            <div className="header_allProduct">
                <div className="display_allProduct">
                    <span className="nav_title">Sắp xếp theo</span>
                    <SortByPrice products={products} />
                </div>
            </div>
            <div className="hotsale">
                {products && products.length > 0 ? (
                    <ListProduct HotSaleProducts={handlePercentDiscount(products)} />
                ) : (
                    <NotFoundSearch></NotFoundSearch>
                )}
            </div>
        </section>
    )
}

export default BrandFilter

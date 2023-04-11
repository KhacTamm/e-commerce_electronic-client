import React from 'react'
import { useSelector } from 'react-redux'

import { handlePercentDiscount } from '../../untils/index'
import ListProduct from '../allProduct/ListProduct'
import NotFoundSearch from './NotFoundSearch'
import SortByPrice from './SortByPrice/SortByPrice'

function ProductFilter() {
    const searchType = useSelector((state) => state.searchType)
    const { products } = searchType

    return (
        <section id="hotsale iphone">
            {/* <div className="title_search">
                <BsSearch />
                <span>Kết quả tìm kiếm</span>
            </div> */}
            <div className="header_allProduct">
                <div className="display_allProduct">
                    <span className="nav_title">Sắp xếp theo</span>
                    <SortByPrice products={products} />
                </div>
                {/* <FilterProduct></FilterProduct> */}
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

export default ProductFilter

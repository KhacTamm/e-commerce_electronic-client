import React from 'react'
import { useSelector } from 'react-redux'
import { handlePercentDiscount } from '../../untils/index'

import { BsSearch } from 'react-icons/bs'
import './Search.css'

import ListProduct from '../allProduct/ListProduct'
import NotFoundSearch from './NotFoundSearch'

function Search(props) {
    const searchProduct = useSelector((state) => state.searchProduct)
    const { products } = searchProduct

    return (
        <section id="hotsale iphone">
            <div className="title_search">
                <BsSearch />
                <span>Kết quả tìm kiếm</span>
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

export default Search

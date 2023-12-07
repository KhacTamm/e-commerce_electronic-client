import React from 'react'
import './DataFilterProduct.css'

import CreateInfoFilter from './CreateInfoFilter'
import FilterMenu from './FilterMenu'
// import CreateNewType from '../AdminTypeProduct/CreateNewType'
// import AllTypeProduct from '../AdminTypeProduct/AllTypeProduct'

export default function DataFilterProduct() {
    return (
        <div className="update-filter">
            <div className="update-filter-title">
                <span>Update detail product</span>
            </div>

            <FilterMenu></FilterMenu>

            <CreateInfoFilter></CreateInfoFilter>

            {/* <AllTypeProduct></AllTypeProduct>

            <CreateNewType></CreateNewType> */}
        </div>
    )
}

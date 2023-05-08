import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTypeProduct } from '../../../redux/actions/ListTypeProductAction'
import { getAllProductByType, getAllProductByBrand } from '../../../redux/actions/ProductAction'

import { getAllBrandProduct } from '../../../redux/actions/ListBrandProductAction'

import './NavProduct.css'

function NavProduct() {
    const dispatch = useDispatch()

    const { typeProduct } = useSelector((state) => state.allTypeProduct)
    const { ListBrannd } = useSelector((state) => state.allBrandProduct)

    useEffect(() => {
        dispatch(getAllTypeProduct())

        return () => {
            return []
        }
    }, [dispatch])

    useEffect(() => {
        dispatch(getAllBrandProduct())

        return () => {
            return []
        }
    }, [dispatch])

    // console.log(ListBrannd)

    const HandleFilterProductByType = async (type) => {
        dispatch(getAllProductByType(type))
    }

    const HandleFilterProductByBrand = async (brand) => {
        dispatch(getAllProductByBrand(brand))
    }

    const NavTypeProductItems = (type) => (
        <div className="navProduct_item" onClick={() => HandleFilterProductByType(type.name)}>
            <span className="typeName">{type.name}</span>
        </div>
    )

    const NavBrandProductItems = (brand) => (
        <div className="navProduct_Brand-item" onClick={() => HandleFilterProductByBrand(brand.name)}>
            <img src={brand.img} className="brandName"></img>
        </div>
    )

    return (
        <div className="navProduct">
            <div className="navProduct_brand">
                <div className="navProduct_title">Thương hiệu</div>
                <div className="navProduct_brand-content">
                    {ListBrannd ? ListBrannd.map((brand, index) => NavBrandProductItems(brand)) : ''}
                </div>
            </div>
            <div className="navProduct_type">
                <div className="navProduct_title">Danh mục</div>
                <div className="navProduct_type-item">{typeProduct ? typeProduct.map((type, index) => NavTypeProductItems(type)) : ''}</div>
            </div>
          
        </div>
    )
}

export default NavProduct

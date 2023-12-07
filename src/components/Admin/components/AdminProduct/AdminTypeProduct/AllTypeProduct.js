import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import config from '../../../../../config'


import { useDispatch, useSelector } from 'react-redux'
import { paginationTypeProduct } from '../../../../../redux/actions/ListTypeProductAction'


import { AiOutlinePlus } from 'react-icons/ai'
import './TypeProduct.css'

import Empty from '../Empty/Empty'
import ListTypeProduct from './ListTypeProduct'

export default function AllTypeProduct() {
    const dispatch = useDispatch()
    const  { typeProduct }  = useSelector((state) => state.allTypeProduct)
    const { currentPage } = useSelector((state) => state.allBrandProduct.currentPage)

    // console.log(useSelector((state) => state.allTypeProduct))
    // console.log(currentPage)
    // console.log(typeProduct)

    useEffect(() => {
        dispatch(paginationTypeProduct(currentPage))
    }, [dispatch, currentPage])


    const handleDataType = (typeProduct) => {
        if ( typeProduct.typeProducts !== undefined ) {
            return typeProduct.typeProducts
        }
        return typeProduct
    }

    // console.log( useSelector((state) => state.allTypeProduct.currentPage))
    // console.log(handleDataType(typeProduct))

    return (
        <>
            <div className="admin-TypeProduct">
                <div className="admin-TypeProduct_header">
                    <p className="admin-product_header_title">Quản lý loại sản phẩm</p>
                    <div className="admin-createType-link">
                        <Link to={config.routes.createType} className="add-createType">
                            <AiOutlinePlus className="create-product_icon" />
                            <p>Thêm loại sản phẩm</p>
                        </Link>
                    </div>
                </div>
                { handleDataType(typeProduct) ? (
                    <ListTypeProduct listTypes={handleDataType(typeProduct)}></ListTypeProduct>
                ) : (
                    <Empty path={`${config.routes.createType}`} lable="loại sản phẩm" />
                )}
            </div>
        </>
    )
}

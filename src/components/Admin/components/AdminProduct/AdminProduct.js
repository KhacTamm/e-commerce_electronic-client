import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import config from '../../../../config'

import { useDispatch, useSelector } from 'react-redux'
import { paginationProduct } from '../../../../redux/actions/ProductAction'

import { AiOutlinePlus } from 'react-icons/ai'
import './AdminProduct.css'

import ListProduct from './ListProduct'
import Empty from './Empty/Empty'

function AdminProduct() {
    const dispatch = useDispatch()
    const {currentPage} = useSelector((state) => state.allProduct)
    const { products } = useSelector((state) => state.allProduct.product)

    useEffect(() => {
        dispatch(paginationProduct(currentPage))
    }, [dispatch, currentPage])

    return (
        <>
            <div className="admin-product">
                <div className="admin-product_header">
                    <p className="admin-product_header_title">Quản lý sản phẩm</p>
                    <div className="admin-product-link">
                        <Link to={config.routes.create} className="create-product">
                            <AiOutlinePlus className="create-product_icon" />
                            <p>Thêm sản phẩm</p>
                        </Link>
                    </div>
                </div>

                {products ? (
                    <ListProduct listProducts={products} />
                    
                ) : (
                    <Empty path={`${config.routes.create}`} lable="sản phẩm" />
                )}
            </div>
        </>
    )
}

export default AdminProduct

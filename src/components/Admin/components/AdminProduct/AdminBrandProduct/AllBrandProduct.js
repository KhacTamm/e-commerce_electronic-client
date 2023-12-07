import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import config from '../../../../../config'

import { paginationBrandProduct } from '../../../../../redux/actions/ListBrandProductAction'

import './BrandProduct.css'
import { AiOutlinePlus } from 'react-icons/ai'

import Empty from '../Empty/Empty'
import ListBrandProduct from './ListBrandProduct'

export default function AllBrandProduct() {
    const dispatch = useDispatch()
    const { ListBrannd } = useSelector((state) => state.allBrandProduct)
    const { currentPage } = useSelector((state) => state.allBrandProduct.currentPage)

    useEffect(() => {
        dispatch(paginationBrandProduct(currentPage))
    }, [dispatch, currentPage])

    const handleDataBrand = (ListBrannd) => {
        if ( ListBrannd.ListBrannd !== undefined) {
            return ListBrannd.ListBrannd
        }
        return ListBrannd
    }


    return (
        <>
            <div className="admin-TypeProduct">
                <div className="admin-TypeProduct_header">
                    <p className="admin-TypeProduct_header_title">Quản lý thương hiệu</p>
                    <div className="admin-createType-link">
                        <Link to={config.routes.createBrand} className="add-createType">
                            <AiOutlinePlus className="create-product_icon" />
                            <p>Thêm mới thương hiệu</p>
                        </Link>
                    </div>
                </div>
                { handleDataBrand(ListBrannd) ? (
                    <ListBrandProduct listProducts={handleDataBrand(ListBrannd)}></ListBrandProduct>
                ) : (
                    <Empty path={`${config.routes.createBrand}`} lable="thương hiệu" />
                )}
            </div>
        </>
    )
}

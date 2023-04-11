import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import config from '../../../../../config'

import { formatDate } from '../../../../../untils'

import { editCurrentPage } from '../../../../../redux/actions/ProductAction'
import { paginationBrandProduct } from '../../../../../redux/actions/ListBrandProductAction'
import { deleteBrandProduct, getAllBrandProduct } from '../../../../../redux/actions/ListBrandProductAction'

import './BrandProduct.css'
import { DeleteOutlined, EditOutlined, FormOutlined } from '@ant-design/icons'
import { Pagination } from 'antd'
import { AiOutlinePlus } from 'react-icons/ai'

import Empty from '../Empty/Empty'

export default function AllBrandProduct() {
    const dispatch = useDispatch()
    const { ListBrannd } = useSelector((state) => state.allBrandProduct)
    const { currentPage } = useSelector((state) => state.allBrandProduct.currentPage)
    const { pages } = useSelector((state) => state.allBrandProduct.ListBrannd)

    console.log(currentPage)
    console.log(useSelector((state) => state.allBrandProduct))

    useEffect(() => {
        dispatch(getAllBrandProduct())
    }, [dispatch])

    const handleRemoveItem = async (item) => {
        await dispatch(deleteBrandProduct(item))
        dispatch(getAllBrandProduct())
    }

    const HandleChangePage = async (number) => {
        await dispatch(paginationBrandProduct(number))
        dispatch(editCurrentPage(number))
    }

    const MenuFirmProduct = (firmItem, index) => (
        <tr>
            <td>{index + 1}</td>
            <td>
                <img className="img-typeProduct" src={firmItem.img} />
            </td>
            <td>{firmItem.name}</td>
            <td>{formatDate(firmItem.createdAt)}</td>
            <td className="delete-product" onClick={(e) => handleRemoveItem(firmItem)}>
                <DeleteOutlined />
            </td>
        </tr>
    )

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
                {ListBrannd ? (
                    <div className="list_TypeProduct ">
                        <table>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Hình ảnh</th>
                                <th scope="col">Tên sản phẩm</th>
                                <th scope="col">Ngày lập</th>
                            </tr>
                            {ListBrannd.map((item, index) => MenuFirmProduct(item, index))}
                        </table>
                        <div className="pagination">
                            <Pagination
                                defaultCurrent={1}
                                current={currentPage}
                                total={pages * 10}
                                onChange={HandleChangePage}
                            />
                        </div>
                    </div>
                ) : (
                    <Empty path={`${config.routes.createBrand}`} lable="thương hiệu" />
                )}
            </div>
        </>
    )
}

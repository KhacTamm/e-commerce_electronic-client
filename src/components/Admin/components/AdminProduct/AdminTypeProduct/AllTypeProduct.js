import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import config from '../../../../../config'

import { formatDate } from '../../../../../untils'

import { useDispatch, useSelector } from 'react-redux'
import { editCurrentPage, paginationProduct } from '../../../../../redux/actions/ProductAction'
import { deleteTypeProduct, getAllTypeProduct } from '../../../../../redux/actions/ListTypeProductAction'

import { DeleteOutlined, EditOutlined, FormOutlined } from '@ant-design/icons'
import { Pagination } from 'antd'
import { AiOutlinePlus } from 'react-icons/ai'
import { ToolOutlined } from '@ant-design/icons'
import './TypeProduct.css'

import Empty from '../Empty/Empty'

export default function AllTypeProduct() {
    const dispatch = useDispatch()
    const { List } = useSelector((state) => state.allTypeProduct)
    const currentPage = useSelector((state) => state.allProduct.currentPage)
    const { pages } = useSelector((state) => state.allProduct.product)

    console.log(!List)

    useEffect(() => {
        dispatch(getAllTypeProduct())
    }, [dispatch])

    const handleRemoveItem = async (item) => {
        await dispatch(deleteTypeProduct(item))
        dispatch(getAllTypeProduct())
    }

    const HandleChangePage = async (number) => {
        await dispatch(paginationProduct(number))
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
            {/* <td className="update-product">
                <Link to={`/admin/product/update/${firmItem._id}`}>
                    <EditOutlined />
                </Link>
            </td> */}
            {/* <td className="review-product">
                <Link to={`/admin/product/reviewProduct/${firmItem._id}`}>
                    <FormOutlined />
                </Link>
            </td> */}
        </tr>
    )

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
                {List ? (
                    <div className="list_TypeProduct ">
                        <table>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Hình ảnh</th>
                                <th scope="col">Tên sản phẩm</th>
                                <th scope="col">Ngày lập</th>
                            </tr>
                            {List.map((item, index) => MenuFirmProduct(item, index))}
                        </table>
                        {/* <div className="pagination">
                            <Pagination
                                defaultCurrent={1}
                                current={currentPage}
                                total={pages * 10}
                                onChange={HandleChangePage}
                            />
                        </div> */}
                    </div>
                ) : (
                    <Empty path={`${config.routes.createType}`} lable="loại sản phẩm" />
                )}
            </div>
        </>
    )
}

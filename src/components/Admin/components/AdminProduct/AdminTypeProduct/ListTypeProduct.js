import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editCurrentPage, paginationTypeProduct } from '../../../../../redux/actions/ListTypeProductAction'
import { formatDate } from '../../../../../untils'
import { deleteTypeProduct, getAllTypeProduct } from '../../../../../redux/actions/ListTypeProductAction'
import { DeleteOutlined } from '@ant-design/icons'

import { Pagination } from 'antd'
import './TypeProduct.css'

function ListTypeProduct(props) {
    const dispatch = useDispatch()
    const { listTypes } = props
    const currentPage = useSelector((state) => state.allTypeProduct.currentPage)
    const { pages } = useSelector((state) => state.allTypeProduct.typeProduct)

    const handleRemoveItem = async (item) => {
        await dispatch(deleteTypeProduct(item))
        await dispatch(getAllTypeProduct())
        await dispatch(paginationTypeProduct(currentPage))
    }

    // console.log(currentPage)
    // console.log(useSelector((state) => state.allTypeProduct.currentPage))

    const HandleChangePage = async (number) => {
        await dispatch(paginationTypeProduct(number))
        dispatch(editCurrentPage(number))
    }

    const MenuFirmProduct = (firmItem, index) => (
        <tr>
            <td>{index + 1}</td>
            <td>
            <img alt='img' className="img-typeProduct" src={firmItem.img} />
            </td>
            <td>{firmItem.name}</td>
            <td>{formatDate(firmItem.createdAt)}</td>
            <td className="delete-product" onClick={(e) => handleRemoveItem(firmItem)}>
                <DeleteOutlined />
            </td>
        </tr>
    )

    return (
        <div className="list_TypeProduct ">
        <table>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Hình ảnh</th>
                <th scope="col">Tên sản phẩm</th>
                <th scope="col">Ngày lập</th>
            </tr>
            {listTypes.map((item, index) => MenuFirmProduct(item, index))}
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
    )
}

export default ListTypeProduct

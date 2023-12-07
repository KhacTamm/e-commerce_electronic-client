import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editCurrentPage, paginationBrandProduct } from '../../../../../redux/actions/ListBrandProductAction'

import { formatDate } from '../../../../../untils'
import { DeleteOutlined  } from '@ant-design/icons'
import { deleteBrandProduct, getAllBrandProduct } from '../../../../../redux/actions/ListBrandProductAction'


import { Pagination } from 'antd'
import './BrandProduct.css'

function ListBrandProduct(props) {
    const dispatch = useDispatch()
    const { listProducts } = props
    const  currentPage  = useSelector((state) => state.allBrandProduct.currentPage)
    const { pages } = useSelector((state) => state.allBrandProduct.ListBrannd)

    // console.log(listProducts)

    const HandleChangePage = async (number) => {
        await dispatch(paginationBrandProduct(number))
        dispatch(editCurrentPage(number))
    }

    const handleRemoveItem = async (item) => {
        await dispatch(deleteBrandProduct(item))
        await dispatch(getAllBrandProduct())
        await dispatch(paginationBrandProduct(currentPage))
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
        <div className="list_TypeProduct ">
        <table>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Hình ảnh</th>
                <th scope="col">Tên sản phẩm</th>
                <th scope="col">Ngày lập</th>
            </tr>
            {listProducts.map((item, index) => MenuFirmProduct(item, index))}
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

export default ListBrandProduct

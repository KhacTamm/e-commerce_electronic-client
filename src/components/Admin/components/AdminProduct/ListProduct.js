import React, { useDispatch, useSelector } from 'react-redux'
import { editCurrentPage, paginationProduct } from '../../../../redux/actions/ProductAction'

import { Pagination } from 'antd'
import './AdminProduct.css'
import { DeleteOutlined } from '@ant-design/icons'
import { DeleteAllProduct } from '../../../../redux/actions/ProductAction'

import Product from './Product'

function ListProduct(props) {
    const dispatch = useDispatch()
    const { listProducts } = props
    const currentPage = useSelector((state) => state.allProduct.currentPage)
    const { pages } = useSelector((state) => state.allProduct.product)

    const HandleChangePage = async (number) => {
        await dispatch(paginationProduct(number))
        dispatch(editCurrentPage(number))
    }

    const HandlDeleteAllProduct = async () => {
        await dispatch(DeleteAllProduct())
    }

    return (
        <div className="admin-product-list">
            <table>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Hình ảnh</th>
                    <th scope="col">Tên sản phẩm</th>
                    <th scope="col">Giá bán</th>
                    <th scope="col">Giá khuyến mãi</th>
                    <th scope="col">Trạng thái</th>
                    <th onClick={() => HandlDeleteAllProduct()}>
                        <DeleteOutlined />
                    </th>
                </tr>
                {listProducts
                    ? listProducts.map((item, index) => (
                          <Product product={item} key={item._id} update={item._id} number={index}></Product>
                      ))
                    : ''}
            </table>

            <div className="pagination">
                <Pagination defaultCurrent={1} current={currentPage} total={pages * 10} onChange={HandleChangePage} />
            </div>
        </div>
    )
}

export default ListProduct

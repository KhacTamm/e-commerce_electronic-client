import React from 'react'
import { Link } from 'react-router-dom'

import { formatPrice } from '../../../../untils/index'

import { useDispatch, useSelector } from 'react-redux'
import { DeleteProduct, paginationProduct } from '../../../../redux/actions/ProductAction'

import { DeleteOutlined, EditOutlined, FormOutlined } from '@ant-design/icons'
import './TypeProduct.css'

function TypeProduct(props) {
    const { product, number } = props
    const dispatch = useDispatch()
    const currentPage = useSelector((state) => state.allProduct.currentPage)

    const handleDeleteProduct = async (product) => {
        await dispatch(DeleteProduct(product._id))
        dispatch(paginationProduct(currentPage))
    }

    return (
        <tr>
            <td>{number + 1}</td>
            <td>
                <img src={product.image}></img>
            </td>
            <td>{product.name}</td>
            <td className="admin_price">{formatPrice(product.salePrice)}</td>
            <td className="admin_price">{formatPrice(product.price)}</td>
            <td className="delete-product" onClick={(e) => handleDeleteProduct(product)}>
                <DeleteOutlined />
            </td>
            <td className="update-product">
                <Link to={`/admin/product/update/${product._id}`}>
                    <EditOutlined />
                </Link>
            </td>
            <td className="review-product">
                <Link to={`/admin/product/reviewProduct/${product._id}`}>
                    <FormOutlined />
                </Link>
            </td>
        </tr>
    )
}

export default TypeProduct

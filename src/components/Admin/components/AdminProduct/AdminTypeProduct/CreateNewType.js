import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { CreateNewTypeProduct, getAllTypeProduct } from '../../../../../redux/actions/ListTypeProductAction'
import { editCurrentPage } from '../../../../../redux/actions/ListTypeProductAction'

export default function CreateNewType() {
    const dispatch = useDispatch()
    const history = useNavigate()
    const { handleSubmit, register } = useForm()
    const [image, setImage] = useState('')
    const { pages } = useSelector((state) => state.allTypeProduct.typeProduct)

    const onSubmit = async (data, e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('name', data.name)
        formData.append('image', image)

        e.target.reset()
        await dispatch(CreateNewTypeProduct(formData))
        await dispatch(getAllTypeProduct())
        // await dispatch(paginationTypeProduct(currentPage))
        // await dispatch(editCurrentPage(pages))
        history('/admin/typeList')
    }

    console.log(pages)

    const handleChangeImage = (e) => {
        setImage(e.target.files[0])
    }

    return (
        <div className="admin-TypeProduct">
            <div>
                <p className="admin-product_header_title">Thêm loại sản phẩm</p>
                <div className="create-type">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register('name')} placeholder="Tên loại ... " autoComplete="off"></input>

                        <input type="file" onChange={(e) => handleChangeImage(e)}></input>

                        <button type="submit">Thêm</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// // import { CreateNewTypeProduct, getAllTypeProduct } from '../../../../../actions/ListTypeProductAction'
// import { CreateNewBrandProduct, getAllBrandProduct } from '../../../../../actions/ListBrandProductAction'

import { CreateNewBrandProduct, getAllBrandProduct } from '../../../../../redux/actions/ListBrandProductAction'

export default function CreateNewBrand() {
    const dispatch = useDispatch()
    const history = useNavigate()
    const { handleSubmit, register } = useForm()
    const [image, setImage] = useState('')

    const onSubmit = async (data, e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('name', data.name)
        formData.append('image', image)

        e.target.reset()
        await dispatch(CreateNewBrandProduct(formData))
        dispatch(getAllBrandProduct())
        history('/admin/brand')
    }

    const handleChangeImage = (e) => {
        setImage(e.target.files[0])
    }

    return (
        <div className="admin-TypeProduct">
        <div>
            <p className="admin-product_header_title">Thêm thương hiệu</p>
        <div className="create-type">
            {/* <span>Thêm mới thương hiệu</span> */}
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

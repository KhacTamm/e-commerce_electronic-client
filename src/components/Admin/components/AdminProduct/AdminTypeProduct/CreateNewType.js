import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { CreateNewTypeProduct, getAllTypeProduct } from '../../../../../redux/actions/ListTypeProductAction'

import CreateInfoFilter from '../DataFilterProduct/CreateInfoFilter'

export default function CreateNewType() {
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
        await dispatch(CreateNewTypeProduct(formData))
        dispatch(getAllTypeProduct())
        history('/admin/typeList')
    }

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
            <div className="update-filter">
                <p className="admin-product_header_title">Thêm chi tiết loại sản phẩm</p>
                <CreateInfoFilter />
            </div>
        </div>
    )
}

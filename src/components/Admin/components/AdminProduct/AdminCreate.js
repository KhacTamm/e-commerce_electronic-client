import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { editCurrentPage, saveProduct } from '../../../../redux/actions/ProductAction'
import { getAllTypeProduct } from '../../../../redux/actions/ListTypeProductAction'
import { getAllBrandProduct } from '../../../../redux/actions/ListBrandProductAction'

function AdminCreate() {
    const { register, handleSubmit } = useForm({ defaultValues: {} })
    const dispatch = useDispatch()
    const history = useNavigate()

    const [image, setImage] = useState('')
    const [activeTypeProduct, setActiveTypeproduct] = useState('')
    const [activeBrandProduct, setActiveBrandProduct] = useState('')

    const { pages } = useSelector((state) => state.allProduct.product)
    const { ListBrannd } = useSelector((state) => state.allBrandProduct)
    const { typeProduct } = useSelector((state) => state.allTypeProduct)

    useEffect(() => {
        dispatch(getAllTypeProduct())
        dispatch(getAllBrandProduct())

    }, [dispatch])

    const handleFileImageChange = (e) => {
        setImage(e.target.files[0])
    }

    const onSubmit = async (data) => {
        let formData = new FormData()

        formData.append('brand', activeBrandProduct)
        formData.append('name', data.name)
        formData.append('price', data.price)
        formData.append('amount', data.amount)
        formData.append('salePrice', data.salePrice)
        formData.append('type', activeTypeProduct)
        formData.append('image', image)


        formData.append('os', data.os)
        formData.append('disk', data.disk)
        formData.append('card', data.card)
        formData.append('ram', data.ram)
        formData.append('battery', data.battery)
        formData.append('rom', data.rom)
        formData.append('screen', data.screen)
        formData.append('cameraAfter', data.cameraAfter)
        formData.append('cameraBefore', data.cameraBefore)
        formData.append('resolution', data.resolution)

        formData.append('special', data.special)
        formData.append('design', data.design)

        await dispatch(saveProduct(formData))
        await dispatch(editCurrentPage(pages))
        history('/admin/product')
    }

    const MenuFirmProduct = (item) => (
        <div
            className={activeTypeProduct === item.name ? `filter-menu-firm-item active` : 'filter-menu-firm-item'}
            onClick={() => HandleFilterProductByType(item.name)}
        >
            <img alt='img' src={item.img}></img>
        </div>
    )

    const MenuFirmProductBrand = (item) => (
        <div
            className={
                activeBrandProduct === item.name ? `filter-menu-firm-item-brand active` : 'filter-menu-firm-item-brand'
            }
            onClick={() => HandleFilterProductByBrand(item.name)}
        >
            <img className="img_brand" src={item.img}></img>
        </div>
    )

    const HandleFilterProductByType = (name) => {
        setActiveTypeproduct(name)
    }

    const HandleFilterProductByBrand = (name) => {
        setActiveBrandProduct(name)
    }

    const handleDataType = (typeProduct) => {
        if ( typeProduct.typeProducts !== undefined) {
            return typeProduct.typeProducts
        }
        return typeProduct
    }

    const handleDataBrand = (ListBrannd) => {
        if ( ListBrannd.ListBrannd !== undefined) {
            return ListBrannd.ListBrannd
        }
        return ListBrannd
    }

    const type = handleDataType(typeProduct)
    const brand = handleDataBrand(ListBrannd)

    return (
        <div className="admin-create">
            <span>Thêm sản phẩm</span>
            <form className="admin-create-product" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                <div className="filter-menu-firm">
                    {brand ? brand.map((item) => MenuFirmProductBrand(item)) : ''}
                </div>

                <input {...register('name')} placeholder="Nhập tên sản phẩm" autoComplete="off"></input>
                <input {...register('amount')} placeholder="Số lượng" type="number" autoComplete="off"></input>
                <input {...register('price')} placeholder="Giá gốc" type="number" autoComplete="off"></input>
                <input {...register('salePrice')} placeholder="Giá khuyến mãi" type="number" autoComplete="off"></input>

                <div className="filter-menu-firm">{type ? type.map((item) => MenuFirmProduct(item)) : ''}</div>

                <input {...register('card')} placeholder="Loại card đồ họa" autoComplete="off"></input>
                <input {...register('disk')} placeholder="Ổ cứng" autoComplete="off"></input>
                <input {...register('os')} placeholder="Hệ điều hành" autoComplete="off"></input>
                <input {...register('ram')} placeholder="Dung lượng RAM" autoComplete="off"></input>
                <input {...register('rom')} placeholder="Bộ nhớ trong" autoComplete="off"></input>
                <input {...register('screen')} placeholder="Kích thước màn hình" autoComplete="off"></input>
                <input {...register('resolution')} placeholder="Độ phân giải màn hình" autoComplete="off"></input>
                <input {...register('battery')} placeholder="PIN" autoComplete="off"></input>
                <input {...register('cameraBefore')} placeholder="Camera trước" autoComplete="off"></input>
                <input {...register('cameraAfter')} placeholder="Camera sau" autoComplete="off"></input>
                <input type="file" {...register('image')} onChange={handleFileImageChange}></input>
                <button type="submit">Thêm sản phẩm</button>
            </form>
        </div>
    )
}

export default AdminCreate

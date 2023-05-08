import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { getproductById, removeProductById, saveProduct } from '../../../../redux/actions/ProductAction'
import { getAllBrandProduct } from '../../../../redux/actions/ListBrandProductAction'

function AdminUpdate() {
    const { register, handleSubmit } = useForm()
    const { id } = useParams()
    const dispatch = useDispatch()
    const history = useNavigate()

    const [image, setImage] = useState('')
    const detailProduct = useSelector((state) => state.getProductById.product)
    const [activeTypeProduct, setActiveTypeproduct] = useState(undefined)
    const [activeBrandProduct, setActiveBrandProduct] = useState(undefined)
    const { typeProduct } = useSelector((state) => state.allTypeProduct)
    const { ListBrannd } = useSelector((state) => state.allBrandProduct)

    useEffect(() => {
        dispatch(getproductById(id))

        return () => {
            dispatch(removeProductById())
        }
    }, [dispatch, id])

    // useEffect(() => {
    //     dispatch(getAllSelectList())
    // }, [])

    // useEffect(() => {
    //     dispatch(getAllSelectList())
    // }, [])

    useEffect(() => {
        dispatch(getAllBrandProduct())
    }, [dispatch])

    const handleFileImageChange = (e) => {
        setImage(e.target.files[0])
    }

    const onSubmit = async (data) => {
        let formData = new FormData()

        formData.append('name', data.name)
        formData.append('price', data.price)
        formData.append('amount', data.amount)
        formData.append('salePrice', data.salePrice)
        formData.append('type', activeTypeProduct ? activeTypeProduct : detailProduct.type)
        formData.append('brand', activeBrandProduct ? activeBrandProduct : detailProduct.brand)
        formData.append('image', image)
        formData.append('_id', id)

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
        history('/admin/product')
    }

    const MenuFirmProduct = (item) => (
        <div
            className={
                activeTypeProduct
                    ? activeTypeProduct === item.name
                        ? `filter-menu-firm-item active`
                        : 'filter-menu-firm-item'
                    : detailProduct.type === item.name
                    ? `filter-menu-firm-item active`
                    : 'filter-menu-firm-item'
            }
            onClick={() => HandleFilterProductByType(item.name)}
        >
            <img alt='img' src={item.img}></img>
        </div>
    )

    const MenuFirmProductBrand = (item) => (
        <div
            className={
                activeBrandProduct
                    ? activeBrandProduct === item.name
                        ? `filter-menu-firm-item-brand active`
                        : 'filter-menu-firm-item-brand'
                    : detailProduct.brand === item.name
                    ? `filter-menu-firm-item-brand active`
                    : 'filter-menu-firm-item-brand'
            }
            onClick={() => HandleFilterProductByBrand(item.name)}
        >
            <img alt='img' className="img_brand" src={item.img}></img>
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
    return (
        <div className="admin-create">
            <span>Cập nhật sản phẩm</span>
            {detailProduct ? (
                <form className="admin-create-product" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                    <div className="filter-menu-firm">
                        {ListBrannd ? handleDataBrand(ListBrannd).map((item) => MenuFirmProductBrand(item)) : ''}
                    </div>
                    <input {...register('name')} placeholder="Nhập tên sản phẩm" defaultValue={detailProduct.name}></input>
                    <input
                        {...register('amount')}
                        placeholder="Số lượng"
                        type="number"
                        defaultValue={detailProduct.amount}
                    ></input>
                    <input
                        {...register('price')}
                        placeholder="Giá gốc"
                        type="number"
                        defaultValue={detailProduct.price}
                    ></input>
                    <input
                        {...register('salePrice')}
                        placeholder="Giá khuyến mãi"
                        type="number"
                        defaultValue={detailProduct.salePrice !== 'undefined' ? detailProduct.salePrice : ''}
                    ></input>
                    <div className="filter-menu-firm">{typeProduct ? handleDataType(typeProduct).map((item) => MenuFirmProduct(item)) : ''}</div>
                    <input
                        {...register('card')}
                        placeholder="Loại card đồ họa"
                        defaultValue={detailProduct.card !== 'undefined' ? detailProduct.card : ''}
                    ></input>
                    <input
                        {...register('disk')}
                        placeholder="Ổ cứng"
                        defaultValue={detailProduct.disk !== 'undefined' ? detailProduct.disk : ''}
                    ></input>
                    <input
                        {...register('os')}
                        placeholder="Hệ điều hành"
                        defaultValue={detailProduct.os !== 'undefined' ? detailProduct.os : ''}
                    ></input>
                    <input
                        {...register('ram')}
                        placeholder="Dung lượng RAM"
                        defaultValue={detailProduct.ram !== 'undefined' ? detailProduct.ram : ''}
                    ></input>
                    <input
                        {...register('rom')}
                        placeholder="Bộ nhớ trong"
                        defaultValue={detailProduct.rom !== 'undefined' ? detailProduct.rom : ''}
                    ></input>
                    <input
                        {...register('screen')}
                        placeholder="Kích thước màn hình"
                        defaultValue={detailProduct.screen !== 'undefined' ? detailProduct.screen : '' }
                    ></input>
                    <input
                        {...register('resolution')}
                        placeholder="Độ phân giải màn hình"
                        defaultValue={detailProduct.resolution !== 'undefined' ? detailProduct.resolution : ''}
                    ></input>
                    <input
                        {...register('battery')}
                        placeholder="PIN"
                        defaultValue={detailProduct.battery !== 'undefined' ? detailProduct.battery : ''}
                    ></input>
                    <input
                        {...register('cameraAfter')}
                        placeholder="Camera sau"
                        defaultValue={detailProduct.cameraAfter !== 'undefined' ? detailProduct.cameraAfter: ''}
                    ></input>
                    <input
                        {...register('cameraBefore')}
                        placeholder="Camera trước"
                        defaultValue={detailProduct.cameraBefore !== 'undefined' ? detailProduct.cameraBefore: ''}
                    ></input>
                    <input type="file" {...register('image')} onChange={handleFileImageChange}></input>
                    <button type="submit">Cập nhật sản phẩm</button>
                </form>
            ) : (
                ''
            )}
        </div>
    )
}

export default AdminUpdate

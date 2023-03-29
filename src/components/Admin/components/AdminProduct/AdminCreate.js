import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { editCurrentPage, saveProduct } from '../../../../redux/actions/ProductAction'
import { getAllSelectList } from '../../../../redux/actions/SelectListAction'
import { getAllTypeProduct } from '../../../../redux/actions/ListTypeProductAction'
import { getAllBrandProduct } from '../../../../redux/actions/ListBrandProductAction'

function AdminCreate(props) {
    const { register, handleSubmit } = useForm({ defaultValues: {} })
    const dispatch = useDispatch()
    const history = useNavigate()

    const [image, setImage] = useState('')
    const [activeTypeProduct, setActiveTypeproduct] = useState('')
    const [activeBrandProduct, setActiveBrandProduct] = useState('')
    const SelectList = useSelector((state) => state.selectList.List)

    const { pages } = useSelector((state) => state.allProduct.product)
    const { ListBrannd } = useSelector((state) => state.allBrandProduct)
    const { List } = useSelector((state) => state.allTypeProduct)

    useEffect(() => {
        dispatch(getAllSelectList())
    }, [dispatch])

    useEffect(() => {
        dispatch(getAllTypeProduct())
    }, [dispatch])

    useEffect(() => {
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
        formData.append('ram', data.ram)
        formData.append('battery', data.battery)
        formData.append('rom', data.rom)
        formData.append('camera', data.camera)
        formData.append('special', data.special)
        formData.append('design', data.design)
        formData.append('screen', data.screen)

        await dispatch(saveProduct(formData))
        await dispatch(editCurrentPage(pages))
        history('/admin/product')
    }

    const MenuFirmProduct = (item) => (
        <div
            className={activeTypeProduct === item.name ? `filter-menu-firm-item active` : 'filter-menu-firm-item'}
            onClick={() => HandleFilterProductByType(item.name)}
        >
            <img src={item.img}></img>
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

    return (
        <div className="admin-create">
            <span>Thêm sản phẩm</span>
            <form className="admin-create-product" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                <div className="filter-menu-firm">
                    {ListBrannd ? ListBrannd.map((item) => MenuFirmProductBrand(item)) : ''}
                </div>

                <input {...register('name')} placeholder="Nhập tên sản phẩm" autoComplete="off"></input>
                <input {...register('amount')} placeholder="Số lượng" type="number" autoComplete="off"></input>
                <input {...register('price')} placeholder="Giá gốc" type="number" autoComplete="off"></input>
                <input {...register('salePrice')} placeholder="Giá khuyến mãi" type="number" autoComplete="off"></input>

                <div className="filter-menu-firm">{List ? List.map((item) => MenuFirmProduct(item)) : ''}</div>

                {SelectList && SelectList.length > 0
                    ? SelectList.map((item) => (
                          <div className="select-type">
                              <select {...register(`${item.property}`)}>
                                  <option>{item.name}</option>
                                  {item.options.map((x) => (
                                      <option value={x}>{x}</option>
                                  ))}
                              </select>
                          </div>
                      ))
                    : ''}

                <input type="file" {...register('image')} onChange={handleFileImageChange}></input>
                <button type="submit">Thêm sản phẩm</button>
            </form>
        </div>
    )
}

export default AdminCreate

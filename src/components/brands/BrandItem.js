import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { filterProductByRandomField } from '../../redux/actions/ProductAction'
import { getAllProduct } from '../../redux/actions/ProductAction'
import { searchBrands } from '../../redux/actions/ListBrandProductAction'
import './Brands.css'

function BrandItem(props) {
    const { items } = props
    const dispatch = useDispatch()
    const history = useNavigate()

    const [dataFilter, setDataFilter] = useState({})

    useEffect(() => {
        dispatch(filterProductByRandomField(dataFilter))
    }, [dataFilter])

    useEffect(() => {
        dispatch(getAllProduct())

        return () => {
            return []
        }
    }, [dispatch])

    const HandleFilterProductByBrand = async (type) => {
        await history('/search/brand')

        dispatch(searchBrands(type))
    }

    return (
        <div className="brand-item" onClick={() => HandleFilterProductByBrand(items.name)}>
            <img src={items.img} alt={items.name} />
            {/* <div className="categories-label">
                <h6>{items.name}</h6>
            </div> */}
        </div>
    )
}

export default BrandItem

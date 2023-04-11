import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { filterProductByRandomField } from '../../redux/actions/ProductAction'
import { getAllProduct } from '../../redux/actions/ProductAction'
import { searchType } from '../../redux/actions/ListTypeProductAction'

import './Catergory.css'

function CatergoryItem(props) {
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

    const HandleFilterProductByType = async (type) => {
        await history('/search/type')

        dispatch(searchType(type))
    }

    return (
        <div
            className="flex-column align-content-center align-items-center gap-30"
            onClick={() => HandleFilterProductByType(items.name)}
        >
            <img className="categories-img" src={items.img} alt={items.name} />
            <div className="categories-label">
                <h6>{items.name}</h6>
            </div>
        </div>
    )
}

export default CatergoryItem

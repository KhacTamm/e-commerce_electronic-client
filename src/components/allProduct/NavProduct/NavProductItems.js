// import { filterProductByRandomField } from '../../redux/actions/ProductAction'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllProduct, searchType } from '../../../redux/actions/ProductAction'

import { filterProductByRandomField } from '../../../redux/actions/ProductAction'

import './NavProduct.css'

function NavProductItems(props) {
    const { type } = props
    const dispatch = useDispatch()
    const history = useNavigate()

    const [dataFilter, setDataFilter] = useState({})

    // useEffect(() => {
    //     dispatch(filterProductByRandomField(dataFilter))
    // }, [dataFilter])

    const HandleFilterProductByType = async (type) => {
        await history('/search/type')

        dispatch(searchType(type))
    }

    return (
        <div className="navProduct_item" onClick={() => HandleFilterProductByType(type.name)}>
            <span className="typeName">{type.name}</span>
        </div>
    )
}

export default NavProductItems

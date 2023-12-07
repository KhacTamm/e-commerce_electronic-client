import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../ProductCard'
import { handlePercentDiscount } from '../../../untils/index'
import { useDispatch } from 'react-redux'

function ProductAll(props) {
    const { title } = props
    const dispatch = useDispatch()
    const [name, setName] = useState('iphone')
    const [hotIphone, setHotIphone] = useState([])

    useEffect(() => {
        async function FetchApi() {
            try {
                const { data } = await axios.get(`http://localhost:4000/products`)
                setHotIphone(data)
            } catch (error) {}
        }
        FetchApi()
    }, [])

    return (
        <section id="hotsale iphone">
            <div className="hotsale">
                <h2>{title}</h2>
                {hotIphone ? <ProductCard Products={handlePercentDiscount(hotIphone)}></ProductCard> : ''}
            </div>
        </section>
    )
}

export default ProductAll

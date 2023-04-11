import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getAllTypeProduct } from '../../redux/actions/ListTypeProductAction'

import CatergoryItem from './CatergoryItem'
import './Catergory.css'

function Catergory() {
    const dispatch = useDispatch()

    const { List } = useSelector((state) => state.allTypeProduct)

    useEffect(() => {
        dispatch(getAllTypeProduct())
    }, [dispatch])

    return (
        <section className="home-wrapper-3 py-4">
            <div className="row">
                <div className="col-12">
                    <div className="categories">
                        <strong className="categories-title">DANH MỤC NỔI BẬT</strong>
                        <div className="categories-items d-flex flex-wrap align-items-center">
                            {List ? List.map((item, index) => <CatergoryItem key={index} items={item} />) : ''}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Catergory

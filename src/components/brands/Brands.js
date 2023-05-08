import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Marquee from 'react-fast-marquee'

import { getAllBrandProduct } from '../../redux/actions/ListBrandProductAction'
import './Brands.css'

import BrandItem from './BrandItem'

function Brands(props) {
    const  {ListBrannd} = props

    return (
        <section className="marque-wrapper py-4">
            <div className="row">
                <div className="col-12">
                    <div className="marquee-inner-wrapper card-wrapper">
                        <Marquee className="d-flex align-items-center justify-content-between">
                            {ListBrannd 
                                ? ListBrannd.map((brand, index) => <BrandItem items={brand} key={index}></BrandItem>)
                                : ''}
                        </Marquee>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </section>
    )
}

export default Brands

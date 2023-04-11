import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { getproductById } from '../../redux/actions/ProductAction'

import './Detail.css'
import DetailInfo from './DetailInfo'
import RateStar from './RateStar'
import CommentProduct from './CommentProduct'
import BlogContent from './BlogContent'
import Specifications from './Specifications/Specifications'

function Detail(props) {
    const dispatch = useDispatch()
    const { id } = useParams()
    const detailProduct = useSelector((state) => state.getProductById.product)

    // console.log(handlePercentDiscount(detailProduct))
    // console.log(detailProduct)

    useEffect(() => {
        dispatch(getproductById(id))
    }, [dispatch])

    return (
        <section id="detail">
            {detailProduct ? (
                <div className="detail">
                    <div className="detail-info detail_item">
                        {/* <div className="detail-title">
                            <h2>{detailProduct.name}</h2>
                        </div> */}
                        <div className="detail-info-slide">
                            <div className="detail-info-slide-image">
                                <img src={detailProduct.image}></img>
                            </div>
                        </div>
                        <DetailInfo product={detailProduct}></DetailInfo>
                    </div>

                    <div className="kt_dd">
                        <div className="detail_item dd">
                            <h4>Đặc điểm nổi bật</h4>
                            <BlogContent></BlogContent>
                        </div>
                        <div className="detail_item kt">
                            <h4>Thông số kỹ thuật</h4>
                            <Specifications product={detailProduct}></Specifications>
                        </div>
                        

                        {/* <BlogContent></BlogContent> */}
                    </div>

                  

                    <div className="detail_item">
                        <RateStar></RateStar>
                    </div>

                    <div className="detail_item">
                        <h4>Hỏi và đáp </h4>
                        <CommentProduct></CommentProduct>
                    </div>
                </div>
            ) : (
                ''
            )}
        </section>
    )
}

export default Detail

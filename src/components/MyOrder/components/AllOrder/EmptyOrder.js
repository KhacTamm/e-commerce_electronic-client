import React from 'react'
import './AllOrder.css'
import images from '../../../../assets'

function EmptyOrder() {
    return (
        <div className="emptyOrder">
            <img src={images.bill_empty}></img>
            <div className="emptyOrder_text">Bạn không có đơn hàng nào</div>
        </div>
    )
}

export default EmptyOrder

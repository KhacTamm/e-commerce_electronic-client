import React from 'react'
import './EmptyOrder.css'
import images from '../../../../../assets'

function EmptyOrder() {
    return (
        <div className="emptyOrder">
            <img src={images.bill_empty}></img>
            <div className="emptyOrder_text">Đơn hàng rỗng</div>
        </div>
    )
}

export default EmptyOrder

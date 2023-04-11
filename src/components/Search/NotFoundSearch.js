import React from 'react'
import images from '../../assets'
import './Search.css'

function NotFoundSearch() {
    return (
        <div class="SearchEmpty">
            <div>
                <img src={images[404]} />
                <h5 class="textSearchEmpty">Rất tiếc, không tìm thấy sản phẩm phù hợp với lựa chọn của bạn</h5>
            </div>
        </div>
    )
}

export default NotFoundSearch

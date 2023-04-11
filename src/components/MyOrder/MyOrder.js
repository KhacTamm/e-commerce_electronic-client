import React from 'react'
import './MyOrder.css'

import Menu from './MenuOrder/MenuOrder'

function MyOrder(props) {
    return (
        <section id="myorder">
            <div className="myorder">
                <Menu></Menu>
            </div>
        </section>
    )
}

export default MyOrder

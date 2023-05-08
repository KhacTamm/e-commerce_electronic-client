import React from 'react'
import Product from './Product'

function ListProduct(props) {
    const { HotSaleProducts, discount, title } = props

    return (
        <div className="listproduct row">
            {title ? <div className="title_listProduct">{title}</div> : ''}
            {HotSaleProducts.map((product, index) =>
                discount ? (
                    product.percentDiscount >= discount ? (
                        product.amount > 0 ? (
                            <Product product={product} key={index} />
                        ) : (
                            ''
                        )
                    ) : (
                        ''
                    )
                ) : product.amount > 0 ? (
                    <Product product={product} key={index} />
                ) : (
                    ''
                ),
            )}
        </div>
    )
}

export default ListProduct

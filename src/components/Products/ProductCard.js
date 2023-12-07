import { useEffect } from 'react'
import Product from './Product'

function ProductCard(props) {
    const { Products } = props

    return (
        <div className="hotsale-listproduct">
            {Products.map((product, index) => (
                <Product product={product} key={index}></Product>
            ))}
        </div>
    )
}

export default ProductCard

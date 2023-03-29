import Product from './Product'

function ListProduct(props) {
    const { HotSaleProducts, discount, title, newProduct } = props

    const handleNewProduct = (() => {
        if (newProduct) {
            HotSaleProducts.reverse()
        }
    })()

    return (
        <div className="listproduct row">
            {title ? <div className="title_listProduct">{title}</div> : ''}
            {HotSaleProducts.map((product, index) =>
                discount ? (
                    product.percentDiscount >= discount ? (
                        <Product product={product} key={index} />
                    ) : (
                        ''
                    )
                ) : (
                    <Product product={product} key={index} />
                ),
            )}
        </div>
    )
}

export default ListProduct

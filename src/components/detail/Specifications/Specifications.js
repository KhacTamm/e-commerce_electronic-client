import './Specifications.css'

function Specifications(props) {
    const { product } = props

    return (
        <ul className="technical-content">
            {/* {product.brand !== 'undefined' ? (
                <li class="technical-content-item">
                    <p>Hệ điều hành</p>
                    <div>{product.os}</div>
                </li>
            ) : (
                ''
            )} */}
            {product.os !== 'undefined' && product.os  ? (
                <li class="technical-content-item">
                    <p>Hệ điều hành</p>
                    <div>{product.os}</div>
                </li>
            ) : (
                ''
            )}
            {product.card !== 'undefined' && product.card ? (
                <li class="technical-content-item">
                    <p>Loại card đồ họa</p>
                    <div>{product.card}</div>
                </li>
            ) : (
                ''
            )}
            {product.disk && product.disk !== 'undefined' ? (
                <li class="technical-content-item">
                    <p>Ổ cứng</p>
                    <div>{product.disk}</div>
                </li>
            ) : (
                ''
            )}
            {product.screen && product.screen !== 'undefined' ? (
                <li class="technical-content-item">
                    <p>Kích thước màn hình</p>
                    <div>{product.screen}</div>
                </li>
            ) : (
                ''
            )}
            {product.resolution && product.resolution !== 'undefined' ? (
                <li class="technical-content-item">
                    <p>Độ phân giải màn hình</p>
                    <div>{product.resolution}</div>
                </li>
            ) : (
                ''
            )}
            {product.cameraBefore && product.cameraBefore !== 'undefined' ? (
                <li class="technical-content-item">
                    <p>Camera trước</p>
                    <div>{product.cameraBefore}</div>
                </li>
            ) : (
                ''
            )}
            {product.cameraAfter && product.cameraAfter !== 'undefined' ? (
                <li class="technical-content-item">
                    <p>Camera sau</p>
                    <div>{product.cameraAfter}</div>
                </li>
            ) : (
                ''
            )}
            {product.ram  && product.ram !== 'undefined' ? (
                <li class="technical-content-item">
                    <p>Dung lượng RAM</p>
                    <div>{product.ram}</div>
                </li>
            ) : (
                ''
            )}
            {product.rom  && product.rom  !== 'undefined' ? (
                <li class="technical-content-item">
                    <p>Bộ nhớ trong</p>
                    <div>{product.rom}</div>
                </li>
            ) : (
                ''
            )}
            {product.battery && product.battery !== 'undefined' ? (
                <li class="technical-content-item">
                    <p>Pin</p>
                    <div>{product.battery}</div>
                </li>
            ) : (
                ''
            )}
        </ul>
    )
}

export default Specifications

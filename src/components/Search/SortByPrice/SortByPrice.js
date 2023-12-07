import { useDispatch } from 'react-redux'
import { ascendingFilterProduct, descendingFilterProduct } from '../../../redux/actions/ProductAction'

import { Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import './SortByPrice.css'

export default function SortByPrice(props) {
    const dispatch = useDispatch()
    const { products } = props

    const menuShow = () => (
        <div className="sort-price-list">
            <div className="sort-price-list-item" onClick={ThapDenCao}>
                <span>Thấp đến cao</span>
            </div>
            <div className="sort-price-list-item" onClick={CaoDenThap}>
                <span>Cao đến thấp</span>
            </div>
        </div>
    )

    const ThapDenCao = () => {
        // console.log(products)

        dispatch(descendingFilterProduct(products))
        // console.log(products)
    }

    const CaoDenThap = () => {
        dispatch(ascendingFilterProduct(products))
    }

    return (
        <div className="sort-price">
            <Dropdown overlay={menuShow} trigger={['click']}>
                <div className="sort-price-title" onClick={(e) => e.preventDefault()}>
                    <span className="sort-price-label">Giá</span> <DownOutlined className="sort-price-icon" />
                </div>
            </Dropdown>
        </div>
    )
}

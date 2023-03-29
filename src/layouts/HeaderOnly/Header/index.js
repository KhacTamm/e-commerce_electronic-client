import { NavLink, Link } from 'react-router-dom'

import images from '../../../assets'
import '../HeaderOnly.css'

function Header({ title }) {
    return (
        <div className="subHeader">
            <Link to="/" className="subHeader_logo">
                <img src={images.logo} alt="logo" />
                <h1>BA-TÊ SHOP</h1>
            </Link>
            <div className="titleType">{title}</div>
        </div>
    )
}

export default Header

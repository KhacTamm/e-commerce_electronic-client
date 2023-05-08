import Header from './Header'
import './HeaderOnly.css'
import { useLocation } from 'react-router-dom'

function HeaderOnly({ children }) {
    let location = useLocation()
    return (
        <div className='headerOnly'>
            <Header title={location.pathname === '/register' ? 'Đăng ký' : 'Đăng nhập'} />
            <div className="headerOnly_wrap">
                <div className="headerOnly_cont">
                    <div className="headerOnly_inner">{children}</div>
                </div>
            </div>
        </div>
    )
}

export default HeaderOnly

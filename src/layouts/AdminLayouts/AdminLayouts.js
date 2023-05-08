import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { SignoutUser } from '../../redux/actions/UserAction'

import Sidebar from '../../components/Admin/components/sidebar/Sidebar'
import './Admin.css'

function AdminLayout({ children }) {
    const userSignin = useSelector((state) => state.getUsers)
    const { userInfo } = userSignin
    const history = useNavigate()

    const dispatch = useDispatch()

    const handleSignout = () => {
        dispatch(SignoutUser())
    }

    if (!userInfo || !userInfo.isAdmin) {
        history('/')
    }
    return (
        <div className={`layout`}>
            <Sidebar />
            <div className="layout__content">
                <div className="layout__content-main">{children}</div>
            </div>
        </div>
    )
}

export default AdminLayout

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { NavLink, Link } from 'react-router-dom'
import config from '../../config'

import { useDispatch, useSelector } from 'react-redux'
import { SignoutUser } from '../../redux/actions/UserAction'
import { searchProduct } from '../../redux/actions/ProductAction'
import { getAllCart } from '../../redux/actions/CartAction'

import { BiUser } from 'react-icons/bi'

// import 'tippy.js/dist/tippy.css' // optional
// import Tippy from '@tippyjs/react'

// import Tippy

import { DownOutlined, ShoppingCartOutlined, SearchOutlined } from '@ant-design/icons'
import images from '../../assets'
import './Header.css'

function Header() {
    const dispatch = useDispatch()
    const history = useNavigate()

    const [showAccount, setShowAccount] = useState(false)
    const [showAccount2, setShowAccount2] = useState(false)

    const userSignin = useSelector((state) => state.getUsers)
    const { userInfo, error } = userSignin
    const [search, setSearch] = useState('')
    const { quantity } = useSelector((state) => state.cart)
    const amount = quantity

    useEffect(() => {
        if (userInfo) {
            const action = getAllCart(userInfo._id)
            dispatch(action)
        }
    }, [dispatch])

    const toCart = () => {
        if (userInfo) {
            history('/cart')
        } else {
            history('/login')
        }
    }

    const [menu, setMenu] = useState(true)

    const handleSignout = () => {
        dispatch(SignoutUser())
    }

    const SearchProduct = async (e) => {
        e.preventDefault()
        await history('/search')
        dispatch(searchProduct(search))
    }

    const useMenu = [
        {
            // icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: './@Win',
        },
        {
            // icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: './coins',
        },
        {
            // icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: './settings',
        },
        // ...MENU_ITEMS,
        {
            // icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: './logout',
            separate: true,
        },
    ]

    return (
        <div className="header">
            <div className="container-xxl">
                <section id="menu" className="header-content">
                    <Link to="/" className="logo">
                        <img src={images.logo} alt="logo" />
                        <h1>BA-TÊ SHOP</h1>
                    </Link>
                    <div className="search">
                        <form onSubmit={(e) => SearchProduct(e)}>
                            <input
                                type="text"
                                name="search"
                                placeholder="Tìm kiếm ..."
                                defaultValue={setSearch}
                                spellCheck={false}
                                autoComplete="off"
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <SearchOutlined className="search-btn scale" onClick={(e) => SearchProduct(e)} />
                        </form>
                    </div>
                    <ul className="menu-list" id={menu ? 'hidden' : ''}>
                        <li className="list-item scale">
                            <NavLink
                                className={({ isActive }) => (isActive ? 'active' : 'noActive')}
                                to={config.routes.home}
                                end
                            >
                                Trang Chủ
                            </NavLink>
                        </li>
                        <li className="list-item scale">
                            <NavLink
                                className={({ isActive }) => (isActive ? 'active' : 'noActive')}
                                to={config.routes.productCustomer}
                                end
                            >
                                Sản Phẩm
                            </NavLink>
                        </li>
                        <li className="list-item user">
                            <li className="shopcart navNoUser" onClick={() => toCart()}>
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'active shop-cart' : 'noActive shop-cart')}
                                    to={config.routes.cart}
                                    end
                                >
                                    <ShoppingCartOutlined style={{ fontSize: '30px' }}></ShoppingCartOutlined>
                                    <span className="count"> {amount} </span>
                                </NavLink>
                            </li>
                            {userInfo ? (
                                <li onClick={() => setShowAccount2(!showAccount2)}>
                                    <div className="user_name account">
                                        {userInfo.name}
                                        <DownOutlined style={{ fontSize: '1.2rem' }} />
                                    </div>
                                    {showAccount2 ? (
                                        <div className="menu-drop">
                                            {userInfo.isAdmin ? (
                                                <Link to={config.routes.admin}>Admin</Link>
                                            ) : (
                                                <>
                                                    <Link to={`/account/${userInfo._id}`}>Tài khoản của tôi</Link>
                                                    <Link to={config.routes.MyOrder}>Đơn hàng</Link>
                                                </>
                                            )}

                                            <Link onClick={() => handleSignout()}>Đăng xuất</Link>
                                            {/* <Tippy
                                        render={(attrs) => (
                                            <div className="box" tabIndex="-1" {...attrs}>
                                                My tippy box
                                            </div>
                                        )}
                                    >
                                        <button>My button</button>
                                    </Tippy> */}
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                </li>
                            ) : (
                                <li onClick={() => setShowAccount(!showAccount)}>
                                    <div className="noActive account navNoUser">
                                        <BiUser style={{ fontSize: '3rem' }}></BiUser>
                                        {/* <DownOutlined style={{ fontSize: '14px' }} /> */}
                                    </div>

                                    {showAccount ? (
                                        <div className="menu-drop">
                                            <Link to={config.routes.register}>Đăng kí</Link>
                                            <Link to={config.routes.login}>Đăng nhập</Link>
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                </li>
                            )}
                        </li>
                    </ul>
                    <div className="bar" onClick={() => setMenu(!menu)}>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Header

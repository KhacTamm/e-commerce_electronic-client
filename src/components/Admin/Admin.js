import React from 'react'
import { useSelector } from 'react-redux'
import './Admin.css'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import { Fragment } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import adminRoutes from './components/Routers'

function Admin(props) {
    const userSignin = useSelector((state) => state.userSignin)
    const { userInfo } = userSignin
    const history = useNavigate()

    if (!userInfo || !userInfo.isAdmin) {
        history('/')
    }

    return (
        // <Router>
        <Fragment>
            <Routes>
                {adminRoutes.map((route, index) => {
                    let Layout = Fragment

                    // if (route.layout) {
                    //     Layout = route.layout
                    // } else if (route.layout === null) {
                    //     Layout = Fragment
                    // }
                    // console.log(route)
                    const Page = route.component
                    return (
                        <div className={`layout`}>
                            <Sidebar />
                            <div className="layout__content">
                                <div className="layout__content-main">
                                    <Route key={index} path={route.path} element={<Page />} />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Routes>
        </Fragment>
        // </Router>
    )
}

export default Admin

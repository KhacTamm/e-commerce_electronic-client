import React from 'react'
import { useSelector } from 'react-redux'
import AllProduct from '../components/allProduct/AllProduct'
import AppChat from '../components/AppChat/AppChat'

ProductPage.propTypes = {}

function ProductPage(props) {
    const userSignin = useSelector((state) => state.getUsers)
    const { userInfo } = userSignin
    return (
        <div>
            <AllProduct></AllProduct>
            {userInfo && userInfo.isAdmin === false ? <AppChat /> : ''}
        </div>
    )
}

export default ProductPage

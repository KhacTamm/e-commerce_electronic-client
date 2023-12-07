import React from 'react'
import Detail from '../components/detail/Detail'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import AppChat from '../components/AppChat/AppChat'
import { useSelector } from 'react-redux'

function DetailPage(props) {
    const userSignin = useSelector((state) => state.getUsers)
    const { userInfo } = userSignin
    return (
        <div>
            <Detail></Detail>
            {userInfo && userInfo.isAdmin === false ? <AppChat /> : ''}
            <ScrollToTop></ScrollToTop>
        </div>
    )
}

export default DetailPage

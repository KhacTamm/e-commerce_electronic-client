import Detail from '../components/detail/Detail'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import AppChat from '../components/AppChat/AppChat'
import { useSelector } from 'react-redux'

function DetailPage(props) {
    const { userInfo } = useSelector((state) => state.userSignin)
    return (
        <div>
            <Detail></Detail>
            {userInfo ? <AppChat></AppChat> : ''}
            <ScrollToTop></ScrollToTop>
        </div>
    )
}

export default DetailPage

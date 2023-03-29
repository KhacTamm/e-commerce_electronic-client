import { useSelector } from 'react-redux'

import Account from './Account'

function AccountCard() {
    var userInfo = useSelector((state) => state.userSignin.userInfo)

    return (
        <div className="account_card">
            <div className="account_title">
                <span>Hồ sơ của tôi</span>
            </div>

            <Account userInfo={userInfo} />
        </div>
    )
}

export default AccountCard

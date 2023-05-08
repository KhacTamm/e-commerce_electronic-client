import React from 'react'
import { useSelector } from 'react-redux'

import Account from './Account'

function AccountCard() {

    return (
        <div className="account_card">
            <div className="account_title">
                <span>Hồ sơ của tôi</span>
            </div>
            <Account />
        </div>
    )
}

export default AccountCard

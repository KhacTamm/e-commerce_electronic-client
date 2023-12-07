import PropTypes from 'prop-types'

import classNames from 'classnames/bind'
import Styles from './Suggested.module.scss'

import AccountItem from './AccountItem'

const cx = classNames.bind(Styles)

function SuggestedAccounts({ label, data = [], onSeeAll }) {
    // console.log({ data })
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            {data.map((account) => (
                <AccountItem key={account.id} data={account} />
            ))}

            <p className={cx('more-btn')} onClick={onSeeAll}>
                See all
            </p>
        </div>
    )
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
}

export default SuggestedAccounts

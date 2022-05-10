import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/90a42c13f7d1d32b056034bb37f44f5b.jpeg?x-expires=1652180400&x-signature=bf8qGz8m7BmHLKaCugsBiYsDwuo%3D"
                alt="Phuc"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Minh Phuc</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>PhucNguyen</span>
            </div>
        </div>
    );
}

export default AccountItem;

import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../logo.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to='/'>
          <img src={logo} alt='Logo' />
        </Link>
      </div>
      <div className={styles.options}>
        <Link className={styles.option} to='/shop'>
          SHOP
        </Link>
        <Link className={styles.option} to='/contact'>
          CONTACT
        </Link>
        <Link className={styles.option} to='/signin'>
          SIGN IN
        </Link>
      </div>
    </div>
  );
};

export default Header;

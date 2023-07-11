import { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import logo from '../../Assets/logo.webp';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <Fragment>
      <div className={`${styles.navbar} grid`}>
        <div className={`${styles.logo} grid`}>
          <Link to='/main'>
            <img src={logo} alt='Excel w Rzeszowie' />
          </Link>
        </div>

        <div className={`${styles.nav} grid`}>
          <div className={`${styles['navlink-wrap']} grid`}>
            <NavLink
              to='/oferta'
              className={styles['nav-link']}
              activeClassName={styles['active-nav-link']}
            >
              Oferta
            </NavLink>
          </div>

          <div className={`${styles['navlink-wrap']} grid`}>
            <NavLink
              to='/o-nas'
              className={styles['nav-link']}
              activeClassName={styles['active-nav-link']}
            >
              O nas
            </NavLink>
          </div>

          <div className={`${styles['navlink-wrap']}  ${styles.contact} grid`}>
            <NavLink
              to='/kontakt'
              className={`${styles['nav-link']}`}
              activeClassName={styles['active-nav-link']}
            >
              Skontaktuj się <br /> z nami!
            </NavLink>
          </div>
        </div>

        <div className={styles['nav-800']}>

        </div>
      </div>
    </Fragment>
  );
};

export default Nav;

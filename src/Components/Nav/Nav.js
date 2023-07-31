import { Add, HambergerMenu } from 'iconsax-react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import logo from '../../Assets/logo.webp';
import styles from './Nav.module.css';

const Nav = () => {
  const [menuVis, setMenuVis] = useState(false);
  const menuRef = useRef();

  const menuHandler = () => {
    setMenuVis((m) => !m);
  };

  useEffect(() => {
    if (menuVis) {
      document.body.style.overflowY = 'hidden';
    }
    if (!menuVis) {
      document.body.style.overflowY = 'scroll';
    }

    if (menuVis) {
      const menu = menuRef?.current;
      setTimeout(() => {
        menu.classList.toggle(styles.active);
      });
    }
  }, [menuVis]);

  return (
    <Fragment>
      <div className={`${styles.navbar} grid`}>
        <div className={`${styles.logo} grid`}>
          <Link to='/main'>
            <img
              src={logo}
              alt='Excel w Rzeszowie'
              width='300px'
            />
          </Link>
        </div>

        <div className={`${styles.nav} grid`}>
          <div className={`${styles['navlink-wrap']} grid`}>
            <NavLink
              to='/wycena-szkolenie'
              className={`${styles['nav-link']}`}
              activeClassName={styles['active-nav-link']}
            >
              Wycena
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

          <div className={`${styles['navlink-wrap']} grid`}>
            <NavLink
              to='/kontakt'
              className={`${styles['nav-link']}`}
              activeClassName={styles['active-nav-link']}
            >
              Kontakt
            </NavLink>
          </div>

          <div className={`${styles['navlink-wrap']}  ${styles.contact} grid`}>
            <NavLink
              to='/kurs-online'
              className={`${styles['nav-link']}`}
              activeClassName={styles['active-nav-link']}
            >
              Szkolenia <br /> Online
            </NavLink>
          </div>
        </div>
      </div>

      <div className={styles['navbar-800']}>
        <div className={`${styles['logo-800']} grid`}>
          <Link to='/main'>
            <img src={logo} alt='Excel w Rzeszowie' />
          </Link>
        </div>

        <div className={`${styles['ham-contaienr']} grid`}>
          <div className={styles['ham-menu']} onClick={menuHandler}>
            <span>Menu</span> <HambergerMenu size='32' color='white' />
          </div>
          {menuVis && (
            <div className={styles['menu-800']} ref={menuRef}>
              <div className={styles['menu-logo-container']}>
                <div className={styles['exit-button']} onClick={menuHandler}>
                  <span>Exit</span> <Add size='40' color='white' />
                </div>
              </div>

              <div className={styles['nav-link-container-800']}>
                <NavLink
                  to='/main'
                  className={`${styles['nav-link-800']}`}
                  activeClassName={styles['active-nav-link-800']}
                  onClick={menuHandler}
                >
                  Strona główna
                </NavLink>
              </div>

              <div className={styles['nav-link-container-800']}>
                <NavLink
                  to='/oferta'
                  className={`${styles['nav-link-800']}`}
                  activeClassName={styles['active-nav-link-800']}
                  onClick={menuHandler}
                >
                  Oferta
                </NavLink>
              </div>

              <div className={styles['nav-link-container-800']}>
                <NavLink
                  to='/o-nas'
                  className={`${styles['nav-link-800']}`}
                  activeClassName={styles['active-nav-link-800']}
                  onClick={menuHandler}
                >
                  O nas
                </NavLink>
              </div>

              <div className={styles['nav-link-container-800']}>
                <NavLink
                  to='/kontakt'
                  className={`${styles['nav-link-800']}`}
                  activeClassName={styles['active-nav-link-800']}
                  onClick={menuHandler}
                >
                  Kontakt
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Nav;

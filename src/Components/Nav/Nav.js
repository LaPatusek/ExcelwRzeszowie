import { HambergerMenu } from 'iconsax-react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import logo from '../../Assets/logov2.webp';
import styles from './Nav.module.css';

const Nav = () => {
  const [menuVis, setMenuVis] = useState(false);
  const linkRefOne = useRef();
  const linkRefTwo = useRef();
  const linkRefThree = useRef();
  const linkRefFour = useRef();
  const linkRefFive = useRef();

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
      const linkOne = linkRefOne?.current;
      const linkTwo = linkRefTwo?.current;
      const linkThree = linkRefThree?.current;
      const linkFour = linkRefFour?.current;
      const linkFive = linkRefFive?.current;
      setTimeout(() => {
        linkOne.classList.toggle(styles['aktywne']);
        linkTwo.classList.toggle(styles['aktywne']);
        linkThree.classList.toggle(styles['aktywne']);
        linkFour.classList.toggle(styles['aktywne']);
        linkFive.classList.toggle(styles['aktywne']);
      }, 200);
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
              width='350px'
              height='auto'
            />
          </Link>
        </div>

        <div className={`${styles.nav} grid`}>
          <div className={`${styles['navlink-wrap']} grid`}>
            <NavLink
              to='/wycena-szkolenie'
              className={`${styles['nav-link']} ${styles['right-justify']}`}
              activeClassName={styles['active-nav-link']}
            >
              Wycena
            </NavLink>
          </div>

          <div className={`${styles['navlink-wrap']} grid`}>
            <NavLink
              to='/o-nas'
              className={`${styles['nav-link']} ${styles['center-justify']}`}
              activeClassName={styles['active-nav-link']}
            >
              O nas
            </NavLink>
          </div>

          <div className={`${styles['navlink-wrap']} grid`}>
            <NavLink
              to='/kontakt'
              className={`${styles['nav-link']} ${styles['left-justify']}`}
              activeClassName={styles['active-nav-link']}
            >
              Kontakt
            </NavLink>
          </div>
        </div>
        <div className={`${styles['navlink-wrap']}  ${styles.contact} grid`}>
          <a
            href='https://www.excelnawypasie.pl/'
            className={`${styles['nav-link']}`}
            target='_blank'
            rel='noreferrer'
          >
            Szkolenia <br /> Online
          </a>
        </div>
      </div>

      <div className={styles['navbar-800']}>
        <div className={`${styles['logo-800']} grid`}>
          <Link to='/main'>
            <img
              src={logo}
              alt='Excel w Rzeszowie'
              width='300px'
              height='auto'
            />
          </Link>
        </div>

        <div className={`grid`}>
          <div
            className={`${styles['ham-menu']} ${
              menuVis ? styles['active-menu'] : ''
            }`}
          >
            <HambergerMenu size='36' color='white' onClick={menuHandler} />
          </div>
          {menuVis && (
            <div className={styles['menu-800']}>
              <div />

              <div className={styles['nav-link-container-800']}>
                <NavLink
                  to='/main'
                  className={`${styles['nav-link-800']}`}
                  activeClassName={styles['active-nav-link-800']}
                  onClick={menuHandler}
                  ref={linkRefOne}
                >
                  Strona główna
                </NavLink>
              </div>

              <div className={styles['nav-link-container-800']}>
                <NavLink
                  to='/wycena-szkolenie'
                  className={`${styles['nav-link-800']}`}
                  activeClassName={styles['active-nav-link-800']}
                  onClick={menuHandler}
                  ref={linkRefTwo}
                >
                  Wycena
                </NavLink>
              </div>

              <div className={styles['nav-link-container-800']}>
                <a
                  href='https://www.excelnawypasie.pl/'
                  className={`${styles['nav-link-800']}`}
                  target='_blank'
                  rel='noreferrer'
                  ref={linkRefThree}
                >
                  Szkolenia <br /> Online
                </a>
              </div>

              <div className={styles['nav-link-container-800']}>
                <NavLink
                  to='/kontakt'
                  className={`${styles['nav-link-800']}`}
                  activeClassName={styles['active-nav-link-800']}
                  onClick={menuHandler}
                  ref={linkRefFour}
                >
                  Kontakt
                </NavLink>
              </div>

              <div className={styles['nav-link-container-800']}>
                <NavLink
                  to='/o-nas'
                  className={`${styles['nav-link-800']}`}
                  activeClassName={styles['active-nav-link-800']}
                  onClick={menuHandler}
                  ref={linkRefFive}
                >
                  O nas
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

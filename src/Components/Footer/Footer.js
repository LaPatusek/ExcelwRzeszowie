import {
  ArrowRight,
  Call,
  Copyright,
  Facebook,
  Instagram,
} from 'iconsax-react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Twitter from '../../Assets/twitterx.webp';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={`${styles['upper-footer']} grid`}>
        <div className={` ${styles['first-wrap']} grid`}>
          <div className={`${styles.kontakt}`}>
            <h3>Kontakt</h3>
            <p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='26'
                height='26'
                fill='white'
                viewBox='0 0 512 512'
              >
                <path d='M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z' />
              </svg>
              <a href='mailto:@eryktrojanowski@gmail.com'>
                eryktrojanowski@gmail.com
              </a>
            </p>
            <p>
              <Call size='26' variant='Bold' />
              <a href='tel:+48531771944'>+48 531 771 944 </a>
            </p>
          </div>
        </div>
        <div className={` ${styles['second-wrap']} grid`}>
          <div className={`${styles.strony} grid`}>
            <h3>Strony </h3>
            <Link to='/main'>
              <ArrowRight size='20' />
              Strona główna
            </Link>
            <Link to='/wycena-szkolenie'>
              <ArrowRight size='20' />
              Wyceń szkolenie
            </Link>
            <Link to='/o-nas'>
              <ArrowRight size='20' />O nas
            </Link>
            <Link to='/kontakt'>
              <ArrowRight size='20' />
              Kontakt
            </Link>
            <Link to='/kurs-online'>
              <ArrowRight size='20' />
              Szkolenia online
            </Link>
          </div>
        </div>
        <div className={` ${styles['third-wrap']} grid`}>
          <div className={`${styles.socials} grid`}>
            <h3>Obserwuj nas na bieżąco</h3>

            <div className={`${styles['icons-container']} grid`}>
              <a
                href='https://www.facebook.com/ErykTrojanowski'
                aria-label='Facebook'
                target='_blank'
                rel='noreferrer'
              >
                <Facebook size='34' color='white' className={styles.facebook} />
              </a>

              <a
                href='https://www.instagram.com/eryk7777/'
                aria-label='Instagram'
                target='_blank'
                rel='noreferrer'
              >
                <Instagram
                  size='34'
                  color='white'
                  className={styles.instagram}
                />
              </a>

              <a
                href='https://twitter.com/ErykTrojanowski'
                aria-label='Twitter'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src={Twitter}
                  height='58px'
                  width='58px'
                  className={styles.twitter}
                  alt='Twitter'
                />
              </a>

              <a
                href='https://www.linkedin.com/in/eryk-trojanowski-7678ab120/'
                aria-label='Linkedin'
                target='_blank'
                rel='noreferrer'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='34px'
                  height='34px'
                  viewBox='0 0 512 512'
                  fill='white'
                  className={styles.linkedin}
                >
                  <path d='M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z' />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['down-footer']}>
        <Copyright size='18' className={styles.icon} /> Excel w Rzeszowie.
        Wszystkie prawa zastrzeżone.{' '}
        <Link to='/polityka-prywatnosci'>Polityka prywatności</Link>
      </div>
    </div>
  );
};

export default Footer;

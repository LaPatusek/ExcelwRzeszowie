import { Global, TickCircle } from 'iconsax-react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import szkolenie from '../Assets/szkolenie.webp';
import Header from '../Components/Header/Header';
import styles from './Main.module.css';

const Main = () => {
  return (
    <div className={styles.main}>
      <Header />
      <section className={`${styles.oferta} grid`}>
        <div className={`${styles['offer-heading']} grid`}>
          <div className={styles['left-header']}>
            <span>Dlaczego my?</span>
            <h2>Dlaczego Excel w Rzeszowie?</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            diam ornare, ultrices massa a, rhoncus lectus. Sed malesuada, enim
            sit amet accumsan efficitur
          </p>
        </div>
        <div className={`${styles['offer-boxes']} grid`}>
          <div className={styles.container}>
            <Global size='32' />
            <div className={styles['container-text']}>
              <h3>
                Bogate <br /> doświadczenie
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                ultrices dignissim tristique. Integer iaculis varius lorem,
                vitae mollis massa dapibus eget. Nullam eget vestibulum sem.
                Proin consectetur ullamcorper eleifend.
              </p>
            </div>
          </div>

          <div className={styles.container}>
            <Global size='32' />
            <div className={styles['container-text']}>
              <h3>
                Jesteśmy <br /> mobilni
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                ultrices dignissim tristique. Integer iaculis varius lorem,
                vitae mollis massa dapibus eget. Nullam eget vestibulum sem.
                Proin consectetur ullamcorper eleifend.
              </p>
            </div>
          </div>

          <div className={styles.container}>
            <Global size='32' />
            <div className={styles['container-text']}>
              <h3>
                Dopasujemy się <br /> do poziomu
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                ultrices dignissim tristique. Integer iaculis varius lorem,
                vitae mollis massa dapibus eget. Nullam eget vestibulum sem.
                Proin consectetur ullamcorper eleifend.
              </p>
            </div>
          </div>

          <div className={styles.container}>
            <Global size='32' />
            <div className={styles['container-text']}>
              <h3>
                Spełnimy <br /> Twoje oczekiwania
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                ultrices dignissim tristique. Integer iaculis varius lorem,
                vitae mollis massa dapibus eget. Nullam eget vestibulum sem.
                Proin consectetur ullamcorper eleifend.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles['second-section']}>
        <div className={styles['section-heading']}>
          <span>Oferta Excel w Rzeszowie</span>
          <h2>Oferujemy szkolenia stacjonarne i zdalne</h2>
        </div>

        <div className={`${styles.szkolenia} grid`}>
          <div className={`${styles.stacjonarne} grid`}>
            <h3>Szkolenia stacjonarne</h3>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              ultrices dignissim tristique. Integer iaculis varius lorem, vitae
              mollis massa dapibus eget. Nullam eget vestibulum sem. Proin
              consectetur ullamcorper eleifend.
            </h4>
            <ol>
              <li>
                <TickCircle size='22' color='#39c685' variant='Bulk' /> Lorem
                ipsum dolor sit amet
              </li>
              <li>
                <TickCircle size='22' color='#39c685' variant='Bulk' /> Lorem
                ipsum dolor sit amet
              </li>
              <li>
                <TickCircle size='22' color='#39c685' variant='Bulk' /> Lorem
                ipsum dolor sit amet
              </li>
              <li>
                <TickCircle size='22' color='#39c685' variant='Bulk' /> Lorem
                ipsum dolor sit amet
              </li>
            </ol>
            <Link to='/wycena-szkolenia'>Dowiedz się więcej</Link>
          </div>
          <img src={szkolenie} alt='' width='400px' height='400px' />
          <img src={szkolenie} alt='' width='400px' height='400px' className={styles['second-image']}/>
          <div className={`${styles.zdalne} grid`}>
            <h3>Szkolenia online</h3>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              ultrices dignissim tristique. Integer iaculis varius lorem, vitae
              mollis massa dapibus eget. Nullam eget vestibulum sem. Proin
              consectetur ullamcorper eleifend.
            </h4>
            <ol>
              <li>
                <TickCircle size='22' color='#39c685' variant='Bulk' /> Lorem
                ipsum dolor sit amet
              </li>
              <li>
                <TickCircle size='22' color='#39c685' variant='Bulk' /> Lorem
                ipsum dolor sit amet
              </li>
              <li>
                <TickCircle size='22' color='#39c685' variant='Bulk' /> Lorem
                ipsum dolor sit amet
              </li>
              <li>
                <TickCircle size='22' color='#39c685' variant='Bulk' /> Lorem
                ipsum dolor sit amet
              </li>
            </ol>
            <Link to='/kurs-online'>Dowiedz się więcej</Link>
          </div>
        </div>
      </section>

      <section className={`${styles['kontakt-section']} grid`}>
        <div className={styles['kontakt-content']}>
          <h2>Skontaktuj się z nami już dziś</h2>
          <h3>A my pomożemy Ci osiągnąć Twoje cele</h3>
          <Link to='/kontakt'>
            <span>Kontakt</span>
          </Link>
        </div>

        <img src={szkolenie} alt='' />
      </section>
    </div>
  );
};

export default Main;

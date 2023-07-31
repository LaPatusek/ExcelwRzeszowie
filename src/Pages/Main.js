import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import szkolenie from '../Assets/szkolenie.webp';
import Header from '../Components/Header/Header';
import styles from './Main.module.css';

const Main = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={`${styles.oferta} grid`}>
        <h2>Co oferujemy?</h2>
        <div className={`${styles['offer-boxes']} grid`}>
          <div className={styles.container}>
            <h3>Szkolenie podstawowe</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              ultrices dignissim tristique. Integer iaculis varius lorem, vitae
              mollis massa dapibus eget. Nullam eget vestibulum sem. Proin
              consectetur ullamcorper eleifend.
            </p>
          </div>

          <div className={styles.container}>
            <h3>
              Szkolenie <br /> średniozaawansowane
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              ultrices dignissim tristique. Integer iaculis varius lorem, vitae
              mollis massa dapibus eget. Nullam eget vestibulum sem. Proin
              consectetur ullamcorper eleifend.
            </p>
          </div>

          <div className={styles.container}>
            <h3>Szkolenie zaawansowane</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              ultrices dignissim tristique. Integer iaculis varius lorem, vitae
              mollis massa dapibus eget. Nullam eget vestibulum sem. Proin
              consectetur ullamcorper eleifend.
            </p>
          </div>
        </div>
      </div>

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

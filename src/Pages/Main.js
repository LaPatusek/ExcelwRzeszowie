import { ArrowRight } from 'iconsax-react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import hello from '../Assets/hand-right-outline.svg';
import styles from './Main.module.css';

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={`${styles.title} grid`}>
        <div className={styles['blur-circle-shape']} />
        <h1>
          Szkolenia Excel <br /> w Rzeszowie
        </h1>

        <div className={`${styles['about-us']} grid`}>
          <div className={styles['about-us-container']}>
            <img src={hello} alt='' height='64px' width='64px' />
            <h2>
              <span> Witaj!</span> <br />
              Jesteśmy firmą działającą na rynku szkoleń od 2018 roku. Mamy
              bogate doświadczenie w nauczaniu. Posiadamy wpis do Rejestru
              Instytucji Szkoleniowych. Naszym sukcesem są zadowoleni kursanci.
            </h2>
            <Link to='/o-nas'>
              <ArrowRight size='26' variant='Broken' /> Poznaj nas lepiej{' '}
            </Link>
          </div>
        </div>
      </div>

      <div className={`${styles.oferta} grid`}>
        <h2>Co oferujemy?</h2>
        <div className={`${styles['offer-boxes']} grid`}>
          <div className={styles.container}>
            <h3>Mobilność</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              ultrices dignissim tristique. Integer iaculis varius lorem, vitae
              mollis massa dapibus eget. Nullam eget vestibulum sem. Proin
              consectetur ullamcorper eleifend.
            </p>
          </div>

          <div className={styles.container}>
            <h3>Zgranie</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              ultrices dignissim tristique. Integer iaculis varius lorem, vitae
              mollis massa dapibus eget. Nullam eget vestibulum sem. Proin
              consectetur ullamcorper eleifend.
            </p>
          </div>

          <div className={styles.container}>
            <h3>Inwidualne podejście</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              ultrices dignissim tristique. Integer iaculis varius lorem, vitae
              mollis massa dapibus eget. Nullam eget vestibulum sem. Proin
              consectetur ullamcorper eleifend.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Main;

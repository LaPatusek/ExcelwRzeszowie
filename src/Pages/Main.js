import { motion } from 'framer-motion';
import { ArrowRight } from 'iconsax-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import hello from '../Assets/hand-right-outline.svg';
import szkolenie from '../Assets/szkolenie.jpg';
import styles from './Main.module.css';

const Main = () => {
  const [animate, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(true);
  }, []);

  return (
    <div className={styles.main}>
      <div className={`${styles.title} grid`}>
        <div className={styles['blur-circle-shape']} />
        <div className={styles['heading-container']}>
          <motion.h1
            initial={{ opacity: 0, translateY: -200 }}
            animate={animate ? { opacity: 1, translateY: 0 } : ''}
            transition={{ duration: .7 }}
          >
            Szkolenia <br /> Excel <br /> w Rzeszowie
          </motion.h1>
        </div>

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
            <h3>Szkolenie podstawowe</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              ultrices dignissim tristique. Integer iaculis varius lorem, vitae
              mollis massa dapibus eget. Nullam eget vestibulum sem. Proin
              consectetur ullamcorper eleifend.
            </p>
          </div>

          <div className={styles.container}>
            <h3>Szkolenie <br/> średniozaawansowane</h3>
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

        <img src={szkolenie} alt='' width='100%' />
      </section>
    </div>
  );
};

export default Main;

import { motion } from 'framer-motion';
import { ArrowRight } from 'iconsax-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import hello from '../../Assets/hand-right-outline.svg';
import excel from '../../Assets/table.webp';
import styles from './Header.module.css';

const Header = () => {
  const [animate, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(true);
  }, []);

  return (
    <div className={`${styles.title} grid`}>
      <div className={styles['blur-circle-shape']} />
      <div className={styles['heading-container']}>
        <motion.h1
          initial={{ opacity: 0, translateY: -200 }}
          animate={animate ? { opacity: 1, translateY: 0 } : ''}
          transition={{ duration: 0.7 }}
        >
          Szkolenia <br /> Excel <br /> w Rzeszowie
        </motion.h1>
      </div>

      <div className={`${styles['about-us']} grid`}>
        <img src={excel} alt='Excel' width='300px' className={styles.excel}/>
        <div className={styles['about-us-container']}>
          <img src={hello} alt='' height='64px' width='64px' />
          <h2>
            <span> Witaj!</span> <br />
            Jesteśmy firmą działającą na rynku szkoleń od 2018 roku. Mamy bogate
            doświadczenie w nauczaniu. Posiadamy wpis do Rejestru Instytucji
            Szkoleniowych. Naszym sukcesem są zadowoleni kursanci.
          </h2>
          <Link to='/o-nas'>
            <ArrowRight size='26' variant='Broken' /> Poznaj nas lepiej{' '}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

import hello from '../Assets/hand-right-outline.svg';
import styles from './Main.module.css';

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={`${styles.title} grid`}>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

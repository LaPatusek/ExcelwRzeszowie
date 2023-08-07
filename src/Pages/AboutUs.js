import { Fragment, useRef } from 'react';
import businessman from '../Assets/businessman.webp';
import useObserver from '../Components/hooks/useObserver';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  const expRef = useRef();
  const isVisible = useObserver(expRef);

  return (
    <Fragment>
      <div className={styles['about-us']}>
        <div className={styles.title}>
          <span>O nas</span>
          <h1>
            Poznaj nas lepiej <br /> i zobacz jak działamy
          </h1>
        </div>

        <div className={`${styles['opis-wrap']} grid`}>
          <div className={`${styles.opis}`}>
            <h2>Doświadczenie, Jakość i Satysfakcja Kursantów od 2018 roku</h2>
            <p>
              Od momentu naszego powstania w 2018 roku, zdobyliśmy bogate
              doświadczenie w dziedzinie szkoleń, co pozwoliło nam wypracować
              skuteczne metody nauczania. Nasze długoletnie zaangażowanie w
              edukację przyniosło nam również cenny wpis do Rejestru Instytucji
              Szkoleniowych, co potwierdza naszą wiarygodność i wysoki standard
              usług. <br /> <br />
              Naszym największym osiągnięciem są zadowoleni kursanci, których
              rosnąca liczba potwierdza, że nasze szkolenia nie tylko
              dostarczają wartościowej wiedzy, ale także przekładają się na
              praktyczne umiejętności, przyczyniające się do sukcesu i rozwoju
              zawodowego każdego uczestnika.
            </p>
          </div>

          <div className={styles['image-wrap']}>
            <img src={businessman} alt='businessman' />
          </div>
        </div>
      </div>
      <div className={styles['expierience-wrap']}>
        <div className={`${styles.expierience} grid`} ref={expRef}>
          <div
            className={`${styles.container} ${isVisible ? styles.active : ''} ${
              styles['border-del']
            }`}
          >
            <div className={styles['first-count']} />
            <p>Lat doświadczenia</p>
          </div>
          <div
            className={`${styles.container} ${isVisible ? styles.active : ''}`}
          >
            <div className={styles['second-count']} />
            <p>Odbytych szkoleń</p>
          </div>
          <div
            className={`${styles.container} ${isVisible ? styles.active : ''}`}
          >
            <div className={styles['third-count']} />
            <p>Zadowolonych klientów</p>
          </div>
        </div>
      </div>
      <div className={styles['design-wrap']}>
        <div className={styles.heading}>
          <h3>Nasza współpraca krok po kroku</h3>
        </div>
        <section className={styles['design-section']}>
          <div className={`${styles.timeline} grid`}>
            <div className={styles['timeline-empty']} />

            <div className={styles['timeline-middle']}>
              <div className={styles['timeline-circle']} />
            </div>
            <div
              className={`${styles['timeline-component']} ${styles['timeline-content']}`}
            >
              <div className={styles.number}>
                <span> 01</span>
              </div>
              <div>
                <h3>Przygotowanie</h3>
                <p>
                  Przygotowujemy materiały i organizujemy pracę w sposób
                  staranny i efektywny, aby zapewnić płynny przebieg szkolenia
                </p>
              </div>
            </div>
            <div
              className={`${styles['timeline-component']} ${styles['timeline-content']} ${styles['right']}`}
            >
              <div>
                <h3>Szkolenie</h3>
                <p>
                  Zapewniamy uczestnikom wiedzę oraz materiały potrzebne do
                  nauki, które są kluczowe dla skutecznego przyswajania nowych
                  treści
                </p>
              </div>
              <div className={styles.number}>
                <span> 02</span>
              </div>
            </div>
            <div className={styles['timeline-middle']}>
              <div
                className={`${styles['timeline-circle']} ${styles['timeline-circle-800']} ${styles['second-circle-800']}`}
              />
            </div>
            <div className={styles['timeline-empty']} />

            <div className={styles['timeline-empty']} />

            <div className={styles['timeline-middle']}>
              <div className={styles['timeline-circle']} />
            </div>
            <div
              className={`${styles['timeline-component']} ${styles['timeline-content']}`}
            >
              <div className={styles.number}>
                <span> 03</span>
              </div>
              <div>
                <h3>Egzamin końcowy</h3>
                <p>
                  Egzamin, który jest integralną częścią naszych szkoleń, ma na
                  celu skrupulatne sprawdzenie i potwierdzenie nabytej wiedzy
                  oraz umiejętności, które uczestnicy zdobyli podczas szkolenia.
                </p>
              </div>
            </div>
            <div
              className={`${styles['timeline-component']} ${styles['timeline-content']} ${styles['right']}`}
            >
              <div>
                <h3>Certyfikat ukończenia</h3>
                <p>
                  Po zakończeniu szkolenia oraz po zdaniu egzaminu końcowego,
                  każdy uczestnik otrzymuje od nas certyfikat potwierdzający
                  ukończenie kursu. Ten oficjalny dokument stanowi dowód na
                  zdobycie nowych umiejętności.
                </p>
              </div>
              <div className={styles.number}>
                <span> 04</span>
              </div>
            </div>
            <div
              className={`${styles['timeline-middle']} ${styles['last-child']}`}
            >
              <div
                className={`${styles['timeline-circle']} ${styles['timeline-circle-800']} ${styles['forth-circle-800']}`}
              />
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default AboutUs;

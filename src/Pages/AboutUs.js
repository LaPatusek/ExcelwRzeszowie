import { Fragment, useRef } from 'react';
import businessman from '../Assets/businessman.jpeg';
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
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id
              neque quis mi tincidunt ultrices. Nullam vitae erat consequat,
              eleifend justo vel, posuere sapien.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id
              neque quis mi tincidunt ultrices. Nullam vitae erat consequat,
              eleifend justo vel, posuere sapien. Vestibulum egestas libero non
              ligula ultrices, at hendrerit erat viverra. Cras aliquam sagittis
              augue, non rutrum diam faucibus nec. Etiam tempor non orci sed
              dignissim. <br /> <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id
              neque quis mi tincidunt ultrices. Nullam vitae erat consequat,
              eleifend justo vel, posuere sapien.
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
                <h3>Krok</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse quis sem id libero cursus dictum.
                </p>
              </div>
            </div>
            <div
              className={`${styles['timeline-component']} ${styles['timeline-content']} ${styles['right']}`}
            >
              <div>
                <h3>Krok</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse quis sem id libero cursus dictum.
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
                <h3>Krok</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse quis sem id libero cursus dictum.
                </p>
              </div>
            </div>
            <div
              className={`${styles['timeline-component']} ${styles['timeline-content']} ${styles['right']}`}
            >
              <div>
                <h3>Krok</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse quis sem id libero cursus dictum.
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

import businessman from '../Assets/businessman.jpeg';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
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
  );
};

export default AboutUs;

import { Helmet } from 'react-helmet';
import styles from './Online.module.css';

const Online = () => {
  return (
    <div className={styles['online']}>
      <Helmet>
        <link
          rel='canonical'
          href='https://www.excelrzeszow.pl/#/kurs-online'
        />
      </Helmet>
      <h1>
        Już <br /> wkrótce
      </h1>
    </div>
  );
};

export default Online;

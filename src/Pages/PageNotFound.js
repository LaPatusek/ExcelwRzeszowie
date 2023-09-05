import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';
import { Helmet } from 'react-helmet';
import { Link, useHistory } from 'react-router-dom';
import styles from './PageNotFound.module.css';

const PageNotFound = () => {
  const history = useHistory();

  const navigationFunction = () => {
    history.goBack();
  };
  return (
    <div className={styles.wrap}>
      <Helmet>
        <link rel='canonical' href='https://www.excelrzeszow.pl/' />
      </Helmet>
      <h1>Excel w Rzeszowie</h1>
      <h2>
        Strony nie znaleziono (<span>404</span>)
      </h2>
      <div className={styles.buttons}>
        <div className={styles.link}>
          <button onClick={navigationFunction}>
            <ArrowLeft2 size='20px' /> Powrót
          </button>
        </div>
        <div className={styles.link}>
          <Link to='/main'>
            Strona główna <ArrowRight2 size='20px' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;

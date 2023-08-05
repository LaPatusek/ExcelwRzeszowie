import { Crown, Global, Profile, TickCircle } from 'iconsax-react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import expIcon from '../Assets/exp.png';
import szkolenie from '../Assets/szkolenie.webp';
import Header from '../Components/Header/Header';
import styles from './Main.module.css';

const Main = () => {
  return (
    <div className={styles.main}>
      <Header />
      <section className={`${styles.oferta} grid`}>
        <div className={`${styles['offer-heading']} grid`}>
          <div className={styles['left-header']}>
            <span>Dlaczego my?</span>
            <h2>Dlaczego Excel w Rzeszowie?</h2>
          </div>
          <p>
            Nasza firma wyróżnia się indywidualnym podejściem do uczestników,
            zarówno w szkoleniach stacjonarnych, jak i online, co pozwala na
            dostosowanie programu do konkretnych potrzeb i poziomu zaawansowania
            każdej osoby
          </p>
        </div>
        <div className={`${styles['offer-boxes']} grid`}>
          <div className={styles.container}>
            <img src={expIcon} width='52px' height='52px' alt='' />
            <div className={styles['container-text']}>
              <h3>
                Bogate <br /> doświadczenie
              </h3>
              <p>
                Nasze wieloletnie doświadczenie w nauczaniu pozwala nam
                dostarczać wysokiej jakości i innowacyjne programy szkoleniowe,
                które skutecznie przekształcają wiedzę w praktyczne
                umiejętności, przyczyniając się do rozwoju kariery i biznesu
                naszych klientów.
              </p>
            </div>
          </div>

          <div className={styles.container}>
            <Global size='32' />
            <div className={styles['container-text']}>
              <h3>
                Jesteśmy <br /> mobilni
              </h3>
              <p>
                Nasza firma prowadzi zajęcia na terenie Rzeszowa oraz całego
                kraju. Nasi wyszkoleni trenerzy są gotowi do podróży i przybędą
                wskazanym miejscu, aby dostarczyć wysokiej jakości szkolenie,
                dostosowane do Twoich potrzeb i wymagań.
              </p>
            </div>
          </div>

          <div className={styles.container}>
            <Profile size='32' />
            <div className={styles['container-text']}>
              <h3>
                Dopasujemy się <br /> do poziomu
              </h3>
              <p>
                Rozumiemy, że każdy uczestnik szkolenia może mieć unikalne
                potrzeby i oczekiwania co do procesu nauki. Nasze podejście jest
                elastyczne i uwzględnia te zróżnicowane wymagania, aby każdy
                uczestnik mógł otrzymać wartościowe i indywidualnie dopasowane
                do siebie szkolenie.
              </p>
            </div>
          </div>

          <div className={styles.container}>
            <Crown size='32' />
            <div className={styles['container-text']}>
              <h3>
                Spełnimy <br /> Twoje oczekiwania
              </h3>
              <p>
                Specjalizujemy się w opracowywaniu i dostosowywaniu szkoleń, aby
                jak najlepiej odpowiadały Twoim potrzebom. Nasza elastyczność i
                zaangażowanie pozwalają nam tworzyć spersonalizowane programy
                szkoleniowe, które przynoszą realne korzyści i wzmacniają rozwój
                Twojej firmy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles['second-section']}>
        <div className={styles['section-heading']}>
          <span>Oferta Excel w Rzeszowie</span>
          <h2>Oferujemy szkolenia stacjonarne i zdalne</h2>
        </div>

        <div className={`${styles.szkolenia} grid`}>
          <div className={`${styles.stacjonarne} grid`}>
            <h3>Szkolenia stacjonarne</h3>
            <h4>
              Nasze profesjonalne szkolenia prowadzone są przez doświadczonych
              ekspertów, którzy w przystępny sposób przekazują praktyczną
              wiedzę. Nasi uczestnicy mają szansę na indywidualne wsparcie i
              skupienie na własnych celach, co pozwala im skutecznie wykorzystać
              potencjał tego popularnego narzędzia w pracy i życiu zawodowym.
            </h4>
            <ol>
              <li>
                <TickCircle size='22' color='#39c685' variant='Bulk' />{' '}
                Indywidualne podejście
              </li>
              <li>
                <TickCircle size='22' color='#39c685' variant='Bulk' />{' '}
                Elastyczne godziny szkoleń
              </li>
              <li>
                <TickCircle size='22' color='#39c685' variant='Bulk' /> Egzamin
                końcowy
              </li>
              <li>
                <TickCircle size='22' color='#39c685' variant='Bulk' />{' '}
                Certyfikat ukończenia
              </li>
            </ol>
            <Link to='/wycena-szkolenia'>Dowiedz się więcej</Link>
          </div>
          <img src={szkolenie} alt='' width='400px' height='400px' />
          <img
            src={szkolenie}
            alt=''
            width='400px'
            height='400px'
            className={styles['second-image']}
          />
          <div className={`${styles.zdalne} grid`}>
            <h3>Szkolenia online</h3>
            <h4>
              Dzięki naszym interaktywnym platformom szkoleniowym, uczestnicy
              mają dostęp do bogatej bazy materiałów edukacyjnych, wideo lekcji
              oraz praktycznych ćwiczeń, które pozwalają na naukę w dogodnym dla
              nich tempie. Nasze szkolenia online zapewniają elastyczność,
              umożliwiając dostęp do treści szkoleniowych z dowolnego miejsca i
              urządzenia, co znacznie ułatwia proces nauki i pozwala na
              efektywne wykorzystanie potencjału programu Excel w codziennej
              pracy.
            </h4>
            <ol>
              <li>
                <TickCircle size='22' color='#39c685' variant='Bulk' /> 20
                godzin treści wideo na życzenie
              </li>
              <li>
                <TickCircle size='22' color='#39c685' variant='Bulk' /> 15
                ćwiczeń z Microsoft Excel
              </li>
              <li>
                <TickCircle size='22' color='#39c685' variant='Bulk' />{' '}
                Dożywotni dostęp
              </li>
              <li>
                <TickCircle size='22' color='#39c685' variant='Bulk' />{' '}
                Certyfikat ukończenia
              </li>
            </ol>
            <Link to='/kurs-online'>Dowiedz się więcej</Link>
          </div>
        </div>
      </section>

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

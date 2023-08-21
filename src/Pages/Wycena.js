import emailjs from '@emailjs/browser';
import { Call, TickSquare } from 'iconsax-react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import useInput from '../Components/hooks/useInput';
import styles from './Wycena.module.css';

const Wycena = () => {
  const [formIsSent, setFormIsSent] = useState(false);
  const [checkState, setCheckState] = useState(false);
  const [checkIsTouched, setCheckIsTouched] = useState(false);

  const [cateringState, setCateringState] = useState(false);
  const [egzaminState, setEgzaminState] = useState(false);
  const [salaState, setSalaState] = useState(false);
  const [materialsState, setMaterialsState] = useState(false);

  const wycenaRef = useRef();

  const checkFunction = () => {
    setCheckState(!checkState);
    setCheckIsTouched(false);
  };

  const materialsFunction = () => {
    setMaterialsState(!materialsState);
  };

  const SalaFunction = () => {
    setSalaState(!salaState);
  };

  const egzaminFunction = () => {
    setEgzaminState(!egzaminState);
  };

  const cateringFunction = () => {
    setCateringState(!cateringState);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!checkState) {
      setCheckIsTouched(true);
    }

    if (!formIsValid) {
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_SMTP_ID,
        process.env.REACT_APP_TEMPLATE_WYCENA,
        wycenaRef.current,
        process.env.REACT_APP_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );

    setFormIsSent(true);
    setCheckState(false);
    setCheckIsTouched(false);

    setSalaState(false);
    setCateringState(false);
    setEgzaminState(false);
    setMaterialsState(false);

    hourReset();
    nameReset();
    topicReset();
    mailReset();
    messageReset();
  };

  let formIsValid = false;

  const {
    value: enteredName,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    hasError: nameHasError,
    reset: nameReset,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredTopic,
    isValid: topicIsValid,
    valueChangeHandler: topicChangeHandler,
    inputBlurHandler: topicBlurHandler,
    hasError: topicHasError,
    reset: topicReset,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredMail,
    isValid: mailIsValid,
    valueChangeHandler: mailChangeHandler,
    inputBlurHandler: mailBlurHandler,
    hasError: mailHasError,
    reset: mailReset,
  } = useInput((value) => value.trim().includes('@'));

  const {
    value: enteredHours,
    isValid: hourIsValid,
    valueChangeHandler: hourChangeHandler,
    inputBlurHandler: hourBlurHandler,
    hasError: hourHasError,
    reset: hourReset,
  } = useInput((value) => value.trim() > 0);

  const {
    value: enteredMessage,
    isValid: messageIsValid,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    hasError: messageHasError,
    reset: messageReset,
  } = useInput((value) => value.trim() !== '');

  if (
    messageIsValid &&
    topicIsValid &&
    nameIsValid &&
    mailIsValid &&
    hourIsValid &&
    checkState
  ) {
    formIsValid = true;
  }

  return (
    <section className={`${styles['kontakt-section']} grid`}>
      <div className={`${styles['left-section']} grid`}>
        <span>
          Wyceń <br /> szkolenie
        </span>
        <h2>
          Skontaktuj się <br /> i spytaj o wycenę!
        </h2>
        <h3>
          W ciągu 48 godzin od przesłania formularza nasz zespół przygotuje dla
          Ciebie szczegółową wycenę szkolenia, uwzględniając Twoje wymagania i
          oczekiwania. Z naszej strony zapewniamy pełne zaangażowanie i
          profesjonalizm, abyś mógł podjąć dobrze poinformowaną decyzję
          dotyczącą szkolenia, które najlepiej spełni Twoje cele i potrzeby
          rozwojowe.
        </h3>
        <div className={styles['left-contact']}>
          <div className={styles.container}>
            <div className={styles['icon-container']}>
              <Call size='32' color='white' variant='Bold' />{' '}
            </div>
            <a href='tel:+48531771944'>+48 531 771 944</a>
          </div>

          <div className={styles.container}>
            <div className={styles['icon-container']}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                fill='white'
                viewBox='0 0 512 512'
              >
                <path d='M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z' />
              </svg>
            </div>
            <a href='mailto:eryktrojanowski@gmail.com'>
              eryktrojanowski@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className={styles['right-section']}>
        <h4>Wyślij zapytanie o cenę szkolenia</h4>
        <form onSubmit={submitHandler} ref={wycenaRef}>
          <div
            className={`${styles.group} ${nameHasError ? styles.error : ''}`}
          >
            <input
              required='Imie i nazwisko'
              type='text'
              id='name'
              name='user_name'
              autoComplete='false'
              value={enteredName}
              className={styles.input}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            <span className={styles.bar}></span>
            <label htmlFor='name'>Imie i nazwisko </label>
            {nameHasError && <p>Wprowadź imie i nazwisko!</p>}
          </div>

          <div
            className={`${styles.group} ${topicHasError ? styles.error : ''}`}
          >
            <input
              required='Temat'
              id='topic'
              name='user_topic'
              type='text'
              autoComplete='false'
              value={enteredTopic}
              className={styles.input}
              onChange={topicChangeHandler}
              onBlur={topicBlurHandler}
            />
            <span className={styles.bar}></span>
            <label htmlFor='topic'>Temat</label>
            {topicHasError && <p>Wprowadź temat!</p>}
          </div>

          <div
            className={`${styles.group} ${mailHasError ? styles.error : ''}`}
          >
            <input
              required='Adres email'
              id='mail'
              name='user_email'
              value={enteredMail}
              type='text'
              autoComplete='false'
              className={styles.input}
              onChange={mailChangeHandler}
              onBlur={mailBlurHandler}
            />
            <span className={styles.bar}></span>
            <label htmlFor='mail'>Adres email </label>
            {mailHasError && <p>Wprowadź prawidłowy mail!</p>}
          </div>

          <div
            className={`${styles.group} ${topicHasError ? styles.error : ''}`}
          >
            <input
              required='Ilość godzin'
              id='hour'
              type='number'
              name='user_godziny'
              autoComplete='false'
              value={enteredHours}
              className={styles.input}
              onChange={hourChangeHandler}
              onBlur={hourBlurHandler}
            />
            <span className={styles.bar}></span>
            <label htmlFor='hour'>Ilość godzin (45 min)</label>
            {hourHasError && <p>Wprowadź ilość godzin!</p>}
          </div>

          <div
            className={`${styles.group} ${messageHasError ? styles.error : ''}`}
          >
            <textarea
              required='Twoja wiadomość'
              id='message'
              name='message'
              value={enteredMessage}
              autoComplete='false'
              className={styles.input}
              rows='6'
              onChange={messageChangeHandler}
              onBlur={messageBlurHandler}
            />
            <span className={styles.bar}></span>
            <label htmlFor='message'>Twoja wiadomość</label>
            {messageHasError && <p>Wprowadź wiadomość!</p>}
          </div>

          <div className={styles['options']}>
            <h5>Opcje dodatkowe:</h5>
            <div className={styles['checkbox-container']}>
              <label htmlFor='catering' className={`${styles.check} flex`}>
                <input
                  type='checkbox'
                  id='catering'
                  name='catering'
                  checked={cateringState}
                  onChange={cateringFunction}
                />
                <svg viewBox='0 0 64 64' height='26px' width='26px'>
                  <path
                    d='M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16'
                    pathLength='575.0541381835938'
                    className={styles.path}
                  ></path>
                </svg>
                <p>Catering</p>
              </label>
            </div>

            <div className={styles['checkbox-container']}>
              <label htmlFor='egzamin' className={`${styles.check} flex`}>
                <input
                  type='checkbox'
                  id='egzamin'
                  name='egzamin'
                  checked={egzaminState}
                  onChange={egzaminFunction}
                />
                <svg viewBox='0 0 64 64' height='26px' width='26px'>
                  <path
                    d='M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16'
                    pathLength='575.0541381835938'
                    className={styles.path}
                  ></path>
                </svg>
                <p>Egzamin</p>
              </label>
            </div>

            <div className={styles['checkbox-container']}>
              <label htmlFor='sala' className={`${styles.check} flex`}>
                <input
                  type='checkbox'
                  id='sala'
                  name='sala'
                  checked={salaState}
                  onChange={SalaFunction}
                />
                <svg viewBox='0 0 64 64' height='26px' width='26px'>
                  <path
                    d='M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16'
                    pathLength='575.0541381835938'
                    className={styles.path}
                  ></path>
                </svg>
                <p>Sala szkoleniowa</p>
              </label>
            </div>

            <div className={styles['checkbox-container']}>
              <label htmlFor='materialy' className={`${styles.check} flex`}>
                <input
                  type='checkbox'
                  id='materialy'
                  name='materials'
                  checked={materialsState}
                  onChange={materialsFunction}
                />
                <svg viewBox='0 0 64 64' height='26px' width='26px'>
                  <path
                    d='M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16'
                    pathLength='575.0541381835938'
                    className={styles.path}
                  ></path>
                </svg>
                <p>Materiały</p>
              </label>
            </div>
          </div>

          <div className={styles['checkbox-container']}>
            <label
              htmlFor='check'
              className={`${styles.check} ${
                checkIsTouched ? styles['checkbox-error'] : ''
              } flex`}
            >
              <input
                type='checkbox'
                id='check'
                onChange={checkFunction}
                checked={checkState}
              />
              <svg viewBox='0 0 64 64' height='26px' width='26px'>
                <path
                  d='M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16'
                  pathLength='575.0541381835938'
                  className={styles.path}
                ></path>
              </svg>
              <p>
                Wyrażam zgodę na gromadzenie i przetwarzanie moich danych przez
                Excel w Rzeszowie, szczegóły można znaleźć w naszej{' '}
                <Link to='/polityka-prywatnosci'>Polityce prywatności.</Link>
              </p>
            </label>
          </div>

          <div className={styles.buttons}>
            <button className={styles.btn}>Wyślij</button>
          </div>
          {formIsSent && (
            <div className={styles['mess-after-form']}>
              <TickSquare variant='Bold' size='32' />
              <p>Dziękujemy za zaufanie!</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Wycena;

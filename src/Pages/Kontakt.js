import { Call, Facebook, Instagram, TickSquare } from 'iconsax-react';
import { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import useInput from '../Components/hooks/useInput';
import styles from './Kontakt.module.css';

const Kontakt = () => {
  const [formIsSent, setFormIsSent] = useState(false);
  const [checkState, setCheckState] = useState(false);
  const [checkIsTouched, setCheckIsTouched] = useState(false);

  const checkFunction = () => {
    setCheckState(!checkState);
    setCheckIsTouched(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!checkState) {
      setCheckIsTouched(true);
    }

    if (!formIsValid) {
      return;
    }

    setFormIsSent(true);
    setCheckState(false);
    setCheckIsTouched(false);
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
    checkState
  ) {
    formIsValid = true;
  }

  return (
    <section className={`${styles['kontakt-section']} grid`}>
      <div className={`${styles['left-section']} grid`}>
        <span>Kontakt</span>
        <h2>Skontaktuj się z nami!</h2>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mi dui,
          consectetur at sapien ac, accumsan iaculis felis. Sed at tincidunt
          nulla. Nunc eu bibendum nunc, et gravida eros.
        </h3>
        <div className={styles['left-contact']}>
          <div className={styles.container}>
            <div className={styles['icon-container']}>
              <Call size='32' color='white' variant='Bold' />{' '}
            </div>
            <a href='+48000000000'>+48 000 000 000</a>
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
            <a href='mailto:mailkontaktowy@gmail.com'>
              mailkontaktowy@gmail.com
            </a>
          </div>
        </div>

        <div className={`${styles['left-socials']} grid`}>
          <a href='asd' aria-label='Facebook' target='_blank'>
            <Facebook
              size='34'
              color='white'
              variant='Bold'
              className={styles.facebook}
            />
          </a>

          <a href='asd' aria-label='Instagram' target='_blank'>
            <Instagram
              size='34'
              color='white'
              variant='Bold'
              className={styles.instagram}
            />
          </a>

          <a href='asd' aria-label='Twitter' target='_blank'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='34px'
              height='34px'
              viewBox='0 0 512 512'
              fill='white'
              className={styles.twitter}
            >
              <path d='M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z' />
            </svg>
          </a>

          <a href='asd' aria-label='Linkedin' target='_blank'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='34px'
              height='34px'
              viewBox='0 0 512 512'
              fill='white'
              className={styles.linkedin}
            >
              <path d='M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z' />
            </svg>
          </a>
        </div>
      </div>
      <div className={styles['right-section']}>
        <h4>Formularz kontaktowy</h4>
        <form onSubmit={submitHandler}>
          <div
            className={`${styles.group} ${nameHasError ? styles.error : ''}`}
          >
            <input
              required='Imie i nazwisko'
              type='text'
              id='name'
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
            className={`${styles.group} ${messageHasError ? styles.error : ''}`}
          >
            <textarea
              required='Twoja wiadomość'
              id='message'
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
              <p>Dziękujemy za kontakt!</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Kontakt;

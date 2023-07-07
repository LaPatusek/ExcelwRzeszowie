import { TickSquare } from 'iconsax-react';
import { useState } from 'react';
import useInput from '../Components/hooks/useInput';
import styles from './Kontakt.module.css';

const Kontakt = () => {
  const [formIsSent, setFormIsSent] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    setFormIsSent(true);
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

  if (messageIsValid && topicIsValid && nameIsValid && mailIsValid) {
    formIsValid = true;
  }

  const resetHandler = (e) => {
    e.preventDefault();

    nameReset();
    topicReset();
    mailReset();
    messageReset();
  };

  return (
    <div className={styles.kontakt}>
      <section className={styles['kontakt-info']}>
        <h1> Kontakt</h1>
      </section>

      <section className={`${styles['kontakt-section']} grid`}>
        <div className={styles['left-section']}>
          <h2>Skontaktuj się z nami!</h2>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mi
            dui, consectetur at sapien ac, accumsan iaculis felis. Sed at
            tincidunt nulla. Nunc eu bibendum nunc, et gravida eros.
          </h3>
        </div>
        <div className={styles['right-section']}>
          <h4>Formularz kontaktowy</h4>
          <form onSubmit={submitHandler}>
            <div className={styles.group}>
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
              {nameHasError && <p>Wprowadź imie i nazwisko</p>}
            </div>

            <div className={styles.group}>
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
              {topicHasError && <p>Wprowadź temat</p>}
            </div>

            <div className={styles.group}>
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
              {mailHasError && <p>Wprowadź prawidłowy mail</p>}
            </div>

            <div className={styles.group}>
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
              {messageHasError && <p>Wprowadź wiadomość</p>}
            </div>

            <div className={styles.buttons}>
              <div className={styles['button-wrap']}>
                <button onClick={resetHandler} className={styles.btn}>
                  Reset
                </button>
              </div>
              <div className={styles['button-wrap']}>
                <button className={styles.btn}>Wyślij</button>
              </div>
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
    </div>
  );
};

export default Kontakt;

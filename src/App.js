import { Fragment, useEffect } from 'react';
import ReactGA from 'react-ga4';
import {
  Route,
  Switch,
  useLocation,
} from 'react-router-dom/cjs/react-router-dom.min';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import Cookies from './Components/Privacy/Cookies';
import Privacy from './Components/Privacy/Privacy';
import AboutUs from './Pages/AboutUs';
import Kontakt from './Pages/Kontakt';
import Main from './Pages/Main';
import PageNotFound from './Pages/PageNotFound';
import Wycena from './Pages/Wycena';

const TRACKING_ID = process.env.REACT_APP_TRACKING_ID;

ReactGA.initialize(TRACKING_ID);

function App() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  ReactGA.send({
    hitType: 'pageview',
    page: window.location.hash,
    title: window.location.hash,
  });

  return (
    <Fragment>
      <header>
        <Nav />
      </header>

      <main>
        <Switch>
          <Route path='/main'>
            <Main />
          </Route>
          <Route path='/o-nas'>
            <AboutUs />
          </Route>
          <Route path='/wycena-szkolenie'>
            <Wycena />
          </Route>
          <Route path='/kontakt'>
            <Kontakt />
          </Route>

          <Route path='/polityka-prywatnosci'>
            <Privacy />
          </Route>

          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>
      </main>

      <footer>
        <Footer />
      </footer>

      <Cookies />
    </Fragment>
  );
}

export default App;

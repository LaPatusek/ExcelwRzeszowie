import { Analytics } from '@vercel/analytics/react';
import { Fragment, useEffect } from 'react';
import {
  Route,
  Switch,
  useLocation,
} from 'react-router-dom/cjs/react-router-dom.min';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import Privacy from './Components/Privacy/Privacy';
import AboutUs from './Pages/AboutUs';
import Kontakt from './Pages/Kontakt';
import Main from './Pages/Main';
import Oferta from './Pages/Oferta';
import Online from './Pages/Online';
import Wycena from './Pages/Wycena';

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

  return (
    <Fragment>
      <Nav />

      <main>
        <Switch>
          <Route path='/main'>
            <Main />
          </Route>
          <Route path='/oferta'>
            <Oferta />
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
          <Route path='/kurs-online'>
            <Online />
          </Route>

          <Route path='/polityka-prywatnosci'>
            <Privacy />
          </Route>

          <Route path='/'>
            <Main />
          </Route>
          <Route path='*'>
            <Main />
          </Route>
        </Switch>
      </main>

      <Footer />
      <Analytics />
    </Fragment>
  );
}

export default App;

import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import AboutUs from './Pages/AboutUs';
import Kontakt from './Pages/Kontakt';
import Main from './Pages/Main';
import Oferta from './Pages/Oferta';

function App() {
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
          <Route path='/kontakt'>
            <Kontakt />
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
    </Fragment>
  );
}

export default App;

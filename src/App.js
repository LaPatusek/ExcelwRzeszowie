import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import Main from './Pages/Main';

function App() {
  return (
    <Fragment>
      <Nav />

      <main>
        <Switch>
          <Route path='/main'>
            <Main />
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

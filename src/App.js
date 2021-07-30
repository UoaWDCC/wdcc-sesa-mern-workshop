import React from 'react';
import './styling/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import AnotherPage from './pages/AnotherPage';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={IndexPage} />
          <Route exact path={'/another'} component={AnotherPage} />

          {/* Default path if nothing else matches */}
          <Route path={'/'} component={IndexPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

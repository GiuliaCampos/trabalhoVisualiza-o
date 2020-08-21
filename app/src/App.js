import React from 'react';
import {HashRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Icicle from './visualizacoes/zoomableIcicle/zoomableIcicle'

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/icicle" component={Icicle} />
      </Switch>
    </HashRouter>
  )
}

export default App;

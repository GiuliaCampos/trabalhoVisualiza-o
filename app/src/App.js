import React from 'react';
import {HashRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Icicle from './visualizacoes/zoomableIcicle/zoomableIcicle'
import WordCloud from './visualizacoes/wordCloud/wordCloud'

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/icicle" component={Icicle} />
        <Route path="/word-cloud" component={WordCloud} />
      </Switch>
    </HashRouter>
  )
}

export default App;

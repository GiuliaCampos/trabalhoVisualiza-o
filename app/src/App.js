import React from 'react';
import {HashRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Icicle from './visualizacoes/zoomableIcicle/zoomableIcicle'
import WordCloud from './visualizacoes/wordCloud/wordCloud'
import ParallelCoordinates from './visualizacoes/parallelCoordinates/parallelCoordinates'

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/icicle" component={Icicle} />
        <Route path="/word-cloud" component={WordCloud} />
        <Route path="/parallel-coordinates" component={ParallelCoordinates} />
      </Switch>
    </HashRouter>
  )
}

export default App;

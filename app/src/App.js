import React, {useEffect, useRef, useState} from 'react';
import {
  Typography,
  Grid
} from '@material-ui/core'
import './App.css';

import * as d3 from 'd3';
import {carregarDados} from './metodosBase'



function App() {
  const ref = useRef();
  const [matriculas, setMatriculas] = useState([]);

  useEffect(() => {
    async function loadData(){
      const aux = await carregarDados();
      setMatriculas(aux);
      console.log(matriculas);
    }
    loadData()
  }, []);


  return (
    <>
      <Grid container spacing={1} className="App-header">
        <Grid item xs={12}>
          <Typography variant="h3">A participação das mulheres na tecnologia</Typography>
          <svg viewBox="0 0 100 50" ref={ref}>
            {matriculas.map(p => (
              <circle cx={p.fem} cy={p.mas} r="3" key={p.ano} />
            ))}
          </svg>
        </Grid>
      </Grid> 
    </>
  )

}

export default App;

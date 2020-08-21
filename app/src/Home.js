import React, {useEffect, useRef, useState} from 'react';
import {
  Typography,
  Grid,
  Button
} from '@material-ui/core'
import './Home.css';
//import {carregarDados} from './metodosBase'
import * as d3 from 'd3';

function Home(props) {
  const [sbcData, setSbcData] = useState([]);

  useEffect(() => {
    async function loadData(){
      // const aux = await carregarDados();
      // setSbcData(aux);
    }
    loadData()
  }, []);


    return (
        <>
        <Grid  spacing={1} className="App-header">
            <Grid item xs={12}>
                <Typography variant="h3">A participação das mulheres na tecnologia</Typography>
                <Button variant="contained" color="secondary" onClick={() => {props.history.push("/icicle")}}>Matriculados e concluíntes</Button>
            </Grid>
        </Grid> 
        </>
    )

}

export default Home;

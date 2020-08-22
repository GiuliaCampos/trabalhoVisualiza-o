import React, {useEffect, useState} from 'react';
import {
  Typography,
  Grid
} from '@material-ui/core'
import {carregarDados} from '../../metodosBase'
import './wordCloud.css';
import ReactWordcloud from 'react-wordcloud';

function BarChart() {
  const [words, setWords] = useState([]);

    useEffect(() => {
        async function tagCloud(){
            const resultado = await carregarDados();

            let data = [];
            const aux = resultado;
            resultado.forEach((p) => {
                let valor = 0;
                aux.forEach(d => {
                    if(d == p) valor = valor + 1; //salvando o número de palavras
                });

                let add = 0;
                data.forEach(d => {
                    if(d.text == p) {add = 1;} //verificando se já esta no data
                })
                if(add == 0){ //senão estive add
                    data.push({
                        text: p,
                        value: +valor
                    });
                }
            })
            setWords(data)
        }
        tagCloud();
    }, []);

  return (
    <Grid container spacing={1} className="App-header">
        <Grid item xs={12}>
            <Typography variant="h4">As dificuldades, apontadas por elas</Typography>
            <ReactWordcloud words={words} />
        </Grid>
    </Grid>
  )

}

export default BarChart;

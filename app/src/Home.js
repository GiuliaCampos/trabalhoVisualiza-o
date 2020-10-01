import React, {useState} from 'react';
import {
  Typography,
  Grid,
  Button,
  Tab,
  Tabs
} from '@material-ui/core';
import './Home.css';
//import {carregarDados} from './metodosBase'

function Home(props) {
  const [value, setValue] = useState('');

  const handleChangeValue = (event, newValue) => {
    //Tab funciona como um array de opções, o valor do newValue é o valor da posição clicada
    setValue(newValue)
    if(newValue == 0){
      props.history.push("/icicle")
    }else if(newValue == 1){
      props.history.push("/word-cloud")
    }else if(newValue == 2){
      props.history.push("/parallel-coordinates")
    }
  }

    return (
        <>
        <Grid container className="App-header">
            <Grid item xs={12}>
              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChangeValue}
                className="nav"
              >
                <Tab label="Matriculados e concluíntes" className="option" />
                <Tab label="As dificuldades Apontadas" className="option" />
                <Tab label="Onde estão as mulheres" className="option" />
              </Tabs>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4" className="title">A participação das mulheres na tecnologia</Typography>
            </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={4}>
              <Typography variant="body1" className="body-text">
                No começo da história da computação, a participação feminina foi fundamental, sendo as primeiras programadoras, desenvolvendo novas linguagens de 
                programação e até mesmo no desenvolvimento de novas técnologias. Mas, nos dias atuais não é isso que vemos e presenciamos nos ambientes de TIC.
              </Typography>
            </Grid>
            <Grid item xs={8} className="img-ada">
              <img src={require('./img/Sticker-2.png')} />
            </Grid>
        </Grid> 
        </>
    )

}

export default Home;

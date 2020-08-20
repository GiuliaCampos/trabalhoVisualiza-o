import data from './csv/concluintesPorGeneroSBC.csv'
import * as d3 from 'd3';

export async function carregarDados(){
    let aux = []
      await d3.csv(data, function(data){
        aux.push(data)
      });
    return aux;
}
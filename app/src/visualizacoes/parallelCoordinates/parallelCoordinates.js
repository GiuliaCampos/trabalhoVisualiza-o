import React, {useEffect, useRef, useState} from "react"
import {
    Typography,
    Grid
} from '@material-ui/core'
import {carregarDados} from '../../metodosBase'
import './parallelCoordinates.css';
import * as d3 from 'd3';

function ParallelCoordinates(){
    const ref = useRef();
    //const [data, setData] = useState([]);

    useEffect(() => {
        async function drawVisualization(){
            const data = await carregarDados();
            console.log(data)
            //setData(await carregarDados());
            
            var margin = {top: 30, right: 50, bottom: 10, left: 50},
                width = 1200 - margin.left - margin.right,
                height = 1200 - margin.top - margin.bottom;

            var svg = d3.select(ref.current)
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            var color = d3.scaleOrdinal()
            .domain(["Ciência da Computação", "Engenharia da Computação", "Sistemas de Informação", "Licenciatura em Computação", "Outros", "Engenharia de Software"])
            .range(['#66006D','#AB1066','#DC4658', '#4444A3', '#FFBC4E', '#F9F871']);

            const dimensions = [ "mulheresMat", "mulheresConc", "homensMat", "homensConc"];

            let y = {};

            var maiorMulheresMat = d3.max(data, function(d){return d.mulheresMat});
            var menorMulheresMat = d3.min(data, function(d){return d.mulheresMat});
            var maiorMulheresConc = d3.max(data, function(d){return d.mulheresConc});
            var menorMulheresConc = d3.min(data, function(d){return d.mulheresConc});
            var maiorHomensMat = d3.max(data, function(d){return d.homensMat});
            var menorHomensMat = d3.min(data, function(d){return d.homensMat});
            var maiorHomensConc = d3.max(data, function(d){return d.homensConc});
            var menorHomensConc = d3.min(data, function(d){return d.homensConc});

            y["mulheresMat"] = d3.scaleLinear().domain([2000, 100000]).range([height, 0]).nice();
                
            y["mulheresConc"] = d3.scaleLinear().domain([2000, 100000]).range([height, 0]).nice();

            y["homensMat"] = d3.scaleLinear().domain([2000, 100000]).range([height, 0]).nice();

            y["homensConc"] = d3.scaleLinear().domain([2000, 100000]).range([height, 0]).nice();

            let x = d3.scalePoint().range([0, width]).domain(dimensions);


            function path(d) {
                return d3.line()(dimensions.map(function(p) { return [x(p), y[p](d[p])]; }));
            }

                svg
                .selectAll("myPath")
                .data(data)
                .enter()
                .append("path")
                    .attr("class", function (d) { return "line" + d.curso } ) // 2 class for each line: 'line' and the group name
                    .attr("d",  path)
                    .style("fill", "none" )
                    .style("stroke", function(d){ return( color(d.curso))} )
                    .style("stroke-width", 3)
                    .style("opacity", 1);

                svg.selectAll("myAxis")
                .data(dimensions).enter()
                .append("g")
                .attr("class", "axis")
                .attr("transform", function(d) { return "translate(" + x(d) + ")"; })
                .each(function(d) { d3.select(this).call(d3.axisLeft().ticks(5).scale(y[d])); })
                .append("text")
                .style("text-anchor", "middle")
                .attr("y", -9)
                .text(function(d) { return d; })
                .style("fill", "black");
            
        }
        drawVisualization();
    }, []);

    return(
    <Grid container spacing={1} className="App-header">
        <Grid item xs={12}>
            <Typography variant="h4">Onde estão as mulheres</Typography>
            <Typography variant="subtitle2">
                Roxo: Ciência da Computação, Rosa: Engenharia da Computação
                Vermelho: Sistemas de Informação, Azul: Licenciatura em Computação
                Laranja: Outros, Amarelo: Engenharia de Software
            </Typography>
            <svg style={{width: 1200, height: 1200}} ref={ref} />
        </Grid>
    </Grid>
    )
}

export default ParallelCoordinates;
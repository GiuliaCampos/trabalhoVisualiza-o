import concluintesGeneroCurso from './csv/concluintesPorGeneroECursoSBC.csv'
import concluintesGenero from './csv/concluintesPorGeneroSBC.csv'
import matriculadosGenero from './csv/matriculadosPorGenerpSBC.csv'
import cursosCriados from './csv/cursosCriadosSBC.csv'
import * as d3 from 'd3';

export async function carregarDados(){
    let data = [];

    let aux = [];
    await d3.csv(concluintesGenero, function(d){
        aux.push(d)
    });

    //console.log(aux);

    let aux2 = [];
    await d3.csv(matriculadosGenero, function(e){
        aux2.push(e);
    });

    //console.log(aux2)

    let id = 0;

    aux.forEach(a1 => {
        aux2.forEach(a2 => {
            if(a1.ano === a2.ano){
                data.push({
                    "name": +a1.ano,
                    "children": [{
                        "name": "matriculados",
                        "value": (+a2.fem)+ (+a1.mas),
                        "children": [{
                            "name": "concluintes",
                            "children": [
                                {"name": "Mulheres", "value": +a1.fem},
                                {"name": "Homens", "value": a1.mas},
                            ]
                        }]
                    }],
                })
            }
        })
    })

    // aux.forEach(a1 => {
    //     aux2.forEach(a2 => {
    //         //console.log(a1.Curso + " e " + a2.curso)
    //         if(a1.Curso === a2.curso){
    //             if(a1.ano === a2.ano){
    //                 data.push({
    //                     id: id,
    //                     ano: +a1.ano,
    //                     curso: a2.curso,
    //                     mulheres: +a1.fem,
    //                     homens: +a1.mas,
    //                     criados: +a2.num
    //                 });
    //                 id = id+1;
    //             }
    //         }
    //     });
    // });

    //console.log(data);
    return data;
}
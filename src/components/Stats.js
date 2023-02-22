import { Chart } from "react-google-charts";
import React from "react";

const options = {
    chart: {
      title: "Company Performance",
    },
    animation: {
      easing: "out",
      duration: 350,    
      startup: true,
    },
    vAxis: {
      viewWindow: {
        max: 0,
        min: 200,
      },
    },
    legend: { position: 'none' },
  };
  
  var constructPokeStats2 = function (stats) {
    let data = [['Element', 'level', { role: 'style' }]];
    stats.forEach(element => {
      let subData = [`${element.stat.name}`, element.base_stat, '#708090'];
      data.push(subData);
    });
    return data;
  }
  
  var constructPokeStats = function(stats){
    let data = [['Element', 'level', { role: 'style' }],
    ['HP',stats[0].base_stat,'red'],
    ['ATTACK',stats[1].base_stat,'orange'],
    ['DEFENSE',stats[2].base_stat,'blue'],
    ['SPECIAL\nATTACK',stats[3].base_stat,'gold'],
    ['SPECIAL\nDEFENSE',stats[4].base_stat,'green'],
    ['SPEED',stats[5].base_stat]
  ]
    return data;
    
  }
  
  function Stats(props) {
    return (
      <Chart
        chartType="ColumnChart"
        width="300px"
        height="300px"
        data={constructPokeStats2(props.pokeStats)}
        options={options}
        
      />
    );
  }
  export default Stats;
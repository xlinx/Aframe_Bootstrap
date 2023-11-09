import * as bootstrap from 'bootstrap';
import xlinx, {xprint} from "./utils/xlinx";
import {boxs} from "./ecs_components/boxs";
import Chart from 'chart.js/auto';

new boxs().init({sense:'a-scene',POI:[Math.random()*5,0,0]});

document.addEventListener("DOMContentLoaded", function(){

});
window.addEventListener("load", function(event) {
  const timer1000ms = setInterval(clock1000ms, 1000);
});

function clock1000ms() {
  new boxs().init({sense:'a-scene',POI:[Math.random()*5,0,0]});
}
function printOSVar(){
  document.querySelector('a-scene').setAttribute('code-that-does-this', '');
  document.querySelector('a-scene').setAttribute('hello-world', '');
  document.querySelector('a-scene').setAttribute('log', '');
}



const ctx = document.getElementById('myChart');

// const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [11, 19, 3, 5, 2, 3],
      borderWidth: 12
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
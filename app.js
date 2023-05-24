// import {FileAttachment} from 'd3-fetch';

// const data = FileAttachment('./test.csv').text();

// const rows = data.split('\n');
// const headers = rows[0].split(',');
// const result = [];

// for (let i = 1; i < rows.length; i++) {
//   const obj = {};
//   const currentRow = rows[i].split(',');

//   for (let j = 0; j < headers.length; j++) {
//     obj[headers[j]] = currentRow[j];
//   }

//   result.push(obj);
// }

// console.log(result);

let pathIn = '../../data/multiline_data/multiline_chart_Male.CSV'
sessionStorage.setItem('pathWorldMap', pathIn);

document.getElementById("increment-btn").addEventListener("click", function() {
  incrementValue();
});

document.getElementById("decrement-btn").addEventListener("click", function() {
  decrementValue();
});

function incrementValue() {
  var numericInput = document.getElementById("numeric-input");
  var currentValue = parseInt(numericInput.value);
  var maxValue = parseInt(numericInput.max);

  if (currentValue < maxValue) {
    numericInput.value = currentValue + 1;
  }
}

function decrementValue() {
  var numericInput = document.getElementById("numeric-input");
  var currentValue = parseInt(numericInput.value);
  var minValue = parseInt(numericInput.min);

  if (currentValue > minValue) {
    numericInput.value = currentValue - 1;
  }
}
let path = "";

function changeColor(buttonNumber) {
  var buttons = document.getElementsByClassName("button");
  
  // Remove 'active' class from all buttons
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  
  // Add 'active' class to the clicked button
  buttons[buttonNumber - 1].classList.add("active");


  var buttonsA = document.getElementsByClassName("button active");
  console.log();
  path = "../../data/multiline_data/multiline_chart_" + buttonsA[0].value + ".CSV";

  console.log(path)

  sessionStorage.setItem('pathWorldMap', path);

}

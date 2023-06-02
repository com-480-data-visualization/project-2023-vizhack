let sex = "button-"+ sessionStorage.getItem("multilineSex");
document.getElementById(sex).classList.add('focused-button');


function deleteDivs(){
  var divs = document.querySelectorAll('.observablehq');

  // Iterate over the selected div elements
  for (var i = 0; i < divs.length; i++) {
    var div = divs[i];
    
    // Check if the div contains a span element
    if (div.querySelector('span')) {
      // Remove the div element
      div.remove();
      console.log('remove');
    }
  } 
}
setTimeout(deleteDivs, 100);

document.getElementById("button-Male").addEventListener("click", handleClick);
document.getElementById("button-Female").addEventListener("click", handleClick);
document.getElementById("button-Both").addEventListener("click", handleClick);

function handleClick(event) {
  var buttonValue = event.target.value;  

  if(event.target.id == 'button-Male'){
    event.target.classList.add('focused-button');
    document.getElementById("button-Female").classList.remove('focused-button');
    document.getElementById("button-Both").classList.remove('focused-button');
  }

  if(event.target.id == 'button-Female'){
    event.target.classList.add('focused-button');
    document.getElementById("button-Male").classList.remove('focused-button');
    document.getElementById("button-Both").classList.remove('focused-button');
  }
  if(event.target.id == 'button-Both'){
    event.target.classList.add('focused-button');
    document.getElementById("button-Male").classList.remove('focused-button');
    document.getElementById("button-Female").classList.remove('focused-button');
  }

  path = '../../data/multiline_data/multiline_chart_' + buttonValue + ".CSV";
  sessionStorage.setItem('pathMultiLine', path);
  sessionStorage.setItem('multilineSex', buttonValue);
  location.reload(true);
}
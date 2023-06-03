let sex = "button-"+ sessionStorage.getItem("barchartSex");
document.getElementById(sex).classList.add('focused-button');


var optionElement = document.getElementById(sessionStorage.getItem('barchartRegion'));
optionElement.selected = true;

document.getElementById("button-Male").addEventListener("click", handleClick);
document.getElementById("button-Female").addEventListener("click", handleClick);
document.getElementById("button-Both").addEventListener("click", handleClick);


function deleteDivs(){
  var divs = document.querySelectorAll('.observablehq');

  // Iterate over the selected div elements
  for (var i = 0; i < divs.length; i++) {
    var div = divs[i];
    
    // Check if the div contains a span element
    if (div.querySelector('span')||div.querySelector('h1')) {
      // Remove the div element
      div.remove();
      console.log('remove');
    }
  } 
}
setTimeout(deleteDivs, 300);
// requestAnimationFrame(deleteDivs);

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

  path = '../../data/barchart_data/barchart_'+ sessionStorage.getItem('barchartRegion')  + '_' + buttonValue + '.CSV';
  sessionStorage.setItem('pathBarchart', path);
  sessionStorage.setItem('barchartSex', buttonValue);
  location.reload(true);
}


var dropdown = document.getElementById('regions');

    dropdown.addEventListener('change', function() {
      var selectedOption = dropdown.options[dropdown.selectedIndex];
      var selectedValue = selectedOption.value;

      path = '../../data/barchart_data/barchart_'+ selectedValue + '_' + sessionStorage.getItem('barchartSex') + '.CSV';
      sessionStorage.setItem('pathBarchart', path);
      sessionStorage.setItem('barchartRegion', selectedValue);
      location.reload(true);
});
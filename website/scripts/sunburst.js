let sex = "button-"+ sessionStorage.getItem("sunburstSex");
document.getElementById(sex).classList.add('focused-button');
document.getElementById("numeric-input").value = sessionStorage.getItem("sunburstYear");

function increment() {
    var input = document.getElementById("numeric-input");
    var value = parseInt(input.value);
    if (value < parseInt(input.max)) {
      input.value = value + 1;
    }
    path = '../../data/sunburst_data/sunburst_' + sessionStorage.getItem('sunburstSex') + "_" + input.value + ".json";
    sessionStorage.setItem('pathSunburst', path);
    sessionStorage.setItem('sunburstYear', input.value);
  }
  
  function decrement() {
    var input = document.getElementById("numeric-input");
    var value = parseInt(input.value);
    if (value > parseInt(input.min)) {
      input.value = value - 1;
    }
    console.log(input.value);
    path = '../../data/sunburst_data/sunburst_' + sessionStorage.getItem('sunburstSex') + "_" + input.value + ".json";
    console.log(path);
    sessionStorage.setItem('pathSunburst', path);
    sessionStorage.setItem('sunburstYear', input.value);
  }

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

  path = '../../data/sunburst_data/sunburst_'  + buttonValue + "_" + sessionStorage.getItem('sunburstYear')  +".json";
  sessionStorage.setItem('pathSunburst', path);
  sessionStorage.setItem('sunburstSex', buttonValue); 

}
  
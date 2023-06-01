let sex = "button-"+ sessionStorage.getItem("worldMapSex");
document.getElementById(sex).classList.add('focused-button');
document.getElementById("numeric-input").value = sessionStorage.getItem("worldMapYear");


function increment() {
    var input = document.getElementById("numeric-input");
    var value = parseInt(input.value);
    if (value < parseInt(input.max)) {
      input.value = value + 1;
    }
    path = '../../data/world_map/world_map_' +  input.value + '_' + sessionStorage.getItem('worldMapSex') + ".CSV";
    sessionStorage.setItem('pathWorldMap', path);
    sessionStorage.setItem('worldMapYear', input.value);
  }
  
  function decrement() {
    var input = document.getElementById("numeric-input");
    var value = parseInt(input.value);
    if (value > parseInt(input.min)) {
      input.value = value - 1;
    }
    console.log(input.value);
    path = '../../data/world_map/world_map_' +  input.value + '_' + sessionStorage.getItem('worldMapSex') + ".CSV";
    sessionStorage.setItem('pathWorldMap', path);
    sessionStorage.setItem('worldMapYear', input.value);
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

  path = '../../data/world_map/world_map_' +  sessionStorage.getItem('worldMapYear')  + '_' + buttonValue + ".CSV";
  sessionStorage.setItem('pathWorldMap', path);
  sessionStorage.setItem('worldMapSex', buttonValue); 

}
  
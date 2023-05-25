let path = '../../data/multiline_data/barchart_Central Europe, Eastern Europe, and Central Asia_Both.CSV';
sessionStorage.setItem('pathBarchart', path);
sessionStorage.setItem('barchartRegion', 'Central Europe, Eastern Europe, and Central Asia')
sessionStorage.setItem('barchartSex', 'Male');


document.getElementById('button-Male').focus();


document.getElementById("button-Male").addEventListener("click", handleClick);
document.getElementById("button-Female").addEventListener("click", handleClick);
document.getElementById("button-Both").addEventListener("click", handleClick);

function handleClick(event) {
  var buttonValue = event.target.value;  
  console.log("Clicked button value:", buttonValue);

  path = '../../data/multiline_data/barchart_'+ sessionStorage.getItem('barchartRegion')  + '_' + buttonValue + '.CSV';
  sessionStorage.setItem('pathBarchart', path);

}


var dropdown = document.getElementById('regions');

    dropdown.addEventListener('change', function() {
      var selectedOption = dropdown.options[dropdown.selectedIndex];
      var selectedValue = selectedOption.value;
      var selectedText = selectedOption.text;

      console.log('Selected Value:', selectedValue);
      console.log('Selected Text:', selectedText);

      path = '../../data/multiline_data/barchart_'+ selectedValue + '_' + sessionStorage.getItem('barchartSex') + '.CSV';
      sessionStorage.setItem('pathBarchart', path);
});
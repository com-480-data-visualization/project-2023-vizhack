let path = "data/SMOKING_TOB_1990_2019_NUM_SMOKERS.CSV";

let initialData = [];
//read data and create array of objects
d3.csv(path).then(function(data) {
    data.forEach(function(d) {
      initialData.push(d);
    });
  }).catch(function(error){console.log(error);});
  
console.log('arr', initialData);
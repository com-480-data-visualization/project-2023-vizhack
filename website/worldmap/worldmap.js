// https://observablehq.com/@d3/world-choropleth@415
//import define1 from "./7a9e12f9fb3d8e06@498.js";
import define2 from "./2695158caff5fb0c@595.js";



function _key(Legend,chart){return(
Legend(chart.scales.color, {title: "Percentage of smokers"})
)}

function _chart(Choropleth,hale,d3,countries,countrymesh,width){return(
Choropleth(hale, {
  id: d => d.name, // country name, e.g. Zimbabwe
  value: d => d.val, // health-adjusted life expectancy
  range: d3.interpolateYlGnBu,
  features: countries,
  featureId: d => d.properties.name, // i.e., not ISO 3166-1 numeric
  borders: countrymesh,
  projection: d3.geoEqualEarth(),
  width
})
)}

async function _hale(FileAttachment,rename){return(
(await FileAttachment("hale.csv").csv()).map(d => ({name: rename.get(d.location_name) || d.location_name, hale: +d.val}))
)}

function _rename(){return(
new Map([
  ["Antigua and Barbuda", "Antigua and Barb."],
  ["Bolivia (Plurinational State of)", "Bolivia"],
  ["Bosnia and Herzegovina", "Bosnia and Herz."],
  ["Brunei Darussalam", "Brunei"],
  ["Central African Republic", "Central African Rep."],
  ["Cook Islands", "Cook Is."],
  ["Democratic People's Republic of Korea", "North Korea"],
  ["Democratic Republic of the Congo", "Dem. Rep. Congo"],
  ["Dominican Republic", "Dominican Rep."],
  ["Equatorial Guinea", "Eq. Guinea"],
  ["Iran (Islamic Republic of)", "Iran"],
  ["Lao People's Democratic Republic", "Laos"],
  ["Marshall Islands", "Marshall Is."],
  ["Micronesia (Federated States of)", "Micronesia"],
  ["Republic of Korea", "South Korea"],
  ["Republic of Moldova", "Moldova"],
  ["Russian Federation", "Russia"],
  ["Saint Kitts and Nevis", "St. Kitts and Nevis"],
  ["Saint Vincent and the Grenadines", "St. Vin. and Gren."],
  ["Sao Tome and Principe", "São Tomé and Principe"],
  ["Solomon Islands", "Solomon Is."],
  ["South Sudan", "S. Sudan"],
  ["Swaziland", "eSwatini"],
  ["Syrian Arab Republic", "Syria"],
  ["The former Yugoslav Republic of Macedonia", "Macedonia"],
  // ["Tuvalu", ?],
  ["United Republic of Tanzania", "Tanzania"],
  ["Venezuela (Bolivarian Republic of)", "Venezuela"],
  ["Viet Nam", "Vietnam"]
])
)}


function _world(FileAttachment){return(
FileAttachment("countries-50m.json").json()
)}

function _countries(topojson,world){return(
topojson.feature(world, world.objects.countries)
)}


function _countrymesh(topojson,world){return(
topojson.mesh(world, world.objects.countries, (a, b) => a !== b)
)}

function _12(howto){return(
howto("Choropleth", "@d3/choropleth")
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["countries-50m.json", {url: new URL("../../data/countries-50m.json", import.meta.url), mimeType: "application/json", toString}],
    ["hale.csv", {url: new URL("../../data/world_map/world_map_1990_Both.CSV", import.meta.url), mimeType: "text/csv", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer("key")).define("key", ["Legend","chart"], _key);
  main.variable(observer("chart")).define("chart", ["Choropleth","hale","d3","countries","countrymesh","width"], _chart);
  main.variable(observer("hale")).define("hale", ["FileAttachment","rename"], _hale);
  main.variable(observer("rename")).define("rename", _rename);
  main.variable(observer("world")).define("world", ["FileAttachment"], _world);
  main.variable(observer("countries")).define("countries", ["topojson","world"], _countries);
  main.variable(observer("countrymesh")).define("countrymesh", ["topojson","world"], _countrymesh);
  //const child1 = runtime.module(define1);
  //main.import("howto", child1);
  const child2 = runtime.module(define2);
  main.import("Choropleth", child2);
  main.import("Legend", child2);
  return main;
}

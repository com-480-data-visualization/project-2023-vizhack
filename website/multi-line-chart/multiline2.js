// Importing D3.js
  
async function drawLineChart() {
// Define chart parameters
const width = 960;
const height = 500;
const margin = {top: 20, right: 20, bottom: 30, left: 50};

// Load data
const data = await d3.csv("./multi-line-chart/files/multiline_chart_Both.csv", d3.autoType);

// Transform data
const dataByGroup = Array.from(d3.group(data, d => d.location_name), ([key, values]) => ({key, values}));

const x = d3.scaleUtc()
    .domain(d3.extent(data, d => d.year_id))
    .range([margin.left, width - margin.right]);

const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.val)]).nice()
    .range([height - margin.bottom, margin.top]);

const line = d3.line()
    .defined(d => !isNaN(d.val))
    .x(d => x(d.year_id))
    .y(d => y(d.val));

const svg = d3.create("svg")
    .attr("viewBox", [0, 0, width, height]);

svg.append("g")
    .call(xAxis);

svg.append("g")
    .call(yAxis);

const path = svg.append("g")
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .selectAll("path")
    .data(dataByGroup)
    .join("path")
    .style("mix-blend-mode", "multiply")
    .attr("d", d => line(d.values));

svg.node().addEventListener("mousemove", moved);

function moved(event) {
    event.preventDefault();
    const pointer = event.touches ? d3.pointer(event.touches[0], svg.node()) : d3.pointer(event, svg.node());
    const xm = x.invert(pointer[0]);
    const ym = y.invert(pointer[1]);
    const i = d3.bisectCenter(data.map(d => d.year_id), xm);
    const s = d3.least(dataByGroup, d => Math.abs(d.values[i].val - ym));
    path.attr("stroke", d => d === s ? null : "#ddd").filter(d => d === s).raise();
    if (s) {
    svg.property("value", s).dispatchEvent(new CustomEvent("input"));
    }
}

function xAxis(g) {
    g.attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0))
    .call(g => g.select(".domain").remove());
}

function yAxis(g) {
    g.attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
    
    .call(g => g.select(".domain").remove())
    .call(g => g.select(".tick:last-of-type text").clone()
        .attr("x", 3)
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text(data.y));
}
}

// export default drawLineChart;
drawLineChart();
    
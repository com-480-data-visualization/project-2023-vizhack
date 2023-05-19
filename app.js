import {FileAttachment} from 'd3-fetch';

const data = FileAttachment('./test.csv').text();

const rows = data.split('\n');
const headers = rows[0].split(',');
const result = [];

for (let i = 1; i < rows.length; i++) {
  const obj = {};
  const currentRow = rows[i].split(',');

  for (let j = 0; j < headers.length; j++) {
    obj[headers[j]] = currentRow[j];
  }

  result.push(obj);
}

console.log(result);
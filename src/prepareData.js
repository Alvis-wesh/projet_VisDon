const fs = require('fs')
const d3 = require('d3')
const csv = fs.readFileSync('../data/depenses_medias_suisse.csv', 'utf-8')

const csvToJson = d3.dsvFormat(';').parse
// console.log(csvToJson(csv))

JSON.stringify(csvToJson(csv), null, 2)
console.log(JSON.stringify(csvToJson(csv), null, 2))



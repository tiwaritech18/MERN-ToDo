const error = 'ERROR';
const warning = 'WARNING';
const info = 'INFO';
const path = require('path')

function log(message, level = info) {
    console.log(`${level}: ${message}`)
}
let result = path.extname('/public_html/home/index.html');
console.log(result);

module.exports = log;

const fs = require('fs');
const file = "F:\\24x7homecare\\Tamil Nadu\\Chennai\\chennai after update\\Washing machine\\pages\\ifb-washing-machine-service-centre-in-chennai.html";
const content = fs.readFileSync(file, 'utf8');

console.log(JSON.stringify(content.substring(20250, 20450)));

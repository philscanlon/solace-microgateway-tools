var raml = require("raml-1-parser");
var apiJSON = raml.load(ramlFileName);
console.log(JSON.stringify(apiJSON, null, 2));

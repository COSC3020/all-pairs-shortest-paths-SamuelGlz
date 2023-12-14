const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

/*
var graph = { 
    'a' : {'b':2},
    'b' : {'c':6},
    'c' : {'d':4, 'a':1},
    'd' : {'b':2}};
assert(JSON.stringify(allPairsShortestPaths(graph)) == JSON.stringify([a: [ a: 0, b: 2, c: 8, d: 12 ],b: [ a: 7, b: 0, c: 6, d: 10 ],c: [ a: 1, b: 3, c: 0, d: 4 ],d: [ a: 9, b: 2, c: 8, d: 0 ]]));
*/

var graph = {
    'a' : {'b':2},
    'b' : {}
}

var expectedOutPut = '[ a: [ a: 0, b: 2 ], b: [ a: Infinity, b: 0 ] ]'
console.log(allPairsShortestPaths(graph))
console.log(JSON.stringify(allPairsShortestPaths(graph)))

//assert(JSON.stringify(allPairsShortestPaths(graph)) == expectedOutPut)


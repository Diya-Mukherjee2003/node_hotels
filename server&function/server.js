console.log("Server is running")
const notes=require('./notes.js')
var _=require('lodash');
var a=notes.age;
console.log(a);

var data=['person','person',1,2,1,2, 56,23,56]
var filter=_.uniq(data)
console.log(filter)

console.log(_.isString(true))
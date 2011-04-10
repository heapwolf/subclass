
var ISubclass = require('./subclass').Subclass();
var IArray = ISubclass.Array;

IArray.prototype.pluck = function(v) {
  while(this.indexOf(v) != -1) { 
    this.splice(this.indexOf(v), 1); 
  }
};

IArray.prototype.spush = function(v) {
  if(this.indexOf(v) == -1) { 
    this.push(v);
  }
};

var a = IArray();
var b = IArray(1, 2, 3);

a.push(10);
b.spush(2);

console.log('The native copies have some zaney new methods.');
console.log(a);
console.log(b);

console.log('The native objects in the this scope are not affected.');
console.log(Array.prototype);

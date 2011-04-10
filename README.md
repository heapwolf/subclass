
# subclass
Subclass is a safe way to extend native types in Javascript. 


## What the #@%&????
Extending native types in Javascript will usually get you shot, drawn and quartered or beat-down by respectable developers. Don't do it... That said subclass gives you a real copy of the native objects and lets you go crazy with them without destroying the known universe. Complex objects with nifty convenience methods have their place and time. Safety aside, I strongly recommend using this library judiciously, Most things you want to do can be done without this special sugar.


### A simple example in the browser (don't ever put your actual script inside your html)

    <script src="subclass.js" type="text/javascript" charset="utf-8"></script>
    <script type="text/javascript" charset="utf-8">

      var ISubclass = Subclass();
      var IArray = ISubclass.Array;

      var a = IArray();

      a.push(10, 20);

    </script>


### a more advanced example on the server (which would also work in the browser without the require statement)

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

## Credits 
This bit of code was inspired by the immortal Dean Edwards.


## Version
v0.0.1


# Licence

(The MIT License)

Copyright (c) 2010 hij1nx <http://www.twitter.com/hij1nx>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


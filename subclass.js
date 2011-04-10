
(function() {

  var vm = ((typeof this.document === 'undefined') ? require('vm') : null);

  this.Subclass = function Subclass() {

    if (!(this instanceof Subclass)) { return new Subclass(); }

    var type = {
      IArray: null,
      IObject: null,
      INumber: null,
      IString: null,
      IBoolean: null,
      IFunction: null
    };

    vm ? vm.runInNewContext(

      'IArray = Array; IObject = Object; INumber = Number; IString = String; IBoolean = Boolean; IFunction = Function', 
      type,
      'type.vm'

    ) : (function() {

      var iframe = document.createElement("iframe");
      
      iframe.style.display = "none";
      document.body.appendChild(iframe);

      frames[frames.length - 1].document.write(
        '<script>' +
        'parent._Subclass = { IArray: Array, IObject: Object, INumber: Number, IString: String, IBoolean: Boolean, IFunction: Function };'
        + '<\/script>'
      );
      
      document.body.removeChild(iframe);
    
      for(var t in window._Subclass) {
        if(window._Subclass.hasOwnProperty(t)) {
          type[t] = window._Subclass[t];
        }
      }
      
      delete window._Subclass;
      
    })();

    this.Array = type.IArray;
    this.Object = type.IObject;
    this.Number = type.INumber;
    this.String = type.IString;
    this.Boolean = type.IBoolean;
    this.Function = type.IFunction;

    return this;
  };

}).call(this.exports || this);

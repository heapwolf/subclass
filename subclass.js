
(function() {

  var vm = typeof this.document === 'undefined' ? require('vm') : null,
      self = this;

  this.Subclass = function() {

    if (typeof Subclass === 'function') return new Subclass();

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
    
      for(var t in _Subclass) {
        if(_Subclass.hasOwnProperty(t)) {
          type[t] = _Subclass[t];
        }
      }

      delete self._Subclass;

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

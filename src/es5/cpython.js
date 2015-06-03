"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _math = require("./math");

var _PyCalls = require("./PyCalls");

var _events = require("events");

var _glob = require("glob");

var nanCPython = require("bindings")("../build/Release/node-cpython");

/**
 * Implements the CPython Python interpreter
 * @class CPython
 */

var CPython = (function (_EventEmitter) {
  function CPython(opts) {
    _classCallCheck(this, CPython);

    _get(Object.getPrototypeOf(CPython.prototype), "constructor", this).call(this);

    //Emscripten.init.call(this)
    this.opts = opts
    //super()
    ;
  }

  _inherits(CPython, _EventEmitter);

  _createClass(CPython, [{
    key: "run",

    /**
    * Executes any number of Python source code files.
    * This is JS userland API and automates and abstracts many choices of the
    * below C-API. If you want to have more control, please use the below methods.
    *
    * @example
    * 'use strict';
    * var cpython = require('cpython');
    *
    * cpython.on('error', function(err) {console.log(err);})
    *
    * cpython.run('[example/**\/*.py', function(result) { console.log(result) })
    *
    * @param {string|string[]} glob - a glob of valid .py files
    * @param {callback} [cb] - Optional callback
    */
    // TODO: actually implement callbacks
    value: function run(glob, callback) {
      var args = Array.prototype.slice.call(arguments);

      // //TODO: check if condition is valid at all (after first review: seems to be the case)
      // if (args.length != 2 || typeof filepath != 'string' || filepath instanceof String) {
      //
      //   var err = new Error("Method 'simpleString' expects one argument, which must be a string")
      //   err.name = "InputError"
      //
      //   this.emit('error', err)
      //   return
      // }

      /**
      * call simpleFile from below and pass args as string
      */
      nanCPython.runRun();

      // TODO: Check if chainability is actually usuful
      return this;
    }
  }, {
    key: "anyFile",

    /**
    *
    */
    value: function anyFile() {}
  }, {
    key: "simpleString",

    /**
    * Executes the Python source code from command.
    * See also [Python docs]{@link https://docs.python.org/2/c-api/veryhigh.html#c.PyRun_SimpleStringFlags} for Reference
    *
    * @example
    * 'use strict';
    * var cpython = require('cpython');
    *
    * cpython.on('error', function(err) {console.log(err);})
    *
    * cpython.simpleString("from time import time,ctime\nprint 'Today is',ctime(time())\n")
    *
    * @param {string} str - String of python denoted code
    * @param {string|string[]} [flags=null] - Compiler flag or array of flags for CPython
    * @param {callback} [cb] - Optional callback
    */
    // TODO: actually implement compiler flags and callbacks
    value: function simpleString(str, flags, cb) {
      var args = Array.prototype.slice.call(arguments);

      // TODO: check if condition is valid at all (after first review: seems to be the case)
      if (args.length != 1 || typeof str != "string" || str instanceof String) {

        var err = new Error("Method 'simpleString' expects one argument, which must be a string");
        err.name = "InputError";

        this.emit("error", err);
        return;
      }

      /**
      * call simpleString from below and pass args as string
      */
      nanCPython.simpleString(str);

      // TODO: Check if chainability is actually usuful
      return this;
    }
  }, {
    key: "simpleFile",

    /**
    * Executes the Python source code from file.
    * Similar to simpleString(), but the Python source code is read from a file
    * instead of an in-memory string. filename should be the name of the file.
    * See also [Python docs]{@link https://docs.python.org/2/c-api/veryhigh.html#c.PyRun_SimpleFileExFlags} for Reference
    *
    * @example
    * 'use strict';
    * var cpython = require('cpython');
    *
    * cpython.on('error', function(err) {console.log(err);})
    *
    * cpython.simpleFile("example/multiply.py", "multiply.py")
    * // passing the filename seems to be a necessity of the C-API
    * // TODO: this will only last very shortly and be made optional
    *
    * @param {string} filepath - String of filepath
    * @param {string} filename - String of filename
    * @param {string|string[]} [flags=null] - Compiler flag or array of flags for CPython
    * @param {callback} [cb] - Optional callback
    */
    // TODO: actually implement compiler flags and callbacks
    value: function simpleFile(filepath, filename, flags, callback) {
      var args = Array.prototype.slice.call(arguments);

      //TODO: check if condition is valid at all (after first review: seems to be the case)
      if (args.length != 2 || typeof filepath != "string" || filepath instanceof String) {

        var err = new Error("Method 'simpleString' expects one argument, which must be a string");
        err.name = "InputError";

        this.emit("error", err);
        return;
      }

      /**
      * call simpleFile from below and pass args as string
      */
      nanCPython.simpleFile(filepath, filename);

      // TODO: Check if chainability is actually usuful
      return this;
    }
  }, {
    key: "interactiveOne",

    /**
    *
    */
    value: function interactiveOne() {}
  }, {
    key: "interactiveLoop",

    /**
    *
    */
    value: function interactiveLoop() {}
  }, {
    key: "simpleParseString",

    /**
    *
    */
    value: function simpleParseString() {}
  }, {
    key: "simpleParseFile",

    /**
    *
    */
    value: function simpleParseFile() {}
  }, {
    key: "string",

    /**
    *
    */
    value: function string() {}
  }, {
    key: "file",

    /**
    *
    */
    value: function file() {}
  }, {
    key: "compileString",

    /**
    *
    */
    value: function compileString() {}
  }, {
    key: "evalCode",

    /**
    *
    */
    value: function evalCode() {}
  }, {
    key: "evalFrame",

    /**
    *
    */
    value: function evalFrame() {}
  }, {
    key: "_pyInitialize",

    /**
    * initialize python context, reserve memory.
    * @private
    */
    value: function _pyInitialize() {
      nanCPython.initialize();
    }
  }, {
    key: "_pyFinalize",

    /**
    * Finalize python context, clear memory.
    * @private
    */
    value: function _pyFinalize() {
      nanCPython.finalize();
    }
  }, {
    key: "_pySetProgramName",

    /**
    * set low level python program name (optional)
    * @private
    */
    value: function _pySetProgramName() {}
  }, {
    key: "_pySetArgv",

    /**
    * set low level python argv
    * @private
    */
    value: function _pySetArgv() {
      nanCPython.setargv();
    }
  }, {
    key: "_pyCreateContext",

    /**
    * Create a context in memory to run the python script in
    * @private
    * @param {Object}
    */
    value: function _pyCreateContext(program) {
      this._pySetProgramName();
      this._pyInitialize();
      this._pySetArgv;

      // execute program here
      program();

      this._pyFinalize();
    }
  }, {
    key: "_getListOfFiles",

    /**
    * Create a context in memory to run the python script in
    * @private
    * @param {string[]} globbing pattern
    * @param {callback} [cb] - Optional callback
    */
    value: function _getListOfFiles(pattern, options, cb) {
      //var args = Array.prototype.slice.call(arguments);
      (0, _glob.glob)("**/*.js", options, function (err, files) {
        // files is an array of filenames.
        // If the `nonull` option is set, and nothing
        // was found, then files is ["**/*.js"]
        // er is an error object or null.
        return cb(err, files);
      });
    }
  }]);

  return CPython;
})(_events.EventEmitter);

exports.CPython = CPython;

var inst = new CPython();
module.exports = inst;
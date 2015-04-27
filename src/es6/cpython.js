//'use strict';
import {SomeClass} from "./math";
import {PyCalls} from "./PyCalls";
import {EventEmitter} from "events";


export class CPython extends EventEmitter {
  constructor(opts) {
    super()
    //Emscripten.init.call(this)
    this.opts = opts
    //super()
  }

  /**
  *
  */
  anyFile() {

  }

  /**
  *
  */
  simpleString() {

  }

  /**
  *
  */
  simpleFile() {
    var args = Array.prototype.slice.call(arguments);

    if (args.length > 2) {
      var err = new Error('Function can only take two paramters.')
      this.emit('error', err)
    }
    return
  }

  /**
  *
  */
  interactiveOne() {

  }

  /**
  *
  */
  interactiveLoop() {

  }

  /**
  *
  */
  simpleParseString() {

  }

  /**
  *
  */
  simpleParseFile() {

  }

  /**
  *
  */
  string() {

  }

  /**
  *
  */
  file() {

  }

  /**
  *
  */
  compileString() {

  }

  /**
  *
  */
  evalCode() {

  }

  /**
  *
  */
  evalFrame() {

  }


}

let inst = new CPython()
module.exports = inst

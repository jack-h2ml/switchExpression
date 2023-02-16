"use strict";

require("core-js/modules/es.error.cause.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchExp = void 0;
var _class, _exitReturn, _break, _conditions, _Exit;
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }
function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
const SwitchExp = (_exitReturn = /*#__PURE__*/new WeakMap(), _break = /*#__PURE__*/new WeakMap(), _conditions = /*#__PURE__*/new WeakMap(), (_class = class SwitchExp {
  //
  // Static
  //

  //
  // Instance
  //

  //

  //

  //

  constructor(conditions) {
    _classPrivateFieldInitSpec(this, _exitReturn, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _break, {
      writable: true,
      value: arr => {
        arr.splice(1);
        return _classPrivateFieldGet(this, _exitReturn).value;
      }
    });
    _defineProperty(this, "eval", expression => {
      return [..._classPrivateFieldGet(this, _conditions)].reduce((res, _ref, i, arr) => {
        let [condition, value] = _ref;
        return [...res, (condition instanceof Function && condition(expression) === true || expression === condition || condition && value === undefined && (value = undefined)) && (value instanceof Function ? _classPrivateFieldSet(this, _exitReturn, value(SwitchExp.exitCallback)) instanceof _classStaticPrivateFieldSpecGet(SwitchExp, _class, _Exit) ? _classPrivateFieldGet(this, _break).call(this, arr) : _classPrivateFieldGet(this, _exitReturn) : value)];
      }, []);
    });
    _classPrivateFieldInitSpec(this, _conditions, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _conditions, conditions);
  }
}, _Exit = {
  writable: true,
  value: class {
    constructor(value) {
      this.value = value;
      return this;
    }
  }
}, _defineProperty(_class, "exitCallback", val => {
  return new (_classStaticPrivateFieldSpecGet(SwitchExp, _class, _Exit))(val);
}), _class));
const switchExp = conditions => new SwitchExp(conditions);
exports.switchExp = switchExp;

'use strict';

/**
 * module dependencies
 */
var forOwn = require('lodash/object/forOwn'); // mainly reduce browserify size
var assign = require('lodash/object/assign');

/**
 * exports Class
 */
module.exports = BaseSettings;

/**
 * class definition
 */
function BaseSettings() {
  // when we call `BaseSettings() without new`
  if (this === global || !this) {
    throw new Error('missing new, use `new BaseSettings()` instead');
  }

  // settings store
  this._settings = this._settings || {};
}

/**
 * get
 */
BaseSettings.prototype.get = function(key) {
  return this._settings[key];
};

/**
 * set
 */
BaseSettings.prototype.set = function(key, val) {
  var self = this;

  if (typeof key === 'string') {
    this._settings[key] = val;
  } else if (typeof key === 'object') {
    forOwn(key, function(v, k) { // value,key
      self.set(k, v);
    });
  }

  return this;
};

/**
 * enable: set for Boolean
 */
BaseSettings.prototype.enable = function(key) {
  return this.set(key, true);
};

/**
 * disable: set for Boolean
 */
BaseSettings.prototype.disable = function(key) {
  return this.set(key, false);
};

/**
 * enabled: get for Boolean
 */
BaseSettings.prototype.enabled = function(key) {
  return Boolean(this.get(key));
};

/**
 * disabled: get for Boolean
 */
BaseSettings.prototype.disabled = function(key) {
  return !this.enabled(key);
};

/**
 * static mixin for an obj
 */
BaseSettings.mixin = function(obj) {
  // handle this
  BaseSettings.call(obj);

  // get/set enable/disable enabled/disabled
  return assign(obj, BaseSettings.prototype);
};
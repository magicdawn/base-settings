'use strict';

var BaseSettings = require('../');
require('should');
var assert = require('assert');

describe('BaseSettings', function() {
  var s;
  beforeEach(() => {
    s = new BaseSettings();
  });

  it('constructor should be OK', function() {
    s.should.ok;
  });

  it('thorws when direct call constructor without new', function() {
    assert.throws(() => {
      BaseSettings();
    });
  });

  it('get/set works', function() {
    // set('key')
    s
      .set('key', 'val')
      .get('key')
      .should.equal('val');

    // set('a long key')
    s
      .set('a simple option', 'a simple value')
      .get('a simple option')
      .should.equal('a simple value');

    // set({  })
    s.set({
      name: 'tao',
      id: 'magicdawn'
    });
    s.get('name').should.equal('tao');
    s.get('id').should.equal('magicdawn');
  });

  it('enable/disable enabled/disabled works', function() {
    s
      .enable('view cache')
      .enabled('view cache')
      .should.equal(true);

    s
      .disable('test')
      .disabled('test')
      .should.equal(true);
  });

  it('mixin works', function() {
    var o = {};
    BaseSettings.mixin(o);

    o._settings.should.ok;
    o.get.should.ok;
    o.set.should.ok;
    o.enable.should.ok;
    o.disable.should.ok;
    o.enabled.should.ok;
    o.disabled.should.ok;
  });
});
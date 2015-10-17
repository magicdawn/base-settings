# base-settings
settings Base Class like node express, get/set enable/disable enabled/disabled

[![Build Status](https://travis-ci.org/magicdawn/base-settings.svg?branch=master)](https://travis-ci.org/magicdawn/base-settings)
[![Coverage Status](https://coveralls.io/repos/magicdawn/base-settings/badge.svg?branch=master&service=github)](https://coveralls.io/github/magicdawn/base-settings?branch=master)
[![npm](https://img.shields.io/npm/v/base-settings.svg)]()
[![npm](https://img.shields.io/npm/dm/base-settings.svg)]()
[![node](https://img.shields.io/node/v/base-settings.svg)]()
[![npm](https://img.shields.io/npm/l/base-settings.svg)]()

## Install
```
$ npm i base-settings --save
```

## Usage

### use `util.inherits`

```js
var BaseSettings = require('base-settings');

function MyClass(){
  BaseSettings.call(this);
}
util.inherits(MyClass,BaseSettings);
```

### use `BaseSettings.mixin(object)`

```js
var app = require('koa')();
BaseSettings.mixin(app);

app.enable('view cache');
app.enabled('view cache'); // => true
```

## API

### get/set
- get(String key);
- set(String key, Any: val)
- set(Object { key: val })

### enable/disable enabled/disabled
- enable(String key)
- enabled(String key)
- disable(String key)
- disabled(String key)

## License
MIT http://magicdawn.mit-license.org
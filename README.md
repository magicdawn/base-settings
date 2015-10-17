# base-settings
settings Base Class like node express, get/set enable/disable enabled/disabled

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
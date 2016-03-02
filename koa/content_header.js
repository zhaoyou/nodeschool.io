var koa = require('koa');
var app = koa();

app.use(function* (next) {
  if (this.request.is('application/json')) {
    this.body = {message: 'hi!'};
  } else {
    this.body = 'ok';
  }
});

app.listen(process.argv[2] || 3000);


/**

var koa = require('koa');

var app = koa();

app.use(function* () {
  this.body = this.request.is('json')
    ? { message: 'hi!' }
    : 'ok';
});

app.listen(process.argv[2]);
  */

var koa = require('koa');
var app = koa();
var parse = require('co-body');

app.use(function* (next) {

  if (this.method !== 'POST') { return yield next;}

  var body = yield parse(this);

  if (!body.name) { this.throw(400, "name field required.");}

  this.body = body.name.toUpperCase();
});

app.listen(process.argv[2] || 3000);

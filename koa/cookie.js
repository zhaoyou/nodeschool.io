var koa = require('koa');
var app = koa();


app.keys = ['hadeser', 'zhao'];

app.use(function* (next) {
  var v = this.cookies.get('view', {'signed': true});
  if (v) {
    v = parseInt(v, 10) + 1;
  } else {
    v = 1;
  }
  this.body = v + ' views';
  this.cookies.set('view', v, {'signed': true});
});

app.listen(process.argv[2] || 3000);

/**

  var koa = require('koa');

  var app = koa();

// to use signed cookie, we need to set app.keys
app.keys = ['secret', 'keys'];

app.use(function *(){
var n = ~~this.cookies.get('view', { signed: true }) + 1;
this.cookies.set('view', n, { signed: true });
this.body = n + ' views';
});

app.listen(process.argv[2]);

 best solution */

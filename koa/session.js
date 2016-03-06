
var koa = require('koa');
var session = require('koa-session');

var app = koa();

app.keys = ['secret', 'keys'];

app.use(session(app));

app.use(function* (next) {
  var view = this.session.view || 1;
  this.body = view + " views";
  this.session.view = view + 1;
});

app.listen(process.argv[2] || 3000);


/**


 var koa = require('koa');
    var session = require('koa-session');

    var app = koa();
    app.keys = ['secret', 'keys'];

    app.use(session(app));

    app.use(function *(){
      var n = ~~this.session.view + 1;
      this.session.view = n;
      this.body = n + ' views';
    });

    app.listen(process.argv[2]);
  */

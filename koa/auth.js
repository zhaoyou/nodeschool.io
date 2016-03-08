
var koa = require('koa');
var parse = require('co-body');
var session = require('koa-session');

var form = '<form action="/login" method="POST">' +
           '<input name="username" type="text" value="username">' +
           '<input name="password" type="password" placeholder="The password is \'password\'">' +
           '<button type="submit">Submit</button>' +
           '</form>';

var app = koa();

// use koa-session somewhere at the top of the app
// we need to set the `.keys` for signed cookies and the cookie-session module
app.keys = ['secret1', 'secret2', 'secret3'];


app.use(session(app));

app.use(function* home(next) {
  if (this.path !== '/') return yield next;

  if (this.session.authenticated) {
    this.body = 'hello world';
  } else {
    this.status = 401;
  }
});

app.use(function* login(next) {
  if (this.path !== '/login') return yield next;
  if (this.method === 'GET') return this.body = form;
  if (this.method !== 'POST') return;
  var user = yield parse(this);

  console.log(user);

  if (user.username === 'username' && user.password === 'password') {
    this.session.authenticated = true;
    this.redirect('/');
  } else {
    this.status = 400;
  }
});

app.use(function* logout(next) {
  if (this.path !== '/logout') return yield next;
  this.session.authenticated = false;
  this.redirect('/login');
});



app.listen(process.argv[2] || 3000);

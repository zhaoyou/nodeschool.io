
var koa = require('koa');
var views = require('co-views');
var render = views(__dirname + '/views', {
  ext: 'ejs'
});

var app = koa();

var user = {
  name: {
          first: 'Tobi',
          last: 'Holowaychuk'
        },
  species: 'ferret',
  age: 3
};

app.use(function* (next) {
  this.body = yield render('user', {'user': user});
});

app.listen(process.argv[2] || 3000);




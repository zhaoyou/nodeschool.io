
var koa = require('koa');

var app = koa();

app.use(errorHandler());

app.use(function* () {
  if (this.path === '/error') throw new Error('ooops');
  this.body = 'OK';
});

function errorHandler() {
  return function* (next) {
    // try catch all downstream errors here
    try {
      yield next;
    } catch (e) {
      this.body = 'internal server error';
      this.status = 500;
      this.app.emit('error', e, this);
    }

  };
}

app.on('error', function(error, content) {
  console.log(error, content);
});

app.listen(process.argv[2]);

/** best solution

────────────────────────────────────────────────────────────────────────────
    var koa = require('koa');

    var app = koa();

    app.use(errorHandler());

    app.use(function* () {
      if (this.path === '/error') throw new Error('ooops');
      this.body = 'OK';
    });

    function errorHandler() {
      return function* (next) {
        // we catch all downstream errors here
        try {
          yield next;
        } catch (err) {
          // set response status
          this.status = 500;
          // set response body
          this.body = 'internal server error';
          // can emit on app for log
          // this.app.emit('error', err, this);
        }
      };
    }

    app.listen(process.argv[2]);
 */


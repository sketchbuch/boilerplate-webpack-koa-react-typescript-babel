const Koa = require('koa');
const logger = require('koa-logger');
const Router = require('koa-router');
const app = new Koa();

// log all events to the terminal
app.use(logger());

// error handling
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
  }
});

const router = new Router();
require('./routes/basic')({ router });

app.use(router.routes());
app.use(router.allowedMethods());

const server = app.listen(3000);
module.exports = server;

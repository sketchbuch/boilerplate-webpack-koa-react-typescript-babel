const Koa = require('koa');
const logger = require('koa-logger');
const app = new Koa();

// log all events to the terminal
app.use(logger());


app.use(async ctx => {
  ctx.body = 'Hello World 2';
});

// tell the server to listen to events on a specific port
const server = app.listen(3000);
module.exports = server;

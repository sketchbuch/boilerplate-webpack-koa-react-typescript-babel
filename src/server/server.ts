import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import allRoutes from './routes/basic';
import serverInfo from './utils/serverInfo';

const app: Koa = new Koa();
const router: Router = new Router();
const PORT: number = 3000;

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

allRoutes({ router });

app.use(router.routes());
app.use(router.allowedMethods());

const server = app.listen(PORT, () => {
  serverInfo(PORT);
});

export default server;

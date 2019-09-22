import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import serve from 'koa-static';
import allRoutes from './routes/basic';
import serverInfo from './utils/serverInfo';
import { ServerContext, ServerNext } from '../types';

const app: Koa = new Koa();
const router: Router = new Router();
const PORT: number = 3000;

// Static files
app.use(serve('./public'));

// Log all events to the terminal
app.use(logger());

// Error handling
app.use(async (ctx: ServerContext, next: ServerNext) => {
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

import Koa from 'koa';
import logger from 'koa-logger';
import Router from 'koa-router';
import allRoutes from './routes/basic';

const app: Koa = new Koa();
const router: Router = new Router();

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

const server = app.listen(3000, () => {
  console.log(`App server started, listening on port: 3000`);
});
export default server;

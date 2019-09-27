import Koa from 'koa';
import helmet from 'koa-helmet';
import router from './routes';
import logger from 'koa-logger';
import serve from 'koa-static';
import serverInfo from './utils/serverInfo';
import { ServerContext, ServerNext } from '../common/types';

const app: Koa = new Koa();
const PORT: number = 3000;

app.use(serve('./public'));
app.use(helmet());
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

// Add routes
app.use(router());

const server = app.listen(PORT, () => {
  serverInfo(['Server started:', ` - http://localhost:${PORT}`]);
});

export default server;

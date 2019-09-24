import Koa from 'koa';
import router from './routes';
import logger from 'koa-logger';
import serve from 'koa-static';
import serverInfo from './utils/serverInfo';
import { ServerContext, ServerNext } from '../types';

const app: Koa = new Koa();
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

// Add routes
app.use(router());

const server = app.listen(PORT, () => {
  serverInfo(['Server started:', ` - http://localhost:${PORT}`]);
});

export default server;

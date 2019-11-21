import Koa from 'koa';
import helmet from 'koa-helmet';
// import hotClient from 'webpack-hot-client';
import logger from 'koa-logger';
import middleware from 'webpack-dev-middleware';
import serve from 'koa-static';
import webpack from 'webpack';
import router from './routes';
import webpackConfig from '../../config/webpack/server';
import serverInfo from './utils/serverInfo';
import { ServerContext, ServerNext } from '../common/types';

const app: Koa = new Koa();
const PORT: number = 3000;
const ONE_HOUR: number = 60 * 60;

// Static files
app.use(
  serve('./public', {
    gzip: true,
    maxage: ONE_HOUR,
  })
);

// app.use(middleware(compiler, {}));
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

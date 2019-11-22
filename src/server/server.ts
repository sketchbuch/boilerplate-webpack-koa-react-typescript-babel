import Koa from 'koa';
import helmet from 'koa-helmet';
import logger from 'koa-logger';
import serve from 'koa-static';
// import webpack from 'webpack';
import router from './routes';
import serverInfo from './utils/serverInfo';
// import webpackConfig from '../../config/webpack/server';
import { ServerContext, ServerNext } from '../common/types';
import config from '../../config/convict/';

const ONE_HOUR: number = 60 * 60;
const app: Koa = new Koa();
/* const compiler: webpack.Compiler = webpack(webpackConfig);
const publicPath: string =
  webpackConfig.output && webpackConfig.output.publicPath
    ? webpackConfig.output.publicPath
    : '';
const filename: string | undefined =
  webpackConfig.output &&
  webpackConfig.output.filename &&
  (webpackConfig.output.filename as string); */

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

const server = app.listen(config.get('server.port'), () => {
  serverInfo([
    'Server started:',
    ` - ${config.get('server.url')}:${config.get('server.port')}`,
  ]);
});

export default server;

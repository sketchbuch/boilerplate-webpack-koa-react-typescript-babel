import React from 'react';
import Router from 'koa-router';
import { renderToString } from 'react-dom/server';
import App from '../../../common/components/App';
import { ServerContext, ServerNext } from '../../../types';
import { getTemplate } from '../../utils';
import { ROUTE_ALL as routePath } from '../../../constants/routes';

const router = new Router();

export const rootContent: JSX.Element = <App title="server test 2" />;

export const routeCallback = async (
  ctx: ServerContext,
  next: ServerNext
): Promise<void> => {
  const content: string = renderToString(rootContent);
  ctx.body = getTemplate(content);
};

router.get(routePath, routeCallback);

export { routePath };
export default router;

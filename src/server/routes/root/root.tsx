import React from 'react';
import Router from 'koa-router';
import { renderToString } from 'react-dom/server';
import Root, { store } from '../../../common/components/Root/Root';
import getTemplateState from '../../utils/getTemplateState';
import { ROUTE_ALL as routePath } from '../../../common/constants/routes';
import { ServerContext, ServerNext } from '../../../common/types';
import { getTemplate } from '../../utils';

const router = new Router();

export const routeCallback = async (
  ctx: ServerContext,
  next: ServerNext
): Promise<void> => {
  const content: string = renderToString(<Root />);
  const contentState: string = getTemplateState(store.getState());
  ctx.body = getTemplate({ content, contentState });
};

router.get(routePath, routeCallback);

export { routePath };
export default router;

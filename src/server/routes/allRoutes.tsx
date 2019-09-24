import React from 'react';
import Router from 'koa-router';
import { renderToString } from 'react-dom/server';
import App from '../../common/components/App';
import getTemplate from '../utils/getTemplate';
import { ROUTE_ALL } from '../../constants/routes';
import { ServerContext, ServerNext } from '../../types';

export const allRoutesContent: JSX.Element = <App title="server test 2" />;

export const allRoutesCallback = async (
  ctx: ServerContext,
  next: ServerNext
) => {
  const content: string = renderToString(allRoutesContent);
  ctx.body = getTemplate(content);
};

const allRoutes = ({ router }: { router: Router }) => {
  router.get(ROUTE_ALL, allRoutesCallback);
};

export default allRoutes;

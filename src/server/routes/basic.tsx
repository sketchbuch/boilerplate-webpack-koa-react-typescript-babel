import React from 'react';
import Router from 'koa-router';
import { renderToString } from 'react-dom/server';
import { ServerContext, ServerNext } from '../../types';
import App from '../../common/components/App';

const allRoutes = ({ router }: { router: Router }) => {
  router.get('*', (ctx: ServerContext, next: ServerNext) => {
    const content = renderToString(<App title="server test 2" />);
    const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
        />
        <title>Server Title</title>
        <link href="/css/main.css" rel="stylesheet">
      </head>
    
      <body>
        <div id="root">${content}</div>
        <script type="text/javascript" src="/js/app.js"></script>
      </body>
    </html>
  `;
    ctx.body = html;
  });
};

export default allRoutes;

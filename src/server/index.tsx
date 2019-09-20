import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from 'src/common/components/App';

export default (req, res) => {
  const html: string = ReactDOMServer.renderToString(
    <App title="Server test" />
  );
  const template: string = `
  <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
        <title>test app</title>
    </head>
    
    <body>
        <div id="root">${html}</div>
        <script src="/build/js/app.js"></script>
    </body>
  </html>
`;
  res.send(template);
};

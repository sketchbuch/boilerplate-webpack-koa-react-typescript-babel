const defaultTemplate: string = `
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
      <div id="root">{content}</div>
      <script type="text/javascript" src="/js/app.js"></script>
    </body>
  </html>
`;

export default defaultTemplate;
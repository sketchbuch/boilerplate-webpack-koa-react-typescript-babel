const defaultTemplate: string = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
      />
      <title>App</title>
      {styles}
    </head>

    <body>
      <div id="root">{content}</div>
      {contentState}
      <script type="text/javascript" src="/dist/js/app.js"></script>
    </body>
  </html>
`;

export default defaultTemplate;

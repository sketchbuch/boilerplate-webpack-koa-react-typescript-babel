const serverInfo = (port: number) => {
  console.log('#######################################');
  console.log('Server started:');
  console.log(` - Listening on port: ${port}`);
  console.log(` - Accessable at: http://localhost:${port}`);
  console.log('#######################################');
};

export default serverInfo;

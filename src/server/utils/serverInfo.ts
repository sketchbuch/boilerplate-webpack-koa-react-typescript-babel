const getMaxLen = (messages: string[]): number => {
  var longest: string = messages.reduce((r: string, e: string): string => {
    if (r.length < e.length) {
      return e;
    }

    return r;
  });

  return longest.length;
};

const serverInfo = (port: number) => {
  const SEP: string = '#';
  const messages: string[] = ['Server started:', ` - http://localhost:${port}`];
  const maxLen: number = getMaxLen(messages);

  console.log(SEP.repeat(maxLen));
  console.log('');

  messages.forEach((msg: string) => {
    console.log(msg);
  });

  console.log('');
  console.log(SEP.repeat(maxLen));
};

export default serverInfo;

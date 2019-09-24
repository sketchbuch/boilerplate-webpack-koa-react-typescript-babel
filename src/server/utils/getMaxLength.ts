const getMaxLength = (messages: string[]): number => {
  var longest: string = messages.reduce((a: string, b: string): string => {
    if (a.length < b.length) {
      return b;
    }

    return a;
  });

  return longest.length;
};

export default getMaxLength;

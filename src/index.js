module.exports = function check(str, bracketsConfig) {
  let i = 0;
  let result = str;

  const parsedBracketsConfig = bracketsConfig.map((item) => {
    return `${item[0]}${item[1]}`;
  });

  let mainLength = str.length;

  while (result.length>i) {

    parsedBracketsConfig.forEach((item) => {
      result = result.replaceAll(item, '');
      console.log(result);
    });
      if (result.length === mainLength ) {
        return false;
      }
    mainLength = result.length;
  }
  return true;
}

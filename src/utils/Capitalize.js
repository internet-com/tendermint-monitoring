export default function (str) {
  if (!str) return '';

  const strArray = str.split('-');
  for (let i = 0; i < strArray.length; i += 1) {
    strArray[i] = strArray[i].charAt(0).toUpperCase().concat(strArray[i].substr(1));
  }

  return strArray.join(' ');
}

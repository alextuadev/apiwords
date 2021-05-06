exports.reverseString = function (str) {
  return str.split('').reverse().join('')
}

exports.palindrome = function (str) {
  let re = /[\W_]/g;
  let lowRegStr = str.toLowerCase().replace(re, '');
  let reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}
const ftoc = function(fahrenheit) {
  let result = (fahrenheit - 32) * 5/9;
  return Math.round(result * 10) / 10;
}

const ctof = function(celcius) {
  let result = celcius * 9/5 + 32;
  return Math.round(result * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}

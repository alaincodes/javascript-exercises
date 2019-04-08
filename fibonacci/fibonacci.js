const fibonacci = function(number) {
  if (number < 0) return "OOPS";
  let previous_first = 0, previous_second = 1, next = 1;

  for(let i = 2; i <= number; i++) {
      next = previous_first + previous_second;
      previous_first = previous_second;
      previous_second = next;
  }
  return next;
}

module.exports = fibonacci

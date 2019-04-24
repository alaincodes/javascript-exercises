const removeFromArray = function(...theArgs) {
  const arr = theArgs[0]
   return arr.filter(value => !theArgs.includes(value));
}

module.exports = removeFromArray

function isBoolean (value) {
  return typeof value === 'boolean'
}
function isString (value) {
  return Object.prototype.toString.call(value) === '[object String]'
}

module.exports = {
  isBoolean,
  isString
}

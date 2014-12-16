function digital_root(n) {
  var numToArray =  arguments[0].toString().split('')
  return numToArray.reduce( function(current, previous) { return parseInt(current) + parseInt(previous) } )
}

digital_root(123)
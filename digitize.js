
function digitize(n) {
  n = n.toString()
  collect = []
  for( var x = 0; x < n.length; x++) { collect.push(parseInt(n.slice(x,x+1))) }
  return collect
}

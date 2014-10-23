// function powerSet(array) {
// 	var collect = []
// 	for (var i = 0; i < array.length; i++) {
// 		collect.push([array[i]])
// 		for(var y = i + 1; y !== array.length; y++) {
// 			collect.push([array[i],array[y]]) }
// 	}
// 	return collect }

function digitize(n) {
  n = n.toString()
  collect = []
  for( var x = 0; x < n.length; x++) { collect.push(parseInt(n.slice(x,x+1))) }
  return collect
}



// slice(1,1)
// slice(1,2)
// slice(1,


// function powerSet(array) {
// 	var collect = []
// 	for (var i = 0; i < array.length; i++) {
// 		collect.push([array[i]])
// 		for(var y = i + 1; y !== array.length; y++) {
// 			collect.push([array[i],array[y]]) }
// 	}
// 	return collect }

// 	function recursive( array, i)
// 		for( var start = i, start < array.length; start++) {

// 		}
// 		return collect
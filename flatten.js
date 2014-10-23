var flatten = function (array){
  collect = []
  if (!(array[0] instanceof Array)) return array
		array.map( function(element,index,array){
			if (element instanceof Array) element.map( function(element,index,array) {
				collect.push(element)
			})
		})
	return collect
}

var flatten = function (lol){
  return [].concat.apply([],lol);
}
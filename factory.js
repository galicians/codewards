function createFunctions(num) {
	functions = []
	function factory(num) {
		return function() { return num }
	}

	for(var i = 0; i < num; i++) { functions.push(factory(i))}

	return functions
}
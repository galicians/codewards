
names.sort( function(previous,current) {
	return current.slice(current.search(' ') + 1) < previous.slice(previous.search(' ') + 1)
})
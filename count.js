const Rx = require('rx')

const source = Rx.Observable
	.range(1, 10)
	.count(x => x > 5)
	.subscribe(x => console.log(x))

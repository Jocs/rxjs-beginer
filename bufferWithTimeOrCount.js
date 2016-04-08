const Rx = require('rx')

const source = Rx.Observable.interval(100)
	.bufferWithTimeOrCount(600, 5)
	.take(10)

const subscription = source.subscribe(
	x => console.log(x)
)
const Rx = require('rx')
const source1 = Rx.Observable.interval(2000).take(5)
const source2 = Rx.Observable.range(100, 3)

const stream = source1.flatMap(source2)

stream.subscribe(
	x => console.log(x)
)
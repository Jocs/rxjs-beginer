const Rx = require('rx')

const source1 = Rx.Observable.interval(100)
	.timeInterval()
	.pluck('interval')
	.map(x => `source1: ${x}`)

const source2 = Rx.Observable.interval(150)
	.timeInterval()
	.pluck('interval')
	.map(x => `source2: ${x}`)

const source = Rx.Observable.merge(source1, source2)
	.take(10)
	.subscribe(
		x => console.log(x)
	)
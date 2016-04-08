const Rx = require('rx')

const source1 = Rx.Observable.interval(100)
	.map(i => `First: ${i}`)
const source2 = Rx.Observable.interval(200)
	.map(i => `Second: ${i}`)

source = Rx.Observable.combineLatest(
	source1,
	source2
	).take(25)

const subscription = source.subscribe(
	x => console.log(x),
	err => console.log(err),
	() => console.log('completed')
	)
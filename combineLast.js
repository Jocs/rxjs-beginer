const Rx = require('rx')

const source1 = Rx.Observable.interval(100)
	.map(i => `First: ${i}`)

const source2 = Rx.Observable.interval(120)
	.map(i => `Second: ${i}`)

source1.combineLatest(source2, (s1, s2) => `${s1}, ${s2}`)
	.take(4)
	.subscribe(
		data => console.log(data)
	)
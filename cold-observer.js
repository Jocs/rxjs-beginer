const Rx = require('rx')

const source = Rx.Observable.interval(1000)

const subscription1 = source.subscribe(
	x => console.log(`Observer1: onNext: ${x}`),
	e => console.log(`Observer1: onError: ${e.message}`),
	() => console.log(`Observer1: completed`)
	)

const subscription2 = source.subscribe(
	x => console.log(`Observer2: onNext: ${x}`),
	e => console.log(`Observer2: onError: ${e.message}`),
	() => console.log(`Observer2: completed`)
	)

setTimeout(() => {
	subscription1.dispose()
	subscription2.dispose()
}, 5000)
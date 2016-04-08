const Rx = require('rx')

console.log(`Current time: ${Date.now()}`)

const source = Rx.Observable.interval(1000)

const hot = source.publish()

const subscription1 = hot.subscribe(
	x => console.log(`Observer1: onNext: ${x}`),
	e => console.log(`Observer1: onError: ${e.message}`),
	() => console.log(`Observer1: completed`)
)

console.log(`Current Time after 1st subcription: ${Date.now()}`)

setTimeout(() => {
	hot.connect()

	console.log(`Current time after connect ${Date.now()}`)

	setTimeout(() => {
		const subscription2 = hot.subscribe(
			x => console.log(`Observer2: onNext: ${x}`),
			e => console.log(`Observer2: onError: ${e.message}`),
			() => console.log(`Observer2: completed`)
		)
		console.log(`Current time after 2sd subscrition ${Date.now()}`)
	}, 3000)
}, 3000)
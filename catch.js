const Rx = require('rx')

const source = Rx.Observable.throw(new Error())
	.catch(Rx.Observable.just(42))

const subscribtion = source.subscribe(
	console.log.bind(console)
)
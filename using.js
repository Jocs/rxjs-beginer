const Rx = require('rx')

const source = Rx.Observable.using(
	() => new Promise((resolve, reject) => {
		setTimeout(() => resolve(4), 3000)
	}),
	response => Rx.Observable.just(response)
)

const subscription = source.subscribe(
	x => console.log(x)
)
const Rx = require('rx')

const thunk = val => () => val

const source = Rx.Observable.spawn(function* () {
	const w = yield [24]
	const x = yield new Promise((resolve, reject) => {
		setTimeout(() => resolve('promise'), 3000)
	})
	const y = thunk(23)()
	const z = Rx.Observable.just(45)
	return w[0] + x + y + z
})

source.subscribe(
	x => console.log(x),
	err => console.log(err)
)
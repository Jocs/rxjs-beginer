const Rx = require('rx')

const source = Rx.Observable.range(0, 3)
	.map(x => Rx.Observable.range(x, 3))
	.concatAll()

const subscription = source.subscribe(
	x => console.log(x)
)

console.log('------------------我是分割线------------------')

const source2 = Rx.Observable.range(0, 3)
	.flatMap(x => Rx.Observable.range(x, 3))

const subscription2 = source2.subscribe(
	x => console.log(x)
)
const Rx = require('rx')
const source = Rx.Observable.range(0, 3)
	.flatMap(x => Promise.resolve(x * x))

const subscription = source.subscribe(
	x => console.log(`onNext: ${x}`),
	e => console.log(`onError: ${e}`),
	() => console.log('onCompleted')
)

var source1 = Rx.Observable.just(1).toPromise()

source1.then(
	value => console.log(value),
	err => console.log(err)
)
const Rx = require('rx')

const source1 = Rx.Observable.fromPromise(new Promise((resolve, reject) => {
	resolve(45)
}))
const source2 = Rx.Observable.fromPromise(new Promise((resolve, reject) => {
	setTimeout(() => resolve(46), 3000)	
}))

const source = Rx.Observable
.zip(source1, source2)


// source1.concat(source2)
// 	.subscribe(console.log.bind(console))
// source1.merge(source2)
// 	.subscribe(console.log.bind(console))
// source1.catch(source2)
// 	.subscribe(console.log.bind(console))
// 	
source.subscribe(
	x => console.log(`onNext: ${x}`),
	e => console.log(`onError: ${e}`),
	() => console.log('completed')
)
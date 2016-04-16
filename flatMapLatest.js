const Rx = require('rx')

const source = Rx.Observable.range(1, 3)
	.flatMapLatest(i => Rx.Observable.fromArray([`${i} a`, `${i} b`]))
	.subscribe(console.log.bind(console))
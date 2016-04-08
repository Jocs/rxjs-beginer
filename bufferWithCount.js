const Rx = require('rx')

const seq = Rx.Observable.interval(1000)
const bufSeq = seq.bufferWithCount(5)

bufSeq
	.map(arr => arr.reduce((acc, x) => acc + x, 0))
	.subscribe(
		x => console.log(x)
	)
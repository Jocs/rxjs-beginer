const Rx = require('rx')

const source = Rx.Observable.range(1, 9).controlled()

source.subscribe(
	x => console.log(x)
)

source.request(6)
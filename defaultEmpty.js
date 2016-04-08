const Rx = require('rx')

const source = Rx.Observable.empty().defaultIfEmpty('just so so')

source.subscribe(
	data => console.log(data)
)
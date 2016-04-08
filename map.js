const Rx = require('rx')
const array = ['ransixi', 'jocs', 'wujingwen']

const strStream = Rx.Observable
	.from(array)
	.map(x => x.length)

strStream.subscribe(
	console.log.bind(console)
)
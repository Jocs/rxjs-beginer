const Rx = require('rx')

const arr = [
	{name: 'ransixi', age: 28},
	{name: 'wujingwen', age: 21},
	{name: 'xiaoming', age: 23}
]
const source = Rx.Observable.range(0, 9).average()
const source2 = Rx.Observable.from(arr).average(x => x.age)


const subscription = source.subscribe(
	console.log.bind(console)
)

const subscription2 = source2.subscribe(
	console.log.bind(console)
)
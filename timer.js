const Rx = require('rx')

// timer 就相当于一个计时器。时间到了就会产生一个结果‘0’.
const source = Rx.Observable.timer(
	5000,
	1000
).timestamp()

const subscription = source.subscribe(
	x => console.log(`${x.value} : ${x.timestamp}`)
)